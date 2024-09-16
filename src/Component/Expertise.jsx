import React from 'react'

export default function Expertise() {
  return (
    <>
     <div className="flex items-center justify-center py-1 px-2 mt-2">
        <h1 className="underline text-black text-center rounded text-3xl font-semibold hover:bg-gray-400 hover:text-white hover:px-4 hover:pb-2">
          My expertise
        </h1>
      </div>
    <div
  className="px-2 mt-6 rounded shadow-lg md:flex justify-evenly py-10"
  style={{
    background: "linear-gradient(90deg, #FC466B 0%, #3F5EFB 100%)",
  }}
>
  <h1 className="text-white text-lg w-full md:w-1/2 mb-6 md:mb-0">
    I specialize in building dynamic and responsive web applications using the
    MERN stack (MongoDB, Express, React, Node.js). With a strong foundation in
    C++ and JavaScript, I craft clean, efficient code and optimize both
    front-end and back-end functionality. My proficiency extends to modern
    design frameworks like Tailwind, MUI, and Bootstrap, enabling me to create
    seamless, user-friendly interfaces that enhance user experience and
    performance.
  </h1>
  <div className="px-6 pt-4 pb-2 w-full md:w-1/3">
    <h1 className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-black hover:text-white">
      C++
    </h1>
    <h1 className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-black hover:text-white">
      HTML
    </h1>
    <h1 className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-black hover:text-white">
      CSS
    </h1>
    <h1 className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-black hover:text-white">
      Tailwind CSS
    </h1>
    <h1 className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-black hover:text-white">
      MUI
    </h1>
    <h1 className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-black hover:text-white">
      Bootstrap
    </h1>
    <h1 className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-black hover:text-white">
      Javascript
    </h1>
    <h1 className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-black hover:text-white">
      React.js
    </h1>
    <h1 className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-black hover:text-white">
      Express.js
    </h1>
    <h1 className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-black hover:text-white">
      Node.js
    </h1>
    <h1 className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-black hover:text-white">
      Mongodb
    </h1>
  </div>
</div>
    </>
  )
}
