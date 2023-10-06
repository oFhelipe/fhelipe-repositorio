import { render, screen } from '@testing-library/react'
import Header from '.'
import ptBR from '../../locales/pt-br'
import TestProvider from '../../test/TestProvider'

describe('Componente: <Header />', () => {
  test('Deve rendenizar o header container', () => {
    render(
      <TestProvider initialLanguage="pt-BR">
        <Header />
      </TestProvider>,
    )
    const headerContainer = screen.getByTestId('header-container')
    expect(headerContainer).toBeInTheDocument()
  })

  test('Deve rendenizar o container itens do menu em portugues', () => {
    render(
      <TestProvider initialLanguage="pt-BR">
        <Header />
      </TestProvider>,
    )
    const linkList = screen.getAllByRole('listitem')
    expect(linkList).toHaveLength(5)
    linkList.forEach((link) => {
      expect(link.textContent).toBe(ptBR[link.getAttribute('data-testid')!])
    })
  })
})
