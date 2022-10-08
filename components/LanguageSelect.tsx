import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/menu'
import { Text } from '@chakra-ui/layout'
import { Icon } from '@chakra-ui/icon'
import { IconButton } from '@chakra-ui/button'
import { useTranslation } from 'react-i18next'
import i18n from 'i18next'

import * as LanguageIcons from 'components/icons/lang'
import { useLocalStorage } from 'hooks'

export function LanguageSelect() {
  const { i18n: i18nHook } = useTranslation()
  const [, setPreviousLanguage] = useLocalStorage('i18nlang', i18n.language)

  const handleLanguageChange = async (language: string) => {
    await i18nHook.changeLanguage(language)
    setPreviousLanguage(language)
  }

  const SpecificPreviousLanguageIcon =
    LanguageIcons[
      Object.keys(LanguageIcons).find((languageIcon) =>
        languageIcon.toLowerCase().includes(i18n.language)
      )
    ]

  return (
    <Menu placement="right" boundary="clippingParents" preventOverflow>
      <MenuButton
        as={IconButton}
        aria-label={i18n.language}
        icon={<Icon as={SpecificPreviousLanguageIcon} w={6} h={6} />}
      />
      <MenuList fontSize="20px">
        {['PolishFlag', 'EnglishFlag', 'SpanishFlag'].map((flag) => {
          const SpecificLanguageIcon = LanguageIcons[flag]

          const displayName = flag.replace('Flag', '')
          const language = displayName.toLowerCase()

          return (
            <MenuItem
              onClick={() => handleLanguageChange(language)}
              icon={<Icon as={SpecificLanguageIcon} w={6} h={6} />}
              key={flag}
            >
              <Text as="span">{flag.replace('Flag', '')}</Text>
            </MenuItem>
          )
        })}
      </MenuList>
    </Menu>
  )
}
