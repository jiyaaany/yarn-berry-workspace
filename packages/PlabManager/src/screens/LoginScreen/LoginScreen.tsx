import React from 'react';

import { Button, FormControl, Input, Stack } from 'native-base';
import SafeAreaLayout from '@layouts/SafeAreaLayout';

const LoginScreen = () => {
  const handleLogin = () => {};

  return (
    <SafeAreaLayout>
      <FormControl>
        <Stack>
          <FormControl.Label>이메일</FormControl.Label>
          <Input placeholder="이메일을 입력해 주세요." />
        </Stack>
        <Stack>
          <FormControl.Label>비밀번호</FormControl.Label>
          <Input type="password" placeholder="비밀번호" />
        </Stack>
      </FormControl>
      <Button mt="2" onPress={handleLogin}>
        로그인
      </Button>
    </SafeAreaLayout>
  );
};

export default LoginScreen;
