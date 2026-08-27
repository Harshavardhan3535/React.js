import { Routes, Route, Link } from 'react-router-dom';
import PostsRQ from './components/PostsRQ';
import PostsTraditional from './components/PostsTraditional';
import Home from './components/Home';
import PostDetailsRQ from './components/PostDetailsRQ';
import PaginatedQueries from './components/PaginatedQueries';
import './App.css';

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/posts">Traditional Posts</Link></li>
          <li><Link to="/rq-posts">RQ Posts</Link></li>
          <li><Link to="/fruits">Paginated Fruits</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/posts' element={<PostsTraditional />} />
        <Route path='/rq-posts' element={<PostsRQ />} />
        <Route path='/rq-posts/:postId' element={<PostDetailsRQ />} />
        <Route path='/fruits' element={<PaginatedQueries />} />
      </Routes>
    </div>
  );
}

export default App;