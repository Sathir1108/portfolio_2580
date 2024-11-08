import profile_1 from "../assets/profile_1.png";
import profile_2 from "../assets/profile_2.jpg";
import "../CSS/Home.css";
import WavingHandIcon from "@mui/icons-material/WavingHand";
import { useTypewriter, Cursor } from "react-simple-typewriter";

function Home() {
  const [text] = useTypewriter({
    words: [" a Fullstack Developer", " an AI Enthusiast"],
    loop: true,
  });

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="home">
        <div className="flex-container" id="fch-0">
          <div className="ch_1">
            <p className="fs-5" id="chi_1">
              {" "}
              <WavingHandIcon id="chic_1" />, My Name is Sathir Ahamed
            </p>
            <p className="fs-1" id="chi_2">
              I'm <span>{text}</span>
              <Cursor />
            </p>
            <p className="fs-5" id="chi_3">
              {" "}
              Based in Colombo,Sri Lanka{" "}
            </p>

            <button className="btn" id="chib-1" onClick={scrollToContact}>
              LET'S START
            </button>
          </div>

          <div className="ch_2">
            <img
              className="grid-item-image"
              src={profile_2}
              alt="profile"
              id="chi_7"
            />
          </div>
        </div>

        <div className="h-boarder"> </div>

        <div className="flex-container" id="fch-1">
          <div className="ch_3">
            {" "}
            <img
              className="grid-item-image"
              src={profile_1}
              alt="profile"
              id="chi_4"
            />
          </div>

          <div className="ch_4">
            <p className="fs-2" id="chi_5">
              About Me.
            </p>
            <p className="fs-4" id="chi_6">
              I am a Full Stack Developer specializing in Java, ReactJS, and
              AI-driven solutions. I’m passionate about creating innovative,
              secure applications and continuously advancing my skills in web
              development and data science. I thrive in dynamic environments and
              enjoy tackling complex challenges.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
