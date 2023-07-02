import reactGradient from '../../assets/icons/skills/react-gradient.png'
import reactDark from '../../assets/icons/skills/react-dark.png'
import reactDarkHover from '../../assets/icons/skills/react-dark-hover.png'

import typescriptGradient from '../../assets/icons/skills/typescript-gradient.png'
import typescriptDark from '../../assets/icons/skills/typescript-dark.png'
import typescriptDarkHover from '../../assets/icons/skills/typescript-dark-hover.png'

import sqlGradient from '../../assets/icons/skills/sql-gradient.png'
import sqlDark from '../../assets/icons/skills/sql-dark.png'
import sqlDarkHover from '../../assets/icons/skills/sql-dark-hover.png'

import nodeGradient from '../../assets/icons/skills/node-gradient.png'
import nodeDark from '../../assets/icons/skills/node-dark.png'
import nodeDarkHover from '../../assets/icons/skills/node-dark-hover.png'

import expressGradient from '../../assets/icons/skills/express-gradient.png'
import expressDark from '../../assets/icons/skills/express-dark.png'
import expressDarkHover from '../../assets/icons/skills/express-dark-hover.png'

import typeormGradient from '../../assets/icons/skills/typeorm-gradient.png'
import typeormDark from '../../assets/icons/skills/typeorm-dark.png'
import typeormDarkHover from '../../assets/icons/skills/typeorm-dark-hover.png'

import adonisGradient from '../../assets/icons/skills/adonis-gradient.png'
import adonisDark from '../../assets/icons/skills/adonis-dark.png'
import adonisDarkHover from '../../assets/icons/skills/adonis-dark-hover.png'

import japaTestGradient from '../../assets/icons/skills/japa-test-gradient.png'
import japaTestDark from '../../assets/icons/skills/japa-test-dark.png'
import japaTestDarkHover from '../../assets/icons/skills/japa-test-dark-hover.png'

import styledComponentsGradient from '../../assets/icons/skills/styled-components-gradient.png'
import styledComponentsDark from '../../assets/icons/skills/styled-components-dark.png'
import styledComponentsDarkHover from '../../assets/icons/skills/styled-components-dark-hover.png'

import tailwindGradient from '../../assets/icons/skills/tailwind-gradient.png'
import tailwindDark from '../../assets/icons/skills/tailwind-dark.png'
import tailwindDarkHover from '../../assets/icons/skills/tailwind-dark-hover.png'

import storybookGradient from '../../assets/icons/skills/storybook-gradient.png'
import storybookDark from '../../assets/icons/skills/storybook-dark.png'
import storybookDarkHover from '../../assets/icons/skills/storybook-dark-hover.png'

import figmaGradient from '../../assets/icons/skills/figma-gradient.png'
import figmaDark from '../../assets/icons/skills/figma-dark.png'
import figmaDarkHover from '../../assets/icons/skills/figma-dark-hover.png'

import gitGradient from '../../assets/icons/skills/git-gradient.png'
import gitDark from '../../assets/icons/skills/git-dark.png'
import gitDarkHover from '../../assets/icons/skills/git-dark-hover.png'

import socketIoGradient from '../../assets/icons/skills/socket-io-gradient.png'
import socketIoDark from '../../assets/icons/skills/socket-io-dark.png'
import socketIoDarkHover from '../../assets/icons/skills/socket-io-dark-hover.png'

interface IImageSkill {
  gradient: string
  dark: string
  'dark-hover': string
  light: string
  'light-hover': string
}

const imagesBySkill = {
  'React / React Native': {
    gradient: reactGradient,
    dark: reactDark,
    'dark-hover': reactDarkHover,
    light: reactDark,
    'light-hover': reactDarkHover,
  },
  Typescript: {
    gradient: typescriptGradient,
    dark: typescriptDark,
    'dark-hover': typescriptDarkHover,
    light: typescriptDark,
    'light-hover': typescriptDarkHover,
  },
  SQL: {
    gradient: sqlGradient,
    dark: sqlDark,
    'dark-hover': sqlDarkHover,
    light: sqlDark,
    'light-hover': sqlDarkHover,
  },
  Node: {
    gradient: nodeGradient,
    dark: nodeDark,
    'dark-hover': nodeDarkHover,
    light: nodeDark,
    'light-hover': nodeDarkHover,
  },
  Express: {
    gradient: expressGradient,
    dark: expressDark,
    'dark-hover': expressDarkHover,
    light: expressDark,
    'light-hover': expressDarkHover,
  },
  TypeORM: {
    gradient: typeormGradient,
    dark: typeormDark,
    'dark-hover': typeormDarkHover,
    light: typeormDark,
    'light-hover': typeormDarkHover,
  },
  Adonis: {
    gradient: adonisGradient,
    dark: adonisDark,
    'dark-hover': adonisDarkHover,
    light: adonisDark,
    'light-hover': adonisDarkHover,
  },
  'Japa Test': {
    gradient: japaTestGradient,
    dark: japaTestDark,
    'dark-hover': japaTestDarkHover,
    light: japaTestDark,
    'light-hover': japaTestDarkHover,
  },
  'Styled Components': {
    gradient: styledComponentsGradient,
    dark: styledComponentsDark,
    'dark-hover': styledComponentsDarkHover,
    light: styledComponentsDark,
    'light-hover': styledComponentsDarkHover,
  },
  Tailwind: {
    gradient: tailwindGradient,
    dark: tailwindDark,
    'dark-hover': tailwindDarkHover,
    light: tailwindDark,
    'light-hover': tailwindDarkHover,
  },
  Storybook: {
    gradient: storybookGradient,
    dark: storybookDark,
    'dark-hover': storybookDarkHover,
    light: storybookDark,
    'light-hover': storybookDarkHover,
  },
  Figma: {
    gradient: figmaGradient,
    dark: figmaDark,
    'dark-hover': figmaDarkHover,
    light: figmaDark,
    'light-hover': figmaDarkHover,
  },
  Git: {
    gradient: gitGradient,
    dark: gitDark,
    'dark-hover': gitDarkHover,
    light: gitDark,
    'light-hover': gitDarkHover,
  },
  'Socket Io': {
    gradient: socketIoGradient,
    dark: socketIoDark,
    'dark-hover': socketIoDarkHover,
    light: socketIoDark,
    'light-hover': socketIoDarkHover,
  },
} as { [key: string]: IImageSkill }

export default imagesBySkill
