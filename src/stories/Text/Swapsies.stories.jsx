import React from "react";

import { Swapsies } from "../../index.js";

import './styles.css';

export default {
  title: "Example/TextAnimations/Swapsies",
  component: Swapsies,
};

const Template = (args) => {
  return (
    <Swapsies text="Swapsies" className="test" />
  );
};

export const Default = Template.bind({});
Default.args = {};
