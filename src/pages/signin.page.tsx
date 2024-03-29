import { GetServerSideProps } from 'next';
import NextLink from 'next/link';
import { Flex, Stack, Divider, Link } from '@chakra-ui/react';

import { FormContainer, FormButton, Input, Slogan } from 'core/sign-forms';
import { Footer } from 'core/footer';

import { useSignUser } from 'hooks/use-sign-user';
import { verifyAuthOnPublicPages } from 'services/verify-auth';

export default function SignIn() {
  const { user, userSet, handleSubmit } = useSignUser('sign-in');

  return (
    <>
      <Flex justify='center' mt='14'>
        <FormContainer onSubmit={handleSubmit}>
          <Slogan />

          <Stack spacing={5} align='center'>
            <Input
              name='email'
              type='email'
              placeholder='E-mail'
              value={user.email}
              onChange={(e) => userSet({ ...user, email: e.target.value })}
            />

            <Input
              name='password'
              type='password'
              placeholder='Password'
              value={user.password}
              onChange={(e) => userSet({ ...user, password: e.target.value })}
            />

            <FormButton bg='red.400' _hover={{ bg: 'red.500' }}>
              Sign in
            </FormButton>

            <Divider />

            <Link as={NextLink} href='/signup'>
              <FormButton bg='red.800' _hover={{ bg: 'red.900' }}>
                Create a new account
              </FormButton>
            </Link>

            <Link as={NextLink} href='/home'>
              <a style={{ textDecoration: 'underline' }}>
                Forgot your password?
              </a>
            </Link>
          </Stack>
        </FormContainer>
      </Flex>
      <Footer />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return verifyAuthOnPublicPages(ctx);
};
