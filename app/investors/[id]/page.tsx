import Commitment from "@/app/Components/InvestorCommitment";

const InvestorPage = async ({ params }: { params: { id: string } })  => (
    <div>
        <div>
            <h1 className='text-4xl'>ID : {params.id}</h1>
        </div>
       <Commitment/>
    </div>)
export default InvestorPage;