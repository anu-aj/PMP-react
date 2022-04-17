import React from 'react';
import CardExplore from './CardExplore';

function SearchList({ filteredPersons }) {
  const filtered = filteredPersons.map( person =>  <CardExplore key={person.id} person={person} />); 
  return (
    <div>
      {filtered}
    </div>
  );
}

export default SearchList;