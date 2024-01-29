import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Layout from "./components/Layout";

function App() {
  const loremText = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
`;

  return (
    
<Layout>
<div class="min-h-full">

      <header className="bg-cover bg-center relative">
        <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
            alt=""
            className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
          />
          <div
            className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
            aria-hidden="true"
          >
            <div
              className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            ></div>
          </div>
          <div
            className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
            aria-hidden="true"
          >
            <div
              className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            ></div>
          </div>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Work with us
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat aliqua.
              </p>
            </div>
            <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
                <a href="#">
                  Open roles <span aria-hidden="true">&rarr;</span>
                </a>
                <a href="#">
                  Internship program <span aria-hidden="true">&rarr;</span>
                </a>
                <a href="#">
                  Our values <span aria-hidden="true">&rarr;</span>
                </a>
                <a href="#">
                  Meet our leadership <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
              <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
                <div className="flex flex-col-reverse">
                  <dt className="text-base leading-7 text-gray-300">
                    Offices worldwide
                  </dt>
                  <dd className="text-2xl font-bold leading-9 tracking-tight text-white">
                    12
                  </dd>
                </div>
                <div className="flex flex-col-reverse">
                  <dt className="text-base leading-7 text-gray-300">
                    Full-time colleagues
                  </dt>
                  <dd className="text-2xl font-bold leading-9 tracking-tight text-white">
                    300+
                  </dd>
                </div>
                <div className="flex flex-col-reverse">
                  <dt className="text-base leading-7 text-gray-300">
                    Hours per week
                  </dt>
                  <dd className="text-2xl font-bold leading-9 tracking-tight text-white">
                    40
                  </dd>
                </div>
                <div className="flex flex-col-reverse">
                  <dt className="text-base leading-7 text-gray-300">
                    Paid time off
                  </dt>
                  <dd className="text-2xl font-bold leading-9 tracking-tight text-white">
                    Unlimited
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </header>
      <div class="max-w-[1320px] mx-auto">
        <h3 class="text-center pt-16 mx-auto font- sans-serif">
          Industry Jobs and Opportunities posted Daily
        </h3>
        <h5 class="text-center   mx-auto  text-sm  font- sans-serif ">
          Search by category:
        </h5>
        <div>
          <h4 class=" text-center  pt-16 text-20"> PERFORMER</h4>
        </div>
      </div>

      <div class="max-w-[1320px] pt-16 mx-auto">
        <div class="max-w-[1320px] mx-auto grid lg:grid-cols-4 md:grid-cols-4 gap-5 px-20 rounded">
          <div class="shadow-xl overflow-hidden ">
            <img
              class="w-full h-48 hover:scale-125 duration-1000 "
              src="/abc.jpg"
              alt="Description of the image"
            />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p class="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div class="px-6 pt-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #photography
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #travel
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #winter
              </span>
            </div>
          </div>
          <div class="shadow-xl overflow-hidden">
            <img
              class="w-full h-48 hover:scale-125 duration-1000"
              src="/bcd.jpg"
              alt="Description of the image"
            />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p class="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div class="px-6 pt-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #photography
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #travel
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #winter
              </span>
            </div>
          </div>
          <div class="shadow-xl overflow-hidden">
            <img
              class="w-full h-48 hover:scale-125 duration-1000"
              src="/cde.jpg"
              alt="Description of the image"
            />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p class="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div class="px-6 pt-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #photography
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #travel
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #winter
              </span>
            </div>
          </div>
          <div class="shadow-xl overflow-hidden">
            <img
              class="w-full h-48 hover:scale-125 duration-1000"
              src="/efg.jpg"
              alt="Description of the image"
            />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p class="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div class="px-6 pt-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #photography
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #travel
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #winter
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-[#f2f2f2] mt-40 mb-8">
        <h2 class="text-center pt-4 text-[#0a74a7] mb-2">
          {" "}
          <span>LATEST JOBS ON CASTPOP</span>{" "}
        </h2>
        <div class="max-w-[1320px] pt-16 mx-auto">
          <div class="max-w-[1320px] mx-auto grid lg:grid-cols-2 md:grid-cols-4 gap-5 px-20 rounded">
            <div class="shadow-xl overflow-hidden ">
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">
                  Open Call Every Tuesday &amp; Thursday - LA
                </div>
                <p>
                  Looking For - <b>Models</b>
                </p>
                <div class="col-12">
                  <u>California</u> / <b>Los Angeles</b>
                </div>
              </div>
            </div>
            <div class="shadow-xl overflow-hidden ">
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">
                  Open Call Every Tuesday &amp; Thursday - LA
                </div>
                <p>
                  Looking For - <b>Models</b>
                </p>
                <div class="col-12">
                  <u>California</u> / <b>Los Angeles</b>
                </div>
              </div>
            </div>
            <div class="shadow-xl overflow-hidden ">
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">
                  Open Call Every Tuesday &amp; Thursday - LA
                </div>
                <p>
                  Looking For - <b>Models</b>
                </p>
                <div class="col-12">
                  <u>California</u> / <b>Los Angeles</b>
                </div>
              </div>
            </div>
            <div class="shadow-xl overflow-hidden ">
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">
                  Open Call Every Tuesday &amp; Thursday - LA
                </div>
                <p>
                  Looking For - <b>Models</b>
                </p>
                <div class="col-12">
                  <u>California</u> / <b>Los Angeles</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-36">
        <main>
          <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8 text-center">
            <h2>
              <span class="color:[#0a74a7;]">
                Recent Successful Castpop Auditions and Castings
              </span>
            </h2>
            <br />
            <div class="max-w-[1320px] mx-auto grid lg:grid-cols-2 md:grid-cols-4 gap-5 px-20 rounded">
              <iframe
                width="100%"
                height="350px"
                src="https://www.youtube.com/embed/xjT8jShsbs0"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen=""
              ></iframe>
              <iframe
                width="100%"
                height="350px"
                src="https://www.youtube.com/embed/xjT8jShsbs0"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen=""
              ></iframe>
            </div>
          </div>
          <div className="relative mb-96 ml-4 text-left bg-[] max-w-[1320px] mx-auto grid lg:grid-cols-2 md:grid-cols-4 gap-28">
            <div className="absolute top-0 left-0  h-116 w-1/2 lg:col-span-2">
              <img
                className="w-full h-full object-cover"
                src="https://castpop.com/public/web/image/scriptPlus.jpg"
                alt="Acting Talent"
              />
            </div>
            <div className="relative lg:col-span-2 bg-[#ededed]">
              <div className="absolute mt-16 top-0 right-36 text-[14px] font-normal h-116 w-52 ...">
                <h4 class="w-62 ">
                  <b>Acting Talent and Performers</b>
                </h4>
                <p class="">
                  Find commercial work, theatrical projects, TV productions and
                  learn to leverage your talent profile with digital tools that
                  put you ahead.
                </p>
                <div class="px-6 py-6">
                  <h5 class="bg-[#0974a7] w-36 text-center text-[#fff] br rounded-[30px]">
                    Learn More
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="relative m-60 ml-4 text-left bg-gray-200 max-w-[1320px] mx-auto grid lg:grid-cols-2 md:grid-cols-4 gap-28">
            <div className="relative lg:col-span-2 bg-[#ededed]">
              <div className="absolute mt-16 top-0 left-36 text-[14px] font-normal h-116 w-52 ...">
                <h4 class="w-62 ">
                  <b>Acting Talent and Performers</b>
                </h4>
                <p class="">
                  Find commercial work, theatrical projects, TV productions and
                  learn to leverage your talent profile with digital tools that
                  put you ahead.
                </p>
                <div class="px-6 py-6">
                  <h5 class="bg-[#0974a7] w-36 text-center text-[#fff] br rounded-[30px]">
                    Learn More
                  </h5>
                </div>
              </div>
            </div>

            <div className="absolute top-0 right-0  h-116 w-1/2 lg:col-span-2">
              <img
                className="w-full h-full object-cover"
                src="https://castpop.com/public/web/image/scriptPlus.jpg"
                alt="Acting Talent"
              />
            </div>
          </div>
        </main>
      </div>

      </div>
</Layout>
    
  );
}

export default App;
