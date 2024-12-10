import { BookOpen, Users, Shield } from "lucide-react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const Home = () => {
  const features = [
    {
      icon: <BookOpen className="w-10 h-10 text-blue-600" />,
      title: "Collaborative Syllabus Creation",
      description:
        "Community-driven course development through democratic voting.",
    },
    {
      icon: <Users className="w-10 h-10 text-green-600" />,
      title: "Transparent Governance",
      description: "Every member has a voice in university decision-making.",
    },
    {
      icon: <Shield className="w-10 h-10 text-purple-600" />,
      title: "Role-Based Participation",
      description: "Weighted voting based on academic roles and expertise.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      {/* Hero Section */}
      <header className="relative bg-gradient-to-br min-h-[90vh] from-blue-600 to-purple-700 text-white">
        <div className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 leading-tight">
              Reimagining Education Through Decentralized Governance
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              A blockchain-powered platform where academic communities
              collaborate, create, and innovate together.
            </p>
            <div className="flex space-x-4">
              <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:shadow-lg transition">
                Explore DAO
              </button>
              <button className="border-2 border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-blue-600 transition">
                Learn More
              </button>
            </div>
          </div>
          <div className="hidden md:block">
            <img
              src="https://img.freepik.com/premium-vector/college-students-university-education-concept-people-illustration_169479-534.jpg?w=996"
              alt="University DAO Concept"
              className="rounded-xl shadow-2xl"
            />
          </div>
        </div>
        <svg
          className="absolute bottom-0 left-0 w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="rgb(249, 250, 251)"
            fillOpacity="1"
            d="M0,256L48,240C96,224,192,192,288,176C384,160,480,160,576,170.7C672,181,768,203,864,202.7C960,203,1056,181,1152,170.7C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </header>

      {/* Features Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">
            How University DAO Works
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition"
              >
                {feature.icon}
                <h4 className="text-xl font-semibold mt-4 mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">
            Syllabus Creation Process
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              "Propose Syllabus",
              "Community Review",
              "Weighted Voting",
              "Execute Proposal",
            ].map((step, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl text-center hover:bg-blue-50 transition"
              >
                <div
                  className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full 
                  flex items-center justify-center mx-auto mb-4"
                >
                  {index + 1}
                </div>
                <h4 className="font-semibold">{step}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-4xl font-bold mb-6">
            Join the Academic Revolution
          </h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Become a part of a transparent, democratized educational ecosystem
            where knowledge creation is a collaborative effort.
          </p>
          <button
            className="border-2 border-white text-white px-8 py-4 
              rounded-full hover:bg-white hover:text-blue-600 transition"
          >
            Learn More
          </button>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
