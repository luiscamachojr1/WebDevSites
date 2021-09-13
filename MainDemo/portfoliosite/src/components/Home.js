import React from "react";
import image from "../macbook.jpg";

export default function Home() {
  return (
    <main>
      <img src={image} alt="Macbook" className="absolute object-cover w-full h-full" />
        <section className="relative flex justify-center main-h-screen pt-12 lg:pt-64 px-8">
          <h1
              className="text-6xl text-green-100 font-bold cursive leading-none lg:leading-snug"
              style={{ fontSize: "125px" }}
          >
                Howdy. I am Luis
          </h1>
        </section>
    </main>
  )
}
