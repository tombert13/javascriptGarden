//this for loop will not log the numbers from 0 to 9, instead it will
//print 10 ten times.
for (var i = 0; i < 10; i++) {
    setTimeout(function () {
        //console.log(i);
    }, 1000);
}
//to solve this problem you can us an anomnymous wrapper as follow
for (var i = 0; i < 10; i++) {
	(function (e) {
		setTimeout(function () {
			//console.log(e);
		}, 1000);
	})(i);
}
//another possible way is to return function from the anonymous wrapper
for (var i = 0; i < 10; i++) {
	setTimeout((function (e) {
		return function () {
			//console.log(e);
		}
	})(i), 1000)
}
//another way to achieve this is to pass a thir argument to setTimeout,
//which passes the argument to the callback
for (var i = 0; i < 10; i++) {
	setTimeout(function (e) {
		console.log(e);
	}, 1000, i)
}
