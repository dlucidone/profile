import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  VStack,
  Grid,
  theme,
  Heading,
  Flex,
  Image
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import "./app.css";
import reactLogo from './icons/react.svg';
import reduxLogo from './icons/redux.svg';
import sassLogo from './icons/sass.svg';
import nodejsLogo from './icons/nodejs.svg';
import graphqlLogo from './icons/graphql.svg';
import jestLogo from './icons/jest.svg';
import nativescriptLogo from './icons/nativescript.svg';
import webpackLogo from './icons/webpack.svg';
import tsLogo from './icons/typescript-icon.svg';
import antLogo from './icons/ant-design.svg';
import materialLogo from './icons/material-ui.svg';
import bootstrapLogo from './icons/bootstrap.svg';
import storybookLogo from './icons/storybook-icon.svg';
import terraformLogo from './icons/terraform-icon.svg';
import dockerLogo from './icons/docker-icon.svg';


function App() {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid
          minH="100vh"
          p={3}
          direction="column"
          align="center"
          justify="center"
        >
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <Flex flexDirection="column" alignItems="flex-start">
              <Heading as="h1" size="4xl">
                Hello,
            </Heading>
              <Flex ><Heading as="h1" size="4xl">
                I'm
            </Heading>
                <Heading as="h1" size="4xl" className="gradient-text" ml="4">
                  Ravindra Mishra
            </Heading>
              </Flex>
              <Text className="shine">
                I'm a Software Engineer who builds things around web and seek for prefections in design.
            </Text>
            </Flex>

            <Flex flexDirection="row" alignItems="flex-start">
              <Image className="tech-logo" src={reactLogo} ></Image>
              <Image className="tech-logo" src={reduxLogo} ></Image>
              <Image className="tech-logo" src={tsLogo} ></Image>
              <Image className="tech-logo" src={nodejsLogo} ></Image>
              <Image className="tech-logo" src={graphqlLogo} ></Image>
            </Flex>
            <Flex flexDirection="row" alignItems="flex-start">
              <Image className="tech-logo" src={sassLogo} ></Image>
              <Image className="tech-logo" src={antLogo} ></Image>
              <Image className="tech-logo" src={materialLogo} ></Image>
              <Image className="tech-logo" src={bootstrapLogo} ></Image>
              <Image className="tech-logo" src={storybookLogo} ></Image>
            </Flex>
            <Flex flexDirection="row" alignItems="flex-start">
              <Image className="tech-logo" src={nativescriptLogo} ></Image>
              <Image className="tech-logo" src={jestLogo} ></Image>
              <Image className="tech-logo" src={webpackLogo} ></Image>
              <Image className="tech-logo" src={terraformLogo} ></Image>
              <Image className="tech-logo" src={dockerLogo} ></Image>
            </Flex>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
