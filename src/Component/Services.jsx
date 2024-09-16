import React from 'react'

export default function Services() {
  return (
    <>
    <div className=" flex items-center justify-center py-2 px-2">
        <h1 className="underline text-black text-center rounded text-3xl font-semibold hover:bg-gray-400 hover:text-white hover:px-4 hover:pb-2">
          My Services
        </h1>
      </div>

      <div className=" bg-indigo-100 w-full flex flex-wrap items-center justify-center gap-6 py-6">
        <div className="transition duration-200 ease-in-out hover:scale-95 border  max-w-sm bg-gray-100 rounded overflow-hidden shadow-lg m-auto">
          <div className="flex justify-evenly items-center bg-slate-200 mb-2">
            <img className="w-1/4" src="react.png" alt="Project Image" />
            <img className="w-1/5" src="redux.png" alt="Project Image" />
          </div>
          <div className="px-6 py-6">
            <div className="font-bold text-xl mb-2 text-center">
              Frontend Development
            </div>
            <p className="text-gray-700 text-base">
              Frontend development with React and Redux Saga is a powerful
              combination for building modern and scalable web applications.
              React is a JavaScript library for building user interfaces, and
              Redux Saga is a middleware library for handling side effects in
              Redux applications.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2 text-center">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #React.Js
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #Redux.Js
            </span>
          </div>
        </div>
        <div className="transition duration-200 ease-in-out hover:scale-95 border bg-gray-100 max-w-sm rounded overflow-hidden shadow-lg m-auto">
          <div className="flex justify-evenly items-center bg-slate-200 mb-2">
            <img className="w-1/4" src="Tailwind.png" alt="Project Image" />
            <img className="w-1/5" src="mui.png" alt="Project Image" />
            <img className="w-1/5" src="bootstrap.png" alt="Project Image" />
          </div>
          <div className="px-6 py-6">
            <div className="font-bold text-xl mb-2 text-center">
              Designing Frameworks
            </div>
            <p className="text-gray-700 text-base">
              I specialize in Bootstrap, MUI, and Tailwind CSS to craft
              responsive, visually appealing web interfaces. Bootstrap's grid
              and components ensure efficient layouts, MUI follows Material
              Design for modern, accessible UIs, and Tailwind enables fast,
              custom styling.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2 text-center">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #Tailwind CSS
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #MUI
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #Bootstrap
            </span>
          </div>
        </div>
        <div className="transition duration-200 ease-in-out hover:scale-95 border bg-gray-100 max-w-sm rounded overflow-hidden shadow-lg m-auto">
          <div className="flex justify-evenly items-center bg-slate-200 mb-2">
            <img className="w-1/5" src="express.png" alt="Project Image" />
            <img className="w-1/4" src="node-js.png" alt="Project Image" />
            <img className="w-1/5" src="mongodb.png" alt="Project Image" />
          </div>
          <div className="px-6 py-6">
            <div className="font-bold text-xl mb-2 text-center">
              Backend Development
            </div>
            <p className="text-gray-700 text-base">
              Combining Node.js with Express and MongoDB offers a potent stack
              for developing full-stack JavaScript applications, where the
              backend seamlessly integrates with the frontend for a cohesive and
              efficient web development experience.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2 text-center">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #Express.js
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #Node.js
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #Mongodb
            </span>
          </div>
        </div>
      </div>
    </>
  )
}
