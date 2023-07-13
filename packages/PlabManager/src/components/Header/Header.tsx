import React, { useEffect, useState } from 'react';
import { SvgUri, SvgCssUri } from 'react-native-svg';
import { HStack, IconButton, Text } from 'native-base';

const Header = (): JSX.Element => {
  const [imgXml, setImgXml] = useState('<svg></svg>');

  const getImgXml = async () => {
    const url =
      'https://plab-football.s3.amazonaws.com/static/img/logo_kr_tm.svg';
    const xml = await (await fetch(url)).text();
    setImgXml(xml);
  };

  useEffect(() => {
    getImgXml();
  }, []);

  return (
    <HStack
      bg="black"
      px="1"
      py="3"
      justifyContent="space-between"
      alignItems="center"
      w="100%">
      <HStack alignItems="center">
        <Text color="white" fontSize="20" fontWeight="bold">
          매니저
        </Text>
      </HStack>
    </HStack>
  );
};
export default Header;
