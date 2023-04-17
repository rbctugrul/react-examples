import React from 'react'
import { IoMdSchool } from "react-icons/io";
import { MdBusinessCenter } from "react-icons/md";
import { HiQuestionMarkCircle } from "react-icons/hi";

function Experience() {
  return (
    <div className="expContainer">
      <div className="expElements">
        <ol>
          <li>
            <IoMdSchool />
            <h3>High School Graduation 2019</h3>
            <p>Fatih lisesi</p>
          </li>
          <li>
            <IoMdSchool />
            <h3>University Graduation 2025</h3>
            <p>Eskisehir University</p>
          </li>
          <li>
            <MdBusinessCenter />
            <h3>Software Engineer 2023</h3>
            <p>Microsoft</p>
          </li>
          <li>
            <HiQuestionMarkCircle />
            <h3>...?</h3>
            <p>?</p>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Experience