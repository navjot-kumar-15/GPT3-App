import "./App.css";
import { Article, Brand, Cta, Cfeatures, Navbar } from "./Components";
import {
  Blog,
  Features,
  Footer,
  Header,
  Possibility,
  WhatGPT,
} from "./Containers";
function App() {
  return (
    <>
      <div className="App">
        <div className="gradient__bg">
          <Navbar />
          <Header />
        </div>
        <Brand />
        <WhatGPT />
        <Features />
        <Possibility />
        <Cta />
        <Blog />
        <Footer />
      </div>
    </>
  );
}

export default App;
