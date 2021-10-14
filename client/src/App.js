import React from "react";
import AllComments from "./components/AllComments/AllComments.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import NewComment from "./components/NewComments/NewComments";



function App() {
  return (
    <div className="App">
      <NavBar />
      <NewComment />
      <AllComments />
    </div>
  );
}

export default App;
