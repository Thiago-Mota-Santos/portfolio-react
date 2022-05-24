import React from 'react';
import { Button } from '../../globalStyles';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';
import {
  FooterContainer,
  FooterSub,
  FooterSubText,
  FooterSubHeading,
  Form,
  FormInput,
  FooterLinkContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrapper,
  SocialLogo,
  SocialIcon,
  WebSiteRights,
  SocialIcons,
  SocialIconLink,
} from './FooterElements';

function Footer() {
  return (
    <FooterContainer>
      <FooterSub>
        <FooterSubHeading>
          Join our exclusive membership to receive the latest news and trends
        </FooterSubHeading>
        <FooterSubText>You can unsubscribe at any time.</FooterSubText>
        <Form>
          <FormInput name='email' type='email' placeholder='Your Email' />
          <Button fontBig>Subscribe</Button>
        </Form>
      </FooterSub>
      <FooterLinkContainer>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>About Us</FooterLinkTitle>
            <FooterLink to='/sign-up'>How it works</FooterLink>
            <FooterLink to='/'>Testimonials</FooterLink>
            <FooterLink to='/'>Careers</FooterLink>
            <FooterLink to='/'>Investors</FooterLink>
            <FooterLink to='/'>Terms of Service</FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>Contact Us</FooterLinkTitle>
            <FooterLink to='/'>Contact</FooterLink>
            <FooterLink to='/'>Support</FooterLink>
            <FooterLink to='/'>Destinations</FooterLink>
            <FooterLink to='/'>Sponsorships</FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>Videos</FooterLinkTitle>
            <FooterLink to='/'>Submit Video</FooterLink>
            <FooterLink to='/'>Ambassadors</FooterLink>
            <FooterLink to='/'>Agency</FooterLink>
            <FooterLink to='/'>Influencer</FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>
      </FooterLinkContainer>
      <SocialMedia>
        <SocialMediaWrapper>
          <SocialLogo to='/'>
            <SocialIcon />
            NXI
          </SocialLogo>
          <WebSiteRights>NXI © 2022</WebSiteRights>
          <SocialIcons>
            <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink
              href='/' target='_blank' aria-label='Youtube'
            >
              <FaYoutube />
            </SocialIconLink>
            <SocialIconLink href='/' target='_blank' aria-label='Twitter'>
              <FaTwitter />
            </SocialIconLink>
            <SocialIconLink href='/' target='_blank' aria-label='LinkedIn'>
              <FaLinkedin />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrapper>
      </SocialMedia>
    </FooterContainer>
  );
}

export default Footer;