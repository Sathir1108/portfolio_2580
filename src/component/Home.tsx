import profile_1 from "../assets/profile_1.png";
import "../CSS/Home.css";

function Home() {
  return (
    <>
      <div className="container ">
        <div className="row align-items-end justify-content-evenly">
          <div className="col">
            <p className="fs-3"> My Name is Sathir Ahamed</p>
            <p className="fs-1">I am a Fullstack Developer </p>
            <p className="fs-3"> Based in Colombo,Sri Lanka </p>
          </div>

          <div className="col">
            <img className="grid-item-image" src={profile_1} alt="profile" />
          </div>
        </div>
      </div>

      <div className="grid-container-1 justify-content-center ">
        <div className="grid-item">
          <img className="grid-item-image-1" src={profile_1} alt="profile" />
        </div>

        <div className="grid-item">
          <p className="fs-1" id="p-item-1">
            I am an Undergraduate student at University of Colombo.{" "}
          </p>
          <p className="fs-3" id="p-item-1">
            Enthusiastic and motivated final-year undergraduate at the
            University of Colombo, pursuing a BSc (Hons) in Information
            Technology and Management.
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
