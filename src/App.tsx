import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Body } from "./components/Body";
import { Posts } from "./components/Posts/Posts";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/" element={<Posts />} />
            <Route path="/:id" element={<Posts />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
