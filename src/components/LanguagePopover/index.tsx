import * as Popover from '@radix-ui/react-popover'
import * as S from './styles'
import brazillianFlag from '../../assets/images/brazillian-flag.webp'
import usaFlag from '../../assets/images/usa-flag.webp'
import { X } from '@phosphor-icons/react'
import { useConfig } from '../../providers/ConfigProvider'
import { FormattedMessage } from 'react-intl'

const LanguagePopover = () => {
  const { changeLanguage, language } = useConfig()
  return (
    <Popover.Root>
      <Popover.Trigger>
        <S.PopoverFlag
          alt="current flag"
          src={language === 'en' ? usaFlag : brazillianFlag}
        />
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content align="end" asChild>
          <S.PopoverContainer data-testid="popover-container">
            <Popover.Close asChild>
              <S.CloseButton title="close popover">
                <X size={24} />
              </S.CloseButton>
            </Popover.Close>
            <S.LanguageSelectButton
              data-testid="usaflag"
              onClick={() => changeLanguage('en')}
            >
              <img src={usaFlag} alt="usa" title="USA Flag" />
              <span>
                <FormattedMessage id="english" />
              </span>
            </S.LanguageSelectButton>
            <S.LanguageSelectButton
              data-testid="brazillianflag"
              onClick={() => changeLanguage('pt-BR')}
            >
              <img src={brazillianFlag} title="Brazillian Flag" alt="brazil" />
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
