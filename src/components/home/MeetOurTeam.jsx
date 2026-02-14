import { Users, Award, Globe, Heart } from "lucide-react";

const MeetOurTeam = () => {
  const teamMembers = [
    {
      name: "Trisha Morales Padia",
      role: "Founder & CEO",
      bio: "Specializing in Family Law & Estate Planning. Licensed in Texas with a passion for helping families navigate complex legal landscapes.",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      featured: true,
    },
    {
      name: "Aiden Gamble",
      role: "Associate Attorney",
      bio: "Focusing on Criminal Defense & Family Law. Dedicated to protecting rights and ensuring fair treatment for all clients.",
      image:
        "https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      featured: true,
    },
  ];

  const teamHighlights = [
    {
      title: "Experience",
      description: "15+ years in legal practice",
      icon: Award,
    },
    {
      title: "Community Impact",
      description: "Pro bono initiatives and local outreach",
      icon: Heart,
    },
    {
      title: "Bilingual Team",
      description: "English & Spanish speaking attorneys",
      icon: Globe,
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
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-mpl-navy mb-6 leading-tight">
            Meet Our Team
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
            Dedicated professionals committed to fighting for your best
            interests
          </p>
        </div>

        {/* Crazy Layout - Staggered Team Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 mb-20">
          {/* Featured Member 1 - Large */}
          <div className="lg:col-span-7 group">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500">
              {/* Image Container */}
              <div className="relative h-96 lg:h-[500px] overflow-hidden">
                <img
                  src={teamMembers[0].image}
                  alt={teamMembers[0].name}
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
              </div>

              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12 bg-gradient-to-t from-black via-black/80 to-transparent">
                <h3 className="text-3xl lg:text-4xl font-serif font-bold text-white mb-2">
                  {teamMembers[0].name}
                </h3>
                <p className="text-mpl-lightBlue font-semibold mb-4">
                  {teamMembers[0].role}
                </p>
                <p className="text-gray-200 text-base lg:text-lg leading-relaxed mb-6">
                  {teamMembers[0].bio}
                </p>
                <a
                  href="/about"
                  className="inline-flex items-center text-white font-semibold group hover:text-mpl-lightBlue transition-colors"
                >
                  Read Full Bio
                  <span className="ml-2 transform transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Featured Member 2 - Medium & Highlights */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {/* Team Member Card */}
            <div className="group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 h-full">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={teamMembers[1].image}
                  alt={teamMembers[1].name}
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 bg-gradient-to-t from-black via-black/80 to-transparent">
                <h3 className="text-2xl lg:text-3xl font-serif font-bold text-white mb-1">
                  {teamMembers[1].name}
                </h3>
                <p className="text-mpl-lightBlue font-semibold text-sm lg:text-base mb-3">
                  {teamMembers[1].role}
                </p>
                <p className="text-gray-200 text-sm leading-relaxed line-clamp-2 mb-4">
                  {teamMembers[1].bio}
                </p>
                <a
                  href="/about"
                  className="inline-flex items-center text-white font-semibold text-sm group hover:text-mpl-lightBlue transition-colors"
                >
                  Read Full Bio
                  <span className="ml-1 transform transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </div>

            {/* Top Highlight Card */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-mpl-navy/10 to-mpl-blue/5 rounded-3xl transform transition-all duration-500 group-hover:scale-105" />
              <div className="relative bg-white rounded-3xl border border-gray-200 p-6 lg:p-8 h-full hover:border-mpl-blue/40 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-mpl-navy to-mpl-blue flex items-center justify-center">
                    <Users className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-mpl-navy text-lg mb-1">
                      {teamHighlights[0].title}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {teamHighlights[0].description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {teamHighlights.map((highlight, index) => {
            const IconComponent = highlight.icon;
            return (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-mpl-blue/5 to-mpl-navy/5 rounded-3xl transform transition-all duration-500 group-hover:scale-105 group-hover:from-mpl-blue/10 group-hover:to-mpl-navy/10" />
                <div className="relative bg-white rounded-3xl border border-gray-200 p-8 hover:border-mpl-blue/40 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-mpl-navy/10 to-mpl-blue/5 flex items-center justify-center group-hover:from-mpl-navy/20 group-hover:to-mpl-blue/10 transition-all duration-300">
                      <IconComponent className="w-8 h-8 text-mpl-navy group-hover:text-mpl-blue transition-colors" />
                    </div>
                  </div>
                  <h4 className="font-serif font-bold text-mpl-navy text-xl mb-2 group-hover:text-mpl-blue transition-colors">
                    {highlight.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MeetOurTeam;
