import React from "react";
import UploadForm from "../components/UploadForm";
import ImageGrid from "../components/ImageGrid";

const Home = () => {
  return (
    <div className="p-4">
      <UploadForm />
      <ImageGrid />
    </div>
  );
};

export default Home;
