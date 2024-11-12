import express from "express";
import { router as ClientRouter } from './routes/client.routes.js';
import { router as HotelRouter } from './routes/hotel.routes.js';
import { checkApiKey } from "./middlewares/apikey.middleware.js";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(checkApiKey, ClientRouter, HotelRouter);

app.listen(port, () => {
    console.log("Server is running on port " + port);
});