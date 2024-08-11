import React from "react";

function About() {
  return (
    <>
      <div
        name="About"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
      >
        <div>
          <h1 className="text-3xl font-bold mb-5">About</h1>
          <p>
            Hello, I'm Javed Ansari, a passionate Web developer with a keen eye for MERN
            Stack . I strive to create impactful and visually stunning Software solutions that leave a lasting impression.
          </p>
          <br />
          <h1 className="text-green-600 font-semibold text-xl">
            Education & Training
          </h1>
          <div class="space-y-4">
            <div class="flex flex-col md:flex-row md:justify-between">
              <span>[Degree/Certification]</span>
              <span class="md:text-center md:flex-grow md:mx-4">[Institution]</span>
              <span class="md:text-right">[Year]</span>
            </div>
            <div class="flex flex-col md:flex-row md:justify-between">
              <span>PG-DAC</span>
              <span class="md:text-center md:flex-grow md:mx-4">Orlando Academy CDAC ACTS Authorized Training Centre</span>
              <span class="md:text-right">2023</span>
            </div>
            <div class="flex flex-col md:flex-row md:justify-between">
              <span>B.Tech(EE)</span>
              <span class="md:text-center md:flex-grow md:mx-4">G.B.Pant Institute of Engineering & Technology</span>
              <span class="md:text-right">2021</span>
            </div>
            <div class="flex flex-col md:flex-row md:justify-between">
              <span>Higher Secondary Certificate</span>
              <span class="md:text-center md:flex-grow md:mx-4">Govt. Inter College</span>
              <span class="md:text-right">2016</span>
            </div>
            <div class="flex flex-col md:flex-row md:justify-between">
              <span>Secondary School Certificate</span>
              <span class="md:text-center md:flex-grow md:mx-4">Saraswati Vidhya Mandir H.S School</span>
              <span class="md:text-right">2014</span>
            </div>
          </div>
          <br />
          <br />
          <h1 className="text-green-600 font-semibold text-xl">
            Skills & Expertise
          </h1>
          <span>
            Proficient in JavaScript, React.js, Node.js, Express.js, and MongoDB.
            <br />
            <br />
            Experienced with tools and technologies like Git, Redux, and Tailwind CSS.
            <br />
            <br />
            Strong grasp of responsive web design, RESTful APIs, and full-stack development.
            <br />
            <br />
            Excellent problem-solving skills and a keen eye for detail in UI/UX design.
            Effective communicator and team collaborator.
          </span>
          <br />
          <br />
          <h1 className="text-green-600 font-semibold text-xl">
            Professional Experience
          </h1>
          <div className="space-y-4">
            <div className="flex flex-col md:flex-row md:justify-between">
              <span>[Job Title]</span>
              <span className="md:text-center md:flex-grow md:mx-4">[Company Name]</span>
              <span className="md:text-right">[Year]</span>
            </div>
            <div className="flex flex-col md:flex-row md:justify-between">
              <span>Front-End Intern</span>
              <span className="md:text-center md:flex-grow md:mx-4">Aarvy Technologies, Gurugram, India</span>
              <span className="md:text-right">Jan 2024 – Jul 2024</span>
            </div>
          </div>

          <br />
          <br />
          <h1 className="text-green-600 font-semibold text-xl">
            Mission Statement
          </h1>
          <p>
            My mission is to utilize my expertise in web development and my passion for the MERN Stack to create innovative and impactful software solutions. I am committed to delivering high-quality, user-centric applications that not only meet client needs but also contribute to enhancing the digital experience. Through continuous learning and a dedication to excellence, I strive to push the boundaries of what's possible in the tech industry.
          </p>

        </div>
      </div>
      <hr className='my-8 border-t-2 border-gray-300' />
    </>
  );
}

export default About;

