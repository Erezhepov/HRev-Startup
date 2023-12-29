import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Sfia from "./components/Sfia/Sfia";

function App() {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Sidebar />
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path="/sfia" element={<Sfia />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
