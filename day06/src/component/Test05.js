import React, { useEffect, useReducer, useState } from 'react';
import axios from 'axios';

const initialState = {
  data: {},
  error: null,
  loading: true,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SUCCESS':
      return {
        data: action.payload,
        error: null,
        loading: false,
      };
    case 'ERROR':
      return {
        data: {},
        error: action.payload,
        loading: true,
      };
    default:
      return state;
  }
};

const Test05 = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [id, setId] = useState('1');
  const [search, setSearch] = useState(1);

  const onSearch = (id) => {
    setSearch(id);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `https://jsonplaceholder.typicode.com/photos/${search}`;
        const response = await axios.get(url);
        dispatch({ type: 'SUCCESS', payload: response.data });
      } catch (error) {
        dispatch({ type: 'ERROR', payload: error.message });
      }
    };

    fetchData();
  }, [search]);

  return (
    <div>
      <h3>
        ID 입력(1 ~ 5000) :{' '}
        <input type='text' value={id} onChange={(e) => setId(e.target.value)} />
        <button onClick={() => onSearch(id)}>검색</button>
      </h3>
      <hr />
      <h2>
        {state.loading ? (
          '로딩중'
        ) : (
          <img src={state.data.thumbnailUrl} alt='썸네일' />
        )}
        {state.data.title}
      </h2>
      <p>{state.error ? state.error : null}</p>
    </div>
  );
};

export default Test05;
