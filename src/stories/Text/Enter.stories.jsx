import React from "react";

import { Enter } from "../../index.js";

import './styles.css';

export default {
  title: "Example/EnterTextAnimation",
  component: Enter,
};

const Template = (args) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", marginTop: "300vh" }}>
      <Enter text="Testing 2323" className="test" />
    </div>
  );
};

export const SimpleText = Template.bind({});
SimpleText.args = {};
