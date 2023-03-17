import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Login, Register } from './pages'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
