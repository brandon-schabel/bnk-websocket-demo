import {
  createServerFactory,
  createWSStateMachine,
} from "@u-tools/core/modules/server-factory";
import { defaultState } from "../client/src/socket-context";

const { start, route } = createServerFactory({
  wsPaths: ["/state"],
  enableBodyParser: true,
  cors: {
    allowedOrigins: ["http://localhost:5173"],
  },
});

const { onRequest: onBaseRequest } = route("/");

onBaseRequest(async ({ request }) => {
  return new Response(`Hello World ${request.method}`);
});

const { websocketHandler, onStateChange, control, state } =
  createWSStateMachine(defaultState);

onStateChange("count", (count) => {
  control.updates.set(state.updates + 1);
});

onStateChange("input", (input) => {
  control.updates.set(state.updates + 1);
});

start({
  websocket: websocketHandler,
  port: 8080,
  verbose: true,
});
