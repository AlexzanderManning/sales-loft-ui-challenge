import React from "react";
import styled from "styled-components";

import PlaceHolder from "./Components/Placeholder";
import Layout from './Components/Layout'

export const App = () => {
  return (
    <div>
      <Layout>
        <Layout.LeftColumn>
          <PlaceHolder hieght="166px"></PlaceHolder>
          <PlaceHolder hieght="248px"></PlaceHolder>
          <PlaceHolder hieght="144px"></PlaceHolder>
          <PlaceHolder hieght="536px"></PlaceHolder>
        </Layout.LeftColumn>
        <Layout.CenterColumn>
          <h1>Center Column</h1>
        </Layout.CenterColumn>
        <Layout.RightColumn>
          <PlaceHolder hieght="266px"></PlaceHolder>
          <PlaceHolder hieght="428px"></PlaceHolder>
          <PlaceHolder hieght="194px"></PlaceHolder>
          <PlaceHolder hieght="213px"></PlaceHolder>
        </Layout.RightColumn>
      </Layout>
    </div>
  );
};
