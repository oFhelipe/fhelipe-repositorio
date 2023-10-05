import { render, screen } from '@testing-library/react'
import AboutMe from '.'
import IntlProvider from '../../providers/IntlProvider'
import ptBR from '../../locales/pt-br'
import en from '../../locales/en'

describe('Componente: <AboutMe />', () => {
  test('Deve rendenizar em portugues', () => {
    render(
      <IntlProvider locale="pt-BR">
        <AboutMe />
      </IntlProvider>,
    )

    const aboutMeContainer = screen.getByTestId('about-me-container')
    expect(aboutMeContainer).toBeInTheDocument()

    const aboutMeTitle = screen.getByTestId('aboutMe')
    expect(aboutMeTitle).toBeInTheDocument()
    expect(aboutMeTitle.textContent).toBe(ptBR.aboutMe)
    expect(aboutMeContainer).toContainElement(aboutMeTitle)

    const functionTitle = screen.getByTestId('function')
    expect(functionTitle).toBeInTheDocument()
    expect(functionTitle.textContent).toBe(ptBR.function)
    expect(aboutMeContainer).toContainElement(functionTitle)

    const aboutMeText = screen.getByTestId('aboutMeText')
    expect(aboutMeText).toBeInTheDocument()
    expect(aboutMeText.textContent).toBe(ptBR.aboutMeText)
    expect(aboutMeContainer).toContainElement(aboutMeContainer)
  })

  test('Deve rendenizar em ingles', () => {
    render(
      <IntlProvider locale="en">
        <AboutMe />
      </IntlProvider>,
    )

    const aboutMeContainer = screen.getByTestId('about-me-container')
    expect(aboutMeContainer).toBeInTheDocument()

    const aboutMeTitle = screen.getByTestId('aboutMe')
    expect(aboutMeTitle).toBeInTheDocument()
    expect(aboutMeTitle.textContent).toBe(en.aboutMe)
    expect(aboutMeContainer).toContainElement(aboutMeTitle)

    const functionTitle = screen.getByTestId('function')
    expect(functionTitle).toBeInTheDocument()
    expect(functionTitle.textContent).toBe(en.function)
    expect(aboutMeContainer).toContainElement(functionTitle)

    const aboutMeText = screen.getByTestId('aboutMeText')
    expect(aboutMeText).toBeInTheDocument()
    expect(aboutMeText.textContent).toBe(en.aboutMeText)
    expect(aboutMeContainer).toContainElement(aboutMeContainer)
  })
})
