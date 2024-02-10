import express, { Router, Request, Response } from "express";
import {ReligRequest} from "common/src/ReligRequestTypes";
import {employeeFeedback} from "common/src/types";

const router: Router = express.Router();
let database: ReligRequest[] = [];

router.post("/", async function (req: Request, res: Response) {
    let newPost:ReligRequest = req.body;
    try {
        database.push(newPost);
        console.log(database);
        res.status(200).json("added request to db");
    }
    catch(err){
        console.error("Error posting request");
        res.status(400);
    }
});

router.get("/", async function (req: Request, res: Response) {
    res.status(200).json(database);
});

export default router;
