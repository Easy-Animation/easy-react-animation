import React from "react";

import { Flipping } from "../../index.js";

import './styles.css';

export default {
  title: "Example/TextAnimations/Flipping",
  component: Flipping,
};

const Template = (args) => {
  return (
      <Flipping  text="Flipping" className="test" />
  );
};

export const Default = Template.bind({});
Default.args = {};