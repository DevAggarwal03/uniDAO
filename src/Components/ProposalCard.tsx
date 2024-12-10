import { Clock, University } from "lucide-react";
import { useReadContract } from "wagmi";
import { contractAbi, contractAddress } from "../ContractDetails/MantleSepolia";
// import { contractAbi, contractAddress } from "../ContractDetails/EduChain";
import { useState } from "react";
import GetUniversityName from "./GetUniversityName";

const ProposalCard = ({proposalId}:any) => {
  let expiryDate, modifiedDate, modifiedTime;
//   let [memberAddress, setMemberAddress] = useState("");

  const { data }: { data: any[] | undefined } = useReadContract({
    abi: contractAbi,
    address: contractAddress,
    functionName: "proposals",
    args: [proposalId],
  });
  console.log(data? data[5]: undefined);
    expiryDate = data ? new Date(parseInt(data[6]) * 1000) : undefined;
    modifiedDate = data? `${expiryDate.getUTCDate()}/${expiryDate.getUTCMonth() + 1}/${expiryDate.getFullYear()}` : undefined;
    modifiedTime = data ? `${expiryDate.getUTCHours()}:${expiryDate.getUTCMinutes()}:${expiryDate.getUTCSeconds()}` : undefined;
  
  
//   console.log(expiryDate, modifiedDate, modifiedTime);

  return (
    <div>
      {data ? (
        <div className="bg-white min-w-[400px] shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <University className="mr-2 text-blue-600" size={24} />
              <GetUniversityName address={data[3]}/>
            </div>
            <span className="text-sm text-green-600 bg-green-100 px-2 py-1 rounded-full">
              Active
            </span>
          </div>

          <h3 className="text-xl font-bold mb-2">{data[1]}</h3>
          <p className="text-gray-600 mb-4 line-clamp-3">{data[2].slice(0, 50)}</p>

          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center text-gray-600">
              <Clock className="mr-2 text-blue-600" size={20} />
              <div className="flex gap-x-2">
                <span>{modifiedDate}</span>
                <span>{modifiedTime}</span>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="text-gray-600">{data[4]} Votes</div>
            
              <button
                // onClick={() => handleVote(data?.id)}
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                Vote
              </button>

          </div>
        </div>
      ) : (
        <div>loading...</div>
      )}
    </div>
  );
};

export default ProposalCard;
