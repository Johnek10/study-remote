import React from 'react';
import { Wrapper } from './NewsSection.styles';
import { NewsSectionHeader } from './NewsSection.styles';
import { ArticleWrapper } from './NewsSection.styles';
import { Button } from 'components/atoms/Button/Button';

const data = [
  {
    title: 'Free bikes for the best students',
    category: 'news1',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacus urna, feugiat eu mauris at, pharetra posuere urna. Suspendisse pulvinar just',
  },
  {
    title: 'Free bikes for the best students',
    category: 'news2',
    content: 'Lorem ipsum dolor sit amet, ',
  },
  {
    title: 'Free bikes for the best students',
    category: 'news3',
    content: 'Lorem ipsum dolor sit amet, st',
  },
];

const NewsSection = () => {
  return (
    <Wrapper>
      <NewsSectionHeader>News information</NewsSectionHeader>

      {data.map(({ title, content, category }) => (
        <ArticleWrapper>
          <h3>{title} </h3>
          <p>{content}</p>
          <Button>Read more</Button>
        </ArticleWrapper>
      ))}
    </Wrapper>
  );
};

export default NewsSection;
