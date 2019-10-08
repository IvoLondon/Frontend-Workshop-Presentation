// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Image,
  List,
  ListItem,
  Notes,
  Quote,
  Slide,
  Text
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

const images = {
  formidagon: require('../assets/formidable-logo.svg'),
  goodWork: require('../assets/good-work.gif'),
  bulb: require('../assets/bulb.png'),

  gitlensStash: require('../assets/gitlens-stash.gif'),
  gitlensHistory: require('../assets/gitlens-fileHistory.gif'),
  gitlensCompare: require('../assets/gitlens-compare.gif'),

  commits: require('../assets/commits.png'),
  chromeExtension: require('../assets/accessibility-for-web.png'),
  chromeExtensionOptionsMain: require('../assets/accessibility-for-web-options-main.png'),
  chromeExtensionOptionsSecondary: require('../assets/accessibility-for-web-options-secondary.png'),
  chromeExtensionOptionsHeadings: require('../assets/accessibility-for-web-options-headings.png'),
  chromeExtensionOptionsTabs: require('../assets/accessibility-for-web-options-tabs.png'),
};

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quaternary: '#CECECE'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
);


const gitLens = [
  ['Stash list', images.gitlensStash],
  ['File & Line History', images.gitlensHistory],
  ['Compare', images.gitlensCompare],
];
const gitLensSlides = gitLens.map((slide) => {
  return (
    <Slide key={slide[0]} bgColor="primary">
      <Text margin="10px 0 0" textSize="24px" textColor="tertiary">
        GitLens
      </Text>
      <Heading size={1} textSize="30px" caps lineHeight={1} textColor="tertiary">
        {slide[0]}
      </Heading>
      <Image src={slide[1]} width="100%" />
    </Slide>
  );
});

const semanticMessages = {
  feat: '(new feature for the user, not a new feature for build script)',
  fix: '(bug fix for the user, not a fix to a build script)',
  docs: '(changes to the documentation)',
  style: '(formatting, missing semi colons, etc; no production code change)',
  refactor: '(refactoring production code, eg. renaming a variable)',
  test: '(adding missing tests, refactoring tests; no production code change)',
  chore: '(updating grunt tasks etc; no production code change)',
};

const listSemanticMessages = Object.keys(semanticMessages).map((key, index) => {
  return (
    <ListItem key={key} bulletStyle="star" bold textSize="24px" margin="0 0 10px 0">
      {key}
      <Text textSize={15} bold={false} padding="0 0 0 60px">
        {semanticMessages[key]}
      </Text>
    </ListItem>
  );
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
        showFullscreenControl
        showFullscreenControl={false}
      >
        <Slide transition={['zoom']} bgColor="primary">
          <Image src={images.bulb} width={200} />
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Frontend workshop
          </Heading>
          <Text margin="10px 0 0" textSize="11px" textColor="tertiary" fit italic>
            A place to discuss frontend.
          </Text>
        </Slide>
        {gitLensSlides}
        <Slide bgColor="primary">
          <Heading size={5} fit caps lineHeight={1} textColor="tertiary">
            Semantic Commit Messages
          </Heading>
          <Heading size={6} textAlign="left">
            Why?
          </Heading>
          <Text textAlign="left" textSize="24px">Simple navigation through git history (e.g. ignoring style changes)</Text>
          <Image src={images.commits} width="40%" />
        </Slide>

        <Slide bgColor="primary">
          <Heading size={5} fit caps lineHeight={1} textColor="tertiary">
            Semantic Commit Messages
          </Heading>
          <List>
            {listSemanticMessages}
          </List>
          <Text textSize={8}>To find out more..type "Semantic commit messages" in Google..duuh</Text>
        </Slide>
        



        <Slide transition={['fade']} bgColor="secondary">
          <Heading size={5} textColor="primary" margin="0 0 50px 0">
            Accessibility Insights for Web 
          </Heading>
          <Image src={images.chromeExtension} />
        </Slide>

        <Slide transition={['fade']} bgColor="secondary">
          <Heading size={5} textColor="primary" margin="0 0 50px 0">
            Accessibility Insights for Web 
          </Heading>
          <Image width="300px" display="inline-block" src={images.chromeExtensionOptionsMain} />
          <Image width="300px" display="inline-block" src={images.chromeExtensionOptionsSecondary} />
          <Image width="50%" display="inline-block" src={images.chromeExtensionOptionsHeadings} />
          <Image width="50%" display="inline-block" src={images.chromeExtensionOptionsTabs} />
        </Slide>

        <Slide transition={['spin']} bgColor="secondary" textColor="primary">
          <Image src={images.goodWork} width={500} margin="0 auto 50px" />
          <BlockQuote>
            <Quote>What’s dangerous is not to evolve.</Quote>
            <Cite margin="10px 0 0 30px">Jeff Bezos</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
