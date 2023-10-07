import { getProducts } from '@/service/products';
// import exp from 'constants';
import Link from 'next/link';
import styles from './page.module.css';
import MeowArticle from '@/components/MeowArticle';

// export const revalidate = 3;

export default async function ProductsPage() {
  const products = await getProducts();
  const res = await fetch('https://meowfacts.herokuapp.com', {
    next: {
      revalidate: 0,
    },
  });
  const data = await res.json();
  const factText = data.data[0];
  return (
    <>
      <h1>제품 소개 페이지</h1>
      <ul>
        {products.map(({ id, name }, index) => (
          <li key={index}>
            <Link href={`/products/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
      <MeowArticle />
    </>
  );
}
