const api  = require('./form1')
const storage = require('electron-json-storage')
const {ipcRenderer,electron} = require('electron')
function create(){
  storage.get('login',function(error,data){
    if(error) throw error

    var val=confirm("hey this is "+data.name)
  if(!val){
    ipcRenderer.send('signout',1)
  }
  })
api.a()
console.log("hey this is the application")
}
window.onload= create
