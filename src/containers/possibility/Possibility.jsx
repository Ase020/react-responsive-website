import React from "react";
import "./possibility.css";
import possibility from "../../assets/possibility.png";

function Possibility() {
  return (
    <div className="possibility section-padding" id="possibility">
      <div className="possibility-image">
        <img src={possibility} alt="possibility" />
      </div>

      <div className="possibility-content">
        <h4>Get Early Access to Get Started</h4>
        <h1 className="gradient-text">
          The possibilities are <br /> beyond your imagination.
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  );
}

export default Possibility;
