import React, { Component, Fragment } from "react";
import { View, Text, TextInput, StyleSheet, StatusBar } from "react-native";
import Button from "../Button";

const formatTime = time => {
  let minutes = Math.floor(time / 60);
  time = time - minutes * 60;
  let seconds = time;
  return `${minutes < 10 ? `0${minutes}` : minutes}:${
    seconds < 10 ? `0${seconds}` : seconds
  }`;
};
class Timer extends Component {
  componentWillReceiveProps(nextProps) {
    const currentProps = this.props;
    if (!currentProps.isPlaying && nextProps.isPlaying) {
      const timeInterval = setInterval(() => {
        currentProps.addSecond();
      }, 1000);
      this.setState({ timeInterval });
    } else if (currentProps.isPlaying && !nextProps.isPlaying) {
      clearInterval(this.state.timeInterval);
    }
  }

  render() {
    console.log(this.props);
    const {
      isPlaying,
      elapsedTime,
      timerDuration,
      startTimer,
      restartTimer,
      pauseTimer,
      addSecond,
      setDuration
    } = this.props;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <View style={styles.upper}>
          <Text style={styles.time}>
            {formatTime(timerDuration - elapsedTime)}
          </Text>
          {!isPlaying && (
            <View style={styles.inputContainer}>
              <Text style={styles.title}>Time:</Text>
              <TextInput
                style={styles.input}
                placeholder={"Enter duration in seconds"}
                onChangeText={setDuration}
                value={timerDuration}
              />
            </View>
          )}
        </View>
        <View style={styles.lower}>
          {!isPlaying && <Button iconName="play-circle" onPress={startTimer} />}
          {isPlaying && (
            <Fragment>
              <Button iconName="stop-circle" onPress={restartTimer} />
              <Button iconName="pause-circle" onPress={pauseTimer} />
            </Fragment>
          )}
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FA7268"
  },
  upper: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center"
  },
  lower: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  time: {
    color: "white",
    fontSize: 120,
    fontWeight: "100"
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  input: {
    color: "white",
    fontSize: 20,
    textAlign: "center"
  },
  title: {
    color: "white",
    fontSize: 20,
    marginRight: 10
  }
});
export default Timer;
