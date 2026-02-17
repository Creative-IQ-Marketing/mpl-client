import TrishaImg from "../../assets/team/UF9A2215-Edit-Edit.jpg";
import AidenImg from "../../assets/team/Aiden1 UF9A2286-Edit-2.jpg";
import DorothyImg from "../../assets/team/Dorothy1 UF9A2316-Edit-2.jpg";
import AllysonImg from "../../assets/team/Allyson1 UF9A2325-Edit-2.jpg";
import CameronImg from "../../assets/team/Cameron1 UF9A2310-Edit-2.jpg";
import VeronicaImg from "../../assets/team/veronica.jpeg";
import ElenaImg from "../../assets/team/Elena1 UF9A2289-Edit-2.jpg";
import AlexandraImg from "../../assets/team/Alexandra1 UF9A2272-Edit-2.jpg";

const MeetOurTeam = () => {
  const teamMembers = [
    {
      name: "Trisha Morales Padia",
      role: "Founder & CEO",
      specialty: "Family Law & Estate Planning",
      image: TrishaImg,
      size: "large",
    },
    {
      name: "Aiden Gamble",
      role: "Associate Attorney",
      specialty: "Criminal Defense & Family Law",
      image: AidenImg,
      size: "medium",
    },
    {
      name: "Dorothy Dominguez",
      role: "Family Law Paralegal",
      image: DorothyImg,
      size: "medium",
    },
    {
      name: "Allyson Gilmore",
      role: "Accounting Manager",
      image: AllysonImg,
      size: "small",
    },
    {
      name: "Veronica Ruvalcaba",
      role: "Outreach Coordinator",
      image: VeronicaImg,
      size: "small",
    },
    {
      name: "Elena Galaviz",
      role: "Family Law Paralegal",
      image: ElenaImg,
      size: "large",
    },
    {
      name: "Cameron Ozuna",
      role: "Paralegal/Marketing",
      image: CameronImg,
      size: "small",
    },
    {
      name: "Alexandra Johnson",
      role: "Client Services Director",
      image: AlexandraImg,
      size: "medium",
    },
  ];

  const leadMembers = teamMembers.slice(0, 2);
  const otherMembers = teamMembers.slice(2);

  return (
    <section className="py-24 md:py-32 ">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-mpl-navy mb-4 leading-tight">
            Meet Our Team
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto">
            A team of attorneys and professionals dedicated to protecting your
            family, your future, and your peace of mind.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          {leadMembers.map((member) => {
            const bullets =
              member.name === "Trisha Morales Padia"
                ? [
                    "Licensed in Texas",
                    "Specialized in Family Law & Estate Planning",
                    "Award-winning legal excellence",
                  ]
                : [
                    "Licensed in Texas",
                    "Specialized in Criminal Defense & Family Law",
                    "Strategic advocacy in complex legal matters",
                  ];

            return (
              <div
                key={member.name}
                className="bg-white rounded-3xl shadow-xl shadow-mpl-blue/10 border border-mpl-blue/10 p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start"
              >
                <div className="flex-shrink-0">
                  <div className="w-28 h-32 md:w-32 md:h-40 rounded-2xl overflow-hidden border-4 border-mpl-blue/30">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div>
                  <h3 className="text-xl md:text-2xl font-serif text-mpl-navy mb-1">
                    {member.name}
                  </h3>
                  <p className="text-mpl-blue font-semibold text-sm md:text-base mb-4">
                    {member.role}
                  </p>
                  <ul className="space-y-1.5 text-sm md:text-base text-gray-700">
                    {bullets.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-[7px] h-[3px] w-[3px] rounded-full bg-mpl-blue" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
          {otherMembers.map((member) => (
            <div
              key={member.name}
              className="bg-white rounded-2xl border border-gray-100 shadow-md p-6 text-center flex flex-col items-center"
            >
              <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-4 border-mpl-blue/20 mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-serif font-semibold text-mpl-navy text-base md:text-lg mb-1">
                {member.name}
              </h4>
              <p className="text-mpl-blue text-sm mb-1">{member.role}</p>
              {member.specialty && (
                <p className="text-gray-600 text-xs leading-relaxed">
                  {member.specialty}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetOurTeam;
