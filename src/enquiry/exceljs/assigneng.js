var Excel = require('exceljs')
var workbook = new Excel.Workbook()

function create(data){
  workbook.xlsx.readFile('D:/electron-vue-1/ccd technologies/trial_3/src/excel/assigneng.xlsx')
      .then(function(){
          var worksheet = workbook.getWorksheet('Sheet1')
        var lastRow   = worksheet.lastRow;
        var currentRow = lastRow._number ;
          var row1 = "assigneng"+currentRow
          var row2="dans1"
          var row3="shell india wheels"
          var row4=new Date(2012-01-05)
          var row5='Once a week'

          var row=[
            [row1,row2,row3,row4,row5]
          ]
          console.log(row)
          worksheet.addRows(row)
          return workbook.xlsx.writeFile('D:/electron-vue-1/ccd technologies/trial_3/src/excel/assigneng.xlsx')

      })
}
create(1)
function read(){
  var arr=[]
workbook.xlsx.readFile('D:/electron-vue-1/ccd technologies/trial_3/src/excel/assigneng.xlsx')
  .then(function(){
    var worksheet = workbook.getWorksheet('Sheet1')
    worksheet.eachRow(function(row,rowNumber){
      arr.push(row.values)
    })
    console.log(arr)
  })
return arr;
}

function modify(){
  var arr=[]
workbook.xlsx.readFile('D:/electron-vue-1/ccd technologies/trial_3/src/excel/assigneng.xlsx')
  .then(function(){
    var worksheet = workbook.getWorksheet('Sheet1')
    worksheet.eachRow(function(row,rowNumber){

    })
    console.log(arr)
  })
return ;
}

function deleted(data){
  var arr=[]
workbook.xlsx.readFile('D:/electron-vue-1/ccd technologies/trial_3/src/excel/assigneng.xlsx')
  .then(function(){
    var cellRowNumber=0
    var worksheet = workbook.getWorksheet('Sheet1')
    worksheet.eachRow(function(row,rowNumber){
        if(rowNumber>3){
          cellRowNumber=rowNumber
        }
    })

    console.log(arr)
  })
return ;
}
