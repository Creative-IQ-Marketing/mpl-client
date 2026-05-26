import { Link, useLocation } from "react-router-dom";

const slugToTitle = (slug) =>
  slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

export default function Breadcrumb() {
  const { pathname } = useLocation();

  if (pathname === "/") return null;

  const segments = pathname.split("/").filter(Boolean);

  const crumbs = segments.map((seg, i) => {
    const path = "/" + segments.slice(0, i + 1).join("/");
    const label = slugToTitle(seg);
    return { path, label };
  });

  return (
    <nav
      aria-label="breadcrumb"
      className="w-full bg-white border-b border-gray-100"
    >
      <div className="container-custom py-2">
        <ol className="flex flex-wrap items-center gap-1 text-xs text-gray-400">
          <li>
            <Link
              to="/"
              className="hover:text-mpl-navy transition-colors font-medium"
            >
              Home
            </Link>
          </li>
          {crumbs.map((crumb, i) => (
            <li key={crumb.path} className="flex items-center gap-1">
              <span className="select-none">/</span>
              {i === crumbs.length - 1 ? (
                <span className="text-mpl-navy font-medium" aria-current="page">
                  {crumb.label}
                </span>
              ) : (
                <Link
                  to={crumb.path}
                  className="hover:text-mpl-navy transition-colors"
                >
                  {crumb.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
