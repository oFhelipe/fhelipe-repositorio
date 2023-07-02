import styled from 'styled-components'

export const MouseContainer = styled.div`
  position: fixed;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  border: solid 2px ${(props) => props.theme.colors.textStrong};
  opacity: 1;
  pointer-events: none;
  top: -40px;
  left: -40px;
  z-index: 999999;
`
