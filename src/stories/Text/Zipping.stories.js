import React from "react";
import { Zipping } from "../../index.js";

import './styles.css';

export default {
  title: "Example/TextAnimations/Zipping",
  component: Zipping,
};

const Template = (args) => {
  return (
    <Zipping text="Zipping" className="test" />
  );
};

export const Default = Template.bind({});
Default.args = {};