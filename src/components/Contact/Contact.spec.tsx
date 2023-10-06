import { render, screen } from '@testing-library/react'
import Contact from '.'
import ptBR from '../../locales/pt-br'
import en from '../../locales/en'
import TestProvider from '../../test/TestProvider'

describe('Componente: <Contact />', () => {
  test('Deve rendenizar em portugues', () => {
    render(
      <TestProvider initialLanguage="pt-BR">
        <Contact />
      </TestProvider>,
    )

    const contactContainer = screen.getByTestId('contact-container')
    expect(contactContainer).toBeInTheDocument()

    const contactMe1Title = screen.getByTestId('contactMe1')
    expect(contactMe1Title).toBeInTheDocument()
    expect(contactMe1Title.textContent).toBe(ptBR.contactMe1)
    expect(contactContainer).toContainElement(contactMe1Title)

    const contactMe2Title = screen.getByTestId('contactMe2')
    expect(contactMe2Title).toBeInTheDocument()
    expect(contactMe2Title.textContent).toBe(ptBR.contactMe2)
    expect(contactContainer).toContainElement(contactMe2Title)

    const contactMe3Title = screen.getByTestId('contactMe3')
    expect(contactMe3Title).toBeInTheDocument()
    expect(contactMe3Title.textContent).toBe(
      ptBR.contactMe2 + ' ' + ptBR.contactMe3,
    )
    expect(contactContainer).toContainElement(contactMe3Title)

    const contactMeSubTextTitle = screen.getByTestId('contactMeSubText')
    expect(contactMeSubTextTitle).toBeInTheDocument()
    expect(contactMeSubTextTitle.textContent).toBe(ptBR.contactMeSubText)
    expect(contactContainer).toContainElement(contactMeSubTextTitle)
  })

  test('Deve rendenizar em ingles', () => {
    render(
      <TestProvider initialLanguage="en">
        <Contact />
      </TestProvider>,
    )

    const contactContainer = screen.getByTestId('contact-container')
    expect(contactContainer).toBeInTheDocument()

    const contactMe1Title = screen.getByTestId('contactMe1')
    expect(contactMe1Title).toBeInTheDocument()
    expect(contactMe1Title.textContent).toBe(en.contactMe1)
    expect(contactContainer).toContainElement(contactMe1Title)

    const contactMe2Title = screen.getByTestId('contactMe2')
    expect(contactMe2Title).toBeInTheDocument()
    expect(contactMe2Title.textContent).toBe(en.contactMe2)
    expect(contactContainer).toContainElement(contactMe2Title)

    const contactMe3Title = screen.getByTestId('contactMe3')
    expect(contactMe3Title).toBeInTheDocument()
    expect(contactMe3Title.textContent).toBe(
      en.contactMe2 + ' ' + en.contactMe3,
    )
    expect(contactContainer).toContainElement(contactMe3Title)

    const contactMeSubTextTitle = screen.getByTestId('contactMeSubText')
    expect(contactMeSubTextTitle).toBeInTheDocument()
    expect(contactMeSubTextTitle.textContent).toBe(en.contactMeSubText)
    expect(contactContainer).toContainElement(contactMeSubTextTitle)
  })

  test('Deve ter um botão com um link para o LinkedIn', () => {
    render(
      <TestProvider initialLanguage="pt-BR">
        <Contact />
      </TestProvider>,
    )
    const button = screen.getByTestId('linkedin-button')
    const link = screen.getByTestId('linkedin-link')
    expect(button).toContainElement(link)
    expect(link).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/fhelipe-rodrigues/',
    )
  })

  test('Deve ter um botão com um link para o GitHub', () => {
    render(
      <TestProvider initialLanguage="pt-BR">
        <Contact />
      </TestProvider>,
    )
    const button = screen.getByTestId('github-button')
    const link = screen.getByTestId('github-link')
    expect(button).toContainElement(link)
    expect(link).toHaveAttribute('href', 'https://github.com/oFhelipe')
  })
})
