import React from "react";

import { Filling } from "../../index.js";

import './styles.css';

export default {
  title: "Example/TextAnimations/Filling",
  component: Filling,
};

const Template = (args) => {
  return (
      <Filling text="Filling" className="test" />
  );
};

export const Default = Template.bind({});
Default.args = {};
