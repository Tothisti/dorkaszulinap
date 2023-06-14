import './App.css';
import { Box, Paper, Typography } from '@mui/material';
import AnswerPanel from './components/AnswerPanel';
import { createContext, useEffect, useState} from 'react';
import Nextbutton from './components/NextButton';
import { useSelector } from 'react-redux';
import WinnerScreen from './components/WinnerScreen';
import LoseScreen from './components/LoseScreen';

const lorem = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown`

export const AppContext = createContext()

function App() {
  const audio = new Audio('./lehetsz.mp3')
  const [start, setStart] = useState(false)
  useEffect(() => {
    if(start) {
      audio.play()
    }
  },[start])
  const actualQuestion = useSelector(state => state.question.actual)
  const questions = useSelector(state => state.question.questions)
  const isFinished = useSelector(state => state.question.isFinished)
  const points = useSelector(state => state.question.earnedPoints)
  let finishScreen = <LoseScreen />
  if(points === questions.length) {
    finishScreen = <WinnerScreen />
  }
  console.log('actual: ' + actualQuestion)
  console.log('questions.length: ' + questions.length)
  return (
    <>
      {!isFinished &&
        <Box onClick={() => setStart(true)} sx={{p: '12px', height: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Paper elevation={5} sx={{ minWidth: {xs: '88%', md: '700px'}, p: '8px', borderRadius: '6%', minHeight: '40%', }} >
            {/* Question header */}
            <Box sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              p: '8px 20px 8px 20px'
            }}>
              <Box>{(actualQuestion + 1) + "/" + questions.length}</Box>
              <Box>{'<3'}</Box>
            </Box>

            {/* Question */}
            <Box sx={{ minHeight: '40%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Typography variant='h5' p='8px 20px 8px 20px' >
                {questions[actualQuestion].question}
              </Typography>
            </Box>

            {/* Answers */}
            <AnswerPanel />
            <Box sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              p: '8px 20px 8px 20px'
            }}>
              <Nextbutton />
            </Box>
          </Paper>

        </Box>
      }
      { isFinished && finishScreen }
    </>
  );
}

export default App;
