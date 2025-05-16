"use client";
import Link from "next/link";
import styles from "./page.module.css";
import { usePathname } from "next/navigation";
import Products from "./products/page";
import productBackround from "./products/main-productsBackground/Pbackground";


function layout({ children }) {
  const pathname = usePathname();
  
  

  return (
    <div className={styles.container}>

      <nav className={styles.nav}>

        <div className={styles.navBackground}></div>


        <nav className="siteNameNav">
        <Link 
        className={`
          ${styles.siteName}
          ${
            pathname.includes("/products")
              ? styles.activeLink
              : styles.inActiveLink
          }`}
        href="/products">
            shopi vira
        </Link>
        </nav>

        <Link
          className={`
            ${styles.link}
            ${
              pathname.includes("/products")
                ? styles.activeLink
                : styles.inActiveLink
            }`}
          href="/products"
        >
          Products
        </Link>
        <Link
          className={`
            ${styles.link}
            ${
              pathname.includes("/profile")
                ? styles.activeLink
                : styles.inActiveLink
            }
            `}
          href="/profile"
        >
          Profile
        </Link>
        <Link
          className={`
            ${styles.link}
            ${
              pathname.includes("/cart")
                ? styles.activeLink
                : styles.inActiveLink
            }
            ` }
          href="/cart"
        >
          Cart
        </Link>
      </nav>
      {children}
    </div>
  );
}

export default layout;
