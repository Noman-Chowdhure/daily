import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import moment from"moment";
gsap.registerPlugin(ScrollTrigger);
const HeroPG = () => {
  const [count, setCount] = useState(0);
  const [milk, setMilk] = useState(0);

  const handleSubmit = (eventt) => {
    eventt.preventDefault();
    let linux = eventt.target.linux.value;
    let network = eventt.target.network.value;
    let js = eventt.target.js.value;
    let milk = eventt.target.milk.value;
    let smoke = eventt.target.smoke.value;
    let date = eventt.target.date.value;
    const objj = { linux, network, js, milk, smoke, date };
    console.log(objj);

    fetch("http://localhost:4000/daily", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(objj),
    })
      .then((res) => res.json())
      .then((info) => {
        if (info.insertedId) {
          toast.success(' your daily update will be added..')
          console.log("okey");
        } else{
          toast.error('something is wrong..')
        }
      });
  };

  return (
    <div className=" w-full h-fit overflow-hidden">
      <div className="title w-full text-center h-[20vh]">
        <h1 className=" text-[4vw] uppercase font-PT">my daily update</h1>
       { moment().format('MMMM Do YYYY, h:mm:ss a')}
      </div>
      <div className="contents ">
        <form onSubmit={handleSubmit} className=" grid  w-4/5 mx-auto grid-cols-2 gap-x-4">
          <div className="linuxx grid grid-cols-1 space-y-4">
            <label className=" font-MOI uppercase font-[2vw]" htmlFor="linux">
              linux
            </label>
            <textarea
              name="linux"
              id="linux"
              cols="40"
              rows="4"
              className=" border-[1px] outline-none ps-5"
            ></textarea>
          </div>

          <div className=" grid grid-cols-1 space-y-4">
            <label className=" font-MOI uppercase font-[2vw]" htmlFor="linux">
              {" "}
              conputer networking
            </label>
            <textarea
              name="network"
              id="network"
              cols="40"
              rows="4"
              className=" border-[1px] outline-none ps-5"
            ></textarea>
          </div>

          <div className="linuxx grid grid-cols-1 space-y-4">
            <label className=" font-MOI uppercase font-[2vw]" htmlFor="js">
              javascript
            </label>
            <textarea
              name="js"
              id="js"
              cols="40"
              rows="4"
              className=" border-[1px] outline-none ps-5"
            ></textarea>
          </div>
          <div className="linuxx grid grid-cols-1 space-y-4">
            <label className=" font-MOI uppercase font-[2vw]" htmlFor="python">
              python
            </label>
            <textarea
              name="python"
              id="python"
              cols="40"
              rows="4"
              className=" border-[1px] outline-none ps-5"
            ></textarea>
          </div>

          <div className="linuxx grid grid-cols-1 space-y-4">
            <label className=" font-MOI uppercase font-[2vw]" htmlFor="milk">
              milk tea
            </label>
            <div className="box grid w-full grid-cols-2 items-center ">
              <button
                onClick={() => setMilk((fucking) => fucking + 1)}
                type="button"
                className=" font-PT text-3xl"
              >
                yes
              </button>
              <input type="number" name="milk" className=" font-serif text-5xl" value={milk} />
            </div>
          </div>
         

          <div className="linuxx w-full grid grid-cols-1 space-y-4">
            <label className=" font-MOI uppercase font-[2vw]" htmlFor="smoke">
              smokeing day's
            </label>
            <div className="box w-full grid grid-cols-2 items-center justify-items-center">
              <button
                onClick={() => setCount((privious) => privious + 1)}
                type="button"
                className=" font-PT text-3xl"
              >
                yes
              </button>
              <input
                className=" text-5xl font-serif "
                type="number"
                name="smoke"
                value={count}
              />
            </div>
          </div>

          <input
            className=" w-1/3 mt-10 hover:uppercase cursor-pointer border-b-2 border-blue-500"
            type="submit"
            name="submit"
            id=""
          />
          <input type="date" name="date" id="date"/>
          <Toaster></Toaster>
        </form>
      </div>
    </div>
  );
};

export default HeroPG;
