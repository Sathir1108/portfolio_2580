import "../CSS/Contact.css";
import profile_1 from "../assets/profile_1.png";
import icon_1 from "../assets/envelope.svg";
import icon_2 from "../assets/telephone.svg";
import icon_3 from "../assets/geo.svg";

function Contact() {
  return (
    <div className="grid-container-3 justify-content-center">
      <div className="grid-item-3">
        <div className="row g-3">
          <div className="col">
            <label htmlFor="inputUserName" className="form-label">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Name."
              aria-label="First name"
            />
          </div>
          <div className="col">
            <label htmlFor="inputEmail4" className="form-label">
              Your Email
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Email."
              aria-label="Last name"
            />
          </div>
        </div>

        <div className="row g-3">
          <div className="col">
            <label htmlFor="subjectFormControlTextarea1" className="form-label">
              Subject
            </label>
            <textarea
              className="form-control"
              id="subjectFormControlTextarea1"
              rows={1}
            />
          </div>
        </div>

        <div className="row g-3">
          <div className="col">
            <label htmlFor="messageFormControlTextarea1" className="form-label">
              Your Message
            </label>
            <textarea
              className="form-control"
              id="messageFormControlTextarea1"
              rows={4}
              placeholder="Your Message*"
            />
          </div>
        </div>

        <div className="row g-3">
          <div className="col-25">
            <button type="submit" className="btn btn-primary">
              SEND MESSAGE
            </button>
          </div>
        </div>
      </div>

      <div className="grid-item-3">
        <img className="grid-item-image" src={profile_1} alt="profile" />

        <div className="row g-3 ">
          <div className="col-sm-4">
            <img src={icon_2} alt="bootstrapicon" />
          </div>
          <div className="col-sm-8">
            <p className="fs-5">PHONE</p>
            <p className="fs-5">+94 763 130 485</p>
          </div>
        </div>

        <div className="row g-3">
          <div className="col-sm-4">
            <img src={icon_1} alt="bootstrapicon" />
          </div>
          <div className="col-sm-8">
            <p className="fs-5">MAIL</p>
            <p className="fs-5">sathirahamed1108@gmail.com</p>
          </div>
        </div>

        <div className="row g-3">
          <div className="col-sm-4">
            <img src={icon_3} alt="bootstrapicon" />
          </div>
          <div className="col-sm-8">
            <p className="fs-5">59,Hathbothiya Road,Dehiwela,</p>
            <p className="fs-5">Colombo.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
