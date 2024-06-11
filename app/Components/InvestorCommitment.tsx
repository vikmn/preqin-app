"use client"
import {useState} from "react";
interface AssetCommitment{
    "id": number,
    "asset_class": string,
    "firm_id": number,
    "currency": string,
    "amount": string
}

const fetchInvestorCommitment = async ():Promise<AssetCommitment[]> => {
    console.log("blah")
    const url = 'http://localhost:8000/api/investor/commitment/RE/2670';
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const response = await fetch(url);
    let commitments: AssetCommitment[] = await response.json();
    commitments = [
        {id:2,asset_class:"class a",firm_id:1234,currency:"GBP",amount:"1000"},
        {id:3,asset_class:"class b",firm_id:4567,currency:"GBP",amount:"30000"},
        {id:4,asset_class:"class c",firm_id:8970,currency:"GBP",amount:"50000"},
    ]
    return commitments;
};
const Commitment =()=> {
    const [commitments, setCommitments] = useState<AssetCommitment[]>([])
    return(<div>
        <div className='p-4 text-2xl'>
            <span>Asset Class:</span>
            <span>
                <select onChange={async (e) => setCommitments(await fetchInvestorCommitment())
                }>
                    <option value="PE"> Private Equity</option>
                    <option value="PD">Private Debt</option>
                    <option value="PD">Real Estate</option>
                    <option value="INF">Infrastructure</option>
                    <option value="NR">Natural Resources</option>
                    <option value="HF">Hedge Funds</option>
                </select>
            </span>
        </div>
        <div className='p-4 text-2xl'><span>Asset Commitments</span></div>
        <div className="p-4">
            <div className="rounded-t-xl overflow-hidden bg-gradient-to-r from-emerald-50 to-teal-100 p-10">
                <table className="table-auto">
                    <thead>
                    <tr>
                        <th className="px-4 py-2 text-emerald-600">Id</th>
                        <th className="px-4 py-2 text-emerald-600">Asset Class</th>
                        <th className="px-4 py-2 text-emerald-600">Firm Id</th>
                        <th className="px-4 py-2 text-emerald-600">Amount</th>
                    </tr>
                    </thead>
                    <tbody>
                    {commitments.map((commitment: AssetCommitment) => (<tr key={commitment.id}>
                        <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">{commitment.id}</td>
                        <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">{commitment.asset_class}</td>
                        <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">{commitment.firm_id}</td>
                        <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">{commitment.amount} {commitment.currency}</td>
                    </tr>))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>)
}
export default Commitment;