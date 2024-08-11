import React from "react";
import java from "../../public/java.png";
import python from "../../public/python.webp";
import mongoDB from "../../public/mongodb.jpg";
import express from "../../public/express.png";
import reactjs from "../../public/reactjs.png";
import nodejs from "../../public/node.png";

function Portfolio() {
  const cardItem = [
    {
      id: 1,
      logo: "https://cdn.pixabay.com/photo/2018/08/31/11/17/quiz-3644414_1280.png",
      name: "Quiz App",
      description: "This is a project developed using with Next.js",
      live: "https://quizeasyy.netlify.app/",
      source: "https://github.com/Javed001999/quizApp"
    },
    {
      id: 2,
      logo: "https://cdn.pixabay.com/photo/2021/10/05/14/35/girl-6682881_1280.jpg",
      name: "Chat App",
      description: "This is a project developed using with MERN",
      live: "https://chatapp-tntf.onrender.com/login",
      source: "https://github.com/Javed001999/Chat-App"
    },
    {
      id: 3,
      logo: "https://cdn.pixabay.com/photo/2012/04/24/12/45/board-39864_1280.png",
      name: "Tic Tac Toe",
      description: "This is a project developed using with HTML, CSS & JS",
      live: "https://javedtictactoe.netlify.app",
      source: "https://github.com/Javed001999/Tic-tac-toe"
    },
    {
      id: 4,
      logo: "https://cdn.pixabay.com/photo/2017/07/06/17/13/calculator-2478633_1280.png",
      name: "Calculator",
      description: "This is a project developed using with React.js",
      live: "https://javedmycalculator.netlify.app/",
      source: "https://github.com/Javed001999/calculator"
    },
    {
      id: 5,
      logo: "https://cdn.pixabay.com/photo/2019/06/23/15/42/thermometer-4294021_1280.jpg",
      name: "Temperature Converter",
      description: "This is a project developed using with HTML, CSS & JS",
      live: "https://mytemperatureconverterr.netlify.app",
      source: "https://github.com/Javed001999/temperatureConverter"
    },
    {
      id: 6,
      logo: "https://cdn.pixabay.com/photo/2016/04/11/11/47/watercolour-1321829_1280.jpg",
      name: "Color Gradient",
      description: "This is a project developed using with HTML, CSS & JS",
      live: " https://mycolorgradient.netlify.app",
      source: "https://github.com/Javed001999/colorGradient"
    },

  ];
  return (
    <>
      <div
        name="Portfolio"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
      >
        <div>
          <h1 className="text-3xl font-bold mb-5">PortFolio</h1>
          <span className=" underline font-semibold">Featured Projects</span>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
            {cardItem.map(({ id, logo, name, description, live, source }) => (
              <div
                className="md:w-[290px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-105 duration-300"
                key={id}
              >
                <img
                  src={logo}
                  className="w-[120px] h-[120px] p-1 rounded-full border-[2px] border-animates"
                  alt=""
                />
                <div>
                  <div className="px-2 font-bold text-xl mb-2">{name}</div>
                  <p className="px-2 text-gray-700">{description}</p>
                </div>
                    {/* Lorem ipsum, dolor sit amet consectetur adipisicing elit. */}
                <div className=" px-6 py-4 space-x-3 justify-around">
                     <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded"
                    onClick={() => window.open(live, "_blank")}
                  >
                    Live
                  </button>
                  <button
                    className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded"
                    onClick={() => window.open(source, "_blank")}
                  >
                    Source code
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>

  );
}

export default Portfolio;
