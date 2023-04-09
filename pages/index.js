import { Inter, Questrial, Poppins } from "next/font/google";
import { FaPlay } from "react-icons/fa";
import { RiCheckboxCircleFill } from "react-icons/ri";
import { motion } from "framer-motion";
import Link from "next/link";
import { AppContext } from "../context/AppContext";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
const inter = Inter({ subsets: ["latin"] });
const questrial = Questrial({ subsets: ["latin"], weight: "400" });
const poppins = Poppins({ subsets: ["latin"], weight: "400" });
export default function Home() {
  const { account, connectWallet, error } = useContext(AppContext);
  const [recom, setRecom] = useState([]);

  const arr1 = [
    "bafybeibooo6mu6cz6kvc2uyp7emdvrzal43z35gdvtg5j5tb3q4admth6q",
    "bafybeicfveihyjkcwuhqmas2u47npan46zgyvoaridtuz3glbe7hrmyq3a",
    "bafybeifiigtviz7ebxpqrkga4a64bhqp3qoey7lkhtcx4msmr6ibh4cnre",
    "bafybeicbenqjcwkihtmvjtbwvdglbye4d4wqfflje3ur3v77ubcwz4cudi",
    "bafybeibsjify75chbqfej5rht44i6nt2662i6tlzh4jv7lkuxtbkcthcvi",
    "bafybeich27oro4xzrmy57ckl6idpd5u3zibtgbei3s65yvcicy7k7uq7sa ",
  ];
  const file = [
    "batman v superman dawn of justice",
    "minions",
    "conjuring",
    "the godfather",
    "the wolf of wall street",
    "matrix",
  ];
  const title = [
    "batman v superman:dawn of justice",
    "minions",
    "the conjuring",
    "the godfather",
    "the wolf of wall street",
    "the matrix",
  ];
  const [show, setshow] = useState(0);
  useEffect(() => {
    if (account) {
      axios
        .get(
          "https://youngturbulenttypes.zubairmh.repl.co/api/video_recommend/" +
            account
        )
        .then((data) => {
          // console.log("----------\n");
          console.log(data.data);
          setRecom(data.data);
          if (data.data.titles) {
            setshow(1);
          }
        });
    }
  }, [account]);
  return (
    <div className="flex overflow-hidden flex-col min-h-screen justify-between bg-gradient-to-br from-[#080808] to-black text-white space-y-10">
      {(account && (
        <>
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
                  <h1
                    className={`${questrial.className} text-5xl text-white text`}
                  >
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
                    <span className="font-bold text-xl">
                      Rated E for Everyone
                    </span>
                  </div>
                  <div className="flex flex-row items-center space-x-5">
                    <Link
                      href={{
                        pathname:
                          "/player/bafybeib7jpz7tgxucsdrt4hyneqsu337qilhvxjbgef4wql4f5vkkxy4ca",
                        query: {
                          file_name: "a",
                          video_title: "puss in boot",
                        }, // the data
                      }}
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
            <h1 className={`text-3xl ${poppins.className} `}>Popular</h1>
            <div class="flex flex-row flex-nowrap my-10 space-x-5 py-3">
              {[
                "https://m.media-amazon.com/images/S/pv-target-images/b6efe50f19e1fc52763ec470f367d8d00e50ae489ae2c2e671f9eb00e7180ace._UR1920,1080_SX720_FMjpg_.jpg",
                "https://m.media-amazon.com/images/S/pv-target-images/b5b82fa183bf0c371f6ef879d64813d3e74637b64144367ec1dca080749caca1._UR1920,1080_SX720_FMjpg_.jpg",
                "https://m.media-amazon.com/images/S/pv-target-images/07a7af2f0cc37792b2eb0ee196b53dd10a39ed816fc6f61633116e65ad603745._UR1920,1080_SX720_FMjpg_.jpg",
                "https://m.media-amazon.com/images/S/pv-target-images/1e970c0e42ba71ebd408f7cb22de09ff767349bd14d13c61061d0425a9ef8351._UR1920,1080_SX720_FMjpg_.jpg",
                "https://m.media-amazon.com/images/S/pv-target-images/10107c4794fbde1a9478563232b035d79d3b2d8823314e21543ef99c4f20067c._UR1920,1080_SX720_FMjpg_.jpg",
                "https://m.media-amazon.com/images/S/pv-target-images/3eb50ab78523d4d785a208d0cb697a7365a9ca634b00508fd50a7288d7e95b13._UR1920,1080_SX720_FMjpg_.jpg",
              ].map((x, i) => (
                <div className="aspect-video h-44">
                  {/* {console.log(`https://${arr1[i]}.ipfs.w3s.link/ipfs/${arr1[i]}/${file[i]} \n`)} */}
                  <Link
                    href={{
                      pathname: `/player/${arr1[i]}`,
                      query: {
                        file_name: file[i],
                        video_title: title[i],
                      }, // the data
                    }}
                  >
                    <img
                      className="object-cover rounded-xl hover:-translate-y-2 transition"
                      src={x}
                    ></img>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col mx-10 space-y-10">
            <h1 className={`text-3xl ${poppins.className} `}>
              Recommended for you
            </h1>
            <div class="flex flex-row flex-wrap space-x-5 space-x-5 py-3">
              {show &&
                recom["posters_url"].map((x, i) => (
                  <div className="aspect-[0.66666] h-80">
                    <Link
                      href={{
                        pathname: `/player/bafybeib7jpz7tgxucsdrt4hyneqsu337qilhvxjbgef4wql4f5vkkxy4ca`,
                        query: {
                          file_name: "a",
                          video_title: recom["titles"][i],
                        }, // the data
                      }}
                    >
                      <img
                        className="object-cover rounded-xl hover:-translate-y-2 transition"
                        src={x}
                      ></img>
                    </Link>
                  </div>
                ))}
            </div>
          </div>
        </>
      )) || (
        <div className="flex flex-col bg-black text-white items-center justify-center min-h-screen min-w-full">
          {/* <button
        onClick={connectWallet}
        className=" h-10 w-10 rounded-full ring-2"
      >
        Login
      </button> */}

          <button
            onClick={connectWallet}
            className="flex flex-col justify-center text-3xl"
            type="button"
            class=""
          >
            <img className="mb-10 ml-50" src="/metamask.gif"></img>
            <span className="mr-100"> Connect with MetaMask </span>
          </button>
        </div>
      )}
    </div>
  );
}
