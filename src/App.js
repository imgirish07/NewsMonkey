import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
//jhkfjkds
export class App extends Component {
  render() {

    return (
      <BrowserRouter>
        <div>

          <Navbar />
          <Routes>
            <Route path='/' element={<News pageSize={9} category='general' country='in' />} />
          </Routes>

          <Routes>
            <Route path="/sports" element={<News pageSize={9} category='sports' country='in' />} />
          </Routes>

          <Routes>
            <Route path="/business" element={<News pageSize={9} category='business' country='in' />} />
          </Routes>

          <Routes>
            <Route path="/entertainment" element={<News pageSize={9} category='entertainment' country='in' />} />
          </Routes>

          <Routes>
            <Route path="/health" element={<News pageSize={9} category='health' country='in' />} />
          </Routes>

          <Routes>
            <Route path="/science" element={<News pageSize={9} category='science' country='in' />} />
          </Routes>

          <Routes>
            <Route path="/technology" element={<News pageSize={9} category='technology' country='in' />} />
          </Routes>


        </div>
      </BrowserRouter>
    )
  }
}

export default App