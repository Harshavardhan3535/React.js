/*
import { keepPreviousData, useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'

const PaginatedQueries = () => {

    const fetchFruits = (pageId) => {
        return axios.get(`http://localhost:4000/fruits/?_limit=4&_page=${pageId}`);
    }

    const [page, setPage] = useState(1); 


    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["fruits",page],
        queryFn: () => fetchFruits(page),
        placeholderData: keepPreviousData
    })

    if (isLoading) {
        return <h2>Page is Loading...</h2>
    }

    if (isError) {
        return <h1>{error.message}</h1>
    }

    return (
        <>
        <div>
            {data?.data.map(item=> <div key={item.id}>
                {item.name}
            </div>)}
            <button onClick={()=> setPage(prev => prev - 1)} disabled={page == 0? true:false}>Prev</button>
            <button onClick={()=> setPage(prev => prev + 1)} disabled={page == 5? true:false}>Next</button>
        </div>
        </>
    )
}

export default PaginatedQueries

*/

import { useState } from 'react';
import { keepPreviousData, useQuery } from '@tanstack/react-query';

const fetchFruits = async (pageId) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${pageId}&_limit=4`);
  if (!response.ok) throw new Error("Failed to fetch");
  return response.json();
};

const PaginatedQueries = () => {
  const [page, setPage] = useState(1);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["fruits", page],
    queryFn: () => fetchFruits(page),
    placeholderData: keepPreviousData
  });

  if (isLoading) return <h2>Page is Loading...</h2>;
  if (isError) return <h1>{error.message}</h1>;

  return (
    <div>
      {data?.map(item => <div key={item.id}>{item.title}</div>)}
      <button onClick={() => setPage(prev => Math.max(prev - 1, 1))} disabled={page === 1}>Prev</button>
      <button onClick={() => setPage(prev => prev + 1)}>Next</button>
    </div>
  );
};

export default PaginatedQueries;