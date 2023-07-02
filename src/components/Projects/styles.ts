import styled from 'styled-components'

export const ProjectsContainer = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-left: 2rem;
  padding-top: 10vh;
  padding-bottom: 1rem;

  & > h3 {
    font-size: 2rem;
  }
  @media (min-width: 1440px) {
    & > h3 {
      margin-left: calc((100vw - 1440px) / 2);
    }
  }
`
export const CarrouselContainerContainer = styled.div`
  scroll-behavior: smooth;
  display: flex;
  gap: 1.5rem;
  overflow-x: scroll;
  overflow-y: hidden;
  position: relative;

  @media (min-width: 1023px) {
    overflow-x: hidden;
  }

  @media (min-width: 1440px) {
    padding-left: calc((100vw - 1440px) / 2);
  }
`
export const ProjectsListContainer = styled.div`
  display: flex;
  gap: 1rem;
  width: fit-content;
`

const SideButton = styled.button`
  position: absolute;
  line-height: 0;
  height: 3rem;
  width: 3rem;
  top: 50%;
  border-radius: 50%;
  background-color: transparent;
  border: none;
  background-color: ${(props) => props.theme.colors.cardBackground};
  border: solid 1px ${(props) => props.theme.colors.cardBorder};
`

export const LeftButton = styled(SideButton)`
  left: 0;
  @media (min-width: 1440px) {
    margin-left: calc((100vw - 1440px - 200px) / 2);
  }
`

export const RightButton = styled(SideButton)`
  right: 8px;
`
