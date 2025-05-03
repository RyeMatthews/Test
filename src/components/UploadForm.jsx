// src/components/UploadForm.jsx
import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";

export default function UploadForm() {
  const [file, setFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("");

  const onDrop = useCallback(acceptedFiles => {
    setFile(acceptedFiles[0]);
    setUploadStatus(""); // Reset status when new file is selected
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'model/stl': ['.stl'],
      'model/obj': ['.obj'],
      'model/step': ['.step', '.stp'],
    },
    maxFiles: 1,
  });

  const handleUpload = async () => {
    if (!file) {
      setUploadStatus("Please select a file first.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    if (res.ok) {
      setUploadStatus("Upload successful!");
    } else {
      setUploadStatus("Upload failed. Please try again.");
    }
  };

  return (
    <div className="p-8 bg-white rounded-2xl shadow-lg max-w-xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center">Upload Your 3D Model</h2>

      <div 
        {...getRootProps()} 
        className="border-2 border-dashed border-gray-300 p-10 text-center cursor-pointer rounded-lg hover:bg-gray-50"
      >
        <input {...getInputProps()} />
        {
          isDragActive ? (
            <p className="text-blue-600">Drop the file here ...</p>
          ) : (
            <p>Drag 'n' drop a .stl, .obj, or .step file here, or click to select</p>
          )
        }
      </div>

      {file && (
        <div className="mt-4 text-center text-gray-700">
          Selected file: <span className="font-semibold">{file.name}</span>
        </div>
      )}

      <button 
        onClick={handleUpload}
        className="bg-blue-600 text-white px-6 py-3 mt-6 rounded-lg w-full hover:bg-blue-700"
      >
        Upload
      </button>

      {uploadStatus && (
        <div className="mt-4 text-center text-green-600 font-semibold">{uploadStatus}</div>
      )}
    </div>
  );
}