// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Spinner from '../components/Spinner';
// import { Link } from 'react-router-dom';
// import { AiOutlineEdit } from 'react-icons/ai';
// import { BsInfoCircle } from 'react-icons/bs';
// import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
// import BooksTable from '../components/home/BooksTable';
// import BooksCard from '../components/home/BooksCard';

// const Home = () => {
//   const [books, setBooks] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [showType, setShowType] = useState('table');

//   useEffect(() => {
//     setLoading(true);
//     axios
//       .get('http://localhost:5555/books')
//       .then((response) => {
//         setBooks(response.data.data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.log(error);
//         setLoading(false);
//       });
//   }, []);

//   return (
//     <div className='p-4'>
//       <div className='flex justify-center items-center gap-x-4'>
//         <button
//           className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
//           onClick={() => setShowType('table')}
//         >
//           Table
//         </button>
//         <button
//           className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
//           onClick={() => setShowType('card')}
//         >
//           Card
//         </button>
//       </div>
//       <div className='flex justify-between items-center'>
//         <h1 className='text-3xl my-8'>Books List</h1>
//         <Link to='/books/create'>
//           <MdOutlineAddBox className='text-sky-800 text-4xl' />
//         </Link>
//       </div>
//       {loading ? (
//         <Spinner />
//       ) : showType === 'table' ? (
//         <BooksTable books={books} />
//       ) : (
//         <BooksCard books={books} />
//       )}
//     </div>
//   );
// };


// export default Home;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { MdOutlineAddBox } from 'react-icons/md';
import BooksTable from '../components/home/BooksTable';
import BooksCard from '../components/home/BooksCard';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState('table');
  const [search, setSearch] = useState('');

  useEffect(() => {
    setLoading(true);
    axios
      .get('https://bookbuzz-wzqp.onrender.com/books')
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  // Filter books based on search query
  const filteredBooks = books.filter((book) => {
    const query = search.toLowerCase();
    return (
      book.title.toLowerCase().includes(query) ||
      book.author.toLowerCase().includes(query) ||
      book.publishYear.toString().includes(query)
    );
  });

  return (
    <div className="p-4">
      {/* View toggle buttons */}
      <div className="flex justify-center items-center gap-x-4">
        <button
          className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg"
          onClick={() => setShowType('table')}
        >
          Table
        </button>
        <button
          className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg"
          onClick={() => setShowType('card')}
        >
          Card
        </button>
      </div>

      {/* Header and search */}
      <div className="flex justify-between items-center my-6">
  <h1 className="text-3xl text-blue-800">Books List</h1>
  <Link to="/books/create">
    <MdOutlineAddBox className="text-sky-800 text-4xl" />
  </Link>
</div>

      {/* Search bar */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search by title, author, or year..."
          className="w-full md:w-1/2 border px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-sky-400"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Content */}
      {loading ? (
        <Spinner />
      ) : showType === 'table' ? (
        <BooksTable books={filteredBooks} />
      ) : (
        <BooksCard books={filteredBooks} />
      )}
    </div>
  );
};

export default Home;
