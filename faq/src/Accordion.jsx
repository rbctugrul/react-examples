import React from "react";

function Accordion({ title, active, setActive }) {
  return (
    <div className="accordion">
      <div className="accordionHeading">
        <div className="container">
          <p>{title}</p>
          <span onClick={()=> setActive(title)}>CLICK ME</span>
        </div>
      </div>
      <div className={(active === title ? "show" : "")+ "accordionContent"}>
        <div className="container">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem illo
            minus quia sed, voluptas eos voluptatum ducimus suscipit rem ipsum
            omnis explicabo pariatur veritatis voluptates? Atque nulla dolore
            reprehenderit hic?
          </p>
        </div>
      </div>
    </div>
  );
}

export default Accordion;
