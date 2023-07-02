import styled from 'styled-components'

export const HomeContainer = styled.div`
  margin: auto;
  padding: 4rem 2rem 0 2rem;
  height: 100vh;
  max-width: 1440px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: space-around;

  svg {
    animation: float 1.5s ease-in-out infinite;
  }

  @keyframes float {
    0% {
      transform: translatey(0px);
    }
    50% {
      transform: translatey(-10px);
    }
    100% {
      transform: translatey(0px);
    }
  }
`

export const InfoContainer = styled.div`
  margin-top: 4rem;

  h3 {
    font-size: 1.125rem;
    color: ${(props) => props.theme.colors.textStrong};
    margin-bottom: 1rem;
  }

  p {
    margin: auto;
    margin-bottom: 3rem;
    width: 80%;
  }

  h1 {
    font-size: 2.75rem;
    margin-bottom: 1rem;
  }

  @media (min-width: 767px) {
    h3 {
      font-size: 2rem;
    }

    h1 {
      font-size: 4.5rem;
    }

    p {
      font-size: 1.5rem;
    }
  }

  @media (min-width: 1023px) {
    h3 {
      font-size: 3rem;
    }

    h1 {
      font-size: 7rem;
    }

    p {
      font-size: 1.75rem;
    }
  }
`
