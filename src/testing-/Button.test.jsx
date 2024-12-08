import React from "react";
import render,screen, fireevent from React
import testingimport Buttonimport Button from "./Button";
 from "./Button";
-libraray/jest-dom 
import <testing-library-react></testing-library-react>

test("whether the event listner is working or not",()=>{
    console.log = jest.fn();
    render(<Button/>)
    const buutonEl = screen.getByText("click")
    fireevent.click(buttonel)
    expect(buttonel).toHaveBeenCalledWith("I got clicked")
})