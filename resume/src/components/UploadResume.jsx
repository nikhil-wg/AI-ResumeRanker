import { useState } from "react";
import {
  uploadFiles,
  triggerPythonScript,
} from "../controllers/fileUploadService";
import Upload from "./Upload";


export default function UploadResume() {
  const [files, setFiles] = useState(null);
  const [jobDescription, setJobDescription] = useState("");
  const [filePaths, setFilePaths] = useState([]);
  const [message, setMessage] = useState("");
  const [scriptOutput, setScriptOutput] = useState("");
  const [selectedFileName, setSelectedFileName] = useState("Not selected file");

  const handleFileChange = (event) => {
    const files = event.target.files;
    setFiles(files);
    setSelectedFileName(files.length > 0 ? files[0].name : "Not selected file");
  };

  const handleJobDescriptionChange = (event) => {
    setJobDescription(event.target.value);
  };

  const handleUpload = async () => {
    if (!files || files.length === 0) {
      alert("Please select files.");
      return;
    }

    try {
      const response = await uploadFiles(files, jobDescription);
      setMessage(response.message);
      setFilePaths(response.filePaths);
    } catch (error) {
      alert("Failed to upload files: " + error.message);
    }
  };

  const handleRunScript = async () => {
    if (filePaths.length === 0) {
      alert("Please upload files first.");
      return;
    }

    try {
      const response = await triggerPythonScript(filePaths);
      setMessage(response.message);
      setScriptOutput(response.output);
    } catch (error) {
      alert("Failed to run Python script: " + error.message);
    }
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className=" text-center">
        <h1 className="text-5xl font-bold p-6">Upload Resume</h1>

        <textarea
          className="w-full max-w-lg p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
          placeholder="Enter Job Description"
          value={jobDescription}
          onChange={handleJobDescriptionChange}
          rows="4"
        />

        <div className="flex flex-col items-center">
          <Upload handleFileChange={handleFileChange} fileName={selectedFileName}/>
          <input
            type="file"
            multiple
            onChange={handleFileChange}
            accept=".pdf"
            className="mb-4 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:bg-blue-500 file:text-white hover:file:bg-blue-600"
          />
          <button
            onClick={handleUpload}
            className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition mb-4"
          >
            Upload
          </button>
        </div>

        {filePaths.length > 0 && (
          <button
            onClick={handleRunScript}
            className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600 transition mb-6"
          >
            Run Python Script
          </button>
        )}

        <div className="text-sm mb-6">{message}</div>

        {/* Display script output here */}
        {scriptOutput && (
          <div className="w-full max-w-lg bg-white shadow-md rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-2">Python Script Output:</h3>
            <pre className="bg-gray-50 text-gray-800 p-4 rounded-lg whitespace-pre-wrap">
              {scriptOutput}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}
