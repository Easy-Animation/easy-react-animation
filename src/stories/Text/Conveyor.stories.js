import React from "react";

import { Conveyor } from "../../index.js";

import './styles.css';

export default {
  title: "Example/TextAnimations/Conveyor",
  component: Conveyor,
};

const Template = (args) => {
  return (
    <div>
      <Conveyor text="Conveyor" className="test" />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {};