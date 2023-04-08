
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });
export default function() {
    return (
            <ReactPlayer controls className="min-h-screen min-w-full bg-black flex justify-center items-center text-white" url='rtsp://localhost:3131/abc
            d' />

    )
}