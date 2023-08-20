import { ChangeEvent } from "react";
import { useAppState } from "./socket-context";

export function App() {
  const { control, state } = useAppState();

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    const inputElement = event.target as HTMLInputElement;
    control.input.set(inputElement.value);
  };

  return (
    <div>
      <div>
        <button onClick={() => control.count.decrement()}>-</button>

        {state.count}

        <button onClick={() => control.count.increment()}>+</button>
      </div>
      <div>
        <label>
          What is your name?
          <div>
            <input onChange={handleInput} defaultValue={state.input} />
          </div>
        </label>

        <div>
          <span>Hello {state.input}!</span>
        </div>

        <div>
          <span>Number Of Updates {state.updates}!</span>
        </div>
      </div>
    </div>
  );
}

export default App;
