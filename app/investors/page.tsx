import Link from "next/link";



const InvestorsPage = async () => {
    const response =  await fetch("http://localhost:8000/api/investors");
    const investors = await response.json()
    return (
        <div className="rounded-t-xl overflow-hidden bg-gradient-to-r from-emerald-50 to-teal-100 p-10">
            <table className="table-auto">
                <thead>
                <tr>
                    <th className="px-4 py-2 text-emerald-600">FirmId</th>
                    <th className="px-4 py-2 text-emerald-600">FirmName</th>
                    <th className="px-4 py-2 text-emerald-600">Type</th>
                    <th className="px-4 py-2 text-emerald-600">DateAdded</th>
                    <th className="px-4 py-2 text-emerald-600">Address</th>
                </tr>
                </thead>
                <tbody>
                {investors.map((investor: any) => (<tr key={investor.firm_id}>
                    <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium"><Link
                        href={`./investors/${investor.firm_id}`}>{investor.firm_id}</Link>
                    </td>
                    <td  className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">{investor.firm_name}</td>
                    <td  className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">{investor.firm_type}</td>
                    <td  className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">{investor.date_added}</td>
                    <td  className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">{investor.address}</td>
                </tr>))}
                </tbody>
            </table>
        </div>
    );
};
export default InvestorsPage;