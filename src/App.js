import "./App.css";
import React from "react";
import Title from "./component/Title";
import Upload from "./component/Upload";
import ImageGrid from "./component/ImageGrid";
//import Modal from "./component/Modal";

function App() {
  // const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="App">
      <Title />
      <Upload />
      <ImageGrid />
    </div>
  );
}

export default App;
