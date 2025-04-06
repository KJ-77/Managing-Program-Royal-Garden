import React from "react";
import COLORS from "../../styles/colorPalette.ts";

const CompanyCard = ({ name = "name", desc = "description", bg = COLORS.second }) => {
  return (
    <div style={{ backgroundColor: bg }} className="rounded-lg p-6 shadow-md transition-transform duration-300 hover:translate-y-[-5px] flex flex-col items-center text-white">
      <div className="w-[150px] h-[150px] rounded-full overflow-hidden mb-4">
        <img src="https://placehold.co/200" alt="Plants" className="w-full h-full object-cover" />
      </div>
      <h2 className="my-2">{name}</h2>
      <p className="mb-6">{desc}</p>
      <button 
      style = {{ backgroundColor: COLORS.third }}
      className="text-white border-none py-2 px-4 rounded cursor-pointer transition-colors duration-300 hover:bg-[#388e3c]">
        View {name}
      </button>
    </div>
  );
};

export default CompanyCard;
