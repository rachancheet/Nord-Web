import { Inter, Questrial, Poppins } from "next/font/google";
import { FaPlay } from "react-icons/fa";
import { RiCheckboxCircleFill } from "react-icons/ri";
const inter = Inter({ subsets: ["latin"] });
const questrial = Questrial({ subsets: ["latin"], weight: "400" });
const poppins = Poppins({ subsets: ["latin"], weight: "400" });
export default function Home() {
  return (
    <div className="flex overflow-hidden flex-col min-h-screen justify-between bg-gradient-to-br from-[#080808] to-black text-white">
      <div className="flex flex-row justify-center mt-3 ml-11 mr-11  ">
        <div className="mr-10">
          <img
            className="h-10 rounded-sm"
            src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
            alt=""
          ></img>
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
            <button type="">
              <img
                src="https://placehold.co/400"
                className="h-10 w-10 rounded-full"
                alt=""
              />
            </button>
            <div className="flex flex-col justify-center items-end">
              <h3 className={`ml-3 text-white ${inter.className}`}>
                Anonymous Panda
              </h3>
              <h4 className="text-lime-500">Online</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center mb-11 min-w-screen mx-10 my-10">
        <div className="flex flex-col relative bg-cover">
          <img
            className="rounded-2xl"
            src="https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_TVOD_PussinBootsLastWish/48ee77aa-ae01-498a-9735-7860a7bfe1a4._UR3840,1440_SX1440_FMjpg_.jpeg"
            alt=""
          ></img>
          <div className="absolute top-20 left-40 ">
            <div>
              <h1 className={`${questrial.className} text-5xl text-white text`}>
                Puss in Boots
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
                <button className="w-24 h-24 bg-white text-black rounded-full text-xl justify-center flex items-center">
                  <FaPlay className="ml-3" size={50} />
                </button>
                <h3 className="text-4xl font-bold">Play Movie</h3>
              </div>
            </div>
          </div>
          {/* <img className=" flex flex-row " src="/banner3.jpg" alt=""></img>  */}
        </div>
      </div>
      <div className="flex flex-col mx-10 space-y-10">
        <h1 className={`text-3xl ${poppins.className} `}>Continue Watching</h1>
        <div class="flex flex-row flex-nowrap overflow-x-scroll space-x-5">
          {{
            [...Array(5)].map(()=>{
              return (
                <div className="aspect-video h-48">
                  <img
                    className="object-cover rounded-xl"
                    src="https://images-eu.ssl-images-amazon.com/images/S/atv-aps-images/encoded/THBY_S3/IN/en_IN/COVER_ART/CLEAN/LASERHOMELANDER._UR1920,1080_SX720_FMjpg_.jpg"
                  ></img>
                </div>
              )
            })
          }}



          
        </div>
      </div>
    </div>
  );
}
