import { Router } from "express";
import { findProds, findProductById, createProduct, deleteOneProduct, updateProduct } from '../controllers/products.controller.js';
import { authorize } from "../middlewares/authMiddleware.js";
import { mockingProducts } from "../controllers/mockingsProduts.js";
import { authenticateUser } from "../middlewares/authenticate.middleware.js";

const router = Router();


/* GET PRODUCTS */
router.get("/", findProds);



/* GET PRODUCTS BY ID */
router.get('/:pid', findProductById)



/* ADD PRODUCT */
router.post("/",/* authenticateUser, */createProduct);//no anda ,no recibo la info del user para poner el email en el owner



/* DELETE PRODUCT */
router.delete("/:pid", authorize(["ADMIN",]), deleteOneProduct);




/* UPDATE PRODUCT */
router.put("/:pid", authorize(["ADMIN"]), updateProduct);

/*PRODUCTS FAKER JS MOCKING*/

router.get("/mockingproducts",mockingProducts)

export default router