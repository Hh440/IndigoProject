import { useState } from "react";

import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import axios from "axios";
import { useEffect } from "react";

const usedNotificationIds = new Set();

const generateUniqueNotificationId = () => {
  let id;
  do {
    id = Math.floor(Math.random() * 100000) + 1;
  } while (usedNotificationIds.has(id));
  usedNotificationIds.add(id);
  return id.toString();
};

export const NotificationForm = () => {
  const [notificationId, setNotificationId] = useState("");
  const [flightId, setFlightNumber] = useState("");
  const [message, setmessage] = useState("");
  const [method, setMethod] = useState("");
  const [recipient, setRecipent] = useState("");


  useEffect(() => {
    setNotificationId(generateUniqueNotificationId());
  }, []);


  const resetForm = () => {
    setNotificationId(generateUniqueNotificationId());
    setFlightNumber("");
    setMessage("");
    setMethod("");
    setRecipient("");
  };

  
 

  
  return (
    <div className="bg-slate-300 h-screen flex justify-center items-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-6">
          <Heading label={"Notification Details"} />
          <SubHeading label={"Enter Notification information"} />

          
          
          <InputBox
            onChange={(e) => {
                
              setFlightNumber(e.target.value);
            }}
            placeholder="Flight Number"
            label={"Flight Number"}
          />
          <InputBox
            onChange={(e) => {
              setmessage(e.target.value);
            }}
            placeholder="Message"
            label={"Message"}
          />
          <InputBox
            onChange={(e) => {
              setRecipent(e.target.value);
            }}
            placeholder="Recipent"
            label={"Recipent"}
          />

          <div className="text-left mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Method
            </label>
            <select
              onChange={(e) => {
                setMethod(e.target.value);
              }}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="">Select method</option>
              <option value="SMS">SMS</option>
              <option value="Email">Email</option>
              <option value="App">App</option>
            </select>
          </div>
    
          <div className="pt-4">
            <Button
              onClick={async () => {
                const requestData = {
                   notificationId,
                  flightId,
                  message,
                  method,
                  recipient
                };

                try {
                  const response = await axios.post(
                    "http://localhost:3000/notification",
                    requestData
                  );

                  console.log(response);

                  window.location.reload()

                  
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