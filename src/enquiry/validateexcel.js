var Excel = require('exceljs')
var workbook = new Excel.Workbook();
var arr=[]

function validate(){
workbook.xlsx.readFile('D:/electron-vue-1/ccd technologies/trial_3/src/excel/login.xlsx')
  .then(function(){
    var worksheet = workbook.getWorksheet(1)
    worksheet.eachRow(function(row,rowNumber){
      arr.push(row.values)
    })
  })
return arr;
}
module.exports={
  val:validate
}
