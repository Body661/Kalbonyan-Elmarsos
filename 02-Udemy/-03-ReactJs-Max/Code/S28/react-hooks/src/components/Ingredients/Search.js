import React, { useState, useEffect } from 'react';
import { useRef } from 'react';

import Card from '../UI/Card';
import './Search.css';

const Search = React.memo(({ onSearch }) => {

  const [userInput, setUserInput] = useState('')
  const inputRef = useRef()

  useEffect(() => {
    const timer = setTimeout(() => {
      const request = async () => {
        if (userInput === inputRef.current.value) {
          const query = userInput.length === 0 ? '' : `?orderBy="title"&equalTo="${userInput}"`
          const response = await fetch('https://ingredients-app-6abe7-default-rtdb.firebaseio.com/ingredientsList.json' + query)
          const data = await response.json();

          const loadedData = []

          for (const item in data) {
            loadedData.unshift({ id: item, ...data[item] })
          }
          onSearch(loadedData)
        }
      }
      request()
    }, 500)

    return () => {
      clearTimeout(timer)
    }
  }, [userInput, onSearch])

  return (
    <section className="search">
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          <input type="text" onChange={(e) => setUserInput(e.target.value)} ref={inputRef} />
        </div>
      </Card>
    </section>
  );
});

export default Search;
