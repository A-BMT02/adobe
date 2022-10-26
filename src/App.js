import "./App.css";
import { Navbar } from "./components/Navbar";
import { IconRow } from "./components/IconRow";
import { Sidebar } from "./components/sidebar";
import { Carousel } from "./components/Carousel";
import { Why } from "./components/Why";
import { Benefits } from "./components/Benefits";
import { Latest } from "./components/Latest";
import { Category } from "./components/Category";
import { Testimonial } from "./components/testimonial";
import { Banner } from "./components/Banner";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col font-poppins ">
      <div className="">
        <Navbar />
        <IconRow />
        <Sidebar />
        <Carousel />
        <Why />
        <Benefits />
        <Latest />
        <Category />
        <Testimonial />
        <Banner />
        <Footer />
      </div>
    </div>
  );
}

export default App;
