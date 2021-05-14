## About the project
 This is the simple word calculator which accepts a number input, and when the entered number is submit it fetches the content from the [link](https://raw.githubusercontent.com/invictustech/test/main/README.md) and display the top N words and their frequency of occurrence in a tabular format.
 
 #### -Link for this application 
   ### [https://invictus-topwords-task.netlify.app](https://invictus-topwords-task.netlify.app/)
 
 ![topwords-calculator](https://github.com/vimalkwh/invictus-topwords-calculator/blob/main/images/1.png)
 
 
 ## Build with
 - [React](https://reactjs.org/) 
 - [Material-UI](https://material-ui.com/) 
 - [React Flip Move](https://github.com/joshwcomeau/react-flip-move)
 
 ## Getting Started
 ### Installation
  - Clone the Repo
    `git clone https://github.com/vimalkwh/invictus-topwords-calculator.git`
  - Install NPM packages
    `npm install`
   
## Components of Projects
#### App.js
In the App.js Component, we have **input** field to enter the number and when we submit the number, then the  **onsubmit**  function will fetch the content from [link](https://raw.githubusercontent.com/invictustech/test/main/README.md), and that content pass to the next component i.e. ****TabularContent.js**** with the entered number input.

#### TabularContent.js
In this component, the **tabularContent()** function find the ocurance of words and return in the form of array of object that contains word and its frequency, and **topWordsFun()** function (*that will return sorted array of words by their occurance of frequency*) and then, we iterate through that array and pass the particular object to the ****TabularRow.js**** component.

#### TabularRow.js
This component will show the object (*that contain word and its frequency) that passes by the ****TabularContent.js**** component.

## Some Screenshots
### Test case 1:
   *Input: 0*
   ![test case 0](https://github.com/vimalkwh/invictus-topwords-calculator/blob/main/images/2.png)
   
### Test case 2:   
   *Input: 3*
   ![test case 0](https://github.com/vimalkwh/invictus-topwords-calculator/blob/main/images/3.png)
   
### Test case 3:   
   *Input: 10*
   ![test case 0](https://github.com/vimalkwh/invictus-topwords-calculator/blob/main/images/4.png)
