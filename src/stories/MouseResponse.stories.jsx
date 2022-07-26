import React from 'react';

import { MouseResponse } from '../index';

export default {
  title: 'Example/MouseResponse',
  component: MouseResponse,
};

const Template = (args) => {
    return ( 
        <div style={{display:'flex', flexWrap: 'wrap', margin: "20%"}}>
            
            <div style={{padding: '8px'}}>
                <MouseResponse shadow {...args}>
                    <div style={{boxShadow: '2px 2px 15px rgba(0, 0, 0, 0.2)', borderRadius: "0", height: '200px', width: '200px',border:'1px solid black', display:'flex', justifyContent: "center", alignItems: 'center', textAlign: 'center' }}>
                        <h2>Your amazing component here</h2>
                    </div>
                </MouseResponse>
            </div>
            <div style={{padding: '8px'}}>
                <MouseResponse shadow {...args}>
                    <div style={{borderRadius: "0", height: '200px', width: '200px',border:'1px solid black', display:'flex', justifyContent: "center", alignItems: 'center', textAlign: 'center' }}>
                        <h2>Your amazing component here</h2>
                    </div>
                </MouseResponse>
            </div>
            <div style={{padding: '8px'}}>
                <MouseResponse {...args} shadow>
                    <div style={{borderRadius: "0", height: '200px', width: '200px',border:'1px solid black', display:'flex', justifyContent: "center", alignItems: 'center', textAlign: 'center' }}>
                        <h2>Your amazing component here</h2>
                    </div>
                </MouseResponse>
            </div>
            <div style={{padding: '8px'}}>
                <MouseResponse {...args} shadow>
                    <div style={{borderRadius: "0", height: '200px', width: '200px',border:'1px solid black', display:'flex', justifyContent: "center", alignItems: 'center', textAlign: 'center' }}>
                        <h2>Your amazing component here</h2>
                    </div>
                </MouseResponse>
            </div>
           
        </div>
    )
}


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