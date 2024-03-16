import './App.css';
import { Demo1 } from './components/Demo1';

function App() {
  return (
    <div className="App m-12 flex flex-col gap-y-10">
      <h1 className='text-2xl font-bold'>OpenMRS Animation Demo</h1>
      <div>
          <p className='text-lg font-bold mb-4'>Demo 1</p>
          <Demo1/>
      </div>
    </div>
  );
}

export default App;
