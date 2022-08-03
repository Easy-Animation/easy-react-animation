import React from "react";

import { Scaling } from "../../index.js";

import './styles.css';

export default {
  title: "Example/TextAnimations/Scaling",
  component: Scaling,
};

const Template = (args) => {
  return (
      <Scaling text="Scaling" className="test" />
  );
};

export const Default = Template.bind({});
Default.args = {};
