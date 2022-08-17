import React from "react";

import { Bubbling } from "../../index.js";

import './styles.css';

export default {
  title: "Example/TextAnimations/Bubbling",
  component: Bubbling,
};

const Template = (args) => {
  return (
    <Bubbling text="Bubbling" className="test" />
  );
};

export const Default = Template.bind({});
Default.args = {};
