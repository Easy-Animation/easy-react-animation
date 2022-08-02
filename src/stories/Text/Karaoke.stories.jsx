import React from "react";

import { Karaoke } from "../../index.js";

import './styles.css';

export default {
  title: "Example/TextAnimations/Karaoke",
  component: Karaoke,
};

const Template = (args) => {
  return (
      <Karaoke text="Karaoke" className="test" />
  );
};

export const Default = Template.bind({});
Default.args = {};