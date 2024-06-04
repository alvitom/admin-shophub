import React from "react";
import CustomInput from "../components/CustomInput";

const AddColor = () => {
  return (
    <>
      <h1 className="mb-4">Add Color</h1>
      <div className="">
        <form action="">
          <CustomInput type="color" label="Enter Color" />
          <button type="submit" className="btn btn-success border-0 rounded-3 my-4">
            Add Color
          </button>
        </form>
      </div>
    </>
  );
};

export default AddColor;
