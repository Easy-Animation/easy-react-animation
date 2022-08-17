import React from "react";

import { Meeting } from "../../index.js";

import './styles.css';

export default {
  title: "Example/TextAnimations/Meeting",
  component: Meeting,
};

const Template = (args) => {
  return (
    <Meeting text="Meeting" className="test" />
  );
};

export const Default = Template.bind({});
Default.args = {};