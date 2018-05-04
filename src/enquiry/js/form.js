
const {ipcRenderer,electron} = require('electron')
const $ = require('jquery')
const {session} =require('electron')

var val = require('../js/validateexcel')
var Excel = require('exceljs');
var workbook = new Excel.Workbook()


var ap=new Vue({
  el:"#form",
  data:{

  },computed:{

  },
  beforeMount(){
    this.onloaded()
  },
  methods:{
onloaded:function(){

    console.log('customer Details'+val.cust())

      console.log('user Details'+val.user())

}
  }
})
