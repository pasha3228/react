import React, { useReducer } from "react"

import styles from "./styles.module.css"
import classnames from "classnames"
import { Rating } from "../Rating/Rating"

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

export const NewReviewForm = ({ className }) => {
  const [state, dispatch] = useReducer(reducer, {
    author: "DefaultName",
    comment: "DefaultComment",
    rating: 0
  })

  return (
    <div className={classnames(styles.root, className)}>
      <div className={styles.section}>
        <span className={styles.sectionTitle}>Name</span>
        <input
          value={state.author}
          onChange={(event) => dispatch({ type: ACTIONS.SetAuthor, payload: event.target.value })}
        />
      </div>
      <div className={styles.section}>
        <span className={styles.sectionTitle}>Comment</span>
        <input
          value={state.comment}
          onChange={(event) => dispatch({ type: ACTIONS.SetComment, payload: event.target.value })}
        />
      </div>
      <div className={styles.section}>
        <span className={styles.sectionTitle}>Rating</span>
        <Rating value={state.rating} onChange={(value) => dispatch({ type: ACTIONS.SetRating, payload: value })} />
      </div>
    </div>
  )
}
