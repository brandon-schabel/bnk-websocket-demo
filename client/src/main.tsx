
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";

import { App } from "./app";
import { SocketContextProvider } from "./socket-context";


// Render our app!
const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <SocketContextProvider>
        <App />
      </SocketContextProvider>
    </StrictMode>
  );
}
