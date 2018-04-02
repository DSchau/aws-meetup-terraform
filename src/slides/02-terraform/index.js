import React from 'react';

import { CodePane, Heading, Image, Layout, Fill } from 'spectacle';

export const TfIntro = () => (
  <Heading size={2} caps fit>
    Terraform is&hellip;
  </Heading>
);

TfIntro.Props = {
  notes: `
- Write, plan, and create infrastructure as code
- Think of it like Cloudformation for _all_ cloud providers
  `,
};

export const CodeExample = () => (
  <Layout>
    <Fill>
      <CodePane
        lang="json"
        source={require('./assets/ec2.cloudformation').default}
      />
    </Fill>
    <Fill>
      <CodePane
        lang="js"
        source={require('./assets/ec2.tf').default}
        style={{ marginLeft: 20 }}
      />
    </Fill>
  </Layout>
);

export const StructureExample = () => (
  <Image src={require('./assets/structure.png')} />
);

StructureExample.Props = {
  bgColor: 'secondary',
};

export const PlanExample = () => <Image src={require('./assets/tfplan.png')} />;

PlanExample.Props = {
  bgColor: 'secondary',
};
