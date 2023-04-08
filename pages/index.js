import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div class="flex flex-col min-h-screen justify-between bg-zinc-950">

      <div class="flex flex-row justify-between bg-zinc-950 mt-3 ml-11  ">
        <div className=" ">
          <img className=" h-24 rounded-full" src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt=""></img>
        </div>
        <div class=" xl:w-96 mt-4 ">
          <div class="relative  flex w-full flex-wrap items-stretch">
            <input
              type="search"
              class="relative m-0 -mr-px block w-[1%] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-1.5 text-base font-normal text-neutral-700 outline-none transition duration-300 ease-in-out focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:text-neutral-200 dark:placeholder:text-neutral-200"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="button-addon1" />
            <button
              class="relative z-[2] flex items-center rounded-r bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
              type="button"
              id="button-addon1"
              data-te-ripple-init
              data-te-ripple-color="light">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="h-5 w-5">
                <path
                  fill-rule="evenodd"
                  d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                  clip-rule="evenodd" />
              </svg>
            </button>
          </div>
        </div>

        <div className=" ">
          <button type="" > <img
            src="profile.png"
            class="w-24 mr-20 rounded-full"
            alt="" />
          </button></div>


      </div>
      <div class="flex flex-row justify-start mb-11 bg-zinc-950 box-border border-8   min-w-screen rounded-lg">
        <div className="rounded-lg flex flex-col bg-contain ">
          <img className="" src="/banner4.jpg" alt=""></img>
          <h1 class="">hhzxhcjggdzcj</h1>
          {/* <img className=" flex flex-row " src="/banner3.jpg" alt=""></img>  */}
        </div>

      </div>
      <div class="flex flex-row justify-between bg-zinc-950  ">
        <div className=" rounded-lg  ">
          <img className=" h-20 " src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt=""></img>
        </div>
        <div className="rounded-lg  ">
          <img className="h-20" src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt=""></img>
        </div>
        <div className="rounded-lg ">
          <img className="h-20" src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt=""></img>
        </div>
        <div className="rounded-lg ">
          <img className="h-20" src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt=""></img>
        </div>
      </div>
    </div>
  );
}
