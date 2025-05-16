import ProductItem from "@/components/ProductItem/ProductItem";
import styles from "./page.module.css";
import Link from "next/link";
import Footer from "@/components/Footer/footer";
import ProductBackround from "./main-productsBackground/Pbackground";

const Products = async () => {
  let products;
  try {
    const data = await fetch("https://fakestoreapi.com/products");
    products = await data.json();
  } catch (error) {
    throw Error(error);
  }

  return (
    <>
    
      <ProductBackround className={"layout-productBackround"} />

    <div className={styles.container}>
      {products.map((product) => (
        <Link key={product.id} href={`/products/details/${product.id}`}>
          <ProductItem item={product} />
        </Link>
      ))}
    </div>

    <Footer className={styles.productFooter}>

    </Footer>
  </>
  );
};

export default Products;


