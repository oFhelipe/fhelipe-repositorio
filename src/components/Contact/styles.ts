import styled from 'styled-components'

export const ContactContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 0 2rem;
  max-width: 1280px;
  align-items: center;
  justify-content: center;
  height: 100vh;

  & > p {
    width: 70%;
    text-align: center;
  }

  button {
    min-width: 250px;
  }

  h1 {
    font-size: 2rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media (min-width: 375px) {
    h1 {
      font-size: 2.5rem;
    }
  }

  @media (min-width: 767px) {
    h1 {
      font-size: 5rem;
    }
  }

  @media (min-width: 1023px) {
    h1 {
      font-size: 7rem;
    }
  }

  & > p {
    margin-top: 1rem;
    margin-bottom: 2rem;
    line-height: 1.2rem;
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 767px) {
    flex-direction: row;
    gap: 2rem;
  }
`
