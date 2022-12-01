const x = moment().diff(moment([2022, 1, 24]), 'days') // x+Nth
document.querySelector('#day').innerHTML = x+1+' DAY'