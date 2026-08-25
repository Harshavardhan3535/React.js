/*

import { Outlet, useSearchParams } from "react-router-dom";
import { useState } from "react";


export function BookLayout() {
    const [searchParams, setSearchParams] = useSearchParams({n:3});
    const [number, setNumber] = useState(3);
    return (
        <>
        <div>
            <h1>Book Layout</h1>
            <Outlet context={{hello:"world"}}/>
        </div>
        <link to="/books/new">Create New Book</link>
        <Outlet context={{hello:"world"}}/>
        <input type="number" value={number} onChange={(e) => {
            setNumber(e.target.value);
            setSearchParams({n:e.target.value});
        }}/>
        </>   
    );
}

*/


import { Outlet, useSearchParams, Link } from "react-router-dom";
import { useState } from "react";

export function BookLayout() {
  const [searchParams, setSearchParams] = useSearchParams({ n: 3 });
  const [number, setNumber] = useState(searchParams.get("n") || 3);

  return (
    <div>
      <h1>Book Layout</h1>
      <Link to="/books/new">Create New Book</Link>
      <Outlet context={{ hello: "world" }} />
      <input
        type="number"
        value={number}
        onChange={(e) => {
          setNumber(e.target.value);
          setSearchParams({ n: e.target.value });
        }}
      />
    </div>
  );
}