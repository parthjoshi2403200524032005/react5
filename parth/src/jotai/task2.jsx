import React from "react";
import { useAtom } from "jotai";
import { tab } from "../store1";

const TabButton = ({ label, active, onClick }) => {
  const baseClasses = "border-2 border-indigo-500 text-gray-800 text-2xl font-bold italic w-[120px] h-12 rounded-2xl";
  const activeClasses = "bg-indigo-500 text-white"; // Highlight condition for active tab
  const inactiveClasses = "bg-indigo-100 hover:bg-indigo-200"; // Hover effect for inactive tabs

  return (
    <button
      className={`${baseClasses} ${active ? `${activeClasses}` : `${inactiveClasses}`}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

const Jotaitask2 = () => {
  const [value, setValue] = useAtom(tab);

  return (
    <div className="w-[1200px] h-[400px] border-2 border-gray-300 bg-[#142942]  mt-8 ml-[200px] rounded-[100px] ">
      <div className="flex justify-around items-center mt-8">
        <TabButton label=" A " active={value === " A "} onClick={() => setValue(" A ")} />
        <TabButton label=" B " active={value === " B "} onClick={() => setValue(" B ")} />
        <TabButton label=" C " active={value === " C "} onClick={() => setValue(" C ")} />
        <TabButton label=" D " active={value === " D "} onClick={() => setValue(" D ")} />
      </div>
      <div className="mt-24 font-bold text-7xl text-[white] text-center">
        {value}
      </div>
    </div>
  );
};

export default Jotaitask2;
