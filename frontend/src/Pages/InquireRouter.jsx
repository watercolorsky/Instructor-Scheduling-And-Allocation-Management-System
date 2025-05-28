import React from "react";
import Inquire from "./Inquire.Jsx";
import { useParams } from "react-router-dom";

const InquireRouter = () => {
  const { courseType } = useParams();

  const readableType =
    courseType === "practical"
      ? "Practical"
      : courseType === "theoretical"
      ? "Theoretical"
      : "Unknown";

  return <Inquire courseType={readableType} />;
};

export default InquireRouter;
