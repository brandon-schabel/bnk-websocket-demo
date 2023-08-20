import { Dispatchers } from "@u-tools/core/modules/server-factory/create-web-socket-state-machine";
import { useServerState } from "@u-tools/react/use-server-state";
import { ReactNode, createContext, useContext } from "react";

export const defaultState = {
  count: 0,
  input: "",
  updates: 0,
};

export type StateType = typeof defaultState;

type StateDispatchers = Dispatchers<StateType>;

export const useWebsocketState = () => {
  const { control, state } = useServerState<StateType>({
    defaultState,
    url: "ws://localhost:8080/state",
  });

  return {
    control,
    state,
  };
};

export const SocketAppContext = createContext<{
  control: StateDispatchers;
  state: StateType;
}>({
  state: defaultState,
  control: {} as StateDispatchers,
});

export const SocketContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const appState = useWebsocketState();
  return (
    <SocketAppContext.Provider value={appState}>
      {children}
    </SocketAppContext.Provider>
  );
};

export const useAppState = () => {
  return useContext(SocketAppContext);
};
