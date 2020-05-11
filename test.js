
var keys = {
       "0" : {0:'q',1:'w',2:'e',3:'r',4:'t',5:'y',6:'u',7:'i',8:'o',9:'p',length:'10'},
       "1" : {0:'a',1:'s',2:'d',3:'f',4:'g',5:'h',6:'j',7:'k',8:'l',length:'9'},
       "2" : {0:'z',1:'x',2:'c',3:'v',4:'b',5:'n',6:'m',length:'7'},
       "length" : 3
   }
var hash = {
      'q': 'qq.com', 'w': 'weibo.com', 'e': 'ele.me', 'r': 'renren.com', 't': 'tianya.com', 'y': 'youtube.com', 'u': 'uc.com' , 'i': 'iqiyi.com', 'o': 'opera.com', 'p': undefined, 'a': 'acfun.tv', 's': 'sohu.com', 'z': 'zhihu.com', 'm': 'www.mcdonalds.com.cn'
}
//取出loaclstorage 中的 uuu 对应的 hash
var hashInLocalStorage = JSON.parse(localStorage.getItem('uuu') || 'null')
if(hashInLocalStorage){
  hash = hashInLocalStorage
}

//遍历keys生成kdb标签
index = 0
while(index<keys['length']){
  div1 = document.createElement('div')
  keybody.appendChild(div1)
  row = keys[index]
  index2 = 0
  while(index2<row['length']){
    kbd1 = document.createElement('kbd')
    kbd1.textContent = row[index2]
    button1 = document.createElement('button')
    button1.textContent = '编辑'
    button1.id = row[index2]
    button1.onclick = function(sdfsdf){
      key = sdfsdf.target.id
      x = prompt('请给我一个网址')
      hash[key] = x //哈希变更
      localStorage.setItem('uuu', JSON.stringify(hash))
      console.log(hash)
    }
    kbd1.appendChild(button1)
    div1.appendChild(kbd1)
    index2 = index2 + 1
  }
  index = index + 1
}
document.onkeypress = function(sdfsdf){
  key = sdfsdf['key'] // q w e
  website = hash[key]
  // location.href = 'http://'+website
  window.open('http://'+website,'_blank')
}
