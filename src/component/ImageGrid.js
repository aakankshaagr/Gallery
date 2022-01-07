import React from "react";
import "./../hooks/useFirestore";
import useFirestore from "./../hooks/useFirestore";

//instead of cycling through urls, creating hook is better so that we can reuse it anywhere we want to fetch urls.
const ImageGrid = () => {
  const { docs } = useFirestore("images");
  //const [select, setSelect] = useState(null);
  console.log(docs);
  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => (
          <div className="img-wrap" key={doc.id}>
            <img src={doc.url} alt="uploaded pic" />
          </div>
        ))}
    </div>
  );
};

export default ImageGrid;
