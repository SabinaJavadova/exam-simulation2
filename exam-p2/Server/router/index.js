const express = require('express')

const { getAllProductByID, getAllProduct, deleteProduct, postProduct, putProduct} = require("../controller/index")

router = express.Router()

router.get("/",getAllProduct);
router.get("/:id",getAllProductByID);
router.delete("/:id",deleteProduct);
router.post("/",postProduct);
router.put("/:id",putProduct)

module.exports=router;