import React from "react";
import ReactLoading from "react-loading";
import { Section, Title, Article, list } from "./generic";
import "./styles.css";

const Example = () => (
  <Section>
    {/* <Title>React Loading</Title> */}
    {list.map(l => (
      <Article key={l.prop}>
        <ReactLoading type={l.prop} color="green" width="20vw" height="20vh" />
        {/* <Prop>{l.name}</Prop> */}
      </Article>
    ))}
  </Section>
);

export default Example;
