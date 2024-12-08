import React from "react";
import { useState } from "react";
import { createContext } from "react";

// craete the craete context here 

export const UserContext = createContext();


// create the Context provider function here

const UserProvider = (children) =>{
    const[data,setData] = useState("Adithya")
    return(
        <UserContext.Provider value={data}>
            {children}
        </UserContext.Provider>
    )
}