import { useReadContract } from "wagmi";
import { contractAbi, contractAddress } from "../ContractDetails/MantleSepolia";
// import { contractAbi, contractAddress } from "../ContractDetails/EduChain";

const GetUniversityName = ({address}:any) => {

    const { data: member }: { data: any[] | undefined } = useReadContract({
        abi: contractAbi,
        address: contractAddress,
        functionName: "members",
        args: [address],
        // query: {
        //   enabled: !!address,
        // },
      });
    console.log(member)

    return ( 
        <h2 className="font-semibold text-lg">
            {
                member ? (member[0]) : ("University Name")
            }
        </h2>
     );
}
 
export default GetUniversityName;