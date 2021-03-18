import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';



function LoginForm(props) {
  const fname = React.useRef(null);
  const lname = React.useRef(null);
  const nameEl = React.useRef(null);
  const eadd = React.useRef(null);
  const pnum = React.useRef(null);
  const passwordEl = React.useRef(null);
  const msex = React.useRef(null);
  const fsex = React.useRef(null);
  const rememberMeEl = React.useRef(null);

  const handleSubmit = e => {
    e.preventDefault();
    const formData = {
      firstname: fname.current.value,
      lastname: lname.current.value,
      email: eadd.current.value,
      username: nameEl.current.value,
      phone: pnum.current.value,
      password: passwordEl.current.value,
      malesex: msex.current.checked,
      femalesex: fsex.current.checked,
    }
    // it would be a more completely correct REACT approach
    // to make a JSX component to render formData out to a selector on the HTML
    console.log(formData);
  };

  return (
     <form onSubmit={handleSubmit}>
       
       <center><h1> Registration Form </h1></center>
       <hr></hr>  
       <br></br><br></br><br></br>
       First Name <input type="text" placeholder="First Name" ref={fname} /> <span></span> 
       Last Name <input type="text" placeholder="last Name" ref={lname} />
       <br></br><br></br>
       Gender: 
       <label>
         <input type="checkbox" ref={msex} />
         Male
       </label>
       <span></span> <span></span> 
       <label>
         <input type="checkbox" ref={fsex} />
         Female
       </label>
       <br></br><br></br>
       Phone Number: <input type="text" placeholder="Contact" ref={pnum} />
       <br></br><br></br>
       Email Id: <input type="text" placeholder="Email" ref={eadd} />
       <br></br><br></br>
       User Name: <input type="text" placeholder="Username" ref={nameEl} />
       <br></br><br></br>
       Password: <input type="password" placeholder="Password" ref={passwordEl} />
       <br></br>
       
       <label>
         <input type="checkbox" ref={rememberMeEl} />
         <span></span> Remember me
       </label>
       <br></br><br></br>
       <button type="submit" className="myButton">Login</button>
     </form>
   );
}

ReactDOM.render(<div><LoginForm /></div>, document.getElementById("root"));