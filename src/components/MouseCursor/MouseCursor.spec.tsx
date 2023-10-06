import { render, screen } from '@testing-library/react'
import TestProvider from '../../test/TestProvider'
import MouseCursor from '.'

describe('Componente: <MouseCursor />', () => {
  test('Deve rendenizar', () => {
    render(
      <TestProvider>
        <MouseCursor />
      </TestProvider>,
    )

    const customMouseCursor = screen.getByTestId('custom-mouse')
    expect(customMouseCursor).toBeInTheDocument()
  })
})
