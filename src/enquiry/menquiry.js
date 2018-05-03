document.getElementById('btn3').onclick=fnt1;
const {ipcRenderer,electron} = require('electron')
const $ = require('jquery')
const {session} =require('electron')

var val = require('./validateexcel')
var Excel = require('exceljs');
var workbook = new Excel.Workbook()
function fnt1(){
var name=  document.getElementById('name').value
var pass=  document.getElementById('pass').value
var data=[name,pass]
//  console.log(name+'hey enga peru '+pass)
  var loginarr = val.val()
    var match=[]
    var flag=0
  //  console.log(loginarr)
//  console.log(loginarr)
    //ipcRenderer.send('login',data)
    for(let i=1;i<loginarr.length;i++){
     if((loginarr[i][2]==name)&&(loginarr[i][3]==pass)){
       console.log("yes")
       flag=1;
         }
    }
    if(flag==1){
        ipcRenderer.send('login',data)
    }else {
      alert('wrong credentials')
    }
}
