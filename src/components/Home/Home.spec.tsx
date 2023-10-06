import { render, screen } from '@testing-library/react'
import Home from '.'
import ptBR from '../../locales/pt-br'
import en from '../../locales/en'
import TestProvider from '../../test/TestProvider'

describe('Componente <Home />', () => {
  test('Deve rendezinar o container', () => {
    render(
      <TestProvider initialLanguage="pt-BR">
        <Home />
      </TestProvider>,
    )
    const container = screen.getByTestId('home-container')
    expect(container).toBeInTheDocument()
  })

  test('Deve rendezinar os textos em portugues', () => {
    render(
      <TestProvider initialLanguage="pt-BR">
        <Home />
      </TestProvider>,
    )
    const container = screen.getByTestId('home-container')
    expect(container).toBeInTheDocument()

    const iamText = screen.getByTestId('iam')
    expect(iamText).toBeInTheDocument()
    expect(iamText.textContent).toBe(ptBR.iam)
    expect(container).toContainElement(iamText)

    const fullstackText = screen.getByTestId('fullstack')
    expect(fullstackText).toBeInTheDocument()
    expect(fullstackText.textContent).toBe(ptBR.fullstack)
    expect(container).toContainElement(fullstackText)

    const whatIDoText = screen.getByTestId('whatIDo')
    expect(whatIDoText).toBeInTheDocument()
    expect(whatIDoText.textContent).toBe(ptBR.whatIDo)
    expect(container).toContainElement(whatIDoText)

    const contactMeCTAText = screen.getByTestId('contactMeCTA')
    expect(contactMeCTAText).toBeInTheDocument()
    expect(contactMeCTAText.textContent).toBe(ptBR.contactMeCTA)
    expect(container).toContainElement(contactMeCTAText)
  })

  test('Deve rendezinar os textos em ingles', () => {
    render(
      <TestProvider initialLanguage="en">
        <Home />
      </TestProvider>,
    )
    const container = screen.getByTestId('home-container')
    expect(container).toBeInTheDocument()

    const iamText = screen.getByTestId('iam')
    expect(iamText).toBeInTheDocument()
    expect(iamText.textContent).toBe(en.iam)
    expect(container).toContainElement(iamText)

    const fullstackText = screen.getByTestId('fullstack')
    expect(fullstackText).toBeInTheDocument()
    expect(fullstackText.textContent).toBe(en.fullstack)
    expect(container).toContainElement(fullstackText)

    const whatIDoText = screen.getByTestId('whatIDo')
    expect(whatIDoText).toBeInTheDocument()
    expect(whatIDoText.textContent).toBe(en.whatIDo)
    expect(container).toContainElement(whatIDoText)

    const contactMeCTAText = screen.getByTestId('contactMeCTA')
    expect(contactMeCTAText).toBeInTheDocument()
    expect(contactMeCTAText.textContent).toBe(en.contactMeCTA)
    expect(container).toContainElement(contactMeCTAText)
  })
})
