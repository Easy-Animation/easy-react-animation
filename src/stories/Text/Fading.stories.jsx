import React from "react";

import { Fading } from "../../index.js";

import './styles.css';

export default {
  title: "Example/TextAnimations/Fading",
  component: Fading,
};

const Template = (args) => {
  return (
      <Fading text="Fading" className="test" />
  );
};

export const Default = Template.bind({});
Default.args = {};
