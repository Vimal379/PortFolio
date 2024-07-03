import React from "react";

function About() {
  return (
    <div
      name="about"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20  "
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">About</h1>
        <p>
          Hello, I'm Akhil, a passionate Web developer with a keen eye for MERN
          Stack . With a background in IT, I strive to create impactful and
          visually stunning Software solutions that leave a lasting impression.
        </p>
        <br />
        <h1 className="text-green-800 font-semibold text-xl">
          Education & Training
        </h1>
        <span>
            <span className="text-green-700 font-semibold">Undergraduate</span> : Bachelor of Computer Application <br />
            College       : S.P.U PG College,Pali <br />
            Year          : 2024 <br />
            Percentage    : 79.93% 
        </span>
        <br />
        <span>
            <span className="text-green-700 font-semibold">12th Science</span> : PCM <br />
            School       : E.M.S.S.S   <br />
            Year          : 2021 <br />
            Percentage    : 92.33% 
        </span>
        <br />
        <br />
        <h1 className="text-green-800 font-semibold text-xl">
          Skills & Expertise
        </h1>
        <span>
            Programming Languages : C, C++, Java, Javascript <br />
            Database              : Oracle <br />
            Web Dev               : HTML, CSS, Tailwind CSS , React js <br />
            Excellent problem-solving skills Effective communicator and
            collaborator
        </span>
        <br />
        <br />
        
        <h1 className="text-green-800 font-semibold text-xl">
          Mission Statement
        </h1>
        <p>
          My mission is to leverage my skills and creativity to deliver
          innovative  solutions that exceed client expectations and
          contribute positively to the digital landscape. I am committed to
          continuous learning and growth, always seeking new challenges and
          opportunities to expand my horizons.
        </p>
      </div>
      <br />
      <hr  className='border-[1px] mt-8 md:mt-15'  />
    </div>
  );
}

export default About;