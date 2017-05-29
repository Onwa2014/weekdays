var weekdays = document.querySelector(".weekdays");
var date1 = document.querySelector(".date1");
var date2 = document.querySelector(".date2");

date1.addEventListener('change',doThis);
date2.addEventListener('change',doThis);

function doThis(){
  var days = document.querySelectorAll('.days');

  var dt1 = new Date(date1.value);
  var d1 = dt1.getDay();
  var dt2 = new Date(date2.value);
  var d2 = dt2.getDay();

  for (var i = 0; i < days.length; i++) {
    days[i].classList.remove('match');
    days[i].classList.remove('d1');
    days[i].classList.remove('d2');
  }
  if(d1 === d2 && d1 !== "" && d2 !== ""){
    days[d1].classList.add('match');
  }
  else if (d1 !== d2 && d1 !== "" && d2 !== "") {
    days[d1].classList.add('d1');
    days[d2].classList.add('d2');

  }
  else if(d2 !== "" && d1 !== d2 && d1 !==""){
    days[d2].classList.add('d2');
  }
  else if(d1 !== "" && d1 !== d2   && d2 !==""){
    days[d1].classList.add('d1');
  }
}
//   var d1 = new Date(date1.value);
//   // console.log(d1.getDay());
//   var d2 = new Date(date2.value);
//
//
//
//     if(days[d1.getDay()] === days[d2.getDay()]){
//       console.log(days[d1.getDay()]);
// 	days[d1.getDay()].classList.add('match');
//    }
// };
// date1.addEventListener('change', function(){
//   var d1 = new Date(date1.value);
//    console.log(d1.getDay());
//     var d2 = new Date(date2.value);
//
//    var days = document.querySelectorAll('.days');
//       days[d1.getDay()].classList.add('d1')
// })
