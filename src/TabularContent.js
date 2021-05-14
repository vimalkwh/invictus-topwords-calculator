import React from "react";
import TableRow from "./TableRow";
import "./App.css";

const TabularContent = ({ digit, content }) => {
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

  const uniqueWords = calcWords(content);
  const topWords = topWordsFun(uniqueWords);

  return (
    <div className="tabularContent__container">
      <div className="tabularContent__headings">
        <h3>Word</h3>
        <h3>Frequency</h3>
      </div>
      {topWords.slice(0, digit).map((obj) => {
        return <TableRow key={obj.id} word={obj.word} count={obj.count} />;
      })}
    </div>
  );
};

export default TabularContent;
