import React, { useState } from "react";

const Form = () => {
    const [name, setName] = useState("Shahjalal")
    const [email, setEmail] = useState("mdshahjajal.bu@gmail.com")
    const [message, setMessage] = useState("Hi there how are you?")
    const [devision, setDevision] = useState("Chittagong");
    const [checked, setChecked] = useState("male");

    const handleForm = (e) =>{
        let name = e.target.name;
        let val = e.target.value;
        if(name === 'name'){
            setName(val)
        }else if(name === "email"){
            setEmail(val)
        }else if(name === "message"){
            
            setMessage(val);
        }else if(name === "devision"){
            setDevision(val)
        }else if(name === "gender"){
            console.log(val);
            setChecked(val);
        }
    }

const handleSubmit = (event) =>{
    console.log(`
    Hi there my name is ${name} , i am ${checked}
    and my email is ${email} , i am come form ${devision} 
    and i have a message to you ${message}
    `);
    event.preventDefault();
}
  return (

       <div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Enter Your Name" value={name} onChange={handleForm}/>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Enter Your Email" value={email} onChange={handleForm}/>
            <label htmlFor="devision">Select Your Devision</label>
            <br />
            <select name="devision" id="" onChange={handleForm}>
                <option value="Dhaka">Dhaka</option>
                <option value="Chittagong"  >Chittagong</option>
                <option value="Barishal">Barishal</option>
                <option value="Rajshahi">Rajshahi</option>
                <option value="Khulna">Khulna</option>
            </select>
            <label htmlFor="message">Gender</label>
            <br />
            <br />
            <input type="checkbox" name="gender" id="male" defaultChecked={checked} value="Male" onChange={handleForm}/><label htmlFor="male">Male</label>
            <input type="checkbox" name="gender" id="female" value="Female" onChange ={handleForm} /><label htmlFor="female">Female</label>
            <br />
            <br />
            <label htmlFor="message">Message</label>
            <br />
            <textarea value={message} name="message" onChange={handleForm}></textarea>
            <input type="submit" defaultValue="Submit" />
          </form>
        </div>

 
  );
};

export default Form;
