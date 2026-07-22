import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="container mx-auto px-4 py-20 max-w-2xl">
      <p className="text-sm font-semibold uppercase tracking-wider text-mpl-navy/60">
        404
      </p>
      <h1 className="mt-3 text-3xl md:text-4xl font-serif text-mpl-navy">
        Page not found
      </h1>
      <p className="mt-4 text-mpl-navy/70 leading-relaxed">
        The page you’re looking for doesn’t exist or may have moved. Head home
        or contact our San Antonio office for help.
      </p>
      <div className="mt-8 flex flex-col sm:flex-row gap-3">
        <Link
          to="/"
          className="inline-flex items-center justify-center rounded-lg bg-mpl-navy px-5 py-3 text-white font-semibold hover:opacity-90"
        >
          Go home
        </Link>
        <Link
          to="/contact"
          className="inline-flex items-center justify-center rounded-lg border border-mpl-navy/25 px-5 py-3 text-mpl-navy font-semibold hover:bg-mpl-navy/5"
        >
          Contact
        </Link>
      </div>
    </section>
  );
}
