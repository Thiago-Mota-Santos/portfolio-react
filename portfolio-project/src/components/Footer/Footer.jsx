import React from 'react';
import { Button } from '../../globalStyles'
import {
  FooterContainer,
  FooterSub,
  FooterSubHeading,
  FooterSubText,
  Form,
  FormInput
} from './FooterElements';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterSub>
        <FooterSubHeading>
          Enter the pro version to receive perks
        </FooterSubHeading>
        <FooterSubText>You can unsubscribe at any time</FooterSubText>
        <Form>
          <FormInput name="email" type="email" placeholder="Your Email"/>
            <Button FontBig>Subscribe</Button>
        </Form>
      </FooterSub>
    </FooterContainer>
  );
};

export default Footer;
