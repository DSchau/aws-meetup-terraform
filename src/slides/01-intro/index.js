import React from "react";
import { Heading, Fill, Image, Layout, Link, List, S } from "spectacle";

import TwitterIcon from 'react-icons/lib/fa/twitter';
import GithubIcon from 'react-icons/lib/fa/github';
import WebsiteIcon from 'react-icons/lib/md/web';

const images = {
  pipeline: require('./assets/images/pipeline.jpeg'),
  me: require('./assets/images/me.png'),
  terraform: require('./assets/images/terraform.png'),
  circleci: require('./assets/images/circleci.png'),
  aws: require('./assets/images/aws.png'),
};

export const Intro = () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '80vh'
    }}
  >
    <Layout>
      <Fill
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          paddingLeft: 40,
          paddingRight: 20
        }}
      >
        <Heading size={1} caps fit>
          AWS:
        </Heading>
      </Fill>
      <Fill>
        <Heading size={4} textColor="primary" textAlign="left">
          Terraform and CI
        </Heading>
      </Fill>
    </Layout>
    <div
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0
      }}
    >
      <Link
        href="https://aws-meetup-terraform.netlify.com"
        textColor="rgba(255, 255, 255, 0.7)"
        target="_blank"
        rel="noopener"
      >
        https://aws-meetup-terraform.netlify.com
      </Link>
    </div>
  </div>
);

Intro.Props = {
  bgImage: images.pipeline,
  bgDarken: 0.5
};

export const AboutMe = () =>
  <Layout>
    <Fill
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexDirection: 'column',
        paddingRight: 20
      }}
    >
      <Heading size={2} caps fit textColor="white">
        Who?
      </Heading>
      {[
        {
          Icon: TwitterIcon,
          href: 'https://twitter.com/schaudustin',
          text: '@schaudustin'
        },
        {
          Icon: GithubIcon,
          href: 'https://github.com/dschau',
          text: 'dschau'
        },
        {
          Icon: WebsiteIcon,
          href: 'https://dustinschau.com',
          text: 'website'
        }
      ].map(({ Icon, href, text }) =>
        <Heading size={6} style={{ display: 'flex' }} key={text}>
          <Icon
            color="white"
            style={{ display: 'inline-block', marginRight: 8 }}
          />
          <Link href={href} textColor="white" target="_blank" rel="noopener">
            {text}
          </Link>
        </Heading>
      )}
    </Fill>
    <Fill
      style={{
        maxWidth: '40%'
      }}
    >
      <Image src={images.me} style={{ borderRadius: 50, height: 400 }} />
    </Fill>
  </Layout>;

AboutMe.Props = {
  bgColor: 'secondary',
  notes: `
I'm a frontend developer specializing in all things JavaScript. Throughout my career, I've done a fair bit of everything: Angular, React, jQuery, you name it. Of course, I've also done a fair bit of everything in CSS land, whether it's vanilla CSS, LESS, SASS, CSS Modules, and (of course) the gamut of CSS in JS solutions. I'm from little ol' Omaha, Nebraska, which I think most people looks a bit like this.
  `
};

export const TheProject = () => (
  <Heading size={2} fit caps textColor="white">The project</Heading>
);

TheProject.Props = {
  bgColor: 'secondary'
};

export const ProjectDescription = () => (
  <span>
    <Image src={images.terraform} style={{ height: 250 }} />
    <Image src={images.circleci} style={{ height: 200 }} />
    <Image src={images.aws} style={{ height: 75 }} />
  </span>
);

export const ButWhy = () => (
  <Heading size={3} caps>
    But <S type="italic">why</S>
  </Heading>
);

export const BecauseReasons = () => (
  <Image src={require('./assets/images/because-reasons.jpeg')} />
);
