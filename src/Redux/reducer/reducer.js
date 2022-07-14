import { types } from "../types";
import { server_socket } from "../../api/ServerSockets";
import moment from "moment";

const socket = {
  intr_socket: new WebSocket(server_socket.interactive_socket),
  brcst_socket: new WebSocket(server_socket.brodcast_socket),
  strategy_socket: new WebSocket(server_socket.strategt_socket),
  brcst_data: [],
};

export const socketReducer = (state = socket, action) => {
  switch (action.type) {
    case types.GET_BROADCAST_SOCKET:
      return {
        ...state,
        brcst_socket: state.brcst_socket,
      };
    case types.GET_INTERACTIVE_SOCKET:
      return {
        ...state,
        intr_socket: state.intr_socket,
      };
    case types.GET_STRATEGY_SOCKET:
      return {
        ...state,
        strategy_socket: state.strategy_socket,
      };
    case types.GET_BROADCAST_DATA:
      socket.brcst_socket.onmessage = (event) => {
        return {
          ...state,
          brcst_data: event.data.split("#"),
        };
      };
      return {
        state,
      };
    default:
      return state;
  }
};

const initialLog = {
  logs: [],
};

export const LogReducer = (state = initialLog, action) => {
  switch (action.type) {
    case types.GET_LOG:
      return {
        ...state,
        logs: state.logs,
      };
    case types.ADD_LOG:
      return {
        ...state,
        logs: [action.payload, ...state.logs],
      };
    default:
      return state;
  }
};
