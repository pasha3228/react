import React, { useReducer } from "react"
import styles from "./styles.module.css"
import classnames from "classnames"
import InputRatingStars from "../InputRatingStars/InputRatingStars"

const ACTIONS = {
  SetAuthor: "setAuthor",
  SetComment: "setComment",
  SetRating: "setRating"
}

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SetAuthor:
      return { ...state, author: action.payload, comment: "", rating: 0 }
    case ACTIONS.SetComment:
      return { ...state, comment: action.payload }
    case ACTIONS.SetRating:
      return { ...state, rating: action.payload }
    default:
      return state
  }
}

const log = (value) => {
  console.log(value)
}

export const NewReviewForm = ({ className }) => {
  const [state, dispatch] = useReducer(reducer, {
    author: "DefaultName",
    comment: "DefaultComment",
    rating: 0
  })

  const onChangeRating = (rating) => {
    dispatch({ type: ACTIONS.SetRating, payload: rating })
  }

  return (
    <div className={classnames(styles.root, className)}>
      <div className={styles.section}>
        <span className={styles.sectionTitle}>Name</span>
        <input
          value={state.author}
          onChange={(event) => {
            console.log(event)
            dispatch({ type: ACTIONS.SetAuthor, payload: event.target.value })
          }}
        />
      </div>

      <div className={styles.section}>
        <span className={styles.sectionTitle}>Comment</span>
        <input
          value={state.comment}
          onChange={(event) => dispatch({ type: ACTIONS.SetComment, payload: event.target.value })}
        />
      </div>

      <div>
        <span>Rating</span>
        <InputRatingStars
          currentRating={state.rating}
          onChange={(rating) => dispatch({ type: ACTIONS.SetRating, payload: rating })}
        />
      </div>
    </div>
  )
}
