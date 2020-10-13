import React, { useContext } from "react";
import styled from "styled-components";
import { GithubContext } from "../context/context";
import { ExampleChart, Pie3D, Column3D, Bar3D, Doughnut2D } from "./Charts";
const Repos = () => {
  const { repos } = useContext(GithubContext);

  const languages = repos.reduce((total, item) => {
    const { language, stargazers_count } = item;
    if (!language) return total;
    if (!total[language]) {
      total[language] = { label: language, value: 1, stars: stargazers_count };
    } else {
      total[language] = {
        ...total[language],
        value: total[language].value + 1,
        stars: total[language].stars + stargazers_count,
      };
    }
    return total;
  }, {});

  const mostUsed = Object.values(languages)
    .sort((a, b) => {
      return b.value - a.value;
    })
    .slice(0, 9);

  // most stars per language
  const mostPopular = Object.values(languages)
    .sort((a, b) => {
      return b.stars - a.stars;
    })
    .map((item) => {
      return { ...item, value: item.stars };
    })
    .slice(0, 9);

  console.log(mostPopular);

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

  return (
    <section className="section">
      <Wrapper className="section-center">
        {/* <ExampleChart /> */}
        <Pie3D data={mostUsed} />
        <div></div>
        <Doughnut2D data={mostPopular} />
        <div></div>
        <Column3D data={mostPopular} />
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
