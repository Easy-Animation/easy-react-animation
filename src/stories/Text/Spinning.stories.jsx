import React from "react";

import { Spinning } from "../../index.js";

import './styles.css';

export default {
  title: "Example/TextAnimations/Spinning",
  component: Spinning,
};

const Template = (args) => {
  return (
      <Spinning  text="Spinning" className="test" />
  );
};

export const Default = Template.bind({});
Default.args = {};
