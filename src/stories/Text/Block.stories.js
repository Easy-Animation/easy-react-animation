import React from "react";

import { Block } from "../../index.js";

import './styles.css';

export default {
  title: "Example/TextAnimations/Block",
  component: Block,
};

const Template = (args) => {
  return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <Block text="Block" className="test" color="#fc9"/>
        </div> 
  );
};

export const Default = Template.bind({});
Default.args = {};
