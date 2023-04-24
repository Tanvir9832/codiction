import Footer from "../../pages/Footer/Footer";
import Slider from "../../pages/Slider/Slider";
import Navbar from "../../pages/navbar/Navbar";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">

        <Navbar />
        <Slider />
        <Footer />
    </div>
  );
};

export default Home;
