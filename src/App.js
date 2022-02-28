import React from "react";
import styled from "styled-components";

import PlaceHolder from "./Components/Placeholder";
import Layout from "./Components/Layout";
import Card from "./Components/Card";

import Staroutlined from "./_starter/shared/Icons/StarOutlined";
import EllipsisHorizontal from "./_starter/shared/Icons/EllipsisHorizontal";
import SalesloftLogoWhite from "./_starter/shared/Icons/SalesloftLogoWhite";
import LinkedIn from "./_starter/shared/Icons/LinkedIn";
import Twitter from "./_starter/shared/Icons/Twitter";
import LinkIcon from "./_starter/shared/Icons/Link";
import Main from "./Components/Main/Main";

export const App = () => {
  const App = styled.div`
    font-family: "Proxima Nova", sans-serif;
    background-color: #f9fafb;
  `;


  return (
    <App>
      <Layout>
        <Layout.LeftColumn>
          <Card>
            <StyledCardBody />
          </Card>
          <PlaceHolder hieght="248px"></PlaceHolder>
          <PlaceHolder hieght="144px"></PlaceHolder>
          <PlaceHolder hieght="536px"></PlaceHolder>
        </Layout.LeftColumn>
        <Layout.CenterColumn>
          <Main />
        </Layout.CenterColumn>
        <Layout.RightColumn>
          <PlaceHolder hieght="266px"></PlaceHolder>
          <PlaceHolder hieght="428px"></PlaceHolder>
          <PlaceHolder hieght="194px"></PlaceHolder>
          <PlaceHolder hieght="213px"></PlaceHolder>
        </Layout.RightColumn>
      </Layout>
    </App>
  );
};


function StyledCardBody() {
  const CardBody = styled.div`
    .cardBody {
      max-width: 50%;
      margin: 0 auto;
      padding: 1.25rem 0;
      text-align: center;
      color: #4f5359;
    }

    .cardBody__title {
      font-weight: 300;
      font-size: 1.5rem;
      line-height: 1.5rem;
    }

    .cardBody__subtitle {
      margin-top: 0.5rem;
      font-weight: 400;
      font-size: 0.875rem;
      line-height: 1.0625rem;
    }

    .cardBody__subtitle--1 {
      margin-top: 0.25rem;
      font-weight: 600;
      font-size: 0.875rem;
      line-height: 1.0625rem;
      color: #337ab7;
    }

    .cardBody__icons {
      width: min(100%, 6rem);
      margin: 0 auto;
      margin-top: 1rem;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
  `;

  const StyledSalesLoft = styled(SalesloftLogoWhite)`
    color: #049be5;
  `;

  const StyledLinkedIn = styled(LinkedIn)`
    color: #0077b5;
  `;

  const StyledTwitter = styled(Twitter)`
    color: #08a0e9;
  `;

  const StyledLink = styled(LinkIcon)`
    color: #3a3a3a;
  `;

  return (
    <CardBody>
      <div className="cardBody">
        <p className="cardBody__title">Gary Clover</p>
        <p className="cardBody__subtitle">Marketing Manager</p>
        <p className="cardBody__subtitle--1">Facebook</p>
        <div className="cardBody__icons">
          <div className="">
            <StyledSalesLoft />
          </div>
          <div className="cardBody__icons--icon">
            <StyledLinkedIn />
          </div>
          <div className="cardBody__icons--icon">
            <StyledTwitter />
          </div>
          <div className="cardBody__icons--icon">
            <StyledLink />
          </div>
        </div>
      </div>
    </CardBody>
  );
}
