import Link from "next/link";


const InvestorsPage = async () => {
    const response =  await fetch("http://localhost:8000/api/investors");
    const investors = await response.json()
    return (
        <div>
            <ul>
                {investors.map((investor:any) => (<li key={investor.id}><Link href={`./investors/${investor.firm_id}`}>{investor.firm_id}{investor.firm_name}</Link></li>))}
            </ul>
        </div>
    );
};
export default InvestorsPage;