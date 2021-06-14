import React from 'react';
import { GlobalProvider } from './context/globalContext';
import {useSelector } from 'react-redux';
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom';
import Nav from './pages/nav/nav';
import Home from './pages/home/home';
import Search from './pages/search/search';
import Movie from './pages/search/movie/movie';
import Login from './pages/login/login';
import Note from './pages/component/notes/note';
import List from './pages/mylist/mylist';
import './App.scss';


function App() {
  const isDark = useSelector(state=> state.darkReducer);
  const isLogged = useSelector(state=> state.loggedReducer);
  return (
    <Router>
    <GlobalProvider>
    <div className={`App ${isDark? "dark-mode" : "light-mode"}`}>
      <Nav/>
      {isLogged ? <Note/> : "" }
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/search/" exact component={Search}/>
        <Route path="/search/:id"  component={Movie} />
        <Route path="/login/" exact component={Login}/>
        <Route path="/list/" exact component={List}/>
      </Switch>
    </div>
    </GlobalProvider>
    </Router>
  );
}

export default App;