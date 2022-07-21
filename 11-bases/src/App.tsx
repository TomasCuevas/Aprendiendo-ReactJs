import { CounterEffect } from './bases/CounterEffect';
import { Counter } from './bases/Counter';
import { CounterBy } from './bases/CounterBy';

function App() {
  return (
    <>
      <h1>React</h1>
      <hr />

      <Counter />
      <CounterBy />
      <CounterEffect />
    </>
  );
}

export default App;
