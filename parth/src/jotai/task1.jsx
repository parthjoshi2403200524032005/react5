import React from "react";
import { useAtom } from "jotai";
import { tab } from "../store1";

const TabButton = ({ label, active, onClick }) => {
  const baseClasses = "border-2 border-indigo-500 text-gray-800 text-2xl font-bold italic w-[120px] h-12 rounded-2xl";
  const activeClasses = "bg-indigo-500";
  const inactiveClasses = "bg-slate-200 hover:bg-indigo-200";

  return (
    <button
      className={`${baseClasses} ${active ? `${activeClasses}` : `${inactiveClasses}`}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

const Jotaitask = () => {
  const [value, setValue] = useAtom(tab);

  return (
    <div className="border-2 rounded-[100px] border-gray-300 w-[1200px] h-20 bg-[#0F172A] flex justify-around items-center mt-8 ml-[200px]">
      <TabButton label=" A " active={value === " A"} onClick={() => setValue(" A ")} />
      <TabButton label=" B " active={value === " B"} onClick={() => setValue(" B ")} />
      <TabButton label=" C " active={value === " C"} onClick={() => setValue(" C ")} />
      <TabButton label=" D " active={value === " D"} onClick={() => setValue(" D ")} />
    </div>
  );
};

export default Jotaitask;
