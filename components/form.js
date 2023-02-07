import React, { useState } from "react";
import ToDo from "./listdiv";
import { Icon } from "@iconify/react";

function Form() {
  const [items, getItems] = useState("");
  const [update, setUpdate] = useState([]);

  const display = (e) => {
    getItems(e.target.value);
  };

  const handle = () => {
    if(items!==""){
    setUpdate((oldItems) => {
      return [...oldItems, items];
    });
  }
    // setUpdate(items);
  };

  // const taskcomplete=()=>{

  // }
  return (
    <div className="relative flex justify-center">
      <div className="w-full h-[95vh] relative flex justify-center">
        <div className="todo h-[4rem] top-[5rem] relative">
          <div className="todoinputdiv h-[4rem] relative flex">
            <input
              type="text"
              value={items}
              onChange={display}
              className="todoinput h-[3rem]  w-[30rem] rounded-xl p-[2rem] text-[1.5rem]"
              placeholder="Things to do..."
            />
            <button
              className="todobtn bg-[#1293fd] h-[4rem] ml-[1rem] w-[4rem] rounded-xl flex items-center justify-center"
              onClick={handle}
            >
              <Icon
                icon="material-symbols:add"
                className="text-[1.5rem] text-white"
              />
            </button>
          </div>
        </div>
      </div>
      <div className="todocontainer w-[35rem] h-auto absolute  top-[10rem]">
        {/* {update.map((listname)=>{
    return <div className="list pl-[2rem] bg-white w-[30rem] h-[5rem] flex items-center rounded-xl mb-4">
      <h1 className="todo text-[1.5rem]">{listname}</h1>
    </div>})} */}
        {/* <ToDo listname={update}/> */}
        {update.map((list) => {
          return <ToDo listname={list} />;
        })}
      </div>
    </div>
  );
}

export default Form;
