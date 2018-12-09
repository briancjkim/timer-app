import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators as actions } from "../reducer";
import Timer from "./presenter";

function mapStateToProps(state) {
  const { isPlaying, elapsedTime, timerDuration } = state;

  return {
    isPlaying,
    elapsedTime,
    timerDuration
  };
}
function mapDispatchToProps(dispatch) {
  return {
    startTimer: bindActionCreators(actions.startTimer, dispatch),
    restartTimer: bindActionCreators(actions.restartTimer, dispatch),
    addSecond: bindActionCreators(actions.addSecond, dispatch),
    pauseTimer: bindActionCreators(actions.pauseTimer, dispatch),
    setDuration: bindActionCreators(actions.setDuration, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Timer);
