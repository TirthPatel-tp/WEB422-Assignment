import { useRouter } from 'next/router';

export default function Product() {
  const router = useRouter();
  const { id } = router.query;

  return <p>Product: {id}</p>
}

/*import { useRouter } from 'next/router'
import { useAtom } from 'jotai';
// import { cartListAtom } from '@/store'; // used in /components/ProductBox.js
// import { cartListAtom } from '@/store'; // used in /pages/products/[id].js
export default function Products() {
  const [cartList, setCartList] = useAtom(cartListAtom);
  const router = useRouter()
  const { page } = router.query;
  const { category } = router.query;


  function addToCart(product) {
  setCartList([...cartList, product]);
}

  if (page && category) {
    return <p>Products for page: {page} &amp; category: {category}</p>
  } else {
    return <p>Page and/or Category Parameters Missing</p>
  }
}
*/
