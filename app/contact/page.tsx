import React from "react";
import Image from "next/image";

export default function ContactUs() {
  return (
    <main className="bg-slate-500">
      <div className="flex mx-auto">
        <div className="mx-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            Want to Call Us?
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-300 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Talk to our dedicated customer-service/microservices engineer,
            general LARPer, HEMA professional, and CPR-certified individual -
            Malcolm!
          </p>
        </div>
        <div>
          <Image
            className="rounded-lg"
            src={"/images/me-baby.jpg"}
            alt={"mock"}
            width={500}
            height={200}
            priority={true}
          />
        </div>
      </div>
    </main>
  );
}
