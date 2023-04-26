import Footer from "../../pages/Footer/Footer";
import HomeMid from "../../pages/HomeMid/HomeMid";
import Slider from "../../pages/Slider/Slider";
import Navbar from "../../pages/navbar/Navbar";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">

        <Navbar />
        <Slider />
        <HomeMid/>
        <Footer />
    </div>
  );
};

export default Home;
