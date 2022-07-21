import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List1, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech" name="tech" >
    <SectionDivider />
    <br/>
    <br/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      My skillset encompasses a range of coding niches from front-end to back-end.
    </SectionText>
    <List1>
      <ListItem>
        <DiReact size='3rem' />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience Includes: <br/>
              - React JS <br/>
              - Angular <br/>
              - Next JS <br/>
              - Html <br/>
              - CSS <br/>
              - Javascript <br/>
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size='3rem' />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience Includes: <br/>
            - .NET <br/>
            - SSMS <br/>
            - Java <br/>
            - C++ <br/>
            - C# <br/>
            - Git <br/>
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List1>
  </Section>
);

export default Technologies;
