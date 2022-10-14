import { app } from "./app";

//CHAMADA DOS ENDPOINTS
import { ping } from "./endpoints/ping";
import { getProduts } from "./endpoints/getProducts";
import { createOrderClient } from "./endpoints/createOrderClient";
import { createOrderProduct } from "./endpoints/createOrderProduct";
import { updateStockProduct } from "./endpoints/updateStockProduct";
import { getOrderClient } from "./endpoints/getOrderClient";

//GET
app.get("/ping", ping);
app.get("/product", getProduts);
app.get("/orderClient", getOrderClient);

//POST
app.post("/orderClient", createOrderClient);
app.post("/orderProduct", createOrderProduct);

//PUT
app.put("/product", updateStockProduct);

