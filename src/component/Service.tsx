import "../CSS/Sevice.css";
import ComputerIcon from "@mui/icons-material/Computer";
import LayersIcon from "@mui/icons-material/Layers";
import SecurityIcon from "@mui/icons-material/Security";
import PsychologyIcon from "@mui/icons-material/Psychology";
import TabletMacIcon from "@mui/icons-material/TabletMac";
import StorageIcon from "@mui/icons-material/Storage";

function Service() {
  return (
    <>
      <div className="service">
        <div>
          <p className="fs-1" id="sc-1">
            MY SERVICES
          </p>
        </div>

        <div className="grid-container-service justify-content-center ">
          <div className="grid-item-service" id="gtse-1">
            <div className="content">
              <div className="icon">
                <ComputerIcon id="sci_1" />
              </div>

              <div className="service-content" id="gtse-1">
                <h5>Web Development</h5>
                <p>
                  {" "}
                  Custom website and web application development, focusing on
                  responsive design and user experience.
                </p>
              </div>
            </div>
          </div>

          <div className="grid-item-service" id="gtse-2">
            <div className="content">
              <div className="icon">
                <LayersIcon id="sci_1" />
              </div>

              <div className="service-content">
                <h5>Full-Stack Development</h5>
                <p>
                  {" "}
                  Comprehensive development from front-end to back-end, ensuring
                  seamless integration and performance.
                </p>
              </div>
            </div>
          </div>

          <div className="grid-item-service" id="gtse-3">
            <div className="content">
              <div className="icon">
                <PsychologyIcon id="sci_1" />
              </div>

              <div className="service-content">
                <h5>Artificial Intelligence Solutions</h5>
                <p>
                  {" "}
                  Implementation of AI-driven models for automation, predictive
                  analytics, and enhanced decision-making.
                </p>
              </div>
            </div>
          </div>

          <div className="grid-item-service" id="gtse-4">
            <div className="content">
              <div className="icon">
                <SecurityIcon id="sci_1" />
              </div>

              <div className="service-content">
                <h5>Blockchain Integration</h5>
                <p>
                  {" "}
                  Secure and transparent solutions using blockchain technology
                  for data integrity and traceability.
                </p>
              </div>
            </div>
          </div>

          <div className="grid-item-service" id="gtse-5">
            <div className="content">
              <div className="icon">
                <TabletMacIcon id="sci_1" />
              </div>

              <div className="service-content">
                <h5>Application Development</h5>
                <p>
                  {" "}
                  Custom software and mobile application development tailored to
                  specific business needs.
                </p>
              </div>
            </div>
          </div>

          <div className="grid-item-service" id="gtse-6">
            <div className="content">
              <div className="icon">
                <StorageIcon id="sci_1" />
              </div>

              <div className="service-content">
                <h5>Database Design and Management</h5>
                <p>
                  {" "}
                  Efficient database design, development, and management to
                  ensure data security and performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
