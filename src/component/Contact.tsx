import "../CSS/Contact.css";
import profile_1 from "../assets/profile_1.png";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

function Contact() {
  return (
    <>
      <div className="contact">
        {" "}
        <div className="contact-form">
          <div className="cfr-0">
            <p className="fs-3">Get in touch</p>
            <p className="fs-6">
              Our friendly team would love to hear from you.
            </p>
          </div>
          <div className="cfr-1">
            <div className="cf-name ">
              <label htmlFor="inputUserName" className="form-label">
                FirstName
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="First name"
                aria-label="First name"
                id="inputName"
              />
            </div>

            <div className="cf-email">
              <label htmlFor="inputEmail4" className="form-label">
                Email
              </label>
              <input type="email" className="form-control" id="inputEmail4" />
            </div>
          </div>

          <div className="cfr-2">
            <div className="cf-subject">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label"
              >
                Subject
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows={1}
                placeholder="Subject *"
              ></textarea>
            </div>
          </div>
          <div className="cfr-3">
            <label htmlFor="exampleFormControlTextarea2" className="form-label">
              Message
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea2"
              rows={3}
              placeholder="Message *"
            ></textarea>
          </div>

          <div className="cfr-4">
            <button className="btn btn-primary" id="cfr-4">
              {" "}
              SEND MESSAGE
            </button>
          </div>
        </div>
        <div className="contact-details">
          <div className="cdr-1">
            {" "}
            <img
              className="grid-item-image"
              src={profile_1}
              alt="profile"
              id="cdr_1"
            />
          </div>

          <div className="contact-details-2">
            {" "}
            <div className="cdr-2">
              <div className="cdr-2-1">
                <PhoneIcon id="cdr-3-1" />
              </div>
              <div className="cdr-2-2">
                <p className="cdr-content">PHONE</p>
                <h6>+94 763 130 485</h6>
              </div>
            </div>
            <div className="cdr-3">
              <div className="cdr-3-1">
                <EmailIcon id="cdr-2-1" />
              </div>
              <div className="cdr-3-2">
                <p className="cdr-content">MAIL</p>
                <h6>sathirahamed1108@gmail.com</h6>
              </div>
            </div>
            <div className="cdr-3">
              <div className="cdr-3-1">
                <LocationOnIcon id="cdr-4-1" />
              </div>
              <div className="cdr-3-2">
                <p className="cdr-content">LOCATION</p>
                <h6>
                  No.32, Kawdana residence CEEM,
                  <br />
                  Dehiwela-Mountlavania, Colombo-06{" "}
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
