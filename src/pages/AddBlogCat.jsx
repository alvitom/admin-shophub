import React from "react";
import CustomInput from "../components/CustomInput";

const AddBlogCat = () => {
  return (
    <>
      <h1 className="mb-4">Add Blog Category</h1>
      <div className="">
        <form action="">
            <CustomInput type="text" label="Enter Blog Category" />
            <button type="submit" className="btn btn-success border-0 rounded-3 my-4">Add Blog Category</button>
        </form>
      </div>
    </>
  );
};

export default AddBlogCat;
