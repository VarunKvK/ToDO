import React from 'react';
import './App.css';
import Form from "./components/form";
import Header from "./components/Header";
function App() {
  return (
    <div className="App  bg-[url('images/minimalimg.png')] bg-no-repeat bg-cover">
      <Header/>
      <Form/>
    </div>
  );
}

export default App;
