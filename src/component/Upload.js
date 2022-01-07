import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
const Upload = () => {
  const [file, setFile] = useState(null);
  const types = ["image/png", "image/jpeg", "image/jfif", "image/webp"];
  const [error, setError] = useState(null);
  const changeHandler = (e) => {
    let selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError(null);
    } else {
      setFile(null);
      setError("Please select an image file(jpeg or png or jfif or webp)");
    }
  };
  return (
    <form>
      <label>
        <input type="file" accept="image/*" onChange={changeHandler} hidden />
        <span>+</span>
      </label>

      <div className="image">
        {error && <div className="error">{error}</div>}
        {file && (
          <div className="image_file">
            {file.name}
            <div>
              <ProgressBar file={file} setFile={setFile} />
            </div>
          </div>
        )}
      </div>
    </form>
  );
};
export default Upload;
