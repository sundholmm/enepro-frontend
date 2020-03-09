import React from "react";
import HeaderLogo from "../Header/HeaderLogo";
import "./SingleService.css";

const SingleService = props => {
  const { text } = props.service;

  const singleServiceText = text.map((paragraph, index) => (
    <p key={index}>{paragraph}</p>
  ));

  return (
    <div className="single-service">
      <HeaderLogo includeTitleAndButton={false} />
      {props.service.title}
      {singleServiceText}
    </div>
  );
};

export default SingleService;
