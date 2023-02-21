import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home/Index";
import Chat from "./components/Chat/Index";
import socketIO from "socket.io-client";
const socket = socketIO.connect("http://localhost:4000");
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={<Home socket={socket} />}></Route>
            <Route path="/chat" element={<Chat socket={socket} />}></Route>
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
