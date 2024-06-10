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
    console.log(commitments)
    return commitments;
};
const Commitment =()=> {
    const [commitments, setCommitments] = useState<AssetCommitment[]>([])
    return(<div>
    <div>
        <select onChange={async (e) => setCommitments( await fetchInvestorCommitment())
        }>
            <option value="PE" > Private Equity </option>
            <option value="PD">Private Debt</option>
            <option value="PD">Real Estate</option>
            <option value="INF">Infrastructure</option>
            <option value="NR">Natural Resources</option>
            <option value="HF">Hedge Funds</option>
        </select>
    </div>
    <div>
        <ul>
            {commitments.map((commitment: any) => (<li key={commitment.id}>{commitment.id} {commitment.id} {commitment.firm_id} {commitment.amount}</li>))}
        </ul>
    </div>
</div>)
}
export default Commitment;