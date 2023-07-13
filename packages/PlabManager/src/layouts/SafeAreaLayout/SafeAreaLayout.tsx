import React from 'react';
import { SafeAreaView } from 'react-native';
import { StyledView } from './SafeAreaLayout.styles';
import { SafeAreaLayoutProps } from './types';

const SafeAreaLayout = ({ children }: SafeAreaLayoutProps) => {
  return (
    <SafeAreaView>
      <StyledView>{children}</StyledView>
    </SafeAreaView>
  );
};

export default SafeAreaLayout;
