import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Body from "./layout/Body";

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Body></Body>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
