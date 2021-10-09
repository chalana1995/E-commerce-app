import React from "react";
import styled from "styled-components";

const Announcement = () => {
  return <Container>Super Deal! Fre Shiping on Order Over $50</Container>;
};

export default Announcement;

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
`;
