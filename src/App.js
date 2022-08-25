/*what does routing mean ? 

- single page application, never fetched a new html page. The page loaded on the browser never changed.
- give users the illusion of having different pages.
- react changes what is visible on the page.
+ advantage : never have to wait for a new page to be loaded -> stay fast + reactive <- everything is handled by client-side js, which is faster than sending a new request to the server -> enhance user experience
*/
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AllMeetupsPagel from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetup';
import FavoritesPage from './pages/Favorites';
import Layout from './components/layout/Layout';

function App() {
  return (
    <Layout>
      <Routes>
        <Route exact path="/" element={<AllMeetupsPagel/>} />
        <Route exact path="/new-meetup" element={<NewMeetupPage/>} />
        <Route exact path="/favorites" element={<FavoritesPage/>} />
      </Routes>
    </Layout>
  );
}

export default App;


