import React from "react";

import { Random } from "../../index.js";

import './styles.css';

export default {
  title: "Example/TextAnimations/Random",
  component: Random,
};

const Template = (args) => {
  return (
    <div>
      <Random text="Random" className="test" />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {};