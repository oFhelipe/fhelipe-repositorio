import * as Popover from '@radix-ui/react-popover'
import * as S from './styles'
import brazillianFlag from '../../assets/images/brazillian-flag.png'
import usaFlag from '../../assets/images/usa-flag.png'
import { X } from '@phosphor-icons/react'
import { useConfig } from '../../context/ConfigProvider'
import { FormattedMessage } from 'react-intl'

const LanguagePopover = () => {
  const { changeLanguage, language } = useConfig()
  return (
    <Popover.Root>
      <Popover.Trigger>
        <S.PopoverFlag src={language === 'en' ? usaFlag : brazillianFlag} />
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content align="end" asChild>
          <S.PopoverContainer>
            <Popover.Close asChild>
              <S.CloseButton>
                <X size={24} />
              </S.CloseButton>
            </Popover.Close>
            <S.LanguageSelectButton onClick={() => changeLanguage('en')}>
              <img src={usaFlag} alt="usa" />
              <span>
                <FormattedMessage id="english" />
              </span>
            </S.LanguageSelectButton>
            <S.LanguageSelectButton onClick={() => changeLanguage('pt-BR')}>
              <img src={brazillianFlag} alt="brazil" />
              <span>
                <FormattedMessage id="portuguese" />
              </span>
            </S.LanguageSelectButton>
          </S.PopoverContainer>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}

export default LanguagePopover
