'use client';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function GoProductsButton() {
  const router = useRouter();
  return (
    <button
      onClick={() => {
        router.push('/products');
      }}
    >
      제품페이지로이동
    </button>
  );
}
