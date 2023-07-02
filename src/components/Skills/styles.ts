import styled from 'styled-components'

export const SkillsContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1140px;
  gap: 2rem;
  padding: 10vh 2rem;
  margin: auto;

  @media (min-width: 767px) {
    flex-direction: row;
  }
`

export const SkillInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  h2 {
    font-size: 2rem;
  }

  h3 {
    font-size: 1.375rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  p {
    font-size: 1rem;
    line-height: 1.2rem;
  }

  img {
    height: 3rem;
    width: 3rem;
  }

  @media (min-width: 767px) {
    h3 {
      margin-bottom: 1rem;
    }
  }
`

export const SkillListContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 1rem;
  flex: 1;
`
