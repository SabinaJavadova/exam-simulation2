const modelProduct = require("../model/index");

const getAllProduct = async (req, res) => {
  try {
    const getProduct = await modelProduct.find();
    if (!getProduct) {
      res.status(404).json({ message: "product not found!" });
    }
    res.status(200).json(getProduct);
  } catch (error) {
    res.status(500).error({ message: error.message });
  }
};
const getAllProductByID = async (req, res) => {
    const id = req.params.id;
  try {
    const getProductId = await modelProduct.findById(id);
    if (!getProductId) {
      res.status(404).json({ message: "product not found!" });
    }
    res.status(200).json(getProductId);
  } catch (error) {
    res.status(500).error({ message: error.message });
  }
};
const deleteProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const deleted = await modelProduct.findByIdAndDelete(id);
    if (!deleted) {
      res.status(404).json({ message: "not found" });
    }
    res.status(200).json({message:"deleted!",deleted:deleted});
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const postProduct = async (req, res) => {
  try {
    const createProduct =  modelProduct({ ...req.body });
    await createProduct.save()
    if (!createProduct) {
        res.status(404).json({message:"not found"})
    }
    res.status(200).json({message:"created!",createProduct:createProduct})
  } catch (error) {
    res.status(500).send({message:error.message})
  }
};
const putProduct = async (req, res) => {
    const id = req.params.id;
  try {
    const createProduct =  modelProduct.findByIdAndUpdate(id,{ ...req.body },{new:true});
    if (!createProduct) {
        res.status(404).json({ message: "not found" });
      }
      res.status(200).json({message:"updated!",createProduct:createProduct});
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
};

module.exports = {
  getAllProduct,
  getAllProductByID,
  deleteProduct,
  postProduct,
  putProduct
};
