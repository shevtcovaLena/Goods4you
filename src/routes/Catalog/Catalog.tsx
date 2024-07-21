import { useEffect } from "react";
import { AccordionItem, Button, ItemList } from "../../components/";
import styles from "./Catalog.module.css";
import { useLocation } from 'react-router-dom'
import { Helmet } from "react-helmet-async";

export function Catalog() {
  const { pathname, hash, key } = useLocation();

  const handleScrollToCatalog = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (hash === '') {
      window.scrollTo(0, 0);
    }
    else {
      setTimeout(() => {
        const id = hash.replace('#', '');
        handleScrollToCatalog(id)
      }, 0);
    }
  }, [pathname, hash, key]);

    return (
    <>
    <Helmet>
      <title>Catalog | Goods4you</title>
    </Helmet>
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
          <Button content={"Go to shopping"} width={207} height={62} onClick={()=>{handleScrollToCatalog('catalog')}} role="link"/>
        </div>
      </section>
      <section className="container" id="catalog">
        <ItemList 
        // items={data} 
        />        
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
