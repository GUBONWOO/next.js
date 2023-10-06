'use client';

import { useState } from 'react';

export default function Counter() {
  const [count, SetCount] = useState(0);
  return (
    <>
      <p>{count}</p>
      <button onClick={() => SetCount((num) => num + 1)}>add</button>
    </>
  );
}
