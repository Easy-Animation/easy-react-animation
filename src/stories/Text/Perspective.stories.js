import React from "react";

import { Perspective } from "../../index.js";

import './styles.css';

export default {
  title: "Example/TextAnimations/Perspective",
  component: Perspective,
};

const Template = (args) => {
  return (
    <div>
      <Perspective text="Perspective" className="test" />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {};