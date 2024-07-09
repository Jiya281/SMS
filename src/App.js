// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "./Pages/dashboard/Login";
import SignUp from "./Pages/dashboard/SignUp";
import Admin from "./Pages/Admin";

function App() {
  // return <div>{/* <header>HELLO</header> */}</div>;
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
