import React, { useEffect } from "react";
import HeaderLogo from "../Header/HeaderLogo";
import Footer from "../Footer/Footer";
import HyperLink from "../HyperLink/HyperLink";
import Picture from "../Picture/Picture";
import "./SingleServiceDetails.css";

const SingleServiceDetails = (props) => {
  const { details, title, path, metaDesc } = props;

  const detailCollection = details.map((detail, index) => (
    <div key={index} className="single-service-additional-detail">
      {detail.title ? <h2>{detail.title}</h2> : null}
      {detail.image ? (
        <Picture
          alt={detail.image}
          className="single-service-additional-detail-image"
          webp={`${detail.image}.webp`}
          jpg={`${detail.image}.jpg`}
        />
      ) : null}
      {detail.text
        ? detail.text.map((p, index) => <p key={index}>{p}</p>)
        : null}
    </div>
  ));

  useEffect(() => {
    document.title = `EnePro Oy - ${title}`;
    document
      .querySelector('meta[name="description"]')
      .setAttribute("content", metaDesc);
  });

  return (
    <div className="single-service-additional-details">
      <HeaderLogo includeTitleAndButton={false} />
      <div className="single-service-additional-details-body">
        <div className="single-service-additional-details-inner-body">
          <div className="single-service-additional-details-inner-body-text-wrapper">
            <div className="single-service-additional-details-inner-body-text">
              {detailCollection}
              <HyperLink
                path={`/${path}`}
                text={`Palaa takaisin ${title.toLowerCase()} -sivulle`}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SingleServiceDetails;
