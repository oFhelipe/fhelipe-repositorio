import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem;
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.cardBackground};
  border: solid 0.5px ${(props) => props.theme.colors.cardBorder};
  gap: 1rem;
  width: 80vw;
  max-width: 28.125rem;

  img {
    margin: auto;
    width: 100%;
    aspect-ratio: 16/9;
    border-radius: 8px;
  }

  h3 {
    font-size: 1rem;
    align-self: flex-end;
  }
`
export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 0.5rem;

  p {
    line-height: 1.2rem;
  }

  h2 {
    font-size: 1.2rem;
  }
`
