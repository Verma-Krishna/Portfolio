import React from 'react'

export default function About() {
  return (
    <>
    <div className="flex items-center justify-center py-2 px-2">
        <h1 className="underline text-black text-center rounded text-3xl font-semibold hover:bg-gray-400 hover:text-white hover:px-4 hover:pb-2">
          About Me
        </h1>
      </div>

      <div className="px-2 mt-6 rounded-xl shadow-lg bg-indigo-100 md:flex justify-between py-6">
        <div className="border-2 rounded-md pt-2 shadow-lg bg-white pb-4 flex md:w-1/3">
          <img
            src="MERN.png"
            alt="Freelancer"
            className="w-3/4 rounded-xl m-auto hover:filter grayscale-[0.5] hover:grayscale-0"
          />
        </div>
        <div
          className="shadow-lg border-2 px-4 py-6  md:w-2/3"
          style={{
            background: "linear-gradient(90deg, #00d2ff 0%, #3a47d5 100%)",
          }}
        >
          <div className="flex flex-col mt-6 py-2 mx-4">
            <h3 className="text-3xl mb-2 font-semibold">
              I am a MERN Stack Developer and Software Developer Enthusiast
            </h3>
            <p className="text-lg text-gray-500 text-white">
              Hello! I’m a passionate B.Tech Computer Science student with a
              keen interest in full-stack development. With a strong foundation
              in the MERN stack (MongoDB, Express.js, React, Node.js), I enjoy
              building robust, scalable web applications. I’m also skilled in
              front-end design using popular frameworks like Material UI (MUI),
              Tailwind CSS, and Bootstrap. Let’s build something amazing
              together!
            </p>
          </div>
        </div>
      </div>

    </>
  )
}
