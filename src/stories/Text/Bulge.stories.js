import React from "react";

import { Bulge } from "../../index.js";

import './styles.css';

export default {
  title: "Example/TextAnimations/Bulge",
  component: Bulge,
};

const Template = (args) => {
  return (
        <div style={{display: 'flex'}}>
            <Bulge text="Bulge" className="test" />
        </div> 
  );
};

export const Default = Template.bind({});
Default.args = {};