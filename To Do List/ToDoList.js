var tdlist = [];

//connect our javascript to html,
//so each variable will point to an html element
const getData = () => {
var whatToDo = document.getElementById("whatToDo").value;
console.log(whatToDo);

//create an object which will have all our data according to names...
var newRow = new Object();
newRow.name = whatToDo;

  //add our new shiny product to our collection of products...
  tdlist.push(newRow);
  console.log(tdlist);

  //clear all data for getting next product
  document.getElementById("myData").reset();

  //create a table from our prodcuts collection
  //makeTable();
  makeTable();

  //save to user hard disk...
  localStorage.setItem("Saved_List", JSON.stringify(tdlist));
};

const makeTable = ()=>{
  var result="";
  for (var index=0; index<tdlist.length;index++){
    result+= `
    <tr>
    <td>${tdlist[index].name}</td>
    </tr>
    
    `;
  }
  document.getElementById("tableBody").innerHTML = result;
}


//take user hard disk saved string...
const loadData= () => {
tdlist = JSON.parse(localStorage.getItem("Saved_List"));


//אותה פעולה כמו 2 השורות שמעל
//var myData = localStorage.getItem("Saved_List");
//tdlist = JSON.parse(myData);
console.log(tdlist);
makeTable();
};
loadData();