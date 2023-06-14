import { createSlice } from '@reduxjs/toolkit'
import { questions } from '../questions'

export const questionSlice = createSlice({
  name: 'counter',
  initialState: {
    isFinished: false,
    earnedPoints: 0,
    actual: 0,
    selectedAnswer: null,
    questions: questions
  },
  reducers: {
    makeFinish: state => {
      state.isFinished = true
    },
    increment: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.actual += 1
    },
    selectAnswer: (state, action) => {
      state.selectedAnswer = action.payload.id
    },
    eraseSelectedAnswer: state => {
      state.selectedAnswer = null
    },
    incrementPoint: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.earnedPoints += 1
    },
  }
})

// Action creators are generated for each case reducer function
export const {
  makeFinish,
  increment,
  decrement,
  incrementByAmount,
  selectAnswer,
  eraseSelectedAnswer,
  incrementPoint
} = questionSlice.actions
export default questionSlice.reducer