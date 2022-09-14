import React from "react";
import "./App.css";
import Login from "./components/auth/Login";
// import Signup from "./components/auth/Signup";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <div>
      <Layout>
        {/* <Signup /> */}
        <Login />
      </Layout>
    </div>
  );
}

export default App;
