import { useState } from "react";
import { MemberDashboard } from "../Components/Navbar";
import SliderMenu from "../Components/SliderMenu";
import { contractAbi, contractAddress } from "../ContractDetails/MantleSepolia";
// import { contractAbi, contractAddress } from "../ContractDetails/EduChain";
import { useReadContract } from "wagmi";

const universities = [
  { name: "Harvard University", location: "Cambridge, MA" },
  { name: "Stanford University", location: "Stanford, CA" },
  { name: "Massachusetts Institute of Technology", location: "Cambridge, MA" },
  { name: "University of Oxford", location: "Oxford, UK" },
  { name: "California Institute of Technology", location: "Pasadena, CA" },
  { name: "University of Cambridge", location: "Cambridge, UK" },
  { name: "Princeton University", location: "Princeton, NJ" },
  { name: "Yale University", location: "New Haven, CT" },
];

const AllMembers = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const {
    data,
    isPending,
    error,
  }: { data: any[] | undefined; isPending: any; error: any } = useReadContract({
    abi: contractAbi,
    address: contractAddress,
    functionName: "getAllMembers",
    args: [],
  });
  if (isPending) {
    console.log("isPending");
  }
  if (error) {
    console.log("error: ", error);
  }
  console.log(data)

  const filteredUniversities = universities.filter((university) =>
    university.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col gap-y-4 bg-gray-100 pb-6">
      <MemberDashboard />
      <div>
        <SliderMenu />
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <h1 className="text-3xl font-bold text-gray-800 mb-4">DAO Members</h1>

          {/* Search Bar */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search universities..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* University List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {filteredUniversities.length > 0 ? (
              data?.map((member, index) => (
                <div
                  key={index}
                  className="p-4 bg-white rounded-lg flex flex-col gap-y-2 shadow-md hover:shadow-lg transition-shadow"
                >
                  <h2 className="text-xl font-semibold text-gray-800">
                    {member.universityName !== "Admin" ? member.universityName : member.universityName}
                  </h2>
                  <div className="flex justify-between w-full">
                    <span>Role: {member.role}</span>
                    <span>Vote Wight: {parseInt(member.votingWeight)}</span> 
                  </div>
                  <p className="text-gray-600">{member.EduAddress}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-600 col-span-2">
                No universities match your search.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllMembers;
