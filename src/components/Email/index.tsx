import { contactTypes } from "@/lib/validators";
import * as React from "react";

export const EmailTemplate: React.FC<Readonly<contactTypes>> = ({
  name,
  email,
  phone,
  message,
}) => (
  <div>
    <h1>Contact Form Submission!</h1>
    <br />
    <br />
    <p>
      From: <strong>{name}</strong>{" "}
    </p>
    <br />
    <p>
      <strong>Email: </strong> {email}
    </p>
    <br />
    <p>
      <strong>Phone: </strong> {phone}
    </p>
    <br />
    <p>
      {" "}
      <strong>Message: </strong> {message}
    </p>
  </div>
);
