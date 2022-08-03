import React from "react";

import { Rolling } from "../../index.js";

import './styles.css';

export default {
  title: "Example/TextAnimations/Rolling",
  component: Rolling,
};

const Template = (args) => {
  return (
      <Rolling text="Rolling" className="test" />

  );
};

export const Default = Template.bind({});
Default.args = {};