import React from "react";
import { Container } from "../components/container";
import { Grid } from "../components/grid";
import Header from "../components/header";
import Item from "../components/item";
import NextHead from "../components/next-head";

const data = [
  {
    title: "Supervisor",
    body: "Monitors activity to identify project roadblocks",
    color: "cyan",
    icon: "/images/icon-supervisor.svg",
  },
  {
    title: "Team Builder",
    body:
      "Scans our talent network to create the optimal team for your project",
    color: "red",
    icon: "/images/icon-team-builder.svg",
  },
  {
    title: "Karma",
    body: "Regularly evaluates our talent to ensure quality",
    color: "orange",
    icon: "/images/icon-karma.svg",
  },
  {
    title: "Calculator",
    body: "Uses data from past projects to provide better delivery estimates",
    color: "blue",
    icon: "/images/icon-calculator.svg",
  },
];

export default function Home() {
  return (
    <Container>
      <NextHead />

      <Header />

      <Grid>
        {data.map((d) => {
          return (
            <Item
              key={d.title}
              title={d.title}
              body={d.body}
              color={d.color}
              icon={d.icon}
            />
          );
        })}
      </Grid>
    </Container>
  );
}
