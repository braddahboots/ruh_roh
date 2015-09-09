// console.log(emailData);
function module() {
  var emailData = emailList;
  var dupes = {};

  for(var i = 0; i < emailData.length; i++){
    if (dupes.hasOwnProperty(emailData[i].email)) {
      dupes[emailData[i].email]++;
    } else {
      dupes[emailData[i].email] = 1;
    }
  }
  for(var key in dupes) {
    if(dupes[key] === 1) {
      delete dupes[key];
    }
  }
  console.log(dupes);
}
module();
// console.log(module());





// function multipleEmails() {
//   var emails = emailData;
//   //key is email, value is how many times it appeared
//   var emailList = {};
//   var dupes = {};
//   var list = [];


//   //filter through json email array to pull out .email values
//   function _getEmails() {
//   //Pulls data from json object file and creates an array of data sets and sorts them
//   for(var i = 0; i < emails.length; i++)
//     list.push(emails[i].email);
//     list = list.sort();
//     // console.log(list);

//   //Takes the array data set and places them in a data
//   for(var j = 0; j < list.length; j++) {
//     emailList[list[j]] = 1;
//     // console.log(emailList);
//   }

//   }
//   _getEmails();
//   return {
//     getEmails: _getEmails,
//   };
//   // console.log(getEmails);

// }
// var newEmails = multipleEmails();
