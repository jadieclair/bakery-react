import React from "react";
import Cards from "../components/Cards";
import Brownie from "../Images/brownie.jpg"; // Adjust the path here
import Caramel from "../Images/caramel-cupcake.jpg"; // Adjust the path here
import Cake from "../Images/springcake.jpg"; // Adjust the path here
import Doughnuts from "../Images/doughnuts.jpg"; // Adjust the path here
import Flower from "../Images/heroimg.jpeg";
import Vall from "../Images/hero-img.jpg";

export default function MenuPage() {
  return (
    <div>
      <div className="row">
        <div className="col-md-4">
          <Cards
            img={Brownie}
            title="Chocolate Brownies"
            detail="Rich chocolate brownies, made with nuts and milk chocolate."
          />
        </div>
        <div className="col-md-4">
          <Cards
            img={Caramel}
            title="Caramel Cup"
            detail="Chocolate cup cake, with salty caramel and fresh cream."
          />
        </div>
        <div className="col-md-4">
          <Cards
            img={Cake}
            title="Designer Cakes"
            detail="See our range of designer theme cakes for all occassions."
          />
        </div>
      </div>

      <div className="row">
        <div className="col-md-4">
          <Cards
            img={Doughnuts}
            title="Doughnuts"
            detail="We have a multi selection of home made Doughnuts with various toppings."
          />
        </div>
        <div className="col-md-4">
          <Cards
            img={Flower}
            title="Berry Custard Slice"
            detail="Black berry sponge slice with custard or cream toppings."
          />
        </div>
        <div className="col-md-4">
          <Cards
            img={Vall}
            title="Cup Cakes"
            detail="Our signature chocolate cup cake is the best seller in our wide range."
          />
        </div>
      </div>
    </div>
  );
}
