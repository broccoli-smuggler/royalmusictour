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
    margin: 10px;
    color: #CCCCCC;
    text-align: center;
  }
`;


export default function Home() {
  return (
      <MainDiv>
        <TerraformElement/>
      </MainDiv>
  )
}
