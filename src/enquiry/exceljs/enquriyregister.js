var Excel = require('exceljs')
var workbook = new Excel.Workbook()

function create(data){
  workbook.xlsx.readFile('D:/electron-vue-1/ccd technologies/trial_3/src/excel/Project Enquiry Register - 18-19 Template.xlsx')
      .then(function(){
          var worksheet = workbook.getWorksheet('Sheet2')
          if(data=="S"){
            var row1="S"
            var row2='sooo1'
          }
          else{
            var row1 ="P"
            var row2 = 'p0002'
          }

          var row=[
            [row1,row2]
          ]
          console.log(row)
          worksheet.addRows(row)
          return workbook.xlsx.writeFile('D:/electron-vue-1/ccd technologies/trial_3/src/excel/Project Enquiry Register - 18-19 Template.xlsx')

      })
}
create(1)
function read(){
  var arr=[]
workbook.xlsx.readFile('D:/electron-vue-1/ccd technologies/trial_3/src/excel/Project Enquiry Register - 18-19 Template.xlsx')
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
workbook.xlsx.readFile('D:/electron-vue-1/ccd technologies/trial_3/src/excel/Project Enquiry Register - 18-19 Template.xlsx')
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
workbook.xlsx.readFile('D:/electron-vue-1/ccd technologies/trial_3/src/excel/Project Enquiry Register - 18-19 Template.xlsx')
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
