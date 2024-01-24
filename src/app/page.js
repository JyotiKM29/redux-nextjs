'use client'
import DisplayUserList from "./component/DisplayUserList";
import AddUser from "./component/AddUser";
import Link from "next/link";

export default function Home() {
  return (
    <div style={{display:'flex', flexDirection:'column'}}>
   
    <AddUser />
    <div className="self-center"
    ><Link href='/user-api-data' className="text-lg font-bold border rounded-md px-4 py-1 bg-gray-400">
      API Data
    </Link></div>
     <DisplayUserList/>
     
    </div>
  );
}
