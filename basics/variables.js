
const accountId =1234
let accountEmail="test@gmail.com"
var accountPassword='12345'
accountCity='delhi'// can declare without let,var,const ,but not a good way


/*prefer not to use var ,due to issue in block and functional scope*/

let accountState;
accountEmail="new@gmail.com"
accountPassword="54321"
accountCity="jaipur"
 //accountId=2344
//  console.log(accountId);
 console.table([accountId,accountEmail,accountPassword,accountCity,accountState]) //print all variables in form of table

