import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import GlobalStyle from "./styles";
import Logo from "./components/Logo";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Logo />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
