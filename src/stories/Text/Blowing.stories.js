import React from "react";

import { Blowing } from "../../index.js";

import './styles.css';

export default {
    title: "Example/TextAnimations/Blowing",
    component: Blowing,
};

const Template = (args) => {
    return (
        <div style={{ display: 'flex' }}>
            <Blowing text="Blowing" className="test" />
        </div>
    );
};

export const Default = Template.bind({});
Default.args = {};