var Excel = require('exceljs')
var workbook = new Excel.Workbook();
function validate(){
var validatePromise=new Promise((resolve,reject)=>{
  var arr1=[]
workbook.xlsx.readFile('D:/electron-vue-1/ccd technologies/ccd_project/src/excel/login.xlsx')
  .then(function(){
    var worksheet = workbook.getWorksheet(1)
    worksheet.eachRow(function(row,rowNumber){
      arr1.push(row.values)
    })
    //console.log(arr1)
 resolve(arr1)
})
});
return validatePromise.then(function(result){
  console.log(result)
})

}
validate()

function customer(){
  var arr2=[]
  var customerPromise = new Promise(function(resolve,reject){
  workbook.xlsx.readFile('D:/electron-vue-1/ccd technologies/ccd_project/src/excel/customer.xlsx')
    .then(function(){
      var worksheet = workbook.getWorksheet(1)
      worksheet.eachRow(function(row,rowNumber){
        arr2.push(row.values)
      })
        resolve(arr2)
    })
  })
  customerPromise.then(function(result){
    //console.log(result)
  return result;
  })
}


function assigner(data){
  var arr3=[]
  var assignerPromise  = new Promise(function(resolve,reject){
  workbook.xlsx.readFile('D:/electron-vue-1/ccd technologies/ccd_project/src/excel/assigneng.xlsx')
    .then(function(){
      var worksheet = workbook.getWorksheet(1)
      worksheet.eachRow(function(row,rowNumber){
        if(row.values[7]==data){
          arr3.push(row.values)
    }
      })
      resolve(arr3)
    })
})
assignerPromise.then(function(result){
  //console.log(result)
  return result
})
}

function user(){
  var arr5=[]
  var userPromise = new  Promise(function(resolve,reject){
    workbook.xlsx.readFile('D:/electron-vue-1/ccd technologies/ccd_project/src/excel/login.xlsx')
    .then(function(){
      var worksheet = workbook.getWorksheet(1)
      worksheet.eachRow(function(row,rowNumber){
        arr5.push(row.values)
      })
          resolve(arr5)
    })
  });
  userPromise.then(function(result){
    //console.log(result)
    return result
  })
}


function assigned(data){
  var arr6=[]
  var assignedPromise = new Promise(function(resolve,reject){
  workbook.xlsx.readFile('D:/electron-vue-1/ccd technologies/ccd_project/src/excel/assigneng.xlsx')
    .then(function(){
      var worksheet = workbook.getWorksheet(1)
      worksheet.eachRow(function(row,rowNumber){
        if(row.values[2]==data){
          arr6.push(row.values)
    }
      })
      resolve(arr6)
    })
  });
  assignedPromise.then(function(result){
    //console.log(result)
    return arr6
  })
}

function enquiryProject(){
  var arr7=[]
  var enquiryProjectPromise  = new Promise(function(resolve,reject){
  workbook.xlsx.readFile('D:/electron-vue-1/ccd technologies/ccd_project/src/excel/Project Enquiry Register - 18-19 Template.xlsx')
    .then(function(){
      var worksheet = workbook.getWorksheet('Sheet2')
      worksheet.eachRow(function(row,rowNumber){
        if(row.values[1]=="P"){
          arr7.push(row.values)
    }
      })
      resolve(arr7)
    })
  });
    enquiryProjectPromise.then(function(result){
      //console.log(result);
      return result
    })
}


function enquiryTrading(){
  var arr8=[]
  var enquiryTradingPromise  = new Promise(function(resolve,reject){
  workbook.xlsx.readFile('D:/electron-vue-1/ccd technologies/ccd_project/src/excel/Project Enquiry Register - 18-19 Template.xlsx')
    .then(function(){
      var worksheet = workbook.getWorksheet('Sheet2')
      worksheet.eachRow(function(row,rowNumber){
        if(row.values[1]=="S"){
          arr8.push(row.values)
    }
      })
      resolve(arr8)
    })
  });
  enquiryTradingPromise.then(function(result){
    //console.log(result)
    return result
  })
}

module.exports={
  validate:validate,
  assi:assigner,
  cust:customer,
  user:user,
  assig:assigned,
  enqp:enquiryProject,
  enqt:enquiryTrading
}
