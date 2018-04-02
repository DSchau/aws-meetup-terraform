import React from 'react';
import { Heading, Image } from 'spectacle';

export const CircleCiIntro = () => (
  <Heading size={2} fit caps>CircleCI</Heading>
);

export const Workflow = () => (
  <Image src={require('./assets/workflow.png')} />
);

Workflow.Props = {
  bgColor: 'secondary'
};

export const ConfigFile = () => null;

ConfigFile.Props = {
  bgColor: 'secondary',
  lang: 'yaml',
  code: require('./assets/config.yaml').default,
  ranges: [
    { loc: [0, 100 ], title: 'CircleCI Config' },
    { loc: [1, 5 ] },
    { loc: [7, 12] },
    { loc: [12, 15] },
    { loc: [25, 30 ]},
    { loc: [49, 100 ]}
  ],
  notes: `
- Here's the CircleCI config
- Job orchestration
- Installing terraform executable
- Adding it to my path
- Using a workflow
  `
};