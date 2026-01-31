// import { Link } from "react-router-dom";
// import { useState } from "react";
// import "./App.css";

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log({ email, password });
//   };

//   return (
//     <div className="auth-container">
//       <div className="auth-box">
//         <h2>Login to MoneyFlow</h2>

//         <form onSubmit={handleSubmit}>
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />

//           {/* Password Field */}
//           <div className="password-wrapper">
//             <input
//               type={showPassword ? "text" : "password"}
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />

//             <span
//               className="toggle-password"
//               onClick={() => setShowPassword(!showPassword)}
//             >
//               {showPassword ? "🙈" : "👁️"}
//             </span>
//           </div>

//           <button type="submit">Login</button>
//         </form>

//         <p>
//           Don’t have an account? <Link to="/register">Register</Link>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Login;


// import React, { useState } from "react";
// import "./App.css";
// import "@fortawesome/fontawesome-free/css/all.min.css";
// const handleLogin = async (e) => {
//   e.preventDefault();
//   try {
//     const response = await fetch("http://localhost:8080/api/login", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(loginData),
//     });
//     const result = await response.json();
//     if (response.ok) {
//       alert("Login successful!");
//       localStorage.setItem("authToken", result.token);
//     } else {
//       alert(result.error || "Login failed");
//     }
//   } catch (error) {
//     console.error("Login error:", error);
//   }
// };

// const handleRegister = async (e) => {
//   e.preventDefault();
//   try {
//     const response = await fetch("http://localhost:8080/api/register", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(registerData),
//     });
//     const result = await response.json();
//     if (response.ok) {
//       alert("Registration successful!");
//       setIsRegister(false); // switch back to login
//     } else {
//       alert(result.error || "Registration failed");
//     }
//   } catch (error) {
//     console.error("Register error:", error);
//   }
// };

// const Auth = () => {
//   const [isRegister, setIsRegister] = useState(false);

//   return (
//     <div className={`auth-wrapper ${isRegister ? "toggled" : ""}`}>
//       <div className="background-shape"></div>
//       <div className="secondary-shape"></div>

//       {/* LOGIN */}
//       <div className="credentials-panel signin">
//         <h2 className="slide-element">Login</h2>

//         <form>
//           <div className="field-wrapper slide-element">
//             <input type="text" required />
//             <label>Username</label>
//             <i className="fa-solid fa-user"></i>
//           </div>

//           <div className="field-wrapper slide-element">
//             <input type="password" required />
//             <label>Password</label>
//             <i className="fa-solid fa-lock"></i>
//           </div>

//           <div className="field-wrapper slide-element">
//             <button className="submit-button" type="submit">
//               Login
//             </button>
//           </div>

//           <div className="switch-link slide-element">
//             <p>
//               Don&apos;t have an account? <br />
//               <span onClick={() => setIsRegister(true)}>Sign Up</span>
//             </p>
//           </div>
//         </form>
//       </div>

//       <div className="welcome-section signin">
//         <h2 className="slide-element">WELCOME BACK!</h2>
//       </div>

//       {/* REGISTER */}
//       <div className="credentials-panel signup">
//         <h2 className="slide-element">Register</h2>

//         <form>
//           <div className="field-wrapper slide-element">
//             <input type="text" required />
//             <label>Username</label>
//             <i className="fa-solid fa-user"></i>
//           </div>

//           <div className="field-wrapper slide-element">
//             <input type="email" required />
//             <label>Email</label>
//             <i className="fa-solid fa-envelope"></i>
//           </div>

//           <div className="field-wrapper slide-element">
//             <input type="password" required />
//             <label>Password</label>
//             <i className="fa-solid fa-lock"></i>
//           </div>

//           <div className="field-wrapper slide-element">
//             <button className="submit-button" type="submit">
//               Register
//             </button>
//           </div>

//           <div className="switch-link slide-element">
//             <p>
//               Already have an account? <br />
//               <span onClick={() => setIsRegister(false)}>Sign In</span>
//             </p>
//           </div>
//         </form>
//       </div>

//       <div className="welcome-section signup">
//         <h2 className="slide-element">WELCOME! To MoneyFlow</h2>
//       </div>
//     </div>
//   );
// };

// export default Auth;

import React, { useState } from "react";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Auth = () => {
  const [isRegister, setIsRegister] = useState(false);

  // State for login and register
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const [registerData, setRegisterData] = useState({ username: "", email: "", password: "" });

  // Handle Login
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://abc123.ngrok-free.app/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginData),
      });
      const result = await response.json();
      if (response.ok) {
        alert("Login successful!");
        localStorage.setItem("authToken", result.token);
      } else {
        alert(result.error || "Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  // Handle Register
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://abc123.ngrok-free.app/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(registerData),
      });
      const result = await response.json();
      if (response.ok) {
        alert("Registration successful!");
        setIsRegister(false); // switch back to login
      } else {
        alert(result.error || "Registration failed");
      }
    } catch (error) {
      console.error("Register error:", error);
    }
  };

  return (
    <div className={`auth-wrapper ${isRegister ? "toggled" : ""}`}>
      <div className="background-shape"></div>
      <div className="secondary-shape"></div>

      {/* LOGIN */}
      <div className="credentials-panel signin">
        <h2 className="slide-element">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="field-wrapper slide-element">
            <input
              type="text"
              required
              value={loginData.username}
              onChange={(e) => setLoginData({ ...loginData, username: e.target.value })}
            />
            <label>Username</label>
            <i className="fa-solid fa-user"></i>
          </div>

          <div className="field-wrapper slide-element">
            <input
              type="password"
              required
              value={loginData.password}
              onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
            />
            <label>Password</label>
            <i className="fa-solid fa-lock"></i>
          </div>

          <div className="field-wrapper slide-element">
            <button className="submit-button" type="submit">Login</button>
          </div>

          <div className="switch-link slide-element">
            <p>
              Don&apos;t have an account? <br />
              <span onClick={() => setIsRegister(true)}>Sign Up</span>
            </p>
          </div>
        </form>
      </div>

      <div className="welcome-section signin">
        <h2 className="slide-element">WELCOME BACK!</h2>
      </div>

      {/* REGISTER */}
      <div className="credentials-panel signup">
        <h2 className="slide-element">Register</h2>
        <form onSubmit={handleRegister}>
          <div className="field-wrapper slide-element">
            <input
              type="text"
              required
              value={registerData.username}
              onChange={(e) => setRegisterData({ ...registerData, username: e.target.value })}
            />
            <label>Username</label>
            <i className="fa-solid fa-user"></i>
          </div>

          <div className="field-wrapper slide-element">
            <input
              type="email"
              required
              value={registerData.email}
              onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
            />
            <label>Email</label>
            <i className="fa-solid fa-envelope"></i>
          </div>

          <div className="field-wrapper slide-element">
            <input
              type="password"
              required
              value={registerData.password}
              onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
            />
            <label>Password</label>
            <i className="fa-solid fa-lock"></i>
          </div>

          <div className="field-wrapper slide-element">
            <button className="submit-button" type="submit">Register</button>
          </div>

          <div className="switch-link slide-element">
            <p>
              Already have an account? <br />
              <span onClick={() => setIsRegister(false)}>Sign In</span>
            </p>
          </div>
        </form>
      </div>

      <div className="welcome-section signup">
        <h2 className="slide-element">WELCOME! To MoneyFlow</h2>
      </div>
    </div>
  );
};

export default Auth;
