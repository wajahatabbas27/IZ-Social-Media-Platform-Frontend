import React from "react";
import "./App.css";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Layout from "./components/layout/Layout";
import MenuTab from "./components/layout/MenuTab";
import Home from "./components/layout/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Routes>
            <Route path='/signup' element={<Signup />} />
            <Route path='/login' element={<Login />} />
            <Route
              path='/'
              element={
                <>
                  <MenuTab />
                  <Home />
                </>
              }
            />
          </Routes>
        </Layout>
      </Router>
    </Provider>
  );
}

export default App;
