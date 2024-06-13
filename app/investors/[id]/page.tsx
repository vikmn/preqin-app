import Commitment from "@/app/Components/InvestorCommitment";
import {number} from "prop-types";

const InvestorPage = async ({ params }: { params: { id: string } })  => (
    <div>
        <div className='p-4 text-2xl'>
            <span>ID:</span>
            <span>{params.id}</span>
        </div>
        <Commitment firmId={Number(params.id)}/>
    </div>)
export default InvestorPage;