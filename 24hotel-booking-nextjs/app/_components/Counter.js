"use client";

import { useState } from "react";

export default function Counter({ users }) {
  const [count, setCount] = useState(0);
  // console.log(users);
  return (
    <div>
      <h1>{users.map((user) => user.id)}</h1>
      <p>{count}</p>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
    </div>
  );
}
