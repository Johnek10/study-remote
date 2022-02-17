import React, { useState, useEffect } from 'react';
import { Wrapper } from './NewsSection.styles';
import { NewsSectionHeader } from './NewsSection.styles';
import {
  ArticleWrapper,
  TitleWrapper,
  ContentWrapper,
  DateWrapper,
} from './NewsSection.styles';
import { Button } from 'components/atoms/Button/Button';
import axios from 'axios';

const API_TOKEN = '7c09ddbde99b048db96de5397e5e84';
const NewsSection = () => {
  const [info, setInfo] = useState([]);

  const query = `
  {
    allInformation {
      id
      title
       text
       date
      image {
        id
        url
      }
    }
  }`;

  useEffect(() => {
    axios
      .post(
        'https://graphql.datocms.com/',
        {
          query: query,
        },
        {
          headers: {
            authorization: `Bearer ${process.env.REACT_APP_DATOCMS_API_TOKEN}`,
          },
        }
      )
      .then(
        ({
          data: {
            data: { allInformation },
          },
        }) => {
          setInfo(allInformation);
          console.log(allInformation);
        }
      )
      .catch((error) => {
        console.log(error);
      });
  }, []);
  
  return (
    <Wrapper>
      <NewsSectionHeader>News information</NewsSectionHeader>

      {info.map(({ title, text, image, date }) => (
        <ArticleWrapper data-id='dupa'>
          <TitleWrapper>{title}</TitleWrapper>
          <DateWrapper>{date}</DateWrapper>
          <ContentWrapper>
            <p>{text}</p>
            <img src={image.url} />
          </ContentWrapper>
          <Button>Read more</Button>
        </ArticleWrapper>
      ))}
    </Wrapper>
  );
};

export default NewsSection;
