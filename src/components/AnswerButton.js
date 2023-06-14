import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { Box, Checkbox, Typography } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { selectAnswer } from "../features/questionSlice";

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function AnswerButton(props) {
  const {id, answerText, checked} = props
  const dispatch = useDispatch()
  const clickHandler = () => {
    dispatch(selectAnswer({id}))
  }
  // console.log(id)
  return (
    <Box sx={{ textAlign: 'center', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }} onClick={clickHandler}>
      <Checkbox checked={checked}{...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
      <Typography textAlign='left'>{answerText}</Typography>
    </Box>
  );
}