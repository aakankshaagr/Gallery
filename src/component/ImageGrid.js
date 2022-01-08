import React from "react";
import "./../hooks/useFirestore";
import useFirestore from "./../hooks/useFirestore";
import { motion } from "framer-motion";
//instead of cycling through urls, creating hook is better so that we can reuse it anywhere we want to fetch urls.
const ImageGrid = ({ setSelectedImg }) => {
  const { docs } = useFirestore("images");
  //const [select, setSelect] = useState(null);
  console.log(docs);
  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => (
          <motion.div
            className="img-wrap"
            key={doc.id}
            layout
            whileHover={{ opacity: 1 }}
            s
            onClick={() => setSelectedImg(doc.url)}
          >
            <img
              src={doc.url}
              alt="uploaded pic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            />
          </motion.div>
        ))}
    </div>
  );
};

export default ImageGrid;
