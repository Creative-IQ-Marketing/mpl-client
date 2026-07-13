import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone } from "lucide-react";

/**
 * Sticky bottom bar shown on mobile only.
 * - Hides on /contact (user is already there)
 * - Appears after the user scrolls past the hero (~200px)
 * - Both tap targets are min 44px tall (WCAG / mobile usability)
 */
const StickyMobileCTA = () => {
  const { pathname } = useLocation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (pathname === "/contact" || !visible) return null;

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 flex shadow-[0_-2px_16px_rgba(0,0,0,0.15)]">
      <a
        href="tel:7262044044"
        className="flex items-center justify-center gap-2 bg-mpl-navy text-white text-sm font-semibold tracking-wide uppercase flex-1 min-h-13 transition-colors hover:bg-mpl-blue active:bg-mpl-blue"
        aria-label="Call Morales Padia Law"
      >
        <Phone size={16} aria-hidden="true" />
        Call Now
      </a>
      <Link
        to="/contact"
        className="flex items-center justify-center bg-white text-mpl-navy border-l border-gray-200 text-sm font-semibold tracking-wide uppercase flex-1 min-h-13 transition-colors hover:bg-gray-50 active:bg-gray-100"
      >
        Free Consultation
      </Link>
    </div>
  );
};

export default StickyMobileCTA;
