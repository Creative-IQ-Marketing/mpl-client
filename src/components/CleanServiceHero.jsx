import React from "react";

const CleanServiceHero = ({
  title,
  subtitle,
  opening,
  infoTitle,
  infoDescription,
}) => {
  return (
    <section className="pt-24 pb-12 bg-white mt-20">
      <div className="container-custom text-center">
        <h1 
          className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-mpl-navy leading-tight max-w-4xl mx-auto"
          style={{ wordBreak: "break-word", overflowWrap: "break-word" }}
        >
          {title}
        </h1>
        {subtitle && (
          <p 
            className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto"
            style={{ wordBreak: "break-word", overflowWrap: "break-word" }}
          >
            {subtitle}
          </p>
        )}
        {opening && (
          <div className="mt-8 max-w-3xl mx-auto text-center">
            {Array.isArray(opening) ? (
              opening.map((paragraph, index) => (
                <p
                  key={index}
                  className="mt-4 text-gray-700 leading-relaxed text-base"
                  style={{ wordBreak: "break-word", overflowWrap: "break-word" }}
                >
                  {paragraph}
                </p>
              ))
            ) : (
              <p 
                className="mt-4 text-gray-700 leading-relaxed text-base"
                style={{ wordBreak: "break-word", overflowWrap: "break-word" }}
              >
                {opening}
              </p>
            )}
          </div>
        )}
        {infoTitle && infoDescription && (
          <div className="mt-10 rounded-2xl border border-mpl-blue/20 p-6 text-left max-w-4xl mx-auto">
            <h2 className="text-2xl font-serif font-bold text-mpl-navy">
              {infoTitle}
            </h2>
            <p className="mt-3 text-gray-600 leading-relaxed">
              {infoDescription}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default CleanServiceHero;
