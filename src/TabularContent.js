import React from "react";
import TableRow from "./TableRow";
import "./App.css";

const TabularContent = ({ content }) => {
  function topWords(data) {
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

  const uniqueWords = topWords(content);

  return (
    <div className="tabularContent__container">
      <div className="tabularContent__headings">
        <h3>Word</h3>
        <h3>Frequency</h3>
      </div>
      {uniqueWords.map((obj) => {
        return <TableRow key={obj.id} word={obj.word} count={obj.count} />;
      })}
    </div>
  );
};

export default TabularContent;
