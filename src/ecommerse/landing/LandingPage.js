import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Sidebar from "../sidebar/Sidebar";

const LandingPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  function fetchProducts() {
    setLoading(true);
    axios
      .get("https://fakestoreapi.com/products?limit=30")
      .then((res) => {
        setProducts(res?.data);
        setLoading(false);
        console.log(res?.data);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>

        <Sidebar />
      {/* {!loading && products.length ? (
        <Container>
          {products?.map((item) => (
            <Card>
              <Items>
                <IMG src={item?.image} alt="img" />
              </Items>
            </Card>
          ))}
        </Container>
      ) : (
        <p>...loading</p>
      )} */}
    </div>
  );
};

export default LandingPage;

const Container = styled.div`

  padding:1em;
  margin: 2em 2.5em 0 2.5em;
  display: flex;
  flex-wrap: wrap;
  border : 1px solid red;
  flex : 90vh;


 

`;

const Card = styled.div`


  height: 100%;

  border-radius: 8px;

  width: 40vh;

  border: 1px solid rgb(240, 240, 240);

  background : #fff;
  margin: 1em;
`;

const Items = styled.div`

height : 232px;


`;

const IMG = styled.img`
object-fit: contain;
height : 100%;
width : 100%;

`;
