import React, { useState, useEffect } from 'react';
import { Wrapper } from './NewsSection.styles';
import { NewsSectionHeader } from './NewsSection.styles';
import { ArticleWrapper } from './NewsSection.styles';
import { Button } from 'components/atoms/Button/Button';
import axios from 'axios';

const API_TOKEN = '';
const NewsSection = () => {
  const [info, setInfo] = useState([]);

  const query = `
  {
    allInformation {
      id
      title
       text
      image {
        id
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
            authorization: `Bearer ${API_TOKEN}`,
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
          console.log('dupa');
        }
      )
      .catch((error) => {
        console.log(error);
      });
  }, []);
  {
    console.log(info);
  }
  return (
    <Wrapper>
      <NewsSectionHeader>News information</NewsSectionHeader>

      {info.map(({ title, text }) => (
        <ArticleWrapper>
          <h3>{title} </h3>
          <p>{text}</p>
          <Button>Read more</Button>
        </ArticleWrapper>
      ))}
    </Wrapper>
  );
};

export default NewsSection;
