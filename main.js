const x = moment().diff(moment([2022, 1, 24]), 'days') // x+Nth

const y = (x+1).toString()
const last = y.charAt(y.length - 1);


let th = 'th'
last === '1' ? th = 'st' : 'th'
last === '2' ? th = 'nd' : 'th'
last === '3' ? th = 'rd' : 'th'



document.querySelector('#day').innerHTML = '<i>'+y+'</i><i class="th">'+th+'</i><br><x class="x">DAY</x>'
document.querySelector('title').innerHTML = 'WARDAYS - '+y+''+th