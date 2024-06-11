import Commitment from "@/app/Components/InvestorCommitment";

const InvestorPage = async ({ params }: { params: { id: string } })  => (
    <div>
        <div className='p-4 text-2xl'>
            <span>ID:</span>
            <span>{params.id}</span>
        </div>
        <Commitment/>
    </div>)
export default InvestorPage;