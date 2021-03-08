// Using parameters in Function Calls

function displayEmployeeStatus(name, age, address, user_role = 0) {
	console.log('The employee name is: ' + name + ' and his age is: ' + age);
	console.log('He lives in : ' + address + ' and his code number is: ' + user_role);
}

var newEmp = displayEmployeeStatus('Raju', 23, 'Kathmandu');
