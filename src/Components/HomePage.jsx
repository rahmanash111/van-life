import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import About from "./About";

export default function HomePage(){
return(
        <div className="body-div">
            <h1>You got the travel plans, we got the travel vans.</h1>
            <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
            <button className="find-van-btn">Find your van</button>
        </div>
)
}