import "../CSS/Skills.css";
import profile_2 from "../assets/profile_2.jpg";
import { SiHtml5 } from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io5";
import { RiReactjsLine } from "react-icons/ri";
import { FaJava } from "react-icons/fa6";
import { SiSpringboot } from "react-icons/si";
import { FaDocker } from "react-icons/fa";

function Skills() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <div className="skills">
        <div className="skc-1">
          <div>
            <p className="fs-1" id="skc-1">
              {" "}
              MY SKILLS{" "}
            </p>
          </div>

          <div className="grid-container-skills justify-content-center">
            <div className="grid-item-skills" id="gts-1">
              <div className="ski-1">
                <SiHtml5 id="ski-1" />
              </div>
              <div className="sk-content">
                <h6>HTML</h6>
              </div>
            </div>

            <div className="grid-item-skills" id="gts-2">
              <div className="ski-1">
                <IoLogoCss3 id="ski-1" />
              </div>
              <div className="sk-content">
                <h6>CSS</h6>
              </div>
            </div>

            <div className="grid-item-skills" id="gts-3">
              <div className="ski-1">
                <RiReactjsLine id="ski-1" />
              </div>
              <div className="sk-content">
                <h6>React Js</h6>
              </div>
            </div>

            <div className="grid-item-skills" id="gts-4">
              <div className="ski-1">
                <FaJava id="ski-1" />
              </div>
              <div className="sk-content">
                <h6>Java</h6>
              </div>
            </div>

            <div className="grid-item-skills" id="gts-5">
              <div className="ski-1">
                <SiSpringboot id="ski-1" />
              </div>
              <div className="sk-content">
                <h6>Spring Boot</h6>
              </div>
            </div>

            <div className="grid-item-skills" id="gts-6">
              <div className="ski-1">
                <FaDocker id="ski-1" />
              </div>
              <div className="sk-content">
                <h6>Docker</h6>
              </div>
            </div>
          </div>
        </div>

        <div className="skc-2">
          <img
            className="grid-item-image"
            src={profile_2}
            alt="profile"
            id="skci-1"
          />
        </div>
      </div>

      <div className="skc-3">
        <div className="banner-text">Interested in working with me?</div>
        <button className="contact-button" onClick={scrollToContact}>
          CONTACT NOW
        </button>
      </div>
    </>
  );
}

export default Skills;
