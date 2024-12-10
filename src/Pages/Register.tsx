import React, { useEffect, useState } from "react";
import { Home, University, UserCheck } from "lucide-react";
import { useAccount, useConnect, useReadContract, useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { contractAbi, contractAddress } from "../ContractDetails/MantleSepolia";
// import { contractAbi, contractAddress } from "../ContractDetails/EduChain";
import { useNavigate } from "react-router-dom";

interface FormData {
  uniName: string;
  address: string;
  role: string;
}

const Register: React.FC = () => {

  const [isMember, setIsMember] = useState(false);
  const navigate = useNavigate()
  const connectedAcc = useAccount()
  const [formData, setFormData] = useState<FormData>({
    uniName: "",
    address: `${connectedAcc.address}`,
    role: "member",
  });

  

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  
  const { writeContract, isPending, data: hash } = useWriteContract();
  const { isSuccess: isConfirmed, isLoading: isConfirming } = useWaitForTransactionReceipt({
    hash
  });


  const { data }: { data: any[] | undefined, isPending: any, error: any } = useReadContract({
    abi: contractAbi,
    address: contractAddress,
    functionName: "members",
    args: [`${connectedAcc.address}`]
  })

  useEffect(() => {
    const dummyData = data
    if(dummyData?dummyData[1]:false){
      console.log('alredy registered')
      navigate(`/dashboard/${connectedAcc.address}`)
    }
  }, [data])


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);

    // if(data){
    //   alert('The connected account is already a member')
    //   return;
    // }

    try {
      await writeContract({
        abi: contractAbi,
        address: contractAddress,
        functionName: "addMember",
        args: [formData.uniName, formData.address, formData.role, BigInt(1)]
      })
    } catch (error) {
      console.log("error: ", error);
    }

  };

  const toExplorer = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(`https://explorer.sepolia.mantle.xyz/tx/${hash}`, '_blank')
  }

  useEffect(() => {
    if(isConfirmed){
      console.log("registered as a member")
    }
  },[isConfirmed])



  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white shadow-2xl rounded-2xl overflow-hidden">
        {/* Decorative Header */}
        <div className="bg-blue-600 text-white p-6 text-center">
          <h2 className="text-3xl font-bold flex items-center justify-center gap-3">
            <UserCheck className="w-10 h-10" />
            University Registration
          </h2>
          <p className="text-blue-100 mt-2">
            Join our academic community network
          </p>
        </div>

        {/* Form Container */}
        <form onSubmit={handleSubmit} className="p-8 relative space-y-6">
          {/* University Name Input */}
          <div>
            <label 
              htmlFor="uniName" 
              className="text-sm font-medium text-gray-700 mb-2 flex items-center gap-2"
            >
              <University className="w-5 h-5 text-blue-500" />
              University Name
            </label>
            <input
              type="text"
              id="uniName"
              name="uniName"
              value={formData.uniName}
              onChange={handleChange}
              placeholder="Enter your university name"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg 
                         focus:outline-none focus:ring-2 focus:ring-blue-500 
                         transition duration-300 ease-in-out"
            />
          </div>

          {/* Address Input */}
          <div>
            <label 
              htmlFor="address" 
              className="text-sm font-medium text-gray-700 mb-2 flex items-center gap-2"
            >
              <Home className="w-5 h-5 text-blue-500" />
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={connectedAcc.address}
              disabled
              placeholder="Enter your university address"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg 
                         focus:outline-none focus:ring-2 focus:ring-blue-500 
                         transition duration-300 ease-in-out"
            />
          </div>

          {/* Role Select */}
          <div>
            <label 
              htmlFor="role" 
              className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2"
            >
              <UserCheck className="w-5 h-5 text-blue-500" />
              Role
            </label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              disabled
              className="w-full px-4 py-3 border border-gray-300 rounded-lg 
                         bg-gray-100 cursor-not-allowed 
                         focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="member">Member</option>
            </select>
          </div>
 {/* Submit Button */}
          <button
            type="submit"
            disabled={isPending}
            className="w-full bg-blue-600 text-white py-3 rounded-lg 
                       hover:bg-blue-700 focus:outline-none focus:ring-2 
                       focus:ring-blue-500 focus:ring-opacity-50 
                       transition duration-300 ease-in-out 
                       transform hover:-translate-y-1 hover:scale-105 
                       shadow-md hover:shadow-lg"
          >
            {isPending ? 'Registering...' : 'Register'} 
          </button>
          {hash && 
            <button className="w-full bg-blue-600 text-white py-3 rounded-lg 
                       hover:bg-blue-700 focus:outline-none focus:ring-2 
                       focus:ring-blue-500 focus:ring-opacity-50 
                       transition duration-300 ease-in-out 
                       transform hover:-translate-y-1 hover:scale-105 
                       shadow-md hover:shadow-lg" onClick={toExplorer}>View on Explorer</button>
          }
          {isConfirming && <div>Waiting for confirmation...</div>}
          {isConfirmed && <div>Transaction confirmed.</div>}
        </form>
      </div>
    </div>
  );
};

export default Register;