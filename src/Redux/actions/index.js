import { types } from "../types";

//socket actions
export const getInrSocket = () => {
  return {
    type: types.GET_INTERACTIVE_SOCKET,
  };
};

export const getBdrSocket = () => {
  return {
    type: types.GET_BROADCAST_SOCKET,
  };
};

export const getStrategySocket = () => {
  return {
    type: types.GET_STRATEGY_SOCKET,
  };
};

export const addLog = (log) => {
  return {
    type: types.ADD_LOG,
  };
};

export const getLog = () => {
  return {
    type: types.GET_LOG,
  };
};
