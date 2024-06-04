import React from "react";
import CustomInput from "../components/CustomInput";

const AddBrand = () => {
  return (
    <>
      <h1 className="mb-4">Add Brand</h1>
      <div className="">
        <form action="">
          <CustomInput type="text" label="Enter Brand" />
          <button type="submit" className="btn btn-success border-0 rounded-3 my-4">
            Add Brand
          </button>
        </form>
      </div>
    </>
  );
};

export default AddBrand;
