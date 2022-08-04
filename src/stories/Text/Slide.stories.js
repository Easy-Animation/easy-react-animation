import React from "react";

import { Slide } from "../../index.js";

import './styles.css';

export default {
  title: "Example/TextAnimations/Slide",
  component: Slide,
};

const Template = (args) => {
  return (
      <Slide  text="Slide" className="test" />
  );
};

export const Default = Template.bind({});
Default.args = {};