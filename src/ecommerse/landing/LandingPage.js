import React, { useState } from "react";
import styled from "styled-components";
import Sidebar from "../sidebar/Sidebar";
import "./landing.css";
import { DiscountedPrice } from "../utils/DiscountedPrice";
import { data } from "../data/data";

const LandingPage = () => {
  const [products, setProducts] = useState(data);
  const [loading, setLoading] = useState(false);

  return (
    <div style={{ display: "flex", overflow: "hidden", background: "#1C1C28" }}>
      <div>
        {/* Sidebar */}
        <Sidebar products={products} setProducts={setProducts}/>
      </div>

      {!loading && products.length ? (
        <>
          <Container>
            {products?.map((item) => (
              <Card>
                <div className="img__container">
                  <img className="product__img" src={item?.image} alt="img" loading="lazy"/>
                </div>

                <div className="product__details">
                  <h3>{item?.company}</h3>

                  <p className="product__name">{item?.productName}</p>

                  <div className="products__price">
                    <p style={{ marginRight: "0.75em" }}>
                      Price : ₹{item?.price}
                    </p>

                    <p
                      style={{
                        textDecoration: "line-through",
                        marginRight: "0.75em",
                      }}
                    >
                      ₹{ DiscountedPrice(item.price, item.discount)}
                    </p>

                    <p style={{ color: "#EB4D4B" }}>({item?.discount}% off)</p>
                  </div>
                </div>

                <div className="cart__container">
                  <button>Add To Cart</button>
                </div>
              </Card>
            ))}
          </Container>
        </>
      ) : (
        <p>...loading</p>
      )}
    </div>
  );
};

export default LandingPage;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 1.5em;
  margin: 2em 1em 0 0;
  backgrund: #1c1c28;
  color: #fff;
  @media (max-width: 700px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  border-radius: 6px;
  margin: 0;
  display: flex;
  flex-direction: column;
  background-color: #2d2e45;
`;
