import React from "react";
import "./Home.css";
import Product from "./Product";

export default function Home() {
  return (
      <div className="home">
      <div className="home__wrapper">
          <img src= "https://tse2.mm.bing.net/th?id=OIP.LU28Q73kwukQrb5_EQdMUgHaEK&pid=Api&P=0&w=338&h=191" 
          className="home-img"
          alt="home"/>
          <div className="home__row">
              <Product
              id="1"
              title="Air Jordans 1"
              price={199.98}
              image="https://i.ytimg.com/vi/6WaeVjz_JlY/maxresdefault.jpg"
              rating={5}
              />
              <Product
              id="2"
              title="Air Jordans 2"
              price={399.99}
              image="https://tse4.mm.bing.net/th?id=OIP.qV-fFXK5YAHifE6CYZB-9gHaFM&pid=Api&P=0&w=273&h=192"
              rating={5}
              />
              <Product
              id="3"
              title="Air Jordans 3"
              price={129.98}
              image="https://tse2.mm.bing.net/th?id=OIP.Iv-zhYmMM9LDqpZLpLgA9wHaFh&pid=Api&P=0&w=248&h=186"
              rating={2}
              />
          </div>
          
              <div className="home__row">
              <Product
              id="4"
              title="Air Jordans 4"
              price={199.98}
              image="https://tse2.mm.bing.net/th?id=OIP.4ZrSyRZG3mIeggLEAR7_4wHaEK&pid=Api&P=0&w=295&h=167"
              rating={3}
              />
              <Product
              id="5"
              title="Air Jordans 5"
              price={99.98}
              image="https://tse2.mm.bing.net/th?id=OIP.dXmu4jyqSBY71Axd7OdALAHaFM&pid=Api&P=0&w=248&h=175"
              rating={2}
              />
              <Product
              id="6"
              title="Air Jordans 6"
              price={107.01}
              image="https://tse2.mm.bing.net/th?id=OIP.GiJhRQm2BI5phMScPDq8iAHaFR&pid=Api&P=0&w=234&h=168"
              rating={5}    
              />
              </div>
          
              <div className="home__row">
              <Product
              id="7"
              title="Air Jordans 7"
              price={209.00}
              image="https://tse1.mm.bing.net/th?id=OIP.1FBMnifloANgiKFBN7zKOAHaFM&pid=Api&P=0&w=269&h=190"
              rating={4}
              />
              <Product
              id="8"
              title="Air Jordans 8"
              price={107.99}
              image="https://tse2.mm.bing.net/th?id=OIP.jTSUoUoYP6LkY5k_PXGkGgHaFM&pid=Api&P=0&w=273&h=192"
              rating={5}
              />
              <Product
              id="9"
              title="Air Jordans 9"
              price={299.01}
              image="https://tse4.mm.bing.net/th?id=OIP.d0P-NH7pCmrLrI7zfABETAHaEn&pid=Api&P=0&w=284&h=178"
              rating={5}
              />
          </div>
      </div>
  </div>
  )
}
