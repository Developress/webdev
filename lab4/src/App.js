import './App.css';
import React from "react";
import {Table} from './Table'
import {MyForm} from './MyForm'
import {Timer} from './Timer'
import {Chart} from './Chart'
import {Image} from './Image'

function Links(){
    return (
        <div>
            <h3><a className="text-dark" href="https://www.chesscoachonline.com/chess-articles/chess-rules">Chess
                rules</a></h3>
            <h3><a className="text-dark" href="https://www.chess.com/puzzles/problem/134311">The problem</a></h3>
        </div>
    )
}

function App() {
  return (
      <>
          <Timer/>
          <div className="flex-div">
              <div>
                  <Links/>
                  <MyForm />
              </div>
              <Table/>
          </div>
          <Chart/>
          <Image/>
      </>
  );
}

export default App;
