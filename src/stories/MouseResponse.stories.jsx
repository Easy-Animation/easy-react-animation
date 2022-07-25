import React from 'react';

import MouseResponse from '../components/MouseResponse';

export default {
  title: 'Example/MouseResponse',
  component: MouseResponse,
};

const Template = (args) => (
    <div style={{display:'flex', justifyContent: "center"}}>
        <MouseResponse {...args}>
            <div style={{height: '200px', width: '200px',border:'1px solid black', display:'flex', justifyContent: "center", alignItems: 'center', textAlign: 'center' }}>
                <h2>Your amazing component here</h2>
            </div>
        </MouseResponse>
    </div>
)


export const DepthLow = Template.bind({});
DepthLow.args = {
    depth: 'low'
};

export const DepthMedium = Template.bind({});
DepthMedium.args = {
  depth: 'medium'

};

export const DepthHigh = Template.bind({});
DepthHigh.args = {
    depth: 'high'
};