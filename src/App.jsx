import Header from "./components/Header";
import Demo from "./components/Demo";
import "./App.css";

const App = () => {
  return (
    <main>
      <div className="main">
        <div className="gradient" />
      </div>

      <div className="app">
        <Header />
        <Demo />
      </div>
    </main>
  );
};

export default App;
