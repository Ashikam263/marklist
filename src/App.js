import React from 'react';
import Table from './Table';
import Title from './Title';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MarkModal from './MarkModal';
import Mark from './Mark';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Title />
        <Routes>
          <Route exact path="/marklist/" element={
              <Table />
              // <div>Hello wolrd</div>
          }>
          </Route>
          <Route exact path="/marklist/Mark/:id" element={
            <Mark />
          }/>
          <Route exact path="/marklist/Modal" element={
            <MarkModal />
          }/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;