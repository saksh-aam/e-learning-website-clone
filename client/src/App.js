import './App.css';
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './component/Navbar';
import Signup from './component/Signup';
import Login from "./component/Login";
import Dashboard from './component/Dashboard';
import Profile from './component/Profile';
import { BrowserRouter, Route, Routes } from "react-router-dom";function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <Signup/>
          }/>
          <Route path="/login" element={
            <Login/>
          }/>
          <Route path="/dashboard" element={
            <div>
              <Navbar />
              <Dashboard/>
            </div>
          }/>
          <Route path="/profile" element={
            <div>
              <Navbar />
              <Profile/>
            </div>
          }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
