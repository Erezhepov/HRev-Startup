import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Sfia from "./components/sfia/Sfia";
import AuthPage from "./pages/auth/AuthPage";

function App() {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Sidebar />
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path="/sfia" element={<Sfia />} />
                        <Route path="/auth" element={<AuthPage />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
