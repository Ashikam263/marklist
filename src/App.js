import React from 'react';
import Table from './Table';
import Title from './Title';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MarkModal from './Modal';
import Mark from './Mark';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Title />
        <Routes>
          <Route path="/table">
            <React.Fragment>
              <Table />
            </React.Fragment>
          </Route>
          <Route path="/Mark/:id">
            <Mark />
          </Route>
          <Route path="/Modal">
            <MarkModal />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;