import { Box, Button, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide, Typography } from '@mui/material';
import React, { Component } from 'react'
import WheelComponent from "./roulette/WheelComponent";
import Fireworks from '@fireworks-js/react';

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function WinnerScreen() {
  const [open, setOpen] = React.useState(false);
  const [ruleOpen, setRuleOpen] = React.useState(true);

  const handleClose = () => {
    setRuleOpen(false);
  };
  const [winnerText, setWinnerText] = React.useState('')
  const segments = [
    "titok",
    "titok",
    "titok",
    "titok",
    "titok"];
  const segColors = [
    "#166534",
    "#854d0e",
    "#1e40af",
    "#86198f",
    // "#34A24F",
    // "#F9AA1F",
    // "#EC3F3F",
    "#FF9000"
  ];
  const onFinished = (winner) => {
    const prizes = [
      'Egy hétvége Szentendrén a szobámba szokásosan.',
      'Egy wellness hétvége Cserkeszőlőn',
      'Egy wasabi all in.',
      'Egy hétvége Prágában.',
      'Szamos csoki látogatás kézműves csoki készítéssel.',
      'Egy Meki.'
    ]
    const rndInt = randomIntFromInterval(0, prizes.length-1)
    setWinnerText(prizes[rndInt])
    setOpen(true);
    console.log(winner);
  };
  return (
    <>
      <Container maxWidth='sm'>
        <Typography textAlign='center' variant='h5' pt={2}>Sikerült végre! Pörgess !!!</Typography>
        <div className="App">
          <div id="wheelCircle">
            <WheelComponent
              segments={segments}
              segColors={segColors}
              winningSegment=""
              onFinished={(winner) => onFinished(winner)}
              primaryColor="black"
              primaryColoraround="#ffffffb4"
              contrastColor="white"
              buttonText="Spin"
              isOnlyOnce={true}
              size={300}
              upDuration={50}
              downDuration={2000}
            />
          </div>
        </div>
        <Dialog
          open={ruleOpen}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Nyeremények"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <Typography>1. Egy hétvége Szentendrén a szobámba szokásosan.</Typography>
              <Typography>2. Egy wellness hétvége Cserkeszőlőn.</Typography>
              <Typography>3. Egy wasabi all in.</Typography>
              <Typography>4. Egy hétvége Prágában.</Typography>
              <Typography>5. Szamos csoki látogatás kézműves csoki készítéssel.</Typography>
              <Typography>6. Egy Meki.</Typography>
              <Typography>FIGYELEM! AZ EREDMÉNYEK TÉNYLEG VÉLETLENSZERŰEN SORSOLÓDNAK.</Typography>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} autoFocus>
              Mehet
            </Button>
          </DialogActions>
        </Dialog>
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle>{"Boldog szülinapot !"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              <Typography>A nyereményed nem más mint:</Typography>
              <Typography variant='h6' fontWeight='bold'>{winnerText}</Typography>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
          </DialogActions>
        </Dialog>
      </Container>
      {open && <Fireworks
        options={{
          rocketsPoint: {
            intensity: 60,
            min: 0,
            max: 100
          }
        }}
        style={{
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          position: 'fixed',
          background: '#000'
        }}
      />}
    </>
  )
}

export default WinnerScreen;