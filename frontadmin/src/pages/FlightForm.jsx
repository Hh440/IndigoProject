import { useState } from "react";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import axios from "axios";

export const FlightDetailsForm = () => {
  const [airline, setFlightName] = useState("");
  const [flightId, setFlightNumber] = useState("");
  const [status, setStatus] = useState("");
  const [departureGate, setGateNumber] = useState("");
  const [arrivalGate, setArrivalGate] = useState("");
  
 

  
  return (
    <div className="bg-slate-300 h-screen flex justify-center items-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-6">
          <Heading label={"Flight Details"} />
          <SubHeading label={"Enter flight information"} />
          <InputBox
            onChange={(e) => {
              setFlightName(e.target.value);
            }}
            placeholder="Flight Name"
            label={"Flight Name"}
          />
          <InputBox
            onChange={(e) => {
              setFlightNumber(e.target.value);
            }}
            placeholder="Flight Number"
            label={"Flight Number"}
          />
          <InputBox
            onChange={(e) => {
              setStatus(e.target.value);
            }}
            placeholder="Status"
            label={"Status"}
          />
          <InputBox
            onChange={(e) => {
              setGateNumber(e.target.value);
            }}
            placeholder="Gate Number"
            label={"Gate Number"}
          />
          <InputBox
            onChange={(e) => {
              setArrivalGate(e.target.value);
            }}
            placeholder="Arrival Gate Number"
            label={"Arrival Gate Number"}
          />
    
          <div className="pt-4">
            <Button
              onClick={async () => {
                const requestData = {
                   airline,
                  flightId,
                  status,
                  departureGate,
                  arrivalGate
                };

                try {
                  const response = await axios.post(
                    "http://localhost:3000/add-Data",
                    requestData
                  );

                  console.log(response);

                  
                } catch (err) {
                
                  console.log("Request failed ", err);
                }
              }}
              label={"Submit"}
            />
          </div>
        
        </div>
      </div>
    </div>
  );
};