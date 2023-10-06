import { render, screen } from '@testing-library/react'
import TestProvider from '../../test/TestProvider'
import ProjectCard from '.'
import userEvent from '@testing-library/user-event'

describe('Componente: <ProjectCard />', () => {
  test('Deve rendenizar', () => {
    const project = {
      name: 'nome',
      description: 'descricao',
      image: 'string',
      link: 'https://example.com',
    }
    render(
      <TestProvider>
        <ProjectCard project={project} />
      </TestProvider>,
    )

    const projectName = screen.getByText('nome')
    expect(projectName).toBeInTheDocument()

    const projectDescription = screen.getByText('descricao')
    expect(projectDescription).toBeInTheDocument()
  })

  test('Ao clicar deve abir uma nova guia', async () => {
    const originalOpen = window.open
    window.open = jest.fn()
    const project = {
      name: 'nome',
      description: 'descricao',
      image: 'string',
      link: 'https://example.com',
    }

    render(
      <TestProvider>
        <ProjectCard project={project} />
      </TestProvider>,
    )
    const cardContainer = screen.getByTestId('project-card')

    await userEvent.click(cardContainer)

    expect(window.open).toHaveBeenCalledWith('https://example.com', '_blank')

    // Restore the original window.open function
    window.open = originalOpen
  })
})
