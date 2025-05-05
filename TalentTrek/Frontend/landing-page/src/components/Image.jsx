import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const  Apps =()=>{

    const [data, setdata] = useState([])
    const getdata = async () => { 
    
        const  response = await axios.get("https://picsum.photos/v2/list?page=2&limit=10")
       setdata(response.data)
       console.log(data )
    }

   
    return (
      <div onClick={getdata} className ="p-7">
        <button className ="bg-green-600 rounded text-2xl click w-full  active:scale-90 h-20 ">Get Data</button>
        <div className = "p-5 bg-gray-900 mt-5">
            {data.map(function(elem,idx){
                return <div className = "bg-slate-400 text-black items-center flex justify-between px-7 py-6 w-full  rounded mb-3">
                    <img clasName ="rounded h-40 "src={elem.download_url} alt="" />
               <h1 className = "text-2xl">{elem.author}</h1> </div>
            })}
        </div>
      </div>
    )
    
}

export default Apps