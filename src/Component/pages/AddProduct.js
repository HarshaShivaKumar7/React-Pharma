import React from "react";
// import { Link } from "react-router-dom";
import DataStatistics from "./Page/Data_statistics";

import { CollectionProvider } from "./ContextFile/useContext";

const AddProduct = () => {
  return (
    <CollectionProvider>
      <div className="container">
        <DataStatistics />
      </div>
    </CollectionProvider>
  );
};
export default AddProduct;
