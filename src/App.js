import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Teams from "./pages/Teams";
import Players from "./pages/Players";
import Tournaments from "./pages/Tournaments";
import WorldsEvent from "./pages/WorldsEvent";
import MsiEvent from "./pages/MsiEvent";

import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar
          title="LoL EStats"
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
