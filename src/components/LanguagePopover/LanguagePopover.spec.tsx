import { render, screen } from '@testing-library/react'
import LanguagePopover from '.'
import userEvent from '@testing-library/user-event'
import ptBR from '../../locales/pt-br'
import en from '../../locales/en'
import TestProvider from '../../test/TestProvider'

global.ResizeObserver = require('resize-observer-polyfill')

describe('Componente <LanguagePopover />', () => {
  test('Deve rendezinar o botao com a bandeira inicial', () => {
    render(
      <TestProvider initialLanguage="pt-BR">
        <LanguagePopover />
      </TestProvider>,
    )
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
    const img = screen.getByAltText('current flag')
    expect(button).toContainElement(img)
  })

  test('ao clicar no botão deve abrir o popover com os botões das bandeiras', async () => {
    render(
      <TestProvider>
        <LanguagePopover />
      </TestProvider>,
    )

    const notOpenedPopover = screen.queryByTestId('popover-container')
    expect(notOpenedPopover).toBeNull()

    const button = screen.getByRole('button')
    await userEvent.click(button)

    const openedPopover = await screen.findByTestId('popover-container')
    expect(openedPopover).toBeInTheDocument()

    const USAFlagButton = await screen.findByTestId('usaflag')
    expect(USAFlagButton).toBeInTheDocument()
    expect(openedPopover).toContainElement(USAFlagButton)

    const brazillianFlagButton = await screen.findByTestId('brazillianflag')
    expect(brazillianFlagButton).toBeInTheDocument()
    expect(openedPopover).toContainElement(brazillianFlagButton)
  })

  test('ao clicar no botão deve abrir o popover com os botões das bandeiras em portugues', async () => {
    render(
      <TestProvider initialLanguage="pt-BR">
        <LanguagePopover />
      </TestProvider>,
    )

    const notOpenedPopover = screen.queryByTestId('popover-container')
    expect(notOpenedPopover).toBeNull()

    const button = screen.getByRole('button')
    await userEvent.click(button)

    const openedPopover = await screen.findByTestId('popover-container')
    expect(openedPopover).toBeInTheDocument()

    const USAFlagButton = await screen.findByTestId('usaflag')
    expect(USAFlagButton).toBeInTheDocument()
    expect(openedPopover).toContainElement(USAFlagButton)
    expect(USAFlagButton.textContent).toBe(ptBR.english)

    const brazillianFlagButton = await screen.findByTestId('brazillianflag')
    expect(brazillianFlagButton).toBeInTheDocument()
    expect(openedPopover).toContainElement(brazillianFlagButton)
    expect(brazillianFlagButton.textContent).toBe(ptBR.portuguese)
  })

  test('ao clicar no botão deve abrir o popover com os botões das bandeiras em inglês', async () => {
    render(
      <TestProvider initialLanguage="en">
        <LanguagePopover />
      </TestProvider>,
    )

    const notOpenedPopover = screen.queryByTestId('popover-container')
    expect(notOpenedPopover).toBeNull()

    const button = screen.getByRole('button')
    await userEvent.click(button)

    const openedPopover = await screen.findByTestId('popover-container')
    expect(openedPopover).toBeInTheDocument()

    const USAFlagButton = await screen.findByTestId('usaflag')
    expect(USAFlagButton).toBeInTheDocument()
    expect(openedPopover).toContainElement(USAFlagButton)
    expect(USAFlagButton.textContent).toBe(en.english)

    const brazillianFlagButton = await screen.findByTestId('brazillianflag')
    expect(brazillianFlagButton).toBeInTheDocument()
    expect(openedPopover).toContainElement(brazillianFlagButton)
    expect(brazillianFlagButton.textContent).toBe(en.portuguese)
  })
})
