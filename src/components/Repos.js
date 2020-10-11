import React, { useContext } from "react";
import styled from "styled-components";
import { GithubContext } from "../context/context";
import { ExampleChart, Pie3D, Column3D, Bar3D, Doughnut2D } from "./Charts";
const Repos = () => {
  const { repos } = useContext(GithubContext);
  const data = [
    {
      label: "HTML",
      value: 40,
    },
    {
      label: "CSS",
      value: 20,
    },
    {
      label: "Javascript",
      value: 30,
    },
    {
      label: "C++",
      value: 5,
    },
    {
      label: "Java",
      value: 5,
    },
  ];
  console.log(repos);
  return (
    <section className="section">
      <Wrapper className="section-center">
        {/* <ExampleChart /> */}
        <Pie3D data={data} />
      </Wrapper>
    </section>
  );
};

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 2rem;
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 2fr 3fr;
  }

  div {
    width: 100% !important;
  }
  .fusioncharts-container {
    width: 100% !important;
  }
  svg {
    width: 100% !important;
    border-radius: var(--radius) !important;
  }
`;

export default Repos;
