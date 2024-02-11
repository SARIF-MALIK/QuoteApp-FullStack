import { Fragment } from 'react';
import './App.css';
import MainNavigation from './components/mainNavigation/mainNavigation';
import { Routes, Route } from 'react-router-dom';
import AllQuotes from './components/pages/AllQuotes';
import NewQuote from './components/pages/NewQuote';



function App() {
  return (
    <Fragment>
      <MainNavigation/>
      <main>
        <Routes>
            <Route path='/' element={<AllQuotes/>} />
            <Route path='/new' element={<NewQuote/>} />
        </Routes>
      </main>
    </Fragment>
  );
}

export default App;
