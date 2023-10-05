type Props = {
  params: {
    slug: string;
  };
};

export default function PantsPage({ params }: Props) {
  return <h1>{params.slug} 제품설명</h1>;
}

export function generateStaiticParams() {
  const products = ['pants', 'skirt'];
  return products.map((product) => ({
    slug: product,
  }));
}
