import { render, screen } from '@testing-library/react'
import TestProvider from '../../test/TestProvider'
import SkillCard from '.'
import userEvent from '@testing-library/user-event'

describe('Componente: <SkillCard />', () => {
  test('Deve rendenizar', () => {
    const mockOnClick = jest.fn()
    render(
      <TestProvider>
        <SkillCard isSelected={false} name="Node" onClick={mockOnClick} />
      </TestProvider>,
    )
    const skillCard = screen.getByTestId('skill_Node')
    expect(skillCard).toBeInTheDocument()
  })

  test('Ao clicar deve executar a função', async () => {
    const mockOnClick = jest.fn()
    render(
      <TestProvider>
        <SkillCard isSelected={false} name="Node" onClick={mockOnClick} />
      </TestProvider>,
    )
    const skillCardImage = screen.getByTestId('skill_image_Node')

    await userEvent.click(skillCardImage)

    expect(mockOnClick).toHaveBeenCalledTimes(1)
  })
})
