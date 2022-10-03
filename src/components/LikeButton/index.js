import React from 'react'
import { useSelector, useDispatch } from 'react-redux'


export function LikeButton(props) {
  const likeStatus0 = useSelector(state => state.likeStatus0)
  const likeStatus1 = useSelector(state => state.likeStatus1)
  const likeStatus2 = useSelector(state => state.likeStatus2)

  const likeStatuses = [likeStatus0, likeStatus1, likeStatus2]

  const dispatch = useDispatch()

  const handleLike = (e) => {
    if (e.target.id === "0") {
      if (likeStatus0 === false) {
        dispatch({ type: "LIKE0" })
        e.target.className = "btn btn-success"
        e.target.textContent = "UNLIKE"
      } else {
        console.log(e.target.id);
        dispatch({ type: "UNLIKE0" })
        e.target.className = "btn btn-secondary"
        e.target.textContent = "LIKE"
      }
    } else if (e.target.id === '1') {
      if (likeStatus1 === false) {
        dispatch({ type: "LIKE1" })
        e.target.className = "btn btn-success"
        e.target.textContent = "UNLIKE"
      } else {
        dispatch({ type: "UNLIKE1" })
        e.target.className = "btn btn-secondary"
        e.target.textContent = "LIKE"
      }
    } else {
      if (likeStatus2 === false) {
        dispatch({ type: "LIKE2" })
        e.target.className = "btn btn-success"
        e.target.textContent = "UNLIKE"
      } else {
        dispatch({ type: "UNLIKE2" })
        e.target.className = "btn btn-secondary"
        e.target.textContent = "LIKE"
      }
    }
  }

  return (
    <button style={{ margin: '30px' }}
      onClick={handleLike}
      role="switch"
      aria-checked="true"
      className={likeStatuses[props.id] === true ? "btn btn-secondary" : "btn btn-success"}
      id={props.id}
    >{likeStatuses[props.id] === true ? 'LIKE' : 'UNLIKE'}</button>
  )
}
