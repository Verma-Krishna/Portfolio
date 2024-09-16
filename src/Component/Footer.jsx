import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Footer() {
  
  useGSAP(() => {
    gsap.to(".expertise", {
      x: 30,
      duration: 3,
      delay: 1,
      repeat: -1,
      yoyo: true,
    });
  });

  return (
    <>
       <div className="flex flex-wrap items-center justify-center gap-16 mt-6 py-2 bg-white">
  <img
    className="expertise transition duration-200 ease-in-out hover:scale-110 hover:filter grayscale-[0.9] hover:grayscale-0 w-16 h-16"
    src="react.png"
    alt="Project Image"
  />
  <img
    className="expertise transition duration-200 ease-in-out hover:scale-110 hover:filter grayscale-[0.9] hover:grayscale-0 w-16 h-16"
    src="redux.png"
    alt="Project Image"
  />
  <img
    className="expertise transition duration-200 ease-in-out hover:scale-110 hover:filter grayscale-[0.9] hover:grayscale-0 w-16 h-16"
    src="mui.png"
    alt="Project Image"
  />
  <img
    className="expertise transition duration-200 ease-in-out hover:scale-110 hover:filter grayscale-[0.9] hover:grayscale-0 w-20"
    src="Tailwind.png"
    alt="Project Image"
  />
  <img
    className="expertise transition duration-200 ease-in-out hover:scale-110 hover:filter grayscale-[0.9] hover:grayscale-0 w-16 h-16"
    src="bootstrap.png"
    alt="Project Image"
  />
  <img
    className="expertise transition duration-200 ease-in-out hover:scale-110 hover:filter grayscale-[0.9] hover:grayscale-0 w-16 h-16"
    src="express.png"
    alt="Project Image"
  />
  <img
    className="expertise transition duration-200 ease-in-out hover:scale-110 hover:filter grayscale-[0.9] hover:grayscale-0 w-20"
    src="node-js.png"
    alt="Project Image"
  />
  <img
    className="expertise transition duration-200 ease-in-out hover:scale-110 hover:filter grayscale-[0.9] hover:grayscale-0 w-20 h-16"
    src="mongodb.png"
    alt="Project Image"
  />
</div>
      <footer className="bg-gray-200 h-auto py-4">
        <div className="flex flex-col md:flex-row justify-evenly items-center md:pt-6 gap-6 md:gap-0">
          <div className="text-2xl md:text-3xl text-indigo-700 font-semibold hover:underline">
            Krishna Verma
          </div>
          <div className="text-2xl md:text-3xl text-indigo-700 font-semibold hover:underline">
            Projects
          </div>
          <div className="text-2xl md:text-3xl text-indigo-700 font-semibold hover:underline">
            Contacts
          </div>
          <div className="text-2xl md:text-3xl text-indigo-700 font-semibold hover:underline">
            Have a Question?
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-evenly items-start md:items-center mt-6 gap-6 md:gap-0">
          <div className="w-full md:w-1/4 px-4 md:px-0">
            <p className="text-black font-medium text-center md:text-right">
              As a fervent pursuer of knowledge and a B.Tech Computer Science
              student. With a profound interest in MERN stack development, I am
              equipped with the skills to transform ideas into robust, scalable,
              and dynamic web applications.
            </p>
          </div>

          <div className="projects w-full pl-20 md:w-1/5 flex flex-col gap-2 ">
            <a
              className="text-black font-medium text-center md:text-left hover:underline"
              href="https://github.com/Verma-Krishna/Blood_Bank_app"
            >
              Bloodbank app
            </a>
            <a
              className="text-black font-medium text-center md:text-left hover:underline"
              href="https://github.com/Verma-Krishna/Chatapp"
            >
              Chatapp
            </a>
            <a
              className="text-black font-medium text-center md:text-left hover:underline"
              href="https://github.com/Verma-Krishna/NewsApp"
            >
              News app
            </a>
            <a
              className="text-black font-medium text-center md:text-left hover:underline"
              href="https://github.com/Verma-Krishna/Myshop"
            >
              My shop
            </a>
            <a
              className="text-black font-medium text-center md:text-left hover:underline"
              href="https://github.com/Verma-Krishna/CRUD"
            >
              CRUD
            </a>
          </div>

          <div className="contact w-full md:w-1/5 flex flex-col gap-3 items-center md:items-start">
            <a
              href="https://github.com/Verma-Krishna"
              className="flex gap-2 text-black font-medium hover:underline"
            >
              <img
                src="github.png"
                alt="Github"
                className="w-6 transition-transform duration-200 ease-in-out hover:scale-110"
              />
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/krishna-verma-62b188210/"
              className="flex gap-2 text-black font-medium hover:underline"
            >
              <img
                src="linkedin.png"
                alt="LinkedIn"
                className="w-6 transition-transform duration-200 ease-in-out hover:scale-110"
              />
              LinkedIn
            </a>
            <a
              href="https://www.geeksforgeeks.org/user/krishnavevv1u/"
              className="flex gap-2 text-black font-medium hover:underline"
            >
              <img
                src="gfg.png"
                alt="Geeks for Geeks"
                className="w-6 transition-transform duration-200 ease-in-out hover:scale-110"
              />
              Geeks for Geeks
            </a>
            <a
              href="https://www.instagram.com/krishna_verma38/"
              className="flex gap-2 text-black font-medium hover:underline"
            >
              <img
                src="instagram.png"
                alt="Instagram"
                className="w-6 transition-transform duration-200 ease-in-out hover:scale-110"
              />
              Instagram
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100079318232355"
              className="flex gap-2 text-black font-medium hover:underline"
            >
              <img
                src="facebook.png"
                alt="Facebook"
                className="w-6 transition-transform duration-200 ease-in-out hover:scale-110"
              />
              Facebook
            </a>
          </div>

          <div className="question w-full mb-20 mr-12 md:w-1/5 flex flex-col gap-2 text-center md:text-left">
            <h3 className="text-black font-medium">
              Anand Engineering College Kitham Agra
            </h3>
            <a
              href="mailto:krishnaverma4203@gmail.com"
              className="text-black font-medium hover:underline"
            >
              krishnaverma4203@gmail.com
            </a>
            <h3 className="text-black font-medium">+91 6399284203</h3>
          </div>
        </div>
      </footer>
    </>
  );
}
