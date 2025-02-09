import React from "react";
import goni from "../../assets/goni.jpg";
import jisan from "../../assets/jisan.jpg";
import faiyaz from "../../assets/faiyaz.jpg";
import Navbar from "../../Components/common/Navbar";

const teamMembers = [
  {
    name: "MD Ashraful Goni",
    role: "Lead Developer",
    image: goni,
  },
  {
    name: "Mizanur Rahman Jisan",
    role: "Developer",
    image: jisan,
  },
  {
    name: "Juhair Faiaz",
    role: "Developer",
    image: faiyaz,
  },
];

const OurTeamPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar></Navbar>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-green-500 to-green-700 text-white py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">Meet Our Team</h1>
        <p className="text-lg mt-4 opacity-90">
          The passionate minds behind{" "}
          <span className="font-semibold">Bangla AI</span>
        </p>
      </div>

      {/* Team Section */}
      <div className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-12">
          Our Developers
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-center">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white shadow-xl rounded-2xl overflow-hidden transform transition duration-300 hover:scale-105 border border-gray-200"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-84 object-cover object-top"
              />
              <div className="p-6 text-center bg-white">
                <h3 className="text-xl font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-gray-600">{member.role}</p>
                <div className="mt-4">
                  <button className="px-4 py-2 text-sm font-semibold text-white bg-green-600 rounded-lg hover:bg-green-700 transition">
                    View Profile
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeamPage;
