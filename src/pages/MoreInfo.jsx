import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";

function MoreInfo() {
  return (
    <>
      <div className="container">
        <div className="header">
          <FontAwesomeIcon icon={faPaw} size="xs" style={{ color: "black" }} />
          <h1>Pet Fider</h1>
        </div>
        <div className="body">
          <div className="images">
            <div className="big image">
              <img src="image.jpg" />
            </div>
            <div className="small images">
              <img src="image.jpg" />
              <img src="image.jpg" />
              <img src="image.jpg" />
            </div>
          </div>
          <div className="list">
            <h2>About pet.name</h2>
            <li>Species:</li>
            <li>Sex:</li>
            <li>Breed:</li>
            <li>Size:</li>
            <li>Age:</li>
            <li>special needs:</li>
            <li>Color:</li>
          </div>
        </div>
        <div className="footer">
          <p>
            <FontAwesomeIcon
              icon={faPaw}
              size="xs"
              style={{ color: "black" }}
            />{" "}
            2024 Dogs 101. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
}

export default MoreInfo;
