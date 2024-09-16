import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Typed from "typed.js";
import About from "./About"
import Services from "./Services"
import Expertise from "./Expertise"

export default function Home() {
  const el = useRef(null);

  

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Frontend Developer",
        "Backend Developer",
        "Full Stack developer",
        "Software Developer",
      ],
      startDelay: 100,
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 100,
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="px-2 mt-6 rounded-xl shadow-lg bg-indigo-100 md:flex justify-between py-6">
        <div
          className="shadow-lg border-2 py-6 text-white md:w-2/3"
          style={{
            background: "linear-gradient(90deg, #FC466B 0%, #3F5EFB 100%)",
          }}
        >
          <div className="flex flex-col mt-6 py-2 mx-4">
            <h5 className="text-2xl">Hi, I am</h5>
            <h1 className="text-3xl font-medium mb-2">Krishna Verma</h1>
            <h3 className="text-2xl typing-text">
              And I am <span ref={el} style={{ fontWeight: "bolder" }}></span>
            </h3>
            <p className="mt-4">
              Welcome to my digital domain, where passion and technology spark
              innovation! I am Krishna Verma, a B.Tech Computer Science
              enthusiast with a flair for MERN Stack Development, Programming
              languages, and Designing frameworks. My tech stack includes C++,
              JavaScript, React.js, Node.js, Express.js, MongoDB, MUI,
              Bootstrap, and Tailwind CSS. Embarking on this exhilarating
              journey, I am on a mission to weave seamless digital experiences
              and carve my niche in the ever-evolving world of technology.
            </p>
          </div>
          <div className="flex justify-center items-center gap-6 mt-6 flex-wrap">
            <Link to="https://github.com/Verma-Krishna">
              <img
                src="github.png"
                alt="Github"
                className="w-12 rounded-full transition duration-200 ease-in-out hover:scale-110"
              />
            </Link>
            <Link to="https://www.linkedin.com/in/krishna-verma-62b188210/">
              <img
                src="linkedin.png"
                alt="LinkedIn"
                className="w-12 rounded-full transition duration-200 ease-in-out hover:scale-110"
              />
            </Link>
            <Link to="https://www.instagram.com/krishna_verma38/">
              <img
                src="instagram.png"
                alt="Instagram"
                className="w-12 rounded-full transition duration-200 ease-in-out hover:scale-110"
              />
            </Link>
            <Link to="https://www.facebook.com/profile.php?id=100079318232355">
              <img
                src="facebook.png"
                alt="Facebook"
                className="w-12 rounded-full transition duration-200 ease-in-out hover:scale-110"
              />
            </Link>
          </div>
          <div className="mt-6 flex justify-center items-center">
            <Link
              to="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=krishnaverma4203@gmail.com"
              className="bg-yellow-500 text-lg font-medium text-white py-2 px-3 rounded-md transition duration-300 ease-in-out hover:scale-95 hover:text-indigo-500"
            >
              Hire Me!
            </Link>
          </div>
        </div>
        <div className="border-2 rounded-md pt-2 shadow-lg bg-white flex md:w-1/3 mt-6 md:mt-0">
          <img
            src="photo.jpeg"
            alt="Krishna Verma"
            className="w-56 rounded-xl m-auto"
          />
        </div>
      </div>
      <About/>
      <Services/>
      <Expertise/>
    </>
  );
}
