import React from 'react'

export default function Emoji(props) {
  return (
    <div className="term">
        <dt>
        <span className="emoji" role="img" aria-label="Tense Biceps">
              {props.emojiImg}
        </span>
        <span>{props.emojiName}</span>
        </dt>
        <dd>
            {props.emojiMeaning}
        </dd>
    </div>
  )
}

