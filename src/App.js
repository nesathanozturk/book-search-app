import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import "./App.css";
import "animate.css";

function App() {
  return (
    <div className="App animate__animated animate__fadeIn">
      <Header />
      <Main />
    </div>
  );
}

export default App;
