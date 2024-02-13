import React, { useState, memo, useEffect } from "react";

import axios from "axios";

import "../../public/stylesheet/Email.css";

const Email = () => {
    const [userData, setUserData] = useState({ count: 1 });
    const [data, setData] = useState();
    const [error, setError] = useState();
    const [sended, setSended] = useState(0);

    const [sending, setSending] = useState(false);

    const handleInput = e => {
        const { name, value } = e.target;
        setUserData(prevUserData => ({
            ...prevUserData,
            [name]: value
        }));
    };

    const post = (url, data) => {
        try {
            axios
                .post(url, data)
                .then(response => {
                    setSended(prev => prev + 1);
                  
                    
                    setData(response.data);
                })
                .catch(error => {
                  setError(error)
                    console.error("Error posting data:", error);
                });
        } catch (e) {
            console.log(e);
        }
    };

    const sendEmail = async e => {
        e.preventDefault();
  setSending(!sending)
        

        for (let i = 0; i < userData.count; i++) {
            
            if(!error){
              post("https://email-project-iohv.onrender.com/Email", userData);
            }
         
            
            
        }
    };

    useEffect(() => {
       if(error){
         console.log(error.response.data.message);
         
         setTimeout(function() {
           setError("")
           setSending(false)
          
         },3000);
         
       }
    }, [error]);

useEffect(() => {
  console.log(sended);
  if(sended==userData.count){
    
    setSending(!sending);
    setSended(0);
  }
    }, [sended]);

useEffect(()=>{
  console.log(data);
},[data])


    return (
        <>
            <div className="Email-container">
                <form className="Form-box">
                    <h3> Email Send </h3>
                    <div className="inp">
                        <label>Email :</label>
                        <input
                            type="Email"
                            name="email"
                            placeholder="Email hare! "
                            onChange={handleInput}
                            required
                        />
                    </div>
                    
                    
       <div className="inp">
                        <label>Subject:</label>
                        <input
                            type="text"
                            name="subject"
                            placeholder="Subject hare! "
                            onChange={handleInput}
                            required
                        />
                    </div>
                
                    
                    
                    
                    
                    

                    <div className="inp">
                        <label>Text :</label>
                        <input
                            type="text"
                            name="text"
                            placeholder="Text hare! "
                            onChange={handleInput}
                            required
                        />
                    </div>

                    <div className="inp">
                        <label>Count :</label>
                        <input
                            type="number"
                            name="count"
                            placeholder="1-100"
                            max="100"
                            onChange={handleInput}
                        />
                    </div>
<div className="inp">
<p className="p">
{error? error.response.data.message:""}
{data?data.message:""}
</p>
</div>
                    <button
                        className="Send"
                        disabled={sending}
                        onClick={sendEmail}
                    >
                        {sending
                            ? `Please wait...(${sended}/${userData.count})`
                            : "Send"}
                    </button>
                </form>
            </div>
        </>
    );
};

export default Email;
