import { useState } from "react";
import { useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { contractAbi, contractAddress } from "../ContractDetails/MantleSepolia";
// import { contractAbi, contractAddress } from "../ContractDetails/EduChain";

const ProposalModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    courseName: "",
    syllabus: "",
  });

  const { writeContract, isPending, data: hash } = useWriteContract();
  const { isSuccess: isConfirmed, isLoading: isConfirming, error } = useWaitForTransactionReceipt({
    hash
  });

  const handleInputChange = (e: React.FormEvent) => {
    const { name, value }:any = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const toExplorer = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(`https://explorer.sepolia.mantle.xyz/tx/${hash}`, '_blank')
  }

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    try {
        await writeContract({
          abi: contractAbi,
          address: contractAddress,
          functionName: "createSyllabusProposal",
          args: [formData.courseName, formData.syllabus]
        })
      } catch (error) {
        console.log("error: ", error);
      }
      
    // Reset form and close modal
    setFormData({ courseName: "", syllabus: "" });
    // setIsModalOpen(false);
  };

  return (
    <div className="p-6">
      {/* Open Modal Button */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        + Create Proposal
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            {/* Modal Header */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Submit Course Proposal</h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-500 hover:text-gray-800 text-lg"
              >
                &times;
              </button>
            </div>

            {/* Form */}
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">
                  Course Name
                </label>
                <input
                  type="text"
                  name="courseName"
                  value={formData.courseName}
                  onChange={handleInputChange}
                  placeholder="Enter course name"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">
                  Syllabus
                </label>
                <textarea
                  name="syllabus"
                  value={formData.syllabus}
                  onChange={handleInputChange}
                  placeholder="Enter syllabus details"
                  rows={5}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div className="text-right flex flex-col gap-y-2 justify-center items-center w-full">
                <button
                  type="button"
                  disabled = {isPending}
                  onClick={handleSubmit}
                  className="px-4 py-2 w-full bg-green-600 text-white rounded-md hover:bg-green-700"
                >
                  {isPending ? 'Submitting...':'Submit Proposal'}
                </button>
                {
                    hash &&
                    <button
                    type="button"
                    onClick={toExplorer}
                    className={`px-4 py-2 w-full ${error ? 'bg-red-600 hover:bg-red-700' : 'bg-green-600 hover:bg-green-700'}  text-white rounded-md`}
                    >
                        View on Eplorer
                    </button>
                }
                {isConfirming && <div>Waiting for confirmation...</div>}
                {isConfirmed && <div>Transaction confirmed.</div>}
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProposalModal;
