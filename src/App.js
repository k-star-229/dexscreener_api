import React, { useState, useEffect } from "react";
import { cloud, uploadPreset } from "./info";
import "./App.css";

import Uploady, {
  useItemStartListener,
  useItemFinishListener
} from "@rpldy/uploady";
import UploadButton from "@rpldy/upload-button";
import { getData } from "./api";
const MyUploadButton = () => {
  const [uploadUrl, setUploadUrl] = useState(null);

  useItemStartListener(item => {
    console.log(
      `item ${item.id} started uploading. file name = ${item.file.name}`
    );
  });

  useItemFinishListener(item => {
    console.log(
      `item ${item.id} finished uploading. response = `,
      item.uploadResponse
    );

    setUploadUrl(item.uploadResponse.data.secure_url);
  });

  return (
    <>
      <UploadButton>Upload Files</UploadButton>
      <br />
      {uploadUrl && <img src={uploadUrl} alt="upload" />}
    </>
  );
};

export default function App() {

  useEffect(() => {
    getData()
  })
  return (
    <Uploady
      destination={{
        url: `http://localhost:5000/api/upload`
      }}
    >
      <div className="App">
        <h1>Hello React Uploady</h1>
        <MyUploadButton />
      </div>
    </Uploady>
  );
}
