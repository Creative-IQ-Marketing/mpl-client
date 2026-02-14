import { Mail, Linkedin } from "lucide-react";

const MeetOurTeam = () => {
  const teamMembers = [
    {
      name: "Trisha Morales Padia",
      role: "Founder & CEO",
      specialty: "Family Law & Estate Planning",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
      size: "large",
    },
    {
      name: "Aiden Gamble",
      role: "Associate Attorney",
      specialty: "Criminal Defense & Family Law",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
      size: "medium",
    },
    {
      name: "Dorothy Dominguez",
      role: "Family Law Paralegal",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
      size: "medium",
    },
    {
      name: "Allyson Gilmore",
      role: "Accounting Manager",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
      size: "small",
    },
    {
      name: "Veronica Ruvalcaba",
      role: "Outreach Coordinator",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
      size: "small",
    },
    {
      name: "Elena Galaviz",
      role: "Family Law Paralegal",
      image:
        "https://images.unsplash.com/photo-1517841905240-472988babdf0?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
      size: "large",
    },
    {
      name: "Cameron Ozuna",
      role: "Paralegal/Marketing",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
      size: "small",
    },
    {
      name: "Alexandra Johnson",
      role: "Client Services Director",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
      size: "medium",
    },
  ];

  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-white via-white to-gray-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-10 w-96 h-96 bg-mpl-blue/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 right-10 w-96 h-96 bg-mpl-navy/3 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-mpl-navy mb-4 leading-tight">
            Meet Our Team
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            A diverse team of passionate professionals with drive, integrity,
            and a unique skill driving innovation and excellence in every
            project.
          </p>
        </div>

        {/* Circular Grid Layout - Minimalist */}
        <div className="hidden mb-20 md:mb-28">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 auto-rows-max place-items-center">
            {teamMembers.map((member, index) => {
              let sizeClass = "";
              let gridSpan = "";

              if (member.size === "large") {
                sizeClass = "w-48 h-48 md:w-56 md:h-56";
                gridSpan = "col-span-1 md:col-span-2 md:row-span-2";
              } else if (member.size === "medium") {
                sizeClass = "w-40 h-40 md:w-48 md:h-48";
                gridSpan = "col-span-1 md:col-span-2";
              } else {
                sizeClass = "w-32 h-32 md:w-40 md:h-40";
                gridSpan = "col-span-1";
              }

              return (
                <div
                  key={index}
                  className={`group ${gridSpan} flex justify-center`}
                >
                  <div
                    className={`${sizeClass} relative rounded-full overflow-hidden border-4 border-white shadow-lg hover:shadow-2xl transition-all duration-500`}
                  >
                    {/* Image Container */}
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Overlay Gradient on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Hover Info */}
                    <div className="absolute inset-0 flex flex-col justify-end p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <p className="font-serif font-bold text-sm md:text-base">
                        {member.name}
                      </p>
                      <p className="text-xs md:text-sm text-gray-200">
                        {member.role}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Section - Team Cards */}
        <div>
          {" "}
          {/* Team Cards Grid - Minimalist */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="group text-center">
                {/* Circular Image in Cards */}
                <div className="mb-6 flex justify-center">
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-mpl-blue/20 group-hover:border-mpl-blue/60 transition-all duration-500 shadow-md group-hover:shadow-lg">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                </div>

                {/* Info */}
                <h4 className="font-serif font-bold text-mpl-navy text-lg mb-1 group-hover:text-mpl-blue transition-colors">
                  {member.name}
                </h4>
                <p className="text-mpl-blue font-semibold text-sm mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed mb-5 min-h-12">
                  {member.specialty}
                </p>

                {/* Social Links - Minimalist */}
                <div className="flex items-center justify-center gap-3">
                  <a
                    href="#"
                    className="w-8 h-8 rounded-full bg-mpl-blue/10 flex items-center justify-center text-mpl-navy hover:bg-mpl-blue hover:text-white transition-all duration-300"
                    title="Email"
                  >
                    <Mail size={16} />
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 rounded-full bg-mpl-blue/10 flex items-center justify-center text-mpl-navy hover:bg-mpl-blue hover:text-white transition-all duration-300"
                    title="LinkedIn"
                  >
                    <Linkedin size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetOurTeam;
