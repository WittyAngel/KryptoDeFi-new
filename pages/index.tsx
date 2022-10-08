import { Box, Text, Heading, OrderedList, ListItem, Stack, Flex } from '@chakra-ui/layout'
import { useTranslation } from 'react-i18next'
import { useDisclosure } from '@chakra-ui/hooks'
import { Button } from '@chakra-ui/button'
import { Icon } from '@chakra-ui/icon'
import { Modal, ModalOverlay, ModalContent, ModalCloseButton } from '@chakra-ui/modal'
import { useMoralis } from 'react-moralis'
import { useContest, useRegisterContest, useGetContestRegistration } from 'hooks/redux/contest'

import * as CompetitionIcons from 'components/icons/competition'

export default function Home() {
  const { t } = useTranslation()
  const contest = useContest()
  const { user } = useMoralis()
  const contestUser = useGetContestRegistration(user?.id)
  const registerContest = useRegisterContest()

  const handleTeamJoin = (group_id) => {
    if (user && !contestUser?.group_id) {
      registerContest({
        user_id: user.id,
        group_id
      })
    }
  }

  return (
    <Stack w="100%" h="100%" direction="column" spacing={8}>
      <Flex
        w="100%"
        h="277px"
        bg="gray_alpha"
        mixBlendMode="difference"
        backdropFilter="blur(8px)"
        borderWidth="1px"
        borderStyle="solid"
        borderColor="primary"
        justify="center"
        align="center"
      >
        <Heading fontFamily="Lato" fontStyle="italic">
          {t('COMPETITION_PAGE_WELCOME_MESSAGE')}
        </Heading>
      </Flex>
      <Flex
        w="100%"
        p={8}
        minH="100%"
        justify="space-between"
        align="space-between"
        bg="gray_alpha"
        mixBlendMode="difference"
        backdropFilter="blur(8px)"
        borderWidth="1px"
        borderStyle="solid"
        borderColor="primary"
      >
        <Flex flexDir="column" align="space-between" justify="space-between" mr={8}>
          <Heading
            textAlign="center"
            fontSize="5xl"
            fontWeight="normal"
            textTransform="uppercase"
            fontFamily="Formation Sans"
          >
            {t('COMPETITION_PAGE_JOIN_OUR_COMPETITION')}
          </Heading>
          <Flex direction="row" mt={8}>
            <Box fontFamily="Lato" fontSize="3xl" w="50%">
              <OrderedList>
                <ListItem>
                  <Text>{t('COMPETITION_PAGE_STEPS_REGISTER')}</Text>
                </ListItem>
                <ListItem>
                  <Text>{t('COMPETITION_PAGE_STEPS_LOGIN')}</Text>
                </ListItem>
                <ListItem>
                  <Text>{t('COMPETITION_PAGE_STEPS_CHOOSE_TEAM')}</Text>
                </ListItem>
              </OrderedList>
            </Box>
            <Flex w="50%" justify="flex-end" align="flex-end">
              <Text fontSize="xl" textAlign="right" fontFamily="Lato">
                {t('COMPETITION_PAGE_PRIZE')}
                <br />
                {t('COMPETITION_PAGE_PRIZE_POOL', { first: '***', second: '***', third: '***' })}
              </Text>
            </Flex>
          </Flex>
          <Stack
            mt={4}
            direction="row"
            h="100%"
            spacing={{ xl: 2, '2xl': 4 }}
            justify="space-between"
          >
            {(contest?.groups?.length > 0) && contest.groups.map((group) => (
              <TeamCard
                key={group.group_id}
                {...group}
                contestUser={contestUser}
                onContestJoin={() => handleTeamJoin(group.group_id)}
              />
            ))}
          </Stack>
        </Flex>
        <Box w="400px" py={4} bg="light_accent">
          <Heading
            textAlign="center"
            fontFamily="Formation Sans"
            fontWeight="normal"
            fontSize="5xl"
          >
            Rules
          </Heading>
          <OrderedList
            as={Stack}
            spacing={4}
            mr={4}
            px={4}
            fontFamily="Lato"
            fontSize="18px"
            lineHeight="19px"
          >
            <ListItem>{t('COMPETITION_PAGE_RULES_1')}</ListItem>
            {/*<Text my={2} color="primary" textAlign="center" fontSize="12px" lineHeight="14px">*/}
            {/*  {t('COMPETITION_PAGE_RULES_1_NOTE')}*/}
            {/*</Text>*/}
            <ListItem>{t('COMPETITION_PAGE_RULES_2')}</ListItem>
            <ListItem>{t('COMPETITION_PAGE_RULES_3')}</ListItem>
            <ListItem>{t('COMPETITION_PAGE_RULES_4')}</ListItem>
            <ListItem>{t('COMPETITION_PAGE_RULES_5')}</ListItem>
            <ListItem>{t('COMPETITION_PAGE_RULES_6')}</ListItem>
            <ListItem>{t('COMPETITION_PAGE_RULES_7')}</ListItem>
            <ListItem>{t('COMPETITION_PAGE_RULES_8')}</ListItem>
            <ListItem>{t('COMPETITION_PAGE_RULES_9')}</ListItem>
          </OrderedList>
        </Box>
      </Flex>
    </Stack>
  )
}

type TeamCardProps = {
  name: string
  icon: string
  totalAmount: string
  totalParticipants: string,
  group_id: number,
  contestUser: any,
  onContestJoin: () => void
}

function TeamCard({ name, icon, totalAmount, group_id, totalParticipants, contestUser, onContestJoin }: TeamCardProps) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { t } = useTranslation()

  const SpecificIcon =
    CompetitionIcons[
      Object.keys(CompetitionIcons).find((competitionIcon) => competitionIcon.includes(icon))
    ]

  return (
    <>
      <Flex
        key={name}
        w="100%"
        py={2}
        flexDir="column"
        borderWidth="1px"
        bg="light_accent"
        justify="space-between"
        borderStyle="solid"
        borderColor="primary"
        role="group"
        onClick={() => !contestUser?.group_id && onOpen()}
        _hover={{
          bg: 'primary',
          cursor: 'pointer'
        }}
      >
        <Flex align="center" justify="center">
          <Icon as={SpecificIcon} w={20} h={20} color="black" />
        </Flex>
        <Flex justify="center">
          <Heading color="black" textAlign="center" fontFamily="Formation Sans" fontWeight="normal">
            {name}
          </Heading>

        </Flex>
        <Flex justify="center">
          {(contestUser?.group_id === group_id) && (
            <Heading color="white" textAlign="center" fontFamily="Formation Sans" fontWeight="small">
              Joined
            </Heading>
          )}
        </Flex>
        <Flex flexDir="column" fontFamily="Formation Sans, Lato" fontWeight="normal" align="center">
          <Heading color="black" fontFamily="inherit" fontWeight="inherit">
            {t('COMPETITION_PAGE_TEAM_CARD_VOLUME')}
          </Heading>
          <Heading
            _groupHover={{ color: '#5D7066' }}
            color="primary"
            fontFamily="inherit"
            fontWeight="inherit"
          >
            {'$'}
            {totalAmount}
          </Heading>
        </Flex>

        <Flex px={2} my={4} flexDir="row">
          <Heading
            lineHeight="0.8"
            fontSize="2xl"
            textAlign="right"
            fontFamily="Formation Sans, Lato"
            fontWeight="normal"
            _groupHover={{ color: 'black' }}
          >
            {t('COMPETITION_PAGE_TEAM_CARD_TRADERS')}
          </Heading>
          <Box mx={4} p={2} bg="#00402F" fontFamily="Lato" fontSize="xl">
            {totalParticipants}
          </Box>
        </Flex>
      </Flex>
      <Modal variant="glassy" preserveScrollBarGap isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent p={8} px={20}>
          <ModalCloseButton size="lg" />
          <Heading
            mt={4}
            fontFamily="Formation Sans, Lato"
            fontWeight="normal"
            fontSize="2xl"
            textAlign="center"
          >
            {t('COMPETITION_PAGE_TEAM_CARD_MODAL_JOINING')}
          </Heading>
          <Flex mt={16} align="center" flexDir="column">
            <Icon as={SpecificIcon} w={20} h={20} color="black" />
            <Heading
              fontFamily="Formation Sans, Lato"
              fontWeight="normal"
              fontSize="5xl"
              color="black"
            >
              {name}
            </Heading>
          </Flex>
          <Text
            mt={8}
            fontSize="xl"
            fontWeight="bold"
            fontFamily="Lato"
            fontStyle="italic"
            textAlign="center"
          >
            {t('COMPETITION_PAGE_TEAM_CARD_CONFIRMATION')}
          </Text>
          <Text mt={8} fontSize="md" fontWeight="bold" fontFamily="Lato" textAlign="center">
            {t('COMPETITION_PAGE_TEAM_CARD_ACCEPT_RULES')}
          </Text>
          <Button
            mt={8}
            w="100%"
            onClick={() => {
              onClose()
              onContestJoin()
            }}
            variant="regular-cta"
          >
            {t('COMPETITION_PAGE_TEAM_CARD_CONFIRM_BUTTON')}
          </Button>
        </ModalContent>
      </Modal>
    </>
  )
}
