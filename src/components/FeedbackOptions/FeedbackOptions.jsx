import { nanoid } from "nanoid"

export const FeedbackOptions = ({ options, onLeaveFeedback }) =>
( 
  <>
    <p>Please leave Feedback</p>
    {options.map((option) => {
      return (
        <button
          name={option}
          onClick={onLeaveFeedback}
          key={nanoid()}
          >{option}
        </button>  
      )
    })
    }  
  </>
)
