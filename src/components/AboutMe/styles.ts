import styled from 'styled-components'

export const AboutMeContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 0 2rem;
  max-width: 1280px;
  align-items: center;
  gap: 2rem;
  justify-content: center;
  padding: 10vh 2rem;

  @media (min-width: 767px) {
    flex-direction: row;
    justify-content: center;
  }
`

export const ImageBackground = styled.div`
  border-radius: 8px;
  display: flex;
  width: fit-content;

  img {
    border-radius: 8px;
    width: 80vw;
    max-width: 400px;
  }

  @media (min-width: 767px) {
    justify-content: center;
    img {
      width: 40vw;
    }
  }
`

export const InfoBackground = styled.div`
  h3:first-child {
    font-size: 1rem;
    margin-bottom: 0.5rem;
    font-weight: bold;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.5rem;
  }

  h3 {
    font-weight: 500;
    font-size: 1.25rem;
  }
  h3 {
    margin-bottom: 0.5rem;
  }

  @media (min-width: 767px) {
    max-width: 50%;
  }
`
