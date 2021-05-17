import React from "react";
import TabularRow from "./TabularRow";
import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import FlipMove from "react-flip-move";

const useStyles = makeStyles({
  table: {
    width: 500,
    marginTop: 0,
    marginRight: "auto",
    marginBottom: 10,
    marginLeft: "auto",
  },
  tableHead: {
    fontWeight: 700,
    backgroundColor: "#e0e5ff",
  },
});

const TabularContent = ({ digit, content }) => {
  const classes = useStyles();
  function calcWords(data) {
    function wordsObj(data) {
      if (data !== "") {
        let temp = data;
        const words = temp.split(" ");

        const uniqueWords = {};

        for (var i = 0; i < words.length; i++) {
          let word = words[i];

          if (word in uniqueWords) {
            let count = uniqueWords[word];
            count++;
            uniqueWords[word] = count;
          } else {
            uniqueWords[word] = 1;
          }
        }
        return uniqueWords;
      }
    }

    function wordsArr(words) {
      const arr = [];
      let id = 0;
      for (let word in words) {
        arr.push({
          id: id++,
          word: word,
          count: words[word],
        });
      }
      return arr;
    }
    let words = wordsObj(data);
    return wordsArr(words);
  }

  function topWordsFun(ar) {
    for (var i = 1; i < ar.length; i++)
      for (var j = 0; j < i; j++)
        if (ar[i].count > ar[j].count) {
          var x = ar[i];
          ar[i] = ar[j];
          ar[j] = x;
        }

    return ar;
  }

  const uniqueWords = calcWords(content.toLowerCase());
  const topWords = topWordsFun(uniqueWords);

  return (
    <TableContainer className={classes.table} component={Paper}>
      <Table size="small" aria-label="a dense table">
        <TableHead className={classes.tableHead}>
          <TableRow>
            <TableCell>Word</TableCell>
            <TableCell align="right">Frequency</TableCell>
          </TableRow>
        </TableHead>
      </Table>
      <FlipMove>
        {topWords.slice(0, digit).map((obj) => {
          return <TabularRow key={obj.id} word={obj.word} count={obj.count} />;
        })}
      </FlipMove>
    </TableContainer>
  );
};

export default TabularContent;
