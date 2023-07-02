import { ButtonHTMLAttributes } from 'react'
import * as S from './styles'

type ButtonProps = {} & ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({ children, className, ...buttonProps }: ButtonProps) => {
  return (
    <S.ButtonContainer className={`gradient ${className}`} {...buttonProps}>
      <div>{children}</div>
    </S.ButtonContainer>
  )
}

export default Button
