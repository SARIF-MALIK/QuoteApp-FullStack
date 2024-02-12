import { Fragment } from 'react';
import './App.css';
import MainNavigation from './components/mainNavigation/mainNavigation';
import { Routes, Route } from 'react-router-dom';
import AllQuotes from './components/pages/AllQuotes';
import NewQuote from './components/pages/NewQuote';
import ShowQuotes from './components/pages/ShowQuotes';


function App() {
  return (
    <Fragment>
      <MainNavigation/>
      <main>
        <Routes>
            <Route path='/' element={<AllQuotes/>} />
            <Route path='/new' element={<NewQuote/>} />
            <Route path='/quotes/:id' element={<ShowQuotes/>}></Route>
        </Routes>
      </main>
    </Fragment>
  );
}

export default App;
