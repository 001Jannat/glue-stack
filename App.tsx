import { config } from '@gluestack-ui/config';
import { Box, GluestackUIProvider, Text, Input, InputField, Button, VStack, ButtonText, Icon, Heading, FormControl } from '@gluestack-ui/themed';
import { ScrollView } from 'react-native';
import { useState } from 'react';
import Gradient from './assets/Icons/Gradient';
import { Center } from '@gluestack-ui/themed';

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <Home />
    </GluestackUIProvider>
  );
}

const Home = () => {
  return <Container />;
};

const FeatureCard = ({ iconSvg: IconSvg, name, desc }: any) => {
  return (
    <Box
      flexDirection="column"
      borderWidth={1}
      borderColor="$borderDark700"
      $web-flex={1}
      m="$2"
      p="$4"
      rounded="$md"
    >
      <Box alignItems="center" display="flex" flexDirection="row">
        {/* <Image source={iconSvg} alt="document" width={22} height={22} /> */}
        <Text>
          <IconSvg />
        </Text>
        <Text fontSize={22} color="$white" fontWeight="500" ml="$2">
          {name}
        </Text>
      </Box>
      <Text color="$textDark400" mt="$2">
        {desc}
      </Text>
    </Box>
  );
};

const Container = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [showSecondCenter, setShowSecondCenter] = useState(false);
  const [showVerificationSuccess, setShowVerificationSuccess] = useState(false);

  const handleSubmit = () => {

    setShowSecondCenter(true);
  };

  const handleVerify = () => {
    
    setShowVerificationSuccess(true);
  };

  return (
    <Box flex={1} backgroundColor="$black">
      <ScrollView style={{ height: '100%' }} contentContainerStyle={{ flexGrow: 1 }}>
        <Box position="absolute" $base-h={500} $base-w={500} $lg-h={700} $lg-w={700}>
          <Gradient />
        </Box>
        <Box height="5%" $base-my="$16" $base-mx="$5" $base-h="20%" $lg-my="$24" $lg-mx="$32" justifyContent="space-between" alignItems="center">
          <Box bg="#64748B33" py="$2" px="$6" rounded="$full" alignItems="center" marginTop={20} $base-flexDirection="column" $sm-flexDirection="row" $md-alignSelf="flex-start">
            <Text color="$white" fontWeight="$bold" size='2xl'>
              L O G I N
            </Text>
          </Box>
          {!showVerificationSuccess ? (
            !showSecondCenter ? (
              <Box py="$2" rounded="$full" alignItems="center" marginTop={35} $base-flexDirection="column" $sm-flexDirection="row" $md-alignSelf="flex-start">
                <Center>
                  <Box p='$5' maxWidth='$96' borderWidth='$1' mt='$10' borderColor='$backgroundLight300' borderRadius='$lg' $dark-borderColor="$backgroundDark700">
                    <VStack space='xs' pb='$4'>
                      <Heading lineHeight={30} color='$white' textAlign='center'>
                        Enter your phone number
                      </Heading>
                      <Text fontSize='$sm' color='#e3e3e3' textAlign='center'>
                        We will send you a 6-digit code to verify your phone number
                      </Text>
                    </VStack>
                    <VStack space='xl' py='$2'>
                      <Input>
                        <InputField
                          py='$2'
                          placeholder="Phone Number"
                          color='$white'
                          onChangeText={setPhoneNumber}
                          value={phoneNumber}
                        />
                      </Input>
                    </VStack>
                    <VStack space='lg' pt='$4'>
                      <Button size='sm' onPress={handleSubmit}>
                        <ButtonText>
                          Submit
                        </ButtonText>
                      </Button>
                    </VStack>
                  </Box>
                </Center>
              </Box>
            ) : (
              <Box py="$2" rounded="$full" alignItems="center" marginTop={35} $base-flexDirection="column" $sm-flexDirection="row" $md-alignSelf="flex-start">
              <Center>
              
                <Box p='$5' maxWidth='$96' borderWidth='$1' mt='$10' borderColor='$backgroundLight300' borderRadius='$lg' $dark-borderColor="$backgroundDark700">
                  <VStack space='xs' pb='$4'>
                    <Heading lineHeight={30} color='$white' textAlign='center'>
                      Enter verification code
                    </Heading>
                    <Text fontSize='$sm' color='#e3e3e3' textAlign='center'>
                      Please enter the 6-digit code sent to your phone
                    </Text>
                  </VStack>
                  <VStack space='xl' py='$2'>
                    <Input>
                      <InputField
                        py='$2'
                        color='$white'
                        placeholder="Verification Code"
                        onChangeText={setVerificationCode}
                        value={verificationCode}
                      />
                    </Input>
                  </VStack>
                  <VStack space='lg' pt='$4'>
                    <Button size='sm' onPress={handleVerify}>
                      <ButtonText>
                        Verify
                      </ButtonText>
                    </Button>
                  </VStack>
                </Box>
              </Center>
              </Box>
            )
          ) : (
            <Box py="$2" rounded="$full" alignItems="center" marginTop={35} $base-flexDirection="column" $sm-flexDirection="row" $md-alignSelf="flex-start">
            <Center>
              
              <Box p='$5' maxWidth='$96' borderWidth='$1' mt='$10' borderColor='$backgroundLight300' borderRadius='$lg' $dark-borderColor="$backgroundDark700">
                <VStack space='xs' pb='$4'>
                  <Heading lineHeight={30} color='$white' textAlign='center'>
                    Verification Successful
                  </Heading>
                  <Text fontSize='$sm' color='#e3e3e3' textAlign='center'>
                    You are now logged in!
                  </Text>
                </VStack>
              </Box>
            </Center>
            </Box>
          )}
        </Box>
      </ScrollView>
    </Box>
  );
};
