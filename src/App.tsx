import './App.scss';
import Home from './Home';
import PostsPage from './PostsPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:slug" element={<PostsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
