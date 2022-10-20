import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import GridView from "../../components/GridView/GridView";

const Internship = () => {
  const router = useRouter();
  return (
    <>
      <GridView />
    </>
  );
};

export default Internship;

const BackBtn = styled.button`
  font-size: 17px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  letter-spacing: 0.103059px;
  color: #c9cbe2;
  background: transparent;
  border: none;
  width: min(90%, 90rem);
  margin-inline: auto;
  margin-top: 1rem;

  @media (min-width: 962px) {
    display: none;
  }
`;
