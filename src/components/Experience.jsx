import React from "react";
import html from "../../public/html.png";
import css from "../../public/css.jpg";
import javascript from "../../public/javascript.png";
import mongoDB from "../../public/mongodb.jpg";
import express from "../../public/express.png";
import reactjs from "../../public/reactjs.png";
import nodejs from "../../public/node.png";

function Experience() {
    const cardItem = [
        {
            id: 1,
            logo: html,
            name: "HTML",
        },
        {
            id: 2,
            logo: css,
            name: "CSS",
        },
        {
            id: 3,
            logo: javascript,
            name: "JavaScript",
        },
        {
            id: 4,
            // logo: mongoDB,
            logo: "https://png.pngitem.com/pimgs/s/385-3850968_graphic-design-hd-png-download.png",
            name: "MongoDB",
        },
        {
            id: 5,
            logo: express,
            name: "Express",
        },
        {
            id: 6,
            logo: reactjs,
            name: "React JS",
        },
        {
            id: 7,
            logo: nodejs,
            name: "Node.js",
        },
        {
            id: 8,
            logo: "https://static-00.iconduck.com/assets.00/nextjs-icon-512x309-yynfidez.png",
            name: "Next.js",
        },
        {
            id: 9,
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/640px-Typescript_logo_2020.svg.png",
            name: "TypeScript",
        },
        {
            id: 10,
            logo: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
            name: "GitHub",
        },

    ];
    return (
        <>
            <hr className='my-16 border-t-2 border-gray-300' />
            <div
                name="Experience"
                className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
            >
                <div>
                    <h1 className="text-3xl font-bold mb-5">Experience</h1>
                    <p className="  ">
                        I have 6 months of experience in below technologies.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
                        {cardItem.map(({ id, logo, name }) => (
                            <div
                                className=" flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300 border-animates"
                                key={id}
                            >
                                <img src={logo} className="w-[150px] rounded-full" alt="" />
                                <div>
                                    <div className="">{name}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <hr className='my-8 border-t-2 border-gray-300' />
        </>

    );
}
export default Experience;

