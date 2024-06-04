import axios from "axios";
import { base_url } from "../../utils/base_url";

const getProductCategories = async () => {
  const response = await axios.get(`${base_url}/product-category`);
  return response.data;
};

const deleteProductCategories = async (id) => {
  const response = await axios.delete(`${base_url}/product-category/${id}`);
  return response.data;
};

const productCategoryService = {
  getProductCategories,
  deleteProductCategories,
};

export default productCategoryService;
