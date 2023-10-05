import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Button from '.'

describe('Componente: <Button />', () => {
  test('Deve rendenizar', () => {
    render(<Button>Label</Button>)
    const button = screen.getByText('Label')
    expect(button).toBeInTheDocument()
  })

  test('Deve clicar na tarefa', async () => {
    const onClickMock = jest.fn()
    render(<Button onClick={onClickMock}>Label</Button>)
    const button = screen.getByText('Label')
    await userEvent.click(button)
    expect(onClickMock).toBeCalledTimes(1)
  })
})
