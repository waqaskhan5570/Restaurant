import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Counter from "./components/Counter";
import About from "./components/About";
import StorySection from "./components/StorySection";
import ExploreFood from "./components/ExploreFood";
import TestimonialSlider from "./components/TestimonialSlider";

// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Counter />
      <About />
      <StorySection />
      <ExploreFood />
      <TestimonialSlider />
    </div>
  );
}

export default App;
