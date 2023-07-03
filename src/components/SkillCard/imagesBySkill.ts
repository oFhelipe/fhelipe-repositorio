import reactGradient from '../../assets/icons/skills/react-gradient.webp'
import reactDark from '../../assets/icons/skills/react-dark.webp'
import reactDarkHover from '../../assets/icons/skills/react-dark-hover.webp'

import typescriptGradient from '../../assets/icons/skills/typescript-gradient.webp'
import typescriptDark from '../../assets/icons/skills/typescript-dark.webp'
import typescriptDarkHover from '../../assets/icons/skills/typescript-dark-hover.webp'

import sqlGradient from '../../assets/icons/skills/sql-gradient.webp'
import sqlDark from '../../assets/icons/skills/sql-dark.webp'
import sqlDarkHover from '../../assets/icons/skills/sql-dark-hover.webp'

import nodeGradient from '../../assets/icons/skills/node-gradient.webp'
import nodeDark from '../../assets/icons/skills/node-dark.webp'
import nodeDarkHover from '../../assets/icons/skills/node-dark-hover.webp'

import expressGradient from '../../assets/icons/skills/express-gradient.webp'
import expressDark from '../../assets/icons/skills/express-dark.webp'
import expressDarkHover from '../../assets/icons/skills/express-dark-hover.webp'

import typeormGradient from '../../assets/icons/skills/typeorm-gradient.webp'
import typeormDark from '../../assets/icons/skills/typeorm-dark.webp'
import typeormDarkHover from '../../assets/icons/skills/typeorm-dark-hover.webp'

import adonisGradient from '../../assets/icons/skills/adonis-gradient.webp'
import adonisDark from '../../assets/icons/skills/adonis-dark.webp'
import adonisDarkHover from '../../assets/icons/skills/adonis-dark-hover.webp'

import japaTestGradient from '../../assets/icons/skills/japa-test-gradient.webp'
import japaTestDark from '../../assets/icons/skills/japa-test-dark.webp'
import japaTestDarkHover from '../../assets/icons/skills/japa-test-dark-hover.webp'

import styledComponentsGradient from '../../assets/icons/skills/styled-components-gradient.webp'
import styledComponentsDark from '../../assets/icons/skills/styled-components-dark.webp'
import styledComponentsDarkHover from '../../assets/icons/skills/styled-components-dark-hover.webp'

import tailwindGradient from '../../assets/icons/skills/tailwind-gradient.webp'
import tailwindDark from '../../assets/icons/skills/tailwind-dark.webp'
import tailwindDarkHover from '../../assets/icons/skills/tailwind-dark-hover.webp'

import storybookGradient from '../../assets/icons/skills/storybook-gradient.webp'
import storybookDark from '../../assets/icons/skills/storybook-dark.webp'
import storybookDarkHover from '../../assets/icons/skills/storybook-dark-hover.webp'

import figmaGradient from '../../assets/icons/skills/figma-gradient.webp'
import figmaDark from '../../assets/icons/skills/figma-dark.webp'
import figmaDarkHover from '../../assets/icons/skills/figma-dark-hover.webp'

import gitGradient from '../../assets/icons/skills/git-gradient.webp'
import gitDark from '../../assets/icons/skills/git-dark.webp'
import gitDarkHover from '../../assets/icons/skills/git-dark-hover.webp'

import socketIoGradient from '../../assets/icons/skills/socket-io-gradient.webp'
import socketIoDark from '../../assets/icons/skills/socket-io-dark.webp'
import socketIoDarkHover from '../../assets/icons/skills/socket-io-dark-hover.webp'

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
