import Image from "next/image";

export default function AboutUs() {
  return (
    <main className="bg-neutral-600">
      <div className="flex max-w-screen-xl mx-auto">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            We Want To Help
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-300 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Life gets hard sometimes, especially with no outlet. We want to be a place for you to unwind.
          </p>
        </div>
        <div className="">
          <Image className="h-auto max-w-lg rounded-lg"
           src={'/images/friends-speaking.jpg'}
          alt={'mock'}
          width={800}
          height={500}
          priority={true}
          />
        </div>
      </div>
      <div className="centralHero m-w-full m-h-full h-full"
        style={{
          backgroundImage: `url(${"/images/group-therapy.jpg"})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
        }}>
        <h1 className="text-center pt-40 pb-40 font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-slate">
            Literally Not Professionals <br/> Just One Guy
        </h1>
      </div>
      <section className="bg-white dark:bg-gray-900">
    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">We invest in your mental health</h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Here at Write-It-Down, we literally have no credentials and just made a basic web-app</p>
        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-slate-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Learn Nothing
                <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
            <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                <svg className="mr-2 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg>
                Watch Nothing
            </a>  
        </div>
        <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
            <span className="font-semibold text-gray-400 uppercase">FEATURED:</span>
            <div className="flex flex-wrap justify-center items-center mt-8 text-gray-500">
            <h1 className="text-center font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-slate">
              Nowhere? This is For My Gitty-Hub
            </h1>
            </div>
        </div> 
    </div>
</section>
    </main>
  );
}
