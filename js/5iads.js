function injectCustomJs(jsPath)
{
  jsPath = jsPath || 'js/5iads-inject.js';
  var temp = document.createElement('script');
  temp.setAttribute('type', 'text/javascript');
  // 获得的地址类似：chrome-extension://ihcokhadfjfchaeagdoclpnjdiokfakg/js/inject.js
  temp.src = chrome.extension.getURL(jsPath);
  temp.onload = function()
  {
      // 放在页面不好看，执行完后移除掉
      this.parentNode.removeChild(this);
      console.log('注入已经完成')
  };
  document.head.appendChild(temp);
}
injectCustomJs()
// $(document).ready(function(){
//   function ce () {
//     var list = $('.zhuanclick')
//     console.log(list[1].className)
//     list[0].click()
//   }
//   // setTimeout(ce, 3000)
// });