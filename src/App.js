import React from 'react';
import Table from './Table';
import Title from './Title';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MarkModal from './MarkModal';
import Mark from './Mark';

function App() {
  return (
    <BrowserRouter basename='/'>
      <div className="App">
        <Title />
        <Routes>
          <Route exact path="/" element={
              <Table />
              // <div>Hello wolrd</div>
          }>
          </Route>
          <Route exact path="/Mark/:id" element={
            <Mark />
          }/>
          <Route exact path="/Modal" element={
            <MarkModal />
          }/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;