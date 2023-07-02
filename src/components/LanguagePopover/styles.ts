import styled from 'styled-components'

export const PopoverFlag = styled.img`
  height: 2rem;
  width: 2rem;
  border-radius: 100%;
`

export const PopoverContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  background-color: ${(props) => props.theme.colors.menuBackground};
  padding: 1rem;
  border-radius: 8px;
  margin-top: 0.5rem;
`

export const CloseButton = styled.button`
  padding-bottom: 0.2rem;
  background-color: transparent;
  border: none;
  width: 2rem;
`

export const LanguageSelectButton = styled.button`
  border: none;
  background-color: transparent;
  display: flex;
  width: 100%;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
`
