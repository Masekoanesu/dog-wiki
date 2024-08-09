// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPaw } from "@fortawesome/free-solid-svg-icons";
// import "../pages/SignUp.css";

// function SignUp() {
//   const [email, setEmail] = useState("");
//   const [mockData, setMockData] = useState([]);
//   const [errorMessage, setErrorMessage] = useState("");
//   const navigate = useNavigate();

//   const handleInputChange = (e) => {
//     setEmail(e.target.value);
//     setErrorMessage("");
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     const userExists = mockData.some((user) => user.email === email);

//     if (userExists) {
//       setErrorMessage("Email is already registered log in instead.");
//     } else {
//       setMockData([...mockData, { email }]);
//       setEmail("");
//       navigate("/Explore");
//       console.log(mockData);
//     }
//   };

//   return (
//     <div className="container">
//       <div className="header">
//         <FontAwesomeIcon icon={faPaw} size="3x" style={{ color: "black" }} />
//         <h1>Pet Finder</h1>
//       </div>
//       <div className="content">
//         <img
//           src="https://th.bing.com/th?id=OIP.S4ioYMEFICkTukKEaRMf4AHaJQ&w=223&h=279&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
//           alt="content image"
//         />
//         <div className="text-content">
//           <h1>A wagging tail is the best welcome Home!</h1>
//           <p>Sign up with email address</p>
//           <form onSubmit={handleFormSubmit}>
//             <input
//               type="email"
//               placeholder="yourname@gmail.com"
//               value={email}
//               onChange={handleInputChange}
//               required
//             />
//             <button type="submit">Sign Up</button>
//           </form>
//           {errorMessage && <p className="error">{errorMessage}</p>}
//           <p>or continue with</p>
//           <button>google</button>
//           <button>facebook</button>
//         </div>
//       </div>
//       <footer>
//         <p>Find & adopt</p>
//       </footer>
//     </div>
//   );
// }

// export default SignUp;
export default null;
