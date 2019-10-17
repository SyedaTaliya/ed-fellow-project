import React from "react";
import ImgCard from "./ImgCard";

function PortfolioSec() {
  return (
    <>
      <h2>We Focus On Digital Products</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta quam
        quaerat consequatur excepturi provident sapiente aut. Mollitia dolorem,
        architecto neque modi veniam magnam ex quia quam perspiciatis veritatis
        atque eum!
      </p>
      <button>Our Portfolio</button>
      <ImgCard imgUrl="https://image.flaticon.com/icons/png/128/51/51338.png"  heading="Branding"  para='237,460 crown icon stock photos, vectors, and illustrations are available royalty-free.' />
      <ImgCard imgUrl='https://cdn0.iconfinder.com/data/icons/website-kit-2/512/icon_138-128.png' heading='Mobile App' para='best mobiles app ' />
      <ImgCard imgUrl='https://www.shareicon.net/data/256x256/2016/07/06/107037_edit_512x512.png' heading='Web Design' para='By creating an account, I agree to Shutterstock' />
      <ImgCard imgUrl='https://image.flaticon.com/icons/png/128/59/59505.png' heading='Strategy' para='A powerful, responsive navigation header, the navbar. Includes support for branding, navigation, and more'  />

    </>
  );
}

export default PortfolioSec;