import React from "react"
import styled from "styled-components"
import TerraformElement from "../components/terraformElement";

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: center;
  max-width: 100%;
  height: 100%;
  max-height: 100%;
  background-color: black;
  padding: 5px;
  
  .text {
    margin: 15px;
    color: #CCCCCC;
    text-align: center;
    font-size: 18px;
  }
`;


export default function Home() {
  return (
      <MainDiv>
        <TerraformElement/>
      </MainDiv>
  )
}
