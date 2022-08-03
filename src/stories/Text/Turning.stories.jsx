import React from "react";

import { Turning } from "../../index.js";

import './styles.css';

export default {
  title: "Example/TextAnimations/Turning",
  component: Turning,
};

const Template = (args) => {
  return (
      <Turning text="Turning" className="test" />
  );
};

export const Default = Template.bind({});
Default.args = {};