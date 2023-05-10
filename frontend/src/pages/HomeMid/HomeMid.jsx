import "./HomeMid.css";
import img1 from "../../../assets/imgs/img1.png";
import img2 from "../../../assets/imgs/img2.png";
import img3 from "../../../assets/imgs/img3.png";

const HomeMid = () => {
  return (
    <div className="HomeMid">
      <div className="HomeMid_first">

        <div className="HomeMid_first_tag">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus natus quasi facilis recusandae. Esse minus illum magnam ea, aspernatur id recusandae earum. Est eveniet, nihil sit tenetur reprehenderit architecto reiciendis.
        </div>
        <div className="HomeMid_first_img">
          <img src={img1} />
        </div>
      </div>
      <div className="HomeMid_second">
        <div className="HomeMid_second_img">
          <img src={img2} />
        </div>
        <div className="HomeMid_second_tag">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime dicta omnis iure voluptate dolorum reprehenderit minus exercitationem, vel, illum excepturi laudantium perspiciatis, temporibus voluptatem tempora saepe dignissimos ea illo ratione.
        </div>
      </div>
      <div className="HomeMid_third">
      <div className="HomeMid_third_tag">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi nostrum natus rerum iste! Repellat optio repudiandae, consectetur mollitia, doloribus saepe nemo molestiae, illo qui deserunt vero nulla quo officia ducimus.
        </div>
        <div className="HomeMid_third_img">
          <img src={img3} />
        </div>
        
      </div>
    </div>
  );
};

export default HomeMid;
