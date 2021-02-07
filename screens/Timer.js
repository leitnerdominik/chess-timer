import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { Audio } from "expo-av";

import TimerTile from "../components/TimerTile";
import Menu from "../components/Menu";

import { timeToString } from "../util/util";
import Colors from "../constants/Colors";

const Timer = (props) => {
  const [blackTimeLeft, setBlackTimeLeft] = useState();
  const [whiteTimeLeft, setWhiteTimeLeft] = useState();
  const [initialTime, setInitialTime] = useState(10 * 1000);
  const [turn, setTurn] = useState("white");
  const [started, setStarted] = useState(false);
  const [soundRing, setSoundRing] = useState();
  const [turnSound, setTurnSound] = useState();

  let timerInterval;
  useEffect(() => {
    if (started) {
      if (turn === "white") {
        if (whiteTimeLeft === 0) {
          playEndSound();
          setStarted(false);
          return clearInterval(timerInterval);
        }
        timerInterval = countdown("white");
      } else {
        if (blackTimeLeft === 0) {
          playEndSound();
          setStarted(false);
          return clearInterval(timerInterval);
        }
        timerInterval = countdown("black");
      }
    } else {
      clearInterval(timerInterval);
    }
    return () => clearInterval(timerInterval);
  }, [started, blackTimeLeft, whiteTimeLeft]);

  useEffect(() => {
    return soundRing
      ? () => {
          // console.log("unloading");
          soundRing.unloadAsync();
        }
      : undefined;
  }, [soundRing]);

  useEffect(() => {
    return turnSound
      ? () => {
          // console.log("unloading");
          turnSound.unloadAsync();
        }
      : undefined;
  }, [turnSound]);

  useEffect(() => {
    setWhiteTimeLeft(initialTime);
    setBlackTimeLeft(initialTime);
    // clearInterval(timerInterval)
  }, [initialTime]);

  const playEndSound = async () => {
    try {
      const { sound } = await Audio.Sound.createAsync(
        require("../assets/sounds/sound.mp3")
      );
      setSoundRing(sound);
      await sound.playAsync();
    } catch (err) {
      console.log(err);
    }
  };

  const playTurnSound = async () => {
    try {
      const { sound } = await Audio.Sound.createAsync(
        require("../assets/sounds/turn_sound.mp3")
      );
      setTurnSound(sound);
      await sound.playAsync();
    } catch (err) {
      console.log(err);
    }
  };

  const countdown = (type) => {
    return setInterval(() => {
      if (type === "black") {
        setBlackTimeLeft((prevTime) => prevTime - 100);
      } else {
        setWhiteTimeLeft((prevTime) => prevTime - 100);
      }
    }, 100);
  };

  const startTimeHandler = (currentTurn) => {
    if (currentTurn === "white" && turn === "white") return;
    if (currentTurn === "black" && turn === "black") return;
    if (!started) {
      if (whiteTimeLeft <= 0 || blackTimeLeft <= 0) {
        return;
      }
    }
    setStarted(true);
    setTurn(currentTurn);
    playTurnSound();
  };

  const resetTimeHandler = () => {
    setWhiteTimeLeft(initialTime);
    setBlackTimeLeft(initialTime);
    setStarted(false);
  };

  const pauseTimeHandler = () => {
    setStarted(false);
  };

  return (
    <View style={styles.root}>
      <View style={styles.timerContainer}>
        <View style={styles.tileContainer}>
          <TimerTile
            style={styles.rotateTile}
            variant="white"
            clicked={startTimeHandler.bind(this, "black")}
            active={turn === "white"}
            lost={whiteTimeLeft === 0}
          >
            {timeToString(whiteTimeLeft)}
          </TimerTile>
        </View>
        <Menu
          reset={resetTimeHandler}
          started={started}
          navigation={props.navigation}
          pause={pauseTimeHandler}
        />
        <View style={styles.tileContainer}>
          <TimerTile
            variant="black"
            clicked={startTimeHandler.bind(this, "white")}
            active={turn === "black"}
            lost={blackTimeLeft === 0}
          >
            {timeToString(blackTimeLeft)}
          </TimerTile>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: Colors.accentColor,
    flex: 1,
  },
  timerContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    margin: 20,
  },
  tileContainer: {
    height: "45%",
    width: "100%",
  },
  rotateTile: {
    transform: [{ rotate: "180deg" }],
  },
});

export default Timer;
