import "./slider.css";
import Carousel from "react-multi-carousel";
import {responsiveSlide} from "../../style"

const Slider = () => {
  
return (
<Carousel responsive={responsiveSlide} showDots={true} infinite={true} autoPlay={true} autoPlaySpeed={3000} >
    <div>
    <img
      src="https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg?w=1060&t=st=1682275485~exp=1682276085~hmac=4124c1dbbe6dc2186ec451f792fab986b2a63ead4a491523a1184ce6a74086fc"
      alt="loading"
    />
  </div>
  <div>
    <img
      src="https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg?w=1380&t=st=1682275487~exp=1682276087~hmac=71f24b9ac7fcea80625f45b7aa623ee6874b729831dcf1ccac1346d305193fab"
      alt="loading"
    />
  </div>
  <div>
    <img
      src="https://img.freepik.com/free-photo/programming-background-collage_23-2149901789.jpg?w=1380&t=st=1682275586~exp=1682276186~hmac=829f86f4ccc1cd245b3c1f92a8a63cdc40d3383b4997bfdf1a704b109093ae3a"
      alt=""
    />
  </div>
</Carousel>
)
};

export default Slider;

{
  /* <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1504399447888-111111111111?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item> */
}
