import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='bg-[#14161f] min-h-screen flex justify-center items-center text-white'>
      <Router>
      <Routes>
        <Route path="/" element={<></>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
