
import dynamic from "next/dynamic";
import {BiArrowBack} from "react-icons/bi";
import { useRouter } from 'next/router'
import { AppContext } from "../../context/AppContext";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });
export default function() {
  const { account, connectWallet, error } = useContext(AppContext);
    const router=useRouter();
    const { cid } = router.query
    const {video_title} = router.query;
    const {file_name} = router.query;
    // console.log(router.query)

    
    useEffect((ef)=>{
        axios.get("https://youngturbulenttypes.zubairmh.repl.co/api/add_data/" + account,{params:{"video_title":video_title}}).then((data) => {
            console.log(data)
      });
    },[cid])
    return (
        <>
      <h1> {video_title}</h1>
            <div className="absolute text-white top-10 left-10">
                <Link href="/">
                <BiArrowBack size={32}/>
                </Link>
                
            </div>
            <ReactPlayer controls className="min-h-screen min-w-full bg-black flex justify-center items-center text-white" url={`https://${cid}.ipfs.w3s.link/ipfs/${cid}/${file_name}.mp4`} />

        </>
            

    )
}
