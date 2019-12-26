import React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";
import Loader from "../../Components/Loader";

const Container = styled.div`
  padding: 20px;
`;

const HomePresenter = ({ loading, error }) => (
  <>
    <Helmet>
      <title>Climers</title>
    </Helmet>
    {loading ? (
      <Loader />
    ) : (
      <Container>
        <Helmet>
          <title>Climbers</title>
        </Helmet>
      </Container>
    )}
  </>
);

export default HomePresenter;
