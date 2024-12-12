import express from "express";
import { router as ClientRouter } from './routes/client.routes.js';
import { router as HotelRouter } from './routes/hotel.routes.js';
import { router as AuthRouter } from './routes/auth.routes.js';
import { checkApiKey } from "./middlewares/apikey.middleware.js";
import bodyParser from "body-parser";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(checkApiKey);

app.use(AuthRouter);
app.use('/clients', ClientRouter);
app.use('/hotel', HotelRouter);

app.listen(port, () => {
    console.log("Server is running on port " + port);
});