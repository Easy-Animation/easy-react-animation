import React from "react";

import { Enter } from "../../index.js";

export default {
  title: "Example/EnterTextAnimation",
  component: Enter,
};

const Template = (args) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", marginTop: "300vh" }}>
      <Enter text="testing" styles={{fontWeight: 'bold'}} className="dkshdkjshdjkshkj"></Enter>
    </div>
  );
};

export const SimpleText = Template.bind({});
SimpleText.args = {};
