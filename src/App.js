import "./App.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/Home";
import Teams from "./pages/Teams";
import Players from "./pages/Players";
import Tournaments from "./pages/Tournaments";
import WorldsEvent from "./pages/WorldsEvent";
import MsiEvent from "./pages/MsiEvent";

import Navbar from "./components/Navbar/Navbar";

function App() {
  //   useEffect(() => {
  //     function handleHashChange() {
  //       // Do something when the hash changes
  //     }

  //     window.addEventListener("hashchange", handleHashChange);
  //     return () => {
  //       window.removeEventListener("hashchange", handleHashChange);
  //     };
  //   }, []);

  return (
    <Router>
      <div className="app">
        <Navbar
          title="LoL eStats"
          pages={["home", "players", "teams", "tournaments"]}
        />

        <main className="app-main">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/lolestats" element={<Home />}></Route>
            <Route path="/teams" element={<Teams />}></Route>
            <Route path="/players" element={<Players />}></Route>
            <Route path="/tournaments" element={<Tournaments />}></Route>
            <Route
              path="/tournaments/worlds/:eventName"
              element={<WorldsEvent />}
            ></Route>
            <Route
              path="/tournaments/msi/:eventName"
              element={<MsiEvent />}
            ></Route>
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
