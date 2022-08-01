import React from "react";

import { Flipping } from "../../index.js";

import './styles.css';

export default {
  title: "Example/FlippingTextAnimation",
  component: Flipping,
};

const Template = (args) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", marginTop: "300vh" }}>
      <Flipping text="Testing 2323" className="test" />
    </div>
  );
};

export const SimpleText = Template.bind({});
SimpleText.args = {};