import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
            I am a B.Tech CSE Student and I am interested in web development.<br></br><br></br>In-depth knowledge of HTML, CSS and Java script.<br></br><br></br>Proficient knowledge of React js and Python.<br></br><br></br>Efficient knowledge of database management & object oriented
            programming.<br></br><br></br>Ability to work in a fast-paced environment.<br></br><br></br>
          A Team Player with Excellent Communication & Time Management Skills
        </p>
      </div>
    </div>
  );
};

export default About;
