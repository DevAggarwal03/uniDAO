import { useState, useEffect } from 'react';
import ProposalModal from './ProposalModal';
import { contractAbi, contractAddress } from '../ContractDetails/MantleSepolia';
// import { contractAbi, contractAddress } from '../ContractDetails/EduChain';
import { useReadContract } from 'wagmi';
import ProposalCard from './ProposalCard';

const SyllabusProposalVoting = () => {
  // const [proposals, setProposals] = useState(initialProposals);
  const [, setCurrentTime] = useState(new Date());
  const [proposalIDS, ] = useState<number[]>([]);

  // Update current time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  // getting the no of proposals
  const { data: noOfProposals }: { data: any[] | undefined} = useReadContract({
    abi: contractAbi,
    address: contractAddress,
    functionName: "proposalCounter",
    args: [],
  });

  console.log(noOfProposals);
  
  if(noOfProposals){
    for(let i = 0; i < parseInt(noOfProposals.toString()); i++){
        proposalIDS[i] = i+1;
    }
  }

  console.log(proposalIDS)

  return (
    <div className="container mx-auto p-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          University Course Syllabus DAO
        </h1>
        <ProposalModal/>
      </div>

        {
            noOfProposals? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {proposalIDS.map(proposal => (
                    <ProposalCard proposalId={proposal}/>
                    ))}
                </div>
            ):
            (
                <div className='w-full flex justify-center items-center'>
                    Loading..
                </div>
            )
        }
      
    </div>
  );
};

export default SyllabusProposalVoting;