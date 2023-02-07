import React from "react";
import { Icon } from "@iconify/react";

function Listdiv({ listname}) {
  
  const Delete=()=>{
          setTodos()
  }

  return (
    <div className="w-full h-[5rem] relative mb-4 flex items-center">
      <div className="list pl-[2rem] bg-white w-[30rem] h-[5rem] flex items-center rounded-xl">
        <h2 className="todo text-[1.5rem]">{listname}</h2>
      </div>
      <button onClick={Delete} className="deletebtn bg-[#c43114] h-[4rem] ml-[1rem] w-[4rem] rounded-xl flex items-center justify-center">
          <Icon icon="ic:outline-delete" className="text-[1.5rem] text-white" />
        </button>
    </div>
  );
}

export default Listdiv; 
