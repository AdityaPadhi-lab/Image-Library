import React, { useState } from "react";

const UploadForm = () => {
  const [images, setImages] = useState([]);

  const handleUpload = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map((file) => URL.createObjectURL(file));
    setImages((prev) => [...prev, ...newImages]);
  };

  return (
    <div className="mb-4">
      <label className="block mb-2 font-bold">Upload Images:</label>
      <input
        type="file"
        multiple
        accept="image/*"
        onChange={handleUpload}
        className="border p-2"
      />
    </div>
  );
};

export default UploadForm;
