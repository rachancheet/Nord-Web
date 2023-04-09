
import dynamic from "next/dynamic";
import {BiArrowBack} from "react-icons/bi";
import { useRouter } from 'next/router'
import { useEffect } from "react";
import Link from "next/link";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });
export default function() {
    const router=useRouter();
    const { cid } = router.query
    useEffect
    return (
        <>
            <div className="absolute text-white top-10 left-10">
                <Link href="/">
                <BiArrowBack size={32}/>
                </Link>
                
            </div>
            <ReactPlayer controls className="min-h-screen min-w-full bg-black flex justify-center items-center text-white" url={`http://localhost:8080/ipfs/${cid}`} />
        </>
            

    )
}