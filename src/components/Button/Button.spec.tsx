import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Button from '.'
import ThemeProvider from '../../providers/ThemeProvider'
import TestProvider from '../../test/TestProvider'

describe('Componente: <Button />', () => {
  test('Deve rendenizar', () => {
    render(
      <TestProvider>
        <Button>Label</Button>
      </TestProvider>,
    )
    const button = screen.getByText('Label')
    expect(button).toBeInTheDocument()
  })

  test('Deve clicar na tarefa', async () => {
    const onClickMock = jest.fn()
    render(
      <ThemeProvider>
        <Button onClick={onClickMock}>Label</Button>
      </ThemeProvider>,
    )
    const button = screen.getByText('Label')
    await userEvent.click(button)
    expect(onClickMock).toBeCalledTimes(1)
  })
})
