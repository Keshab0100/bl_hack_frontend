import "./TimelineUI.css";
import { ReactComponent as TrustIcon } from "./trust.svg";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import axios from "axios";
import "react-vertical-timeline-component/style.min.css";
import { useEffect, useState } from "react";

function TimelineUI() {
  let workIconStyles = { background: "#06D6A0" };
  let schoolIconStyles = { background: "#f9c74f" };
  const [timedata, settimedata] = useState([]);
  


  useEffect(() => {
    axios.get("http://localhost:8080/getAll").then((data) => {
      console.log(data.data);
      settimedata(data.data);
    });

    // timedata?console.log("wait"):data()
  }, []);
    

  return (
    <div>
      <h1 className="title">Timeline</h1>
      <VerticalTimeline>
        {timedata.map((element) => {
          let isWorkIcon = element.icon === "work";
          let showButton =
            element.buttonText !== undefined &&
            element.buttonText !== null &&
            element.buttonText !== "";

          return (
            <VerticalTimelineElement
              key={element.key}
              date={element.date}
              dateClassName="date"
              iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
              icon={isWorkIcon ? <TrustIcon /> : <TrustIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                {element.diseaseName}
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                <a href={element.file} target="_blank">
                Prescription
                </a>
              </h5>
              <p id="description">{element.description}</p>
              {showButton && (
                <a
                  className={`button ${
                    isWorkIcon ? "workButton" : "schoolButton"
                  }`}
                  href="/"
                >
                  {element.buttonText}
                </a>
              )}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
}

export default TimelineUI;