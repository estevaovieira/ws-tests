import { useRouter } from 'next/router';

interface MyObject {
  "/": string;
  "/food": string;
  "/pet": string;
  "/hardware": string;
  "/flowers": string;
  "/gardens": string;
  "/beautyHair": string;
  [key: string]: string;
}

const HeaderTitle = () => {

  const router = useRouter();

  const pathname = router.pathname;

  const headers: MyObject = {
    "/": "My Products",
    "/food": "Food",
    "/pet": "Pet",
    "/hardware": "Hardware",
    "/flowers": "Flowers",
    "/gardens": "Garden's",
    "/beautyHair": "Beauty & Hair",
  }

  return (
    <h1 style={{fontSize: '25px', margin: '0'}}>{headers[pathname]}</h1>
  )
}

export default HeaderTitle