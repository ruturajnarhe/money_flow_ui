
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Auth from './Auth';


// function App() {
  

//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/Login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App

import Auth from "./Auth";
import "./App.css";
function App() {
  return (
  <div className="app-container">
            <Auth />
  </div>
  );
}

export default App;
