import React, { useState, useEffect } from 'react';
import { Clock, University } from 'lucide-react';
import ProposalModal from './ProposalModal';
import { contractAbi, contractAddress } from '../ContractDetails/MantleSepolia';
// import { contractAbi, contractAddress } from '../ContractDetails/EduChain';
import { useReadContract } from 'wagmi';
import ProposalCard from './ProposalCard';

// Mock data structure for syllabus proposals
const initialProposals = [
  {
    id: 1,
    university: 'Netaji Subhas University of Technology',
    courseName: 'Advanced Blockchain Technologies',
    department: 'Computer Science',
    description: 'A comprehensive course exploring cutting-edge blockchain technologies, smart contract development, and decentralized application architectures.',
    votes: 0,
    hasVoted: false,
    proposedDate: '2024-05-15',
    votingPeriodDays: 14,
    votingEndsAt: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000),
    status: 'Active'
  },
  {
    id: 2,
    university: 'IIT Bombay',
    courseName: 'Decentralized Governance and DAOs',
    department: 'Social Sciences',
    description: 'An interdisciplinary course examining the theoretical and practical aspects of decentralized organizational structures and governance models.',
    votes: 0,
    hasVoted: false,
    proposedDate: '2024-05-10',
    votingPeriodDays: 10,
    votingEndsAt: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000),
    status: 'Active'
  },
  {
    id: 3,
    university: 'IIT Indore',
    courseName: 'AI Ethics and Blockchain',
    department: 'Ethics and Technology',
    description: 'Exploring the intersection of artificial intelligence, blockchain technology, and ethical considerations in emerging tech ecosystems.',
    votes: 0,
    hasVoted: false,
    proposedDate: '2024-05-20',
    votingPeriodDays: 7,
    votingEndsAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    status: 'Active'
  }
];

const SyllabusProposalVoting = () => {
  const [proposals, setProposals] = useState(initialProposals);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [proposalIDS, setProposalIDS] = useState<number[]>([]);

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
  console.log(parseInt(noOfProposals))
  
  if(noOfProposals){
    for(let i = 0; i < parseInt(noOfProposals); i++){
        proposalIDS[i] = i+1;
    }
  }

  console.log(proposalIDS)


  const getTimeRemaining = (endDate) => {
    const difference = endDate.getTime() - currentTime.getTime();
    
    if (difference <= 0) return 'Voting Closed';

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

    return `${days}d ${hours}h ${minutes}m`;
  };

  const handleVote = (proposalId) => {
    const updatedProposals = proposals.map(proposal => {
      if (proposal.id === proposalId) {
        return {
          ...proposal,
          votes: proposal.votes + 1,
          hasVoted: true
        };
      }
      return proposal;
    });
    
    setProposals(updatedProposals);
  };

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