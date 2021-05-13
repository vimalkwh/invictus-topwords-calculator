## About the project
 This is the simple word calculator which accepts a number input, and when the entered number is submit it fetches the content from the [link](https://raw.githubusercontent.com/invictustech/test/main/README.md) and display the top N words and their frequency of occurrence in a tabular format.
 
 ![topwords-calculator](https://github.com/vimalkwh/invictus-topwords-calculator/blob/main/images/1.png)
 
 
 ### Build with
 This project is build with a JavaScript framework i.e. [React](https://reactjs.org/)
 
 ## Getting Started
 ### Installation
  - Clone the Repo
    `git clone https://github.com/vimalkwh/invictus-topwords-calculator.git`
  - Install NPM packages
    `npm install`
   
## Components of Projects
#### App.js
In the App.js Component, we have **input** field to enter the number and when we submit the number, then that number will pass to the  **onsubmit**  function that will fetch the content from [link](https://raw.githubusercontent.com/invictustech/test/main/README.md), and pass to the next component i.e. ****TabularContent.js****.

#### TabularContent.js
This component find the top most frequently occurring words and their frecuncy of occuring by the **topWords()** function (*that will return array of object that contain word and its frequency*) and then, we iterate through that array and pass the particular object to the ****TableRow.js**** component.

#### TableRow.js
This component will show the object (*that contain word and its frequency) that passes by the ****TabularContent.js**** component.

## Some Screenshots
### Test case 1:
    -Input: 0
   ![test case 0](https://github.com/vimalkwh/invictus-topwords-calculator/blob/main/images/4.png)
   
### Test case 2:   
    -Input: 15
   ![test case 0](https://github.com/vimalkwh/invictus-topwords-calculator/blob/main/images/2.png)
   
### Test case 3:   
    -Input: 110
   ![test case 0](https://github.com/vimalkwh/invictus-topwords-calculator/blob/main/images/3.png)
