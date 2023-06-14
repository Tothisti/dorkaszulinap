import { Grid } from "@mui/material";
import AnswerButton from "./AnswerButton";
import { useContext, useState } from "react";
import { AppContext } from "../App";
import { useSelector } from "react-redux";

function AnswerPanel() {
  const questions = useSelector(state => state.question.questions)
  const actual = useSelector(state => state.question.actual)
  const selectedAnswer = useSelector(state => state.question.selectedAnswer)
  return (
    <Grid
      container
      rowSpacing={1}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      minHeight='150px'
      py='20px'
    >
      {questions[actual].answers.map((answer, i) => {
        return (
          <Grid item key={i} xs={12}>
            <AnswerButton id={i}
              answerText={answer}
              checked={selectedAnswer === i}
            />
          </Grid>
        )
      })}
    </Grid>
  );
}

export default AnswerPanel;