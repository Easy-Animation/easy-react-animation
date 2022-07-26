import React from "react";

import { Enter } from "../../index.js";

import './styles.css';

export default {
  title: "Example/TextAnimations/Enter",
  component: Enter,
};

const Template = (args) => {
  return (
      <Enter text="Enter" className="test" />
  );
};

export const Default = Template.bind({});
Default.args = {};
