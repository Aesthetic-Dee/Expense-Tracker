import './App.css';
import Graph from './components/Graph';
import Form from './components/Form';

function App() {
  return (
  <div className="App bg-teal-900">
    <div className="container mx-auto max-w-6xl text-center drop-shadow-lg text-white">
      <h1 className="text-4xl py-8 mb-10 bg-teal-700 text-white rounded">Expense Tracker</h1>

      {/* grid columns */}
      <div className="grid md:grid-cols-2 gap-4">
          {/* Chart */}
          <Graph></Graph>
          {/* Form */}
          <Form></Form>
      </div>
    </div>
  </div>
  );
}

export default App;
