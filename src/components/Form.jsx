import React, { useState } from "react";
import axios from "axios";
import "./Form.css";
import {
  TextField,
  Button,
  TextareaAutosize,
  Grid,
  Box,
} from "@material-ui/core";

const MyForm = () => {
  const [diseaseName, setDiseaseName] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);

  const handleDiseaseNameChange = (event) => {
    setDiseaseName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("diseaseName", diseaseName);
    formData.append("description", description);
    formData.append("file", file);

    try {
      const response = await axios.post(
        "http://localhost:8080/upload",
        formData
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
      className="form-container"
    >
      <h1>Enter your latest health problem</h1>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              id="diseaseName"
              label="Disease Name"
              variant="outlined"
              fullWidth
              value={diseaseName}
              onChange={handleDiseaseNameChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextareaAutosize
              id="description"
              rows={5}
              placeholder="Description"
              variant="outlined"
              fullWidth
              value={description}
              onChange={handleDescriptionChange}
            />
          </Grid>
          <Grid item xs={12}>
            <input
              accept="image/*"
              id="file"
              type="file"
              onChange={handleFileChange}
            />
            <label htmlFor="file" className="file-upload-label">
              Upload PDF
            </label>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              className="submit-button"
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default MyForm;
