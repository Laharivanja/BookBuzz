// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Home from './pages/Home';
// import CreateBook from './pages/CreateBooks';
// import ShowBook from './pages/ShowBook';
// import EditBook from './pages/EditBook';
// import DeleteBook from './pages/DeleteBook';

// const App = () => {
//   return (
//     <Routes>
//       <Route path='/' element={<Home />} />
//       <Route path='/books/create' element={<CreateBook />} />
//       <Route path='/books/details/:id' element={<ShowBook />} />
//       <Route path='/books/edit/:id' element={<EditBook />} />
//       <Route path='/books/delete/:id' element={<DeleteBook />} />
//     </Routes>
//   );
// };

// export default App;
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreateBook from './pages/CreateBooks';
import ShowBook from './pages/ShowBook';
import EditBook from './pages/EditBook';
import DeleteBook from './pages/DeleteBook';

const App = () => {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowWelcome(false), 2000); // 2s delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showWelcome ? (
        <div
          style={{
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '2rem',
            fontWeight: 'bold',
            backgroundColor: '#f5f5dc', // light beige
            color: '#4b2e2e',
          }}
        >
          Welcome to the Book Store, enjoy! 📚
        </div>
      ) : (
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/books/create' element={<CreateBook />} />
          <Route path='/books/details/:id' element={<ShowBook />} />
          <Route path='/books/edit/:id' element={<EditBook />} />
          <Route path='/books/delete/:id' element={<DeleteBook />} />
        </Routes>
      )}
    </>
  );
};

export default App;
