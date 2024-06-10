

const InvestorsPage = async () => {
    const response =  await fetch("http://localhost:8000/api/investors");
    const investors = await response.json()
    return (
        <div>
            <ul>
                {investors.map((investor:any) => (<li key={investor.id}>{investor.firm_id}{investor.firm_name}</li>))}
            </ul>
        </div>
    );
};
export default InvestorsPage;