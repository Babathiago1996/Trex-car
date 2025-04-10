import "./App.css"
import Nav from "./components/Nav"
import Hero from "./components/Hero"
import Experience from "./components/Experience"
import Featured from "./components/Featured"
import HowitWork from "./components/HowitWork"
import Review from "./components/Review"
import Rent from "./components/Rent"
import Footer from "./components/Footer"
function App() {
  

  return (
    <>
      <div className="hero h-screen max-h-[689px] bg-no-repeat bg-cover ">
        <Nav  />
        <Hero />
      </div>
      <Experience />
      <Featured />
      <HowitWork />
      <Review />
      <Rent />
      <Footer />
    </>
  );
}

export default App
