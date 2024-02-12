import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../../public/stylesheet/Home.css";
const Home = () => {
    return (
        <>
            <div>
                <div className="main-container">
                    <NavLink to="/Email" className="Link">
              <div className="flex-box">
               <img className="ImgClass" src="../../public/images/images (1).jpeg" />
               <button className="Emailbtn">Send Email</button>
                    </div>
                    </NavLink>
               
                                   <NavLink to="/Sms" className="Link">
                 <div className="flex-box">
               <img className="ImgClass" src="../../public/images/images.jpeg" />
               <button className="Emailbtn">Send Sms</button>
                    </div>
                    </NavLink>     
                    
                    
                </div>
            </div>
        </>
    );
};

export default Home;
