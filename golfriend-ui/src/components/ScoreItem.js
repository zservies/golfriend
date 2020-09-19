import React from 'react'

export default function ScoreItem(props) {
  return (
    <div>
      <p>
        {props.scoreItem.course} - 
        {props.scoreItem.score}/
        {props.scoreItem.coursePar}
      </p>
    </div>
  )
}
