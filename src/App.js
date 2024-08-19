import "./App.css";
import Login from "./Components/Login/Login";
import CriarLogin from "./Components/CriarLogin";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { StorageLogin } from "./Hooks/UseContextLogin";
import Home from "./Components/Home";
import PrivateRoute from "./Components/PrivateRouter/PrivateRouter";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <StorageLogin>
          <Routes>
            <Route path="/" element={<PrivateRoute element={Home} />} />
            <Route path="login" element={<Login />} />
            <Route path="criar" element={<CriarLogin />} />
          </Routes>
        </StorageLogin>
      </BrowserRouter>
    </div>
  );
}

export default App;
