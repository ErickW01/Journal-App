import Image from "next/image";
import style from './page.module.scss'

export default function AboutUs() {
  return (
    <main className="bg-slate-600">
      <div className="flex mx-auto">
        <div className="mx-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            We Want To Help
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-300 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            But legally, we cannot. And this site is purely just for showcasing skills.
          </p>
        </div>
        <div>
          <Image
            className={`rounded-lg ${style["freePikImg"]}`}
            src={"/images/friends-speaking.jpg"}
            alt={"mock"}
            width={500}
            height={200}
            priority={true}
          />
          <span className={`${style["freePikLabel"]}`}>Design from Freepik</span>
        </div>
      </div>
      
      <div
        className={`${style["freePikImg"]} m-w-full m-h-full h-full`}
        style={{
          backgroundImage: `url(${"/images/group-therapy.jpg"})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
          <span className={`${style["freePikLabel"]}`}>Design from Freepik</span>
          <div className={"opacity-55 bg-black"}>
        <h1 className="text-center pt-40 pb-40 font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-slate">
          Literally Not Professionals<br /> Just One Guy
        </h1>
        </div>
      </div>

      <section className="bg-slate-600 dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-gray-900 dark:text-white">
              Start your free trial today
            </h2>
            <p className="mb-6 font-light text-white-500 dark:text-gray-400 md:text-lg">
              Try Write-It-Down for Forever. No credit card required.
            </p>
            <a
              href="/login"
              className="text-white bg-blue-600 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
            >
              Free trial for Forever
            </a>
          </div>
        </div>
      </section>


      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            We invest in your mental health
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            Here at Write-It-Down, we literally have no credentials and just
            made a basic web-app
          </p>
          <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a
              href="https://www.youtube.com/watch?v=Pkyy57iMaB0"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-slate-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Learn Nothing
              <svg
                className="ml-2 -mr-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
            <a
              href="https://www.youtube.com/watch?v=Pkyy57iMaB0"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              <svg
                className="mr-2 -ml-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
              </svg>
              Watch Nothing
            </a>
          </div>
          <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
            <span className="font-semibold text-gray-400 uppercase">
              FEATURED:
            </span>
            <div className="flex flex-wrap justify-center items-center mt-8 text-gray-500">
              <h1 className="text-center font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-slate">
                Nowhere? This is For My Gitty-Hub
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
          <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Our Team
            </h2>
            <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
              Explore and Learn Nothing
            </p>
          </div>
          <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
            <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img
                  className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg max-w-2xl h-auto"
                  src="/images/me-mountains.jpg"
                  alt="Matt M"
                />
              </a>
              <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="#">Matt M.</a>
                </h3>
                <span className="text-gray-500 dark:text-gray-400">
                  CEO & Web Developer
                </span>
                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                  Matt drives this company... Not well, even with GPS
                </p>
              </div>
            </div>
            <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img
                  className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg max-w-2xl h-auto"
                  src="/images/me-school.jpg"
                  alt="Jesse T."
                />
              </a>
              <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="#">Jesse T.</a>
                </h3>
                <span className="text-gray-500 dark:text-gray-400">CTO & Back-end Developer</span>
                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                  Jesse drives the technical strategy at Write-It-Down, even
                  though he was initially confused over the idea. Honestly, he&apos;s still confused.
                </p>
              </div>
            </div>

            <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img
                  className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg max-w-2xl h-auto"
                  src="/images/me-drinking.jpg"
                  alt="Michael A"
                />
              </a>
              <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="#">Michael A.</a>
                </h3>
                <span className="text-gray-500 dark:text-gray-400">
                  Senior Front-end Developer
                </span>
                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                  Michael is the main driver behind our full-stack application.
                </p>
              </div>
            </div>
            <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img
                  className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg max-w-2xl h-auto"
                  src="/images/me-college.jpg"
                  alt="John A"
                />
              </a>
              <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="#">John A.</a>
                </h3>
                <span className="text-gray-500 dark:text-gray-400">
                  Intern & Personality-Hire
                </span>
                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                  John does nothing except make us groan in pain with his cheesy
                  jokes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
