import "./App.css";
import React, { useState } from "react";
import Title from "./component/Title";
import Upload from "./component/Upload";
import ImageGrid from "./component/ImageGrid";
import Modal from "./component/Modal";

function App() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="App">
      <Title />
      <Upload />
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
}

export default App;
