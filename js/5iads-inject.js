function autoRun () {
  var list = $('.zhuanclick')
  console.log(list.length)
  for (var i = 0, len = list.length; i < len; i++ ) {
    if (list[i].className === 'zhuanclick') {
      list[i].click()
      return true
    }
  }
}
window.alert = function (msg) {
  console.log(msg);
  setTimeout(autoRun, Math.floor(Math.random() * 10) * 1000);
}