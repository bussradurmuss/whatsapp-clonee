import "./App.css";
import Chat from "./Chat";
import Sidebar from "./Sidebar";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <BrowserRouter>
            <Sidebar />
            <Routes>
              <Route path="/rooms/:roomId" element={<Chat />} />

              <Route Route path="/" element={<Chat />}></Route>
            </Routes>
          </BrowserRouter>
        </div>
      )}{" "}
    </div>
  );
}

export default App;
