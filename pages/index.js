import { Inter, Questrial, Poppins } from "next/font/google";
import { FaPlay } from "react-icons/fa";
import { RiCheckboxCircleFill } from "react-icons/ri";
import { motion } from "framer-motion";
import Link from "next/link";
import { AppContext } from "../context/AppContext";
import { useContext, useEffect, useState } from "react";
import axios from "axios"
const inter = Inter({ subsets: ["latin"] });
const questrial = Questrial({ subsets: ["latin"], weight: "400" });
const poppins = Poppins({ subsets: ["latin"], weight: "400" });
export default function Home() {
  const { account, connectWallet, error } = useContext(AppContext);
  const [recom, setRecom] = useState(["xyz"]);

  useEffect(() => {
    if(account) {
      console.log("http://localhost:5000/" + account);
      axios.get("http://localhost:5000/" + account).then(data => {
        console.log(data.data.posters_url);
        setRecom(data.data.posters_url);
      });
    }

  }, [account]);
  return (
    <div className="flex overflow-hidden flex-col min-h-screen justify-between bg-gradient-to-br from-[#080808] to-black text-white space-y-10">
      <div className="flex flex-row justify-center mt-3 ml-11 mr-11  ">
        <div className="mr-10">
          <img className="h-10 rounded-sm" src="/bytepng.png" alt=""></img>
        </div>
        <div className="grow flex-row flex">
          <div className="flex grow">
            <div className="flex flex-row relative basis-1/2 text-white">
              <input
                type="search"
                name="search"
                placeholder="Search"
                className="bg-[#242627] h-10 px-5 pr-10 rounded-full text-sm focus:outline-none min-w-full"
              />
              <button
                type="submit"
                className="absolute right-0 top-0 mt-3 mr-4"
              >
                <svg
                  className="h-4 w-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  id="Capa_1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 56.966 56.966"
                  xmlSpace="preserve"
                  width="512px"
                  height="512px"
                >
                  <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex flex-row items-center">
            {/* <button type="">
              <img
                src="https://placehold.co/400"
                className="h-10 w-10 rounded-full"
                alt=""
              />
            </button> */}
            {/* <div className="flex flex-col justify-center items-end">
              <h3 className={`ml-3 text-white ${inter.className}`}>
                Anonymous Panda
              </h3>
              <h4 className="text-lime-500">Online</h4>
            </div>*/}

            {account ? (
              <h1 className="text-white">Metamask: {account}</h1>
            ) : (
              <button
                onClick={connectWallet}
                className=" h-10 w-10 rounded-full ring-2"
              >
                LOGIN
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center mb-11 min-w-screen mx-10 my-10">
        <div className="flex flex-col relative bg-cover">
          <motion.img
            initial={{ opacity: 0, translateX: -10 }}
            whileInView={{ opacity: 1, translateX: 0 }}
            className="rounded-2xl"
            src="https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_TVOD_PussinBootsLastWish/48ee77aa-ae01-498a-9735-7860a7bfe1a4._UR3840,1440_SX1440_FMjpg_.jpeg"
            alt=""
          ></motion.img>
          <div className="absolute top-20 left-40">
            <motion.div
              initial={{ opacity: 0, translateY: 10 }}
              whileInView={{ opacity: 1, translateY: 0 }}
            >
              <h1 className={`${questrial.className} text-5xl text-white text`}>
                Puss in Boots
                <br />
                The Last Wish
              </h1>
              <span className="text-gray-500">Trending in Kids</span>
              <div className="my-[10vw]"></div>
              <div className="flex flex-row mb-3 items-center">
                <RiCheckboxCircleFill
                  className="text-cyan-400 mr-3"
                  size={32}
                />{" "}
                <span className="font-bold text-xl">Rated E for Everyone</span>
              </div>
              <div className="flex flex-row items-center space-x-5">
                <Link
                  href="/player/QmUdW4Ar3RPmWYnT2CcxpU6ZkiHtnZm2dgd2R58cHVf3vK"
                  className="w-24 h-24 bg-white text-black rounded-full text-xl justify-center flex items-center"
                >
                  <FaPlay className="ml-3" size={50} />
                </Link>
                <h3 className="text-4xl font-bold">Play Movie</h3>
              </div>
            </motion.div>
          </div>
          {/* <img className=" flex flex-row " src="/banner3.jpg" alt=""></img>  */}
        </div>
      </div>
        <div className="flex flex-col mx-10 space-y-10">
          <h1 className={`text-3xl ${poppins.className} `}>
            Continue Watching
          </h1>
          <div class="flex flex-row flex-nowrap overflow-x-scroll space-x-5 py-3">
            {["https://m.media-amazon.com/images/S/pv-target-images/2755192ac73b7b4a52f50e3297813231e2dd086b9b090a17d6b72722717e05d9._UR1920,1080_SX720_FMjpg_.jpg","https://m.media-amazon.com/images/S/pv-target-images/2b42207373a560382da3dab5d904db4b0269a9b64ab713e1c086e63de174a70f._UR1920,1080_SX720_FMjpg_.jpg","https://m.media-amazon.com/images/S/pv-target-images/07a7af2f0cc37792b2eb0ee196b53dd10a39ed816fc6f61633116e65ad603745._UR1920,1080_SX720_FMjpg_.jpg","https://m.media-amazon.com/images/S/pv-target-images/9074a6bc13c832b4b25ca3a19759023931e8828ab3c9e21011f37fb278d01e58._UR1920,1080_SX720_FMjpg_.png","https://m.media-amazon.com/images/S/pv-target-images/6dea014e7c39ee12c67e5ad8cd7442d787366584802904deddc9a54cd3ad4d9f._UR1920,1080_SX720_FMjpg_.jpg"].map((x, i) => (
              <div className="aspect-video h-44">
                <img
                  className="object-cover rounded-xl hover:-translate-y-2 transition"
                  src={x}
                ></img>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col mx-10 space-y-10">
          <h1 className={`text-3xl ${poppins.className} `}>
            Recommended for you
          </h1>
          <div class="flex flex-row flex-nowrap overflow-x-scroll space-x-5 py-3">
              {recom.map((x, i) => (
              <div className="aspect-[0.66666] h-80">
                <img
                  className="object-cover rounded-xl hover:-translate-y-2 transition"
                  src={x}
                ></img>
              </div>
            ))}
          </div>
        </div>
    </div>
  );
}
