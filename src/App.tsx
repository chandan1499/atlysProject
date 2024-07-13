import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LoginPage } from "./components/screen/login/Login";
import { RegisterPage } from "./components/screen/register/Register";
import { HomePage } from "./components/screen/home/Home";
import { MyContextProvider } from "./ContextProvider";

function App() {
  return (
    <MyContextProvider>
      <div className="bg-[#14161f] min-h-screen flex justify-center items-center text-white">
        <Router>
          <Routes>
            <Route path="/HomePage" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </Router>
      </div>
    </MyContextProvider>
  );
}

export default App;
