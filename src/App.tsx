import './App.scss';
import Home from './Home';
import PostsPage from './PostsPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/post/:slug" element={<PostsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
