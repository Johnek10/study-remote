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
        }
      )
      .catch((error) => {
        console.log(error);
      });
  }, [query]);

  return (
    <Wrapper>
      <NewsSectionHeader>News information</NewsSectionHeader>

      {info.map(({ title, text, image, date }) => (
        <ArticleWrapper data-id="dupa">
          <TitleWrapper>{title}</TitleWrapper>
          <DateWrapper>{date}</DateWrapper>
          <ContentWrapper>
            <p>{text}</p>
            <img src={image.url} alt="" />
          </ContentWrapper>
          <Button>Read more</Button>
        </ArticleWrapper>
      ))}
    </Wrapper>
  );
};

export default NewsSection;
