import React from 'react';
import { Heading, Link, List, ListItem } from 'spectacle';

import TwitterIcon from 'react-icons/lib/fa/twitter';
import GithubIcon from 'react-icons/lib/fa/github';
import WebsiteIcon from 'react-icons/lib/md/web';

const images = {
  thankYou: 'https://media.giphy.com/media/KJ1f5iTl4Oo7u/giphy.gif',
  questions: 'https://media.giphy.com/media/l4FGroaKiE5uuMBiM/giphy.gif',
};

export const Improvements = () => (
  <Heading size={2} caps>
    Improvements
  </Heading>
);

export const ImprovementsList = () => (
  <List>
    <ListItem>Add in environment support</ListItem>
    <ListItem>DRY up my CircleCI config file</ListItem>
    <ListItem>Find a better way to install terraform in Ubuntu</ListItem>
    <ListItem>Comment on PR with Terraform Plan output</ListItem>
    <ListItem>Modularize (with&hellip; modules) the TF config</ListItem>
    <ListItem>
      Find a way to sync remote (existing) AWS state with local TF
    </ListItem>
  </List>
);

export const Links = () => (
  <span>
    <Heading size={2} caps>
      Links
    </Heading>
    <List>
      {[
        ['https://github.com/dschau/infrastructure', 'Github Repo'],
        ['https://www.terraform.io/', 'Terraform'],
      ].map(([link, text]) => (
        <ListItem>
          <Link href={link}>{text}</Link>
        </ListItem>
      ))}
    </List>
  </span>
);

export const Questions = () => null;

Questions.Props = {
  bgImage: images.questions,
};

export const FinTheEndThatsAllFolks = () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      height: '85vh',
      width: '80vw',
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
    }}
  >
    {[
      {
        href: 'https://twitter.com/schaudustin',
        Icon: TwitterIcon,
        text: '@schaudustin',
      },
      {
        href: 'https://github.com/dschau',
        Icon: GithubIcon,
        text: 'dschau',
      },
      {
        href: 'https://dustinschau.com',
        Icon: WebsiteIcon,
        text: 'website',
      },
    ].map(({ href, Icon, text }) => (
      <Link
        href={href}
        textColor="white"
        style={{ display: 'block' }}
        target="_blank"
        rel="noopener"
        key={text}
      >
        <Icon color="white" style={{ marginRight: 6 }} />
        {text}
      </Link>
    ))}
  </div>
);

FinTheEndThatsAllFolks.Props = {
  bgImage: images.thankYou,
  notes: `
One final thank you to the organizers and sponsors of this conference, and for giving me an opportunity to present at my first ever conference.
I'd like to also thank each of the attendees. Without you, each of us would be speaking to an empty room, and where's the fun in that!?
  
... and finally, I'd like to thank everyone who attended my NebraskaJS meetup, in particular [Matthew Steele](https://twitter.com/mattdsteele?lang=en), for invaluable advice and support with an earlier iteration of this talk. In addition, [Phil Plückthun](https://twitter.com/_philpl) for some great advice, as well.
  `,
};
