//import

// actions
const START_TIMER = "START_TIMER";
const RESTART_TIMER = "RESTART_TIMER";
const PAUSE_TIMER = "PAUSE_TIMER";
const ADD_SECOND = "ADD_SECOND";
const SET_DURATION = "SET_DURATION";

// Action creators
function startTimer() {
  return {
    type: START_TIMER
  };
}
function restartTimer() {
  return {
    type: RESTART_TIMER
  };
}

function pauseTimer() {
  return {
    type: PAUSE_TIMER
  };
}

function addSecond() {
  return {
    type: ADD_SECOND
  };
}

function setDuration(duration) {
  return {
    type: SET_DURATION,
    duration: duration
  };
}

const TIMER_DURATION = 1500;

// initial state
initialState = {
  isPlaying: false,
  elapsedTime: 0,
  timerDuration: TIMER_DURATION
};

// reducer
function reducer(state = initialState, action) {
  switch (action.type) {
    case START_TIMER:
      return applyStartTimer(state);
    case RESTART_TIMER:
      return applyRestartTimer(state);
    case PAUSE_TIMER:
      return applyPauseTimer(state);
    case ADD_SECOND:
      return applyAddSecond(state);
    case SET_DURATION:
      return applySetDuration(state, action.duration);

    default:
      return state;
  }
}
// redux methods
function applySetDuration(state, duration) {
  return {
    ...state,
    timerDuration: duration
  };
}

function applyStartTimer(state) {
  return {
    ...state,
    isPlaying: true
  };
}
function applyRestartTimer(state) {
  return {
    ...state,
    isPlaying: false,
    elapsedTime: 0
  };
}
function applyPauseTimer(state) {
  return {
    ...state,
    isPlaying: false
  };
}
function applyAddSecond(state) {
  if (state.elapsedTime < TIMER_DURATION) {
    return {
      ...state,
      elapsedTime: state.elapsedTime + 1
    };
  } else {
    return {
      ...state,
      isPlaying: false,
      elapsedTime: 0
    };
  }
}

//export action creator
const actionCreators = {
  startTimer,
  restartTimer,
  pauseTimer,
  addSecond,
  setDuration
};
export { actionCreators };

//export redux
export default reducer;
