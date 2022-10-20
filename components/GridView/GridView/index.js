import { AnimateSharedLayout, motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import Card from "./Card";

function GridView() {

  return (
      <Wrapper layout>
  
          <>
              
              <Card
                key="1"
                id="{id}"
                title="{jobName}"
                internshipType="{jobType}"
                company="{companyName}"
                skills="{skills}"
                createdAt="{createdAt}"
                applicantsCount="{numberOfApplicants}"
              />
              <Card
                key="2"
                id="{id}"
                title="{jobName}"
                internshipType="{jobType}"
                company="{companyName}"
                skills="{skills}"
                createdAt="{createdAt}"
                applicantsCount="{numberOfApplicants}"
              />
              <Card
                key="3"
                id="{id}"
                title="{jobName}"
                internshipType="{jobType}"
                company="{companyName}"
                skills="{skills}"
                createdAt="{createdAt}"
                applicantsCount="{numberOfApplicants}"
              />
              <Card
                key="4"
                id="{id}"
                title="{jobName}"
                internshipType="{jobType}"
                company="{companyName}"
                skills="{skills}"
                createdAt="{createdAt}"
                applicantsCount="{numberOfApplicants}"
              />
              
          </>
      </Wrapper>
  );
}

export default GridView;

const Wrapper = styled.div`
  padding: 1.5rem 0;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-gap: 1.5rem;

  @media (max-width: 1170px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 830px) {
    padding: 1rem 0;
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;


  
