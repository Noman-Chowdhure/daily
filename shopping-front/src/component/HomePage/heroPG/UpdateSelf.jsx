import React, { useEffect, useState } from 'react'

const UpdateSelf = () => {
    const [sama,setSama] = useState([]);
    useEffect(()=>{
       fetch('http://localhost:4000/updateself')
        .then(res => res.json())
        .then(data => {
            setSama(data);
            console.log(data)
        })
    },[])
  return (
    <div className=' w-4/5 mx-auto h-fit'>
        <div className="title w-full h-[20vh]">
            <h1 className=' font-PT text-[3vw] text-center uppercase'>self update</h1>
        </div>
        <div className=' w-full h-screen  grid grid-cols-3 gap-4 grid-rows-7 justify-center justify-items-center items-center'>
            {sama.map(abc => {
                return(
                    <div className=' border-[1px] relative w-full p-4'>
                        <p className=' absolute bottom-0 right-0 font-PT'>{abc.date}</p>
                        <h1 className=' uppercase p-1'><span className=' font-PT pr-3'>linux</span> :- {abc.linux}</h1>
                        <h1 className=' uppercase p-1'><span className=' font-PT'>network</span>{abc.network} </h1>
                        <h1 className=' uppercase p-1'> <span className=' font-PT'>javascript</span>{abc.js} </h1>
                        <h1 className=' uppercase p-1'> <span className=' font-PT'>python</span>{abc.python} </h1>
                        <h1 className=' uppercase p-1'>eating amount milk tea <span className=' font-PT p-3 text-[1vw]'>{abc.milk.length < 0 ? 'good job':abc.milk}</span> </h1>
                        <h1 className=' uppercase p-1'>eating amount smoke<span className=' font-PT p-3 text-[1vw]'>{abc.smoke.length < 0 ? 'good job':abc.smoke}</span> </h1>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default UpdateSelf