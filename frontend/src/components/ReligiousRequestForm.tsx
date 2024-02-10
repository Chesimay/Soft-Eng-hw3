import React, {useState} from "react";
import {ReligRequest, Status, Priority} from "common/src/ReligRequestTypes";
import axios from "axios";

export default function ReligiousRequestForm() {
    const[service, setService] = useState("");
    const[name, setName] = useState("");
    async function handleSubmit(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        //send to backend
        let data:ReligRequest={
            name:name,
            religion: "no",
            service:service,
            location: "",
            priority: Priority.low,
            status: Status.unassigned
        };
        const res = await axios.post("/api/religReq/",data, {
            headers: {
                "Content-Type":"application/json"
            }
        });
        if(res.status === 200) {
            console.log("recorded religious request");
        }
        //clear fields
        setService("");
        setName("");
    }

    return (
        <form className={"religReqForm"}>
            <input placeholder={"Name"}
                   type={"text"}
                   className={"smallAnswer"}
                   id={"name"}
                   required>
            </input>

            <input placeholder={"Describe the religious service here."}
                   type={"text"}
                   className={"longAnswer"}
                   id={"service"}
                   required>
            </input>

            <button
                className={"submitButton"}
                onClick={handleSubmit}>
                Submit
            </button>
        </form>
    );
};