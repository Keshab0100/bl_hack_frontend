import React, { useState } from "react";
import axios from "axios";
import { PDFDownloadLink } from "@react-pdf/renderer";
import MyDocument from "./MyDocument";
import "./SelectDate.css";

const SelectDate = () => {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [timelineData, setTimelineData] = useState([]);

  const handleGeneratePDF = async () => {
    console.log("hellooo");
    const response = await axios.get(
      `http://localhost:8080/timeline?startDate=${startDate}&endDate=${endDate}`
    );
    setTimelineData(response.data);
    console.log(response.data);

    // Generate PDF
    const pdfBlob = await MyDocument(timelineData);
    const pdfUrl = URL.createObjectURL(pdfBlob);
    window.open(pdfUrl);
  };
  return (
    <div className="container">
      <h1>Select dates to get history pdf</h1>
      <input
        onChange={(e) => {
          setStartDate(e.target.value);
        }}
        placeholder="Enter start date in YYYY-MM-DD"
      />
      <input
        onChange={(e) => {
          console.log(e.target.value);
          setEndDate(e.target.value);
        }}
        placeholder="Enter end date in YYYY-MM-DD"
      />
      <button onClick={handleGeneratePDF}>Generate PDF</button>
      {timelineData.length > 0 && (
        <PDFDownloadLink
          document={<MyDocument data={timelineData} />}
          fileName="timeline.pdf"
        >
          {({ blob, url, loading, error }) =>
            loading ? "Generating PDF..." : "Download PDF"
          }
        </PDFDownloadLink>
      )}
    </div>
  );
};

export default SelectDate;
