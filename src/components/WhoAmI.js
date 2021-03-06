import {
  Stack,
  Heading,
  Box,
  Avatar,
  Text,
  PseudoBox,
  Flex,
  Link,
} from '@chakra-ui/core';
import { AiFillLinkedin, AiOutlineTwitter } from 'react-icons/ai';
import {
  IoMdCheckmarkCircleOutline,
  IoIosCloseCircleOutline,
} from 'react-icons/io';

const WhoAmI = () => (
  <Stack
    as="section"
    spacing={8}
    maxWidth="1000px"
    flexDirection={['column', 'column', 'row', 'row']}
    justifyContent="space-between"
    alignItems="center"
    width="100%"
    p={8}
    mt={[0, 0, 8]}
    mb={[0, 0, 8]}
    mx="auto"
  >
    <Box>
      <Heading as="h1" size="2xl" lineHeight={1} color="gray.900" mb={5}>
        Who Is This
        <br />
        For ?
      </Heading>
      <Box color="gray.700" mb={4} fontSize="lg" maxW={400}>
        If you are still not sure that its for you are not{' '}
        <Link href="mailto:pranavkp.me@outlook.com">
          <b>email me</b>
        </Link>{' '}
        and ask
      </Box>
      <Stack mt={[0, 0, 8]} mb={[0, 0, 8]}>
        <Stack isInline>
          <Box
            as={IoIosCloseCircleOutline}
            size="24px"
            color="red.400"
            mr={0}
          />
          <Heading ml={1} size="md" fontWeight="extrabold" color="gray.900">
            Not for beginners
          </Heading>
        </Stack>
        <Stack isInline>
          <Box
            as={IoMdCheckmarkCircleOutline}
            size="24px"
            color="#00BFA5"
            mr={0}
          />
          <Heading ml={1} size="md" fontWeight="extrabold" color="gray.900">
            Command Line
          </Heading>
        </Stack>
        <Stack isInline>
          <Box
            as={IoMdCheckmarkCircleOutline}
            size="24px"
            color="#00BFA5"
            mr={0}
          />
          <Heading ml={1} size="md" fontWeight="extrabold" color="gray.900">
            Dev & Software Engineer
          </Heading>
        </Stack>
        <Stack isInline>
          <Box
            as={IoMdCheckmarkCircleOutline}
            size="24px"
            color="#00BFA5"
            mr={0}
          />
          <Heading ml={1} size="md" fontWeight="extrabold" color="gray.900">
            Open Source Contributor
          </Heading>
        </Stack>
      </Stack>
    </Box>
    <Box textAlign="center">
      <Box>
        <Avatar size="xl" name="Pranav Patel" src="author.jpeg" m={5} />
        <Text>Meet The Author</Text>
      </Box>
      <Heading color="gray.900">Pranav Patel</Heading>
      <Text color="gray.500" mb={5}>
        Software Engineer
      </Text>
      <Text color="gray.500" mb={5} maxW={300}>
        JavaScript, React, Design Systems, a software engineer by passion, love
        solving problem. Most loved thing in js is the closer property, figuring
        out life purpose
      </Text>
      <Flex justifyContent="center">
        <Box as={AiFillLinkedin} size="32px" color="blue.400" m={2} />
        <Box as={AiOutlineTwitter} size="32px" color="green.400" m={2} />
      </Flex>
    </Box>
  </Stack>
);
export default WhoAmI;
