import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { eraseSelectedAnswer, increment, incrementPoint, makeFinish } from "../features/questionSlice";

function Nextbutton() {
  const dispatch = useDispatch()
  const actualQuestion = useSelector(state => state.question.actual)
  const questions = useSelector(state => state.question.questions)
  const selectedAnswer = useSelector(state => state.question.selectedAnswer)

  const clickHandler = () => {

    if (questions[actualQuestion].correctAnswer === selectedAnswer) {
      console.log('helyes')
      dispatch(incrementPoint())
    }
    if (actualQuestion + 1 >= questions.length) {
      console.log('vege')
      dispatch(makeFinish())
    } else {
      dispatch(increment())
      dispatch(eraseSelectedAnswer())
    }
  }
  return (
    <Button variant="contained" onClick={clickHandler}>Következő</Button>
  );
}

export default Nextbutton;