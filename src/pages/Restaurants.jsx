import React from "react";
import Menu from "../components/Menu/Menu"
import {Reviews} from "../components/Reviews/Reviews"


const Restaurants = ({restaurants}) => (
  <div>
    <h2>Restaurants</h2>    
    <div>
      {restaurants.map((restaurant) => (
        <div key={restaurant.id}>
          <div>{restaurant.name}</div>
          <Menu menu={restaurant.menu}/>
          <Reviews reviews={restaurant.reviews}/>
        </div>
      ))}
    </div>
  </div>
)

export default Restaurants