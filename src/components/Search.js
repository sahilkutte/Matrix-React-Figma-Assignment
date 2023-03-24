import axios from "axios";
import React from "react"
import { useState,useRef } from "react"

const Result=()=>{

    const city=useRef();
    const [data,setData]=useState();

    const api={
     id: "a345f9db44ef1fed1669b38b05a90806",
     base:"http://api.openweathermap.org/data/2.5"
    }

    const funone=()=>{
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.current.value}&units=metric&appid=${api.id}`
        ) .then((response) => response.json())
        .then((data) => setData(data));
        console.log(data);
    
    }
    

    return(
        <>
        <input type={"search"} ref={city}></input>
        <button onClick={funone} >get</button>
        {
            (typeof data!="undefined")?(
                <table>
                <thead>
                <tr>
                 <th>Parameter</th>
                 <th>value</th>
                 </tr>
                </thead>
                <tbody>
                   <tr>
                       <td>city</td>
                       <td>{data.name}</td>
                   </tr>
                   <tr>
                       <td>Temp</td>
                       <td>{data.main.temp}c</td>
                   </tr>
                  
                   <tr>
                       <td>min_Temp</td>
                       <td>{data.main.temp_min}</td>
                   </tr>
                   
                   <tr>
                       <td>Wind_speed</td>
                       <td>{data.wind.speed}</td>
                   </tr>
                   <tr>
                       <td>Max_temp</td>
                       <td>{data.main.temp_max}</td>
                   </tr>
                  
                </tbody>
                </table>
              
            ):(" ")
        }
        </>
    )
}
export default Result