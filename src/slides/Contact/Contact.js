import * as React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMobile } from "@fortawesome/pro-light-svg-icons";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

import Section, {
  SectionHeader,
  SectionTitle,
  SectionSubTitle
} from "../../components/Section/Section";
import Grid from "../../components/Grid/Grid";
import Column from "../../components/Grid/Column";
import StyledHeading from "../../components/StyledHeading/StyledHeading";
import ContactForm from "../../components/ContactForm/ContactForm";

import { email, phone, socialLinks } from "../../content/content";

const Contact = props => {
  return (
    <Section id={props.id}>
      <SectionHeader>
        <SectionTitle>{props.title}</SectionTitle>
        <SectionSubTitle>{props.subtitle}</SectionSubTitle>
      </SectionHeader>
      <Grid>
        <Column>
          <StyledHeading>Contact Details</StyledHeading>
          <ContactCard
            href="mailto:dougmacknz@0077b5mail.com"
            className="wow animated fadeIn"
          >
            <ContactIcon className="fa-3x">
              <span className="fa-layers fa-fw">
                <FontAwesomeIcon icon={faCircle} color="#071737" />
                <FontAwesomeIcon
                  icon={faEnvelope}
                  inverse
                  transform="shrink-8"
                />
              </span>
            </ContactIcon>
            <div>
              <ContactCardSub>Send me an email</ContactCardSub>
              <ContactCardMain>{email}</ContactCardMain>
            </div>
          </ContactCard>

          <ContactCard className="wow animated fadeIn">
            <ContactIcon className="fa-3x">
              <span className="fa-layers fa-fw">
                <FontAwesomeIcon icon={faCircle} color="#58afd1" />
                <FontAwesomeIcon icon={faMobile} inverse transform="shrink-8" />
              </span>
            </ContactIcon>
            <div>
              <ContactCardSub>Give me a call</ContactCardSub>
              <ContactCardMain>{phone}</ContactCardMain>
            </div>
          </ContactCard>

          <StyledHeading>Social</StyledHeading>

          <SocialList>
            {socialLinks.map((socialLink, index) => (
              <li key={index} className="wow animated fadeIn">
                <a
                  href={socialLink.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={socialLink.name}
                  style={{ backgroundColor: socialLink.color }}
                >
                  <FontAwesomeIcon icon={socialLink.icon} inverse fixedWidth />
                  <span>{socialLink.name}</span>
                </a>
              </li>
            ))}
          </SocialList>
        </Column>

        <Column>
          <StyledHeading>Send me a message</StyledHeading>
          <ContactForm />
        </Column>
      </Grid>
    </Section>
  );
};

const ContactCard = styled.div`
  display: flex;
  margin-bottom: 0.25rem;
  align-items: center;
  text-decoration: none;
  color: #333;
  border-radius: 3px;
`;

const ContactIcon = styled.div`
  display: inline-block;
  margin-right: 15px;
`;

const ContactCardSub = styled.div`
  font-size: 14px;
  color: #999;
`;

const ContactCardMain = styled.div`
  font-size: 1.2rem;
  font-weight: 400;
  color: #666;
`;

const SocialList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;

  > li {
    margin-bottom: 0.5rem;
    display: inline-block;
    margin-right: 0.5rem;

    a {
      text-decoration: none;
      display: inline-block;
      padding: 0.5rem 1rem;
      border-radius: 3px;
      //font-size: 1rem;
      color: #eee;

      span {
        margin-left: 0.5rem;
      }
    }
  }
`;

export default Contact;