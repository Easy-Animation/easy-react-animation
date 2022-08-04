import React from "react";

import { Folding } from "../../index.js";

import './styles.css';

export default {
  title: "Example/TextAnimations/Folding",
  component: Folding,
};

const Template = (args) => {
  return (
      <Folding  text="Folding" className="test" />
  );
};

export const Default = Template.bind({});
Default.args = {};