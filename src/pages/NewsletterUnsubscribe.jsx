import { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
const Motion = motion;
import { MailMinus, ArrowLeft } from "lucide-react";
import { unsubscribeEmailFromNewsletter } from "../services/ghl";

export default function NewsletterUnsubscribe() {
  const [searchParams] = useSearchParams();
  const prefill = useMemo(
    () => (searchParams.get("email") || "").trim().toLowerCase(),
    [searchParams],
  );
  const [email, setEmail] = useState(prefill);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim()) return;

    setError("");
    setLoading(true);
    try {
      await unsubscribeEmailFromNewsletter(email, {
        source: "newsletter_unsubscribe_page",
        pagePath: window.location.pathname,
      });
      setSuccess(true);
      setEmail("");
    } catch (submitError) {
      console.error("MPL unsubscribe failed:", submitError);
      setError("We could not process your request right now. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(68,117,181,0.10),transparent_45%),radial-gradient(circle_at_85%_20%,rgba(35,67,116,0.08),transparent_50%)]" />
      <div className="container-custom relative">
        <Motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl rounded-3xl border border-gray-200 bg-white p-8 shadow-sm md:p-10"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-mpl-blue/20 bg-mpl-blue/5 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-mpl-blue">
            <MailMinus size={14} />
            Newsletter Preferences
          </div>
          <h1 className="mt-4 text-3xl font-serif font-bold text-mpl-navy md:text-4xl">
            Unsubscribe From Email Updates
          </h1>
          <p className="mt-3 text-gray-600">
            Enter the email address you want removed from newsletter updates.
          </p>

          <form onSubmit={handleSubmit} className="mt-8">
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (error) setError("");
                  if (success) setSuccess(false);
                }}
                placeholder="Your email address"
                required
                className="h-12 flex-1 rounded-full border border-gray-300 px-5 text-gray-700 outline-none transition focus:border-mpl-blue focus:ring-2 focus:ring-mpl-blue/20"
              />
              <button
                type="submit"
                disabled={loading}
                className="inline-flex h-12 items-center justify-center rounded-full bg-mpl-navy px-6 text-sm font-bold text-white transition hover:bg-mpl-blue disabled:opacity-70"
              >
                {loading ? "Submitting..." : "Unsubscribe"}
              </button>
            </div>
            {success && (
              <p className="mt-3 text-sm font-semibold text-green-600">
                Done. This email has been unsubscribed.
              </p>
            )}
            {error && <p className="mt-3 text-sm font-semibold text-red-600">{error}</p>}
          </form>

          <Link
            to="/resources/blog"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-mpl-blue transition hover:text-mpl-navy"
          >
            <ArrowLeft size={16} />
            Back to Blog
          </Link>
        </Motion.div>
      </div>
    </section>
  );
}
