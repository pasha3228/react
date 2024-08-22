import Tabs from "../Tabs/Tabs"
import Restaurant from "../Restaurant/Restaurant"
import React, { useState } from "react"

import styles from "./styles.module.css"
import { useSelector } from "../../store/hook/useSelector"
import { useDispatch } from "../../store/hook/useDispatch"
import { nanoid } from "nanoid"
import { addRestaurants } from "../../store/modules/restaurants/actions"
import { selectRestaurants } from "../../store/modules/restaurants/selectors"

const newRest = {
  menu: [
    {
      id: "d75f762a-eadd-49be-8918-ed0daa8dd024",
      name: "Chicken tikka masala",
      price: 12,
      ingredients: ["chicken", "rice"]
    },
    {
      id: "c3cb8f92-a2ed-4716-92a1-b6ea813e9049",
      name: "Naan",
      price: 3,
      ingredients: ["bread"]
    },
    {
      id: "bd129641-c0eb-432b-84b6-8b81d2930358",
      name: "Samosa",
      price: 8,
      ingredients: ["chicken", "bread"]
    }
  ],
  reviews: [
    {
      id: "5909796d-5030-4e36-adec-68b8f9ec2d96",
      user: "Antony",
      text: "Not bad",
      rating: 5
    },
    {
      id: "429dea85-11dd-4054-a31e-c60c92e17255",
      user: "Sam",
      text: "No burgers",
      rating: 3
    }
  ]
}

export const Restaurants = () => {
  const restaurants = useSelector(selectRestaurants)
  const dispatch = useDispatch()

  const [activeRestaurantIndex, setActiveRestaurantIndex] = useState(0)
  const selectRestaurant = (index) => {
    if (index === activeRestaurantIndex) {
      setActiveRestaurantIndex(null)
    } else {
      setActiveRestaurantIndex(index)
    }
  }

  if (!restaurants.length) {
    return null
  }

  const tabs = restaurants.map(({ name }) => name)

  return (
    <div className={styles.root}>
      <button onClick={() => dispatch(addRestaurants({ ...newRest, id: nanoid(), name: nanoid() }))}>
        addRestaurants
      </button>
      <Tabs tabs={tabs} activeTabIndex={activeRestaurantIndex} onClick={selectRestaurant} />
      {activeRestaurantIndex != null && <Restaurant restaurant={restaurants[activeRestaurantIndex]} />}
    </div>
  )
}

export const MemoRestaurants = React.memo(Restaurants)
