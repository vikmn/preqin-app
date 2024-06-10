const InvestorPage = async ({ params }: { params: { id: string } })  => (
    <h1 className='text-4xl'>ID : {params.id}</h1>)
export default InvestorPage;