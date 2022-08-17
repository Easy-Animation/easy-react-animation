import React from "react";

import { Swinging } from "../../index.js";

import './styles.css';

export default {
  title: "Example/TextAnimations/Swinging",
  component: Swinging,
};

const Template = (args) => {
  return (
    <div style={{ display: 'flex' }}>
      <Swinging text="Swinging" className="test" />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {};