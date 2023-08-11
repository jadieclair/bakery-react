import React from "react";
import "./AboutUs.css";

export default function AboutUs() {
  return (
    <div className="container px-4 py-5" id="featured-3">
      <h2 className="pb-2 border-bottom">About Us</h2>
      <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
        <div className="feature col">
          <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3"></div>
          <h3 className="fs-2 text-body-emphasis">Our Story</h3>
          <p>
            Step into the world of The Cake Corner, where every confection is a
            brushstroke on the canvas of delight. From our inception to the
            hands that craft each masterpiece, we believe in the enchantment of
            shared moments and the joy that a simple slice of cake can bring.
          </p>
        </div>
        <div className="feature col">
          <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3"></div>
          <h3 className="fs-2 text-body-emphasis">Our Values</h3>
          <p>
            At The Wishing Well, our values rise with every batch of batter.
            With each cake, we infuse a touch of magic, crafting not just
            desserts but cherished memories. We belive in providing a warm and
            enchanting space for all to enjoy! Welcome to our tale of sugar and
            dreams.
          </p>
        </div>
        <div className="feature col">
          <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3"></div>
          <h3 className="fs-2 text-body-emphasis">Our Mission</h3>
          <p>
            Our mission is to be more than a bakery; we're a hub, where the
            aroma of vanilla fosters friendships and sugary smiles light up
            hearts. Come savor the flavor that defins The Wishing Well, where
            every bite tells a story that weaves connections that linger long
            after the last crumb.
          </p>
        </div>
      </div>
    </div>
  );
}
