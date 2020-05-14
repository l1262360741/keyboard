//1.初始化数据
var hashA = init()
var keys = hashA['keys']
var hash = hashA['hash']
//2.生成键盘
//遍历keys生成kdb标签
generateKeyboard(keys, hash)

//3.监听键盘
listenToKeyboard(hash)

//4.工具函数
  function init(){
    var keys = {
           "0" : {0:'q',1:'w',2:'e',3:'r',4:'t',5:'y',6:'u',7:'i',8:'o',9:'p',length:'10'},
           "1" : {0:'a',1:'s',2:'d',3:'f',4:'g',5:'h',6:'j',7:'k',8:'l',length:'9'},
           "2" : {0:'z',1:'x',2:'c',3:'v',4:'b',5:'n',6:'m',length:'7'},
           "length" : 3
       }
    var hash = {
          'h':'www.huawei.com', 'l':'lg.com', 'k':'www.kfc.com.cn', 'q': 'qq.com', 'w': 'weibo.com', 'e': 'ele.me', 'r': 'renren.com', 't': 'tencent.com', 'y': 'youtube.com', 'u': 'uc.com' , 'i': 'iqiyi.com', 'o': 'opera.com', 'p': 'pixiv.net', 'a': 'acfun.cn', 's': 'sohu.com', 'z': 'zhihu.com', 'm': 'www.mcdonalds.com.cn','n':'netflix.com','g': 'google.com','d':'douban.com','b':'bilibili.com','f':'segmentfault.com','j':'juejin.im','c':'csdn.net',
    }
    //取出loaclstorage 中的 uuu 对应的 hash
    var hashInLocalStorage = getFromLocalStorage('uuu')
    if(hashInLocalStorage){
      hash = hashInLocalStorage
    }
    return {
      'keys' : keys ,
      'hash' : hash
    }
  }

  function tag(tagName, attributes){
    var element = document.createElement(tagName)
    for(var key in attributes){ //key为className , id, textContent
      element[key] = attributes[key]
    }
    return element
  }

  function createSpan(textContent){
    var span = tag('span')
    span.textContent = textContent
    return span
  }

  function createButton(id){
    var button = tag('button')
    button.textContent = '编辑'
    button.id = id
    button.onclick = function(sdfsdf){
      //sdfsdf.target是用户点击的元素
      var button2 = sdfsdf.target
      var img2 = button2.previousSibling
      var key = button2.id
      var x = prompt('请给我一个网址')
      hash[key] = x //哈希变更
      img2.src = 'http://' + x + '/favicon.ico'
      img2.onerror = function(e){
        e.target.src = './web.png'
      }
      localStorage.setItem('uuu', JSON.stringify(hash))
      console.log(sdfsdf)
    }
    return button
  }

  function createImage(domin){
    var img = tag('img')
    if(domin){
      img.src = 'http://'+domin+'/favicon.ico'
    }else{
      img.src = './web.png'
    }
    img.onerror = function(e){
      e.target.src = './web.png'
    }
    return img
  }
  function generateKeyboard(keys, hash){
    for(var index=0;index<keys['length'];index++){
      var div = tag('div', {className: 'row'})

      main.appendChild(div)

      var row = keys[index]
      for(var index2=0;index2<row['length'];index2++){
        var kbd = tag('kbd', {className:'key'})

        var span = createSpan(row[index2])

        var button = createButton(row[index2])

        var img = createImage(hash[row[index2]])

        kbd.appendChild(span)
        kbd.appendChild(img)
        kbd.appendChild(button)
        div.appendChild(kbd)
      }
    }
  }
  function listenToKeyboard(hash){
    document.onkeypress = function(sdfsdf){
      var key = sdfsdf['key'] // q w e
      var website = hash[key]
      // location.href = 'http://'+website
      window.open('http://'+website,'_blank')
    }
  }
  function getFromLocalStorage(name){
    return JSON.parse(localStorage.getItem(name) || 'null')
  }
