import express from 'express';
import religiousRequest from "./routes/religiousRequest";

const app = express();

app.use(express.json());

app.use("/api/religReq", religiousRequest);

app.listen(3001, () => {
    console.log("started");
});