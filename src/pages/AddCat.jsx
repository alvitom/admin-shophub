import React from "react";
import CustomInput from "../components/CustomInput";

const AddCat = () => {
  return (
    <>
      <h1 className="mb-4">Add Category</h1>
      <div className="">
        <form action="">
          <CustomInput type="text" label="Enter Category" />
          <button type="submit" className="btn btn-success border-0 rounded-3 my-4">
            Add Category
          </button>
        </form>
      </div>
    </>
  );
};

export default AddCat;
