import React from "react";

function Brand({ brand }) {
  return (
    <div className="brand">
      <h5>{brand.title}</h5>
      <div className="brand-colors">
        {brand.colors.map((color) => (
          <span style={{ "--bgColor": `#${color}` }}>{color}</span>
        ))}
      </div>
    </div>
  );
}

export default Brand;
