import { Routes, Route, Navigate } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/*" element={<Navigate to="/signup" />} />
            </Routes>
        </div>
    );
}

export default App;
