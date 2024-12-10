export const contractAddress = "0xF1dA7f0d23d75dc63706a4C918eE34A123235720"

export const contractAbi = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_universityName",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "_member",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "_role",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_votingWeight",
				"type": "uint256"
			}
		],
		"name": "addMember",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_courseName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_proposedSyllabus",
				"type": "string"
			}
		],
		"name": "createSyllabusProposal",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_proposalId",
				"type": "uint256"
			}
		],
		"name": "executeProposal",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "member",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "role",
				"type": "string"
			}
		],
		"name": "MemberAdded",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "proposalId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "courseName",
				"type": "string"
			}
		],
		"name": "ProposalCreated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "proposalId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "courseName",
				"type": "string"
			}
		],
		"name": "ProposalExecuted",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_proposalId",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "_support",
				"type": "bool"
			}
		],
		"name": "vote",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "proposalId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "voter",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "support",
				"type": "bool"
			}
		],
		"name": "Voted",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "allAddresses",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAllMembers",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "universityName",
						"type": "string"
					},
					{
						"internalType": "bool",
						"name": "isMember",
						"type": "bool"
					},
					{
						"internalType": "address",
						"name": "EduAddress",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "votingWeight",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "role",
						"type": "string"
					}
				],
				"internalType": "struct UniversitySyllabusDAO.Member[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_proposalId",
				"type": "uint256"
			}
		],
		"name": "getProposalDetails",
		"outputs": [
			{
				"internalType": "string",
				"name": "courseName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "proposedSyllabus",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "votesFor",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "votesAgainst",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "executedg",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "members",
		"outputs": [
			{
				"internalType": "string",
				"name": "universityName",
				"type": "string"
			},
			{
				"internalType": "bool",
				"name": "isMember",
				"type": "bool"
			},
			{
				"internalType": "address",
				"name": "EduAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "votingWeight",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "role",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "proposalCounter",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "proposals",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "courseName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "proposedSyllabus",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "proposer",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "votesFor",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "votesAgainst",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "deadline",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "executed",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "QUORUM_PERCENTAGE",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "VOTING_PERIOD",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

// // SPDX-License-Identifier: MIT
// pragma solidity ^0.8.20;

// contract UniversitySyllabusDAO {
//     // Struct to represent a syllabus proposal
//     struct SyllabusProposal {
//         uint256 id;
//         string courseName;
//         string proposedSyllabus;
//         address proposer;
//         uint256 votesFor;
//         uint256 votesAgainst;
//         uint256 deadline;
//         bool executed;
//         mapping(address => bool) hasVoted;
//     }

//     // Struct to represent a university member
//     struct Member {
//         string universityName;
//         bool isMember;
//         address EduAddress;
//         uint256 votingWeight;
//         string role; // e.g., "professor", "researcher", "admin"
//     }

//     // State variables
//     mapping(uint256 => SyllabusProposal) public proposals;
//     mapping(address => Member) public members;
//     uint256 public proposalCounter;
//     address public owner;
//     address[] public allAddresses;

//     // Voting constants
//     uint256 public constant VOTING_PERIOD = 7 days;
//     uint256 public constant QUORUM_PERCENTAGE = 51; // 51% required to pass

//     // Events
//     event MemberAdded(address member, string role);
//     event ProposalCreated(uint256 proposalId, string courseName);
//     event Voted(uint256 proposalId, address voter, bool support);
//     event ProposalExecuted(uint256 proposalId, string courseName);

//     // Modifier to check if caller is a member
//     modifier onlyMembers() {
//         require(members[msg.sender].isMember, "Not a DAO member");
//         _;
//     }

//     // Modifier to check if caller is the owner
//     modifier onlyOwner() {
//         require(msg.sender == owner, "Not the owner");
//         _;
//     }

//     // Constructor
//     constructor() {
//         owner = msg.sender;
//         // Add the owner as the initial admin member
//         members[msg.sender] = Member({
//             universityName: "Admin",
//             isMember: true,
//             EduAddress: msg.sender,
//             votingWeight: 100, // Higher weight for owner/admin
//             role: "admin"
//         });
//         allAddresses.push(msg.sender);
//     }

//     // Function to add new members
//     function addMember(
//         string memory _universityName,
//         address _member, 
//         string memory _role, 
//         uint256 _votingWeight
//     ) public{
//         require(!members[_member].isMember, "Member already exists");
        
//         members[_member] = Member({
//             universityName: _universityName,
//             isMember: true,
//             EduAddress: _member,
//             votingWeight: _votingWeight,
//             role: _role
//         });

//         allAddresses.push(_member);

//         emit MemberAdded(_member, _role);
//     }

//     // Function to create a syllabus proposal
//     function createSyllabusProposal(
//         string memory _courseName, 
//         string memory _proposedSyllabus
//     ) public onlyMembers returns (uint256) {
//         proposalCounter++;

//         SyllabusProposal storage newProposal = proposals[proposalCounter];
//         newProposal.id = proposalCounter;
//         newProposal.courseName = _courseName;
//         newProposal.proposedSyllabus = _proposedSyllabus;
//         newProposal.proposer = msg.sender;
//         newProposal.deadline = block.timestamp + VOTING_PERIOD;
//         newProposal.executed = false;

//         emit ProposalCreated(proposalCounter, _courseName);

//         return proposalCounter;
//     }

//     // Function to vote on a syllabus proposal
//     function vote(uint256 _proposalId, bool _support) public onlyMembers {
//         SyllabusProposal storage proposal = proposals[_proposalId];
//         Member storage voter = members[msg.sender];

//         require(block.timestamp < proposal.deadline, "Voting period has ended");
//         require(!proposal.hasVoted[msg.sender], "Already voted");

//         // Record the vote with the member's voting weight
//         if (_support) {
//             proposal.votesFor += voter.votingWeight;
//         } else {
//             proposal.votesAgainst += voter.votingWeight;
//         }

//         proposal.hasVoted[msg.sender] = true;

//         emit Voted(_proposalId, msg.sender, _support);
//     }

//     function getAllMembers() public  view returns(Member[] memory) {
//         Member[] memory allMembers = new Member[](allAddresses.length);
//         for (uint i = 0; i < allAddresses.length; i++) {
//             allMembers[i] = members[allAddresses[i]];
//         }
//         return allMembers;
//     }

//     // Function to execute a proposal if it meets the quorum
//     function executeProposal(uint256 _proposalId) public onlyMembers {
//         SyllabusProposal storage proposal = proposals[_proposalId];

//         require(block.timestamp >= proposal.deadline, "Voting period not ended");
//         require(!proposal.executed, "Proposal already executed");

//         // Calculate total votes
//         uint256 totalVotes = proposal.votesFor + proposal.votesAgainst;
        
//         // Check if proposal passes quorum
//         bool proposalPassed = (proposal.votesFor * 100 / totalVotes) >= QUORUM_PERCENTAGE;

//         if (proposalPassed) {
//             proposal.executed = true;
//             emit ProposalExecuted(_proposalId, proposal.courseName);
//         } else {
//             revert("Proposal did not pass quorum");
//         }
//     }

//     // Function to get proposal details
//     function getProposalDetails(uint256 _proposalId) public view returns (
//         string memory courseName,
//         string memory proposedSyllabus,
//         uint256 votesFor,
//         uint256 votesAgainst,
//         bool executedg
//     ) {
//         SyllabusProposal storage proposal = proposals[_proposalId];
//         return (
//             proposal.courseName,
//             proposal.proposedSyllabus,
//             proposal.votesFor,
//             proposal.votesAgainst,
//             proposal.executed
//         );
//     }
// }