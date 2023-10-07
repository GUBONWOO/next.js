import { getProducts } from '@/service/products';
import { NextResponse } from 'next/server';
export async function GET(request: Request) {
  const Products = await getProducts();
  return NextResponse.json({ Products });
}
