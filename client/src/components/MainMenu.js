import React from 'react';
import { BrowserRouter as Link } from 'react-router-dom';
import { Button } from 'react-materialize';
import AppRouter from './AppRouter';


const MainMenu = () => {

  return (
    <div className="mainMenu">
      <div>
      <Link to="/">
        <Button node="a" href="/">Home</Button>
      </Link>
      </div>
      <div>
      <Link to="/dean">
        <Button node="a" href="/dean">Dean's Story</Button>
      </Link>
      </div>
      <div>
      <Link to="/cass">
        <Button node="a" href='/cass'>Cass's Story</Button>
      </Link>
      </div>
      <div>
      <Link to="/sam">
        <Button node="a" href="/sam">Sam's Story</Button>
      </Link>
      </div>
      <AppRouter/>
    </div>
   
  );
}; 

// Main App code, calls pure Component - main menu

export default MainMenu;