import React, { useState } from "react";

const ImageGrid = () => {
  const [images, setImages] = useState([]);

  const handleDelete = (index) => {
    const updatedImages = images.filter((_, i) => i !== index);
    setImages(updatedImages);
  };

  return (
    <div className="grid grid-cols-4 gap-4">
      {images.map((src, index) => (
        <div key={index} className="relative">
          <img
            src={src}
            alt={`Uploaded ${index}`}
            className="w-full h-32 object-cover rounded"
          />
          <button
            onClick={() => handleDelete(index)}
            className="absolute top-1 right-1 bg-red-500 text-white px-2 py-1 rounded"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
