import React from "react";

import { Tumbling } from "../../index.js";

import './styles.css';

export default {
  title: "Example/TextAnimations/Tumbling",
  component: Tumbling,
};

const Template = (args) => {
  return (
      <Tumbling text="Tumbling" className="test" />

  );
};

export const Default = Template.bind({});
Default.args = {};