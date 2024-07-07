// import React from "react";
import { useEffect } from "react";
import data from "../../assets/data.json";
import { AccordionItem, Button, ItemList } from "../../components/";
import styles from "./Catalog.module.css";
import { useLocation } from 'react-router-dom'

export function Catalog() {
    const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (hash !== '') {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 0);
    }
  }, [pathname, hash, key]);

  return (
    <>
      <section className={styles.baner}>
        <div className={`container ${styles.content}`}>
          <h2>
            Any products from famous brands
            <br />
            with worldwide delivery
          </h2>
          <span>
            We sell smartphones, laptops, clothes, shoes
            <br />
            and many other products at low prices
          </span>
          <Button content={"Go to shopping"} width={207} height={62} onClick={()=>{}} role="link"/>
        </div>
      </section>
      <section className="container" id="catalog">
        <ItemList items={data} />        
      </section>
      <section className={styles.FAQ} id="faq">
        <div className={styles.FAQ_content}>
          <h2>FAQ</h2>
          <hr/>
          <AccordionItem title='How can I track the status of my order?' children='After placing your order, you will receive a confirmation email containing your order number and a tracking link. You can also log in to your account on our website and go to the "My Orders" section to track your delivery status.'/>
          <hr/>
          <AccordionItem title='What payment methods do you accept?' children='After placing your order, you will receive a confirmation email containing your order number and a tracking link. You can also log in to your account on our website and go to the "My Orders" section to track your delivery status.'/>
          <hr/>
          <AccordionItem title='How can I return or exchange an item?' children='After placing your order, you will receive a confirmation email containing your order number and a tracking link. You can also log in to your account on our website and go to the "My Orders" section to track your delivery status.'/>
          <hr/>
        </div>
      </section>
    </>
  );
}
