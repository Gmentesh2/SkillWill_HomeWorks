import React from 'react';
import { useParams } from 'react-router-dom';

const ParamPage = () => {
  const characters = [
    {
      id: '1',
      Personality:
        'Its main principle is the Law of Love, which is simply the golden rule of love of others. Since Dostoevsky believes that the fulfillment of this commandment of love is impossible for human beings in their fallen condition, he also affirmed their need to merge their love of others with the love of God',
    },
  ];

  const { id } = useParams();
  const character = characters.find((char) => char.id === id);

  if (!character) {
    return <div>Character Personality not found</div>;
  }

  return (
    <div>
      <h4>{character.Personality}</h4>
    </div>
  );
};

export default ParamPage;