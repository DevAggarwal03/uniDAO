import SyllabusProposalVoting from "../Components/AllProposals";
import {MemberDashboard} from "../Components/Navbar";
import SliderMenu from "../Components/SliderMenu";

const Dashboard = () => {
    return ( <div className="flex flex-col gap-y-4">
        <MemberDashboard/>
        <div className="flex flex-col justify-center items-center">
            <SliderMenu/>
            <div>
                <SyllabusProposalVoting/>
            </div>
        </div>
    </div> );
}
 
export default Dashboard;