const GHL_API_KEY =
  import.meta.env.VITE_GHL_API_KEY || "pit-ab1b851a-2c69-41a1-b65e-bc77bbb34012";
const GHL_LOCATION_ID =
  import.meta.env.VITE_GHL_LOCATION_ID || "9hd3RkAwbYkkmnv2N6kf";
const GHL_API_BASE = "https://services.leadconnectorhq.com";

function normalizeEmail(email = "") {
  return email.trim().toLowerCase();
}

async function makeGHLRequest(endpoint, method = "GET", body = null) {
  const options = {
    method,
    headers: {
      Authorization: `Bearer ${GHL_API_KEY}`,
      "Content-Type": "application/json",
      Version: "2021-07-28",
    },
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  const response = await fetch(`${GHL_API_BASE}${endpoint}`, options);
  const data = await response.json();

  if (!response.ok) {
    const traceId = response.headers.get("x-trace-id") || "No trace ID";
    throw new Error(
      `GHL API error: ${response.status} - ${data.message || "Unknown error"} (Trace ID: ${traceId})`,
    );
  }

  return data;
}

function splitName(fullName = "") {
  const cleaned = fullName.trim().replace(/\s+/g, " ");
  if (!cleaned) return { firstName: "", lastName: "", name: "" };

  const [firstName, ...rest] = cleaned.split(" ");
  return {
    firstName,
    lastName: rest.join(" "),
    name: cleaned,
  };
}

export async function submitConsultationToGHL(formData, context = {}) {
  const nameData = splitName(formData.name);
  const referral = formData.referral ? `Referral Source: ${formData.referral}` : "";
  const message = formData.message ? `Message: ${formData.message}` : "";
  const page = context.pagePath ? `Page: ${context.pagePath}` : "";
  const combinedMessage = [referral, message, page].filter(Boolean).join(" | ");

  const contactData = {
    ...nameData,
    email: formData.email,
    phone: formData.phone,
    locationId: GHL_LOCATION_ID,
    tags: ["website_form", "mpl_website", "consultation_request"],
    customFields: [
      {
        key: "source",
        field_value: context.source || "website_consultation_form",
      },
      {
        key: "your_message",
        field_value: combinedMessage || "Consultation request submitted",
      },
    ],
  };

  const data = await makeGHLRequest("/contacts/upsert", "POST", contactData);
  return { success: true, contact: data.contact || data };
}

export async function subscribeContactToNewsletter(email, context = {}) {
  const source = context.source || "blog_newsletter_subscribe";
  const pagePath = context.pagePath || "";
  const cleanEmail = normalizeEmail(email);

  if (!cleanEmail) {
    throw new Error("A valid email is required to subscribe.");
  }

  const contactData = {
    email: cleanEmail,
    locationId: GHL_LOCATION_ID,
    tags: ["newsletter", "blog_subscriber", "mpl_website"],
    customFields: [
      {
        key: "source",
        field_value: source,
      },
      {
        key: "message",
        field_value: pagePath
          ? `Newsletter subscribe from ${source} on ${pagePath}`
          : `Newsletter subscribe from ${source}`,
      },
    ],
  };

  const data = await makeGHLRequest("/contacts/upsert", "POST", contactData);
  return { success: true, contact: data.contact || data };
}

export async function unsubscribeEmailFromNewsletter(email, context = {}) {
  const source = context.source || "newsletter_unsubscribe";
  const pagePath = context.pagePath || "";
  const cleanEmail = normalizeEmail(email);

  if (!cleanEmail) {
    throw new Error("A valid email is required to unsubscribe.");
  }

  const upsertPayload = {
    email: cleanEmail,
    locationId: GHL_LOCATION_ID,
    tags: ["newsletter_unsubscribed", "mpl_website"],
    customFields: [
      {
        key: "source",
        field_value: source,
      },
      {
        key: "message",
        field_value: pagePath
          ? `Newsletter unsubscribe from ${source} on ${pagePath}`
          : `Newsletter unsubscribe from ${source}`,
      },
    ],
  };

  const upsertResult = await makeGHLRequest("/contacts/upsert", "POST", upsertPayload);
  const contactId = upsertResult?.contact?.id || upsertResult?.id;

  if (!contactId) {
    throw new Error("Unable to find contact ID for unsubscribe request.");
  }

  const updatePayload = {
    email: cleanEmail,
    locationId: GHL_LOCATION_ID,
    dnd: true,
    dndSettings: {
      Email: {
        status: "active",
      },
    },
  };

  const data = await makeGHLRequest(`/contacts/${contactId}`, "PUT", updatePayload);
  return { success: true, contact: data.contact || data };
}
