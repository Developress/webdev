import React from 'react'
import { Bar } from '@reactchartjs/react-chart.js'
import {chessBoard, SIZE} from "./Table";

const chessNames = ['Pawn', 'Bishop', 'Knight', 'Rook', 'Queen', 'King']

const data = {
  labels: chessNames,
  datasets: [
    {
      label: 'Chess figures and their counts on the field',
      data: getChessCounts(),
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
}

export function Chart(){
    return (
        <div className="flex-div">
            <Bar data={data} options={{}} />
        </div>
    )
}

function getChessCounts(){
    let chessLetters = ['p', 'b', 'n', 'r', 'q', 'k']
    let chess = []
    for (let i = 0; i < chessLetters.length; i++){
        chess.push({
            letter: chessLetters[i],
            count: 0
        })
    }

    for(let i = 0; i < SIZE; i++){
        for(let j = 0; j < SIZE; j++){
            const letter = chessBoard[i][j][1];
            if(letter !== undefined){
                chess.find(function (element){
                    return element['letter'] === letter
                }).count += 1;
            }
        }
    }

    const chessCounts = []

    for(let i = 0; i < chess.length; i++){
        chessCounts.push(chess[i]["count"]);
    }

    return chessCounts;
}