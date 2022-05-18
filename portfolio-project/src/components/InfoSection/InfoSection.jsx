import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container } from '../../globalStyles';
import { 
     InfoSec,
     InfoCol,
     InfoRow,  
     TextWrapper, 
     TopLine,
     Heading,
     SubTitle
    } from './InfoSectionElements'

const InfoSection = ({
    primary, 
    lightBg, 
    imgS,
    lightTopLine,
    lightTextDesc,
    buttonLabel,
    description,
    headline,
    lightText,
    topLine
}) => {
  return (
    <>
      <InfoSec lightBg={lightBg}>
         <Container>
            <InfoRow imgS = {imgS}>
                <InfoCol>
                    <TextWrapper>
                    <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                    <Heading lightText ={lightText}>{headline}</Heading>
                    <SubTitle lightTextDesc={lightTextDesc}>{description}
                    </SubTitle>
                    <Link to='/sign-up'>
                        <Button big fontBig primary={primary}>
                            {buttonLabel}
                        </Button>
                    </Link>
                    </TextWrapper>
                </InfoCol>
            </InfoRow>
         </Container>
      </InfoSec>
    </>
  )
}

export default InfoSection;