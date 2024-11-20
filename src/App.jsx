import "./App.css";
import Header from "./Components/Header/Header.jsx";
import Main from "./Components/Main/Main.jsx";
import Footer from "./Components/Footer/Footer.jsx";

function App() {
  return (
    <div className="container">
      <div className="container_apl">
        <Header />
        <Main />
        {/*<Footer />*/}
      </div>
    </div>
  );
}

export default App;
