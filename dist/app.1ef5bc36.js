parcelRequire=function(e,r,n,t){function i(n,t){function o(e){return i(o.resolve(e))}function c(r){return e[n][1][r]||r}if(!r[n]){if(!e[n]){var l="function"==typeof parcelRequire&&parcelRequire;if(!t&&l)return l(n,!0);if(u)return u(n,!0);if(f&&"string"==typeof n)return f(n);var p=new Error("Cannot find module '"+n+"'");throw p.code="MODULE_NOT_FOUND",p}o.resolve=c;var a=r[n]=new i.Module(n);e[n][0].call(a.exports,o,a,a.exports,this)}return r[n].exports}function o(e){this.id=e,this.bundle=i,this.exports={}}var u="function"==typeof parcelRequire&&parcelRequire,f="function"==typeof require&&require;i.isParcelRequire=!0,i.Module=o,i.modules=e,i.cache=r,i.parent=u;for(var c=0;c<n.length;c++)i(n[c]);if(n.length){var l=i(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):t&&(this[t]=l)}return i}({29:[function(require,module,exports) {
module.exports={O_RDONLY:0,O_WRONLY:1,O_RDWR:2,S_IFMT:61440,S_IFREG:32768,S_IFDIR:16384,S_IFCHR:8192,S_IFBLK:24576,S_IFIFO:4096,S_IFLNK:40960,S_IFSOCK:49152,O_CREAT:512,O_EXCL:2048,O_NOCTTY:131072,O_TRUNC:1024,O_APPEND:8,O_DIRECTORY:1048576,O_NOFOLLOW:256,O_SYNC:128,O_SYMLINK:2097152,O_NONBLOCK:4,S_IRWXU:448,S_IRUSR:256,S_IWUSR:128,S_IXUSR:64,S_IRWXG:56,S_IRGRP:32,S_IWGRP:16,S_IXGRP:8,S_IRWXO:7,S_IROTH:4,S_IWOTH:2,S_IXOTH:1,E2BIG:7,EACCES:13,EADDRINUSE:48,EADDRNOTAVAIL:49,EAFNOSUPPORT:47,EAGAIN:35,EALREADY:37,EBADF:9,EBADMSG:94,EBUSY:16,ECANCELED:89,ECHILD:10,ECONNABORTED:53,ECONNREFUSED:61,ECONNRESET:54,EDEADLK:11,EDESTADDRREQ:39,EDOM:33,EDQUOT:69,EEXIST:17,EFAULT:14,EFBIG:27,EHOSTUNREACH:65,EIDRM:90,EILSEQ:92,EINPROGRESS:36,EINTR:4,EINVAL:22,EIO:5,EISCONN:56,EISDIR:21,ELOOP:62,EMFILE:24,EMLINK:31,EMSGSIZE:40,EMULTIHOP:95,ENAMETOOLONG:63,ENETDOWN:50,ENETRESET:52,ENETUNREACH:51,ENFILE:23,ENOBUFS:55,ENODATA:96,ENODEV:19,ENOENT:2,ENOEXEC:8,ENOLCK:77,ENOLINK:97,ENOMEM:12,ENOMSG:91,ENOPROTOOPT:42,ENOSPC:28,ENOSR:98,ENOSTR:99,ENOSYS:78,ENOTCONN:57,ENOTDIR:20,ENOTEMPTY:66,ENOTSOCK:38,ENOTSUP:45,ENOTTY:25,ENXIO:6,EOPNOTSUPP:102,EOVERFLOW:84,EPERM:1,EPIPE:32,EPROTO:100,EPROTONOSUPPORT:43,EPROTOTYPE:41,ERANGE:34,EROFS:30,ESPIPE:29,ESRCH:3,ESTALE:70,ETIME:101,ETIMEDOUT:60,ETXTBSY:26,EWOULDBLOCK:35,EXDEV:18,SIGHUP:1,SIGINT:2,SIGQUIT:3,SIGILL:4,SIGTRAP:5,SIGABRT:6,SIGIOT:6,SIGBUS:10,SIGFPE:8,SIGKILL:9,SIGUSR1:30,SIGSEGV:11,SIGUSR2:31,SIGPIPE:13,SIGALRM:14,SIGTERM:15,SIGCHLD:20,SIGCONT:19,SIGSTOP:17,SIGTSTP:18,SIGTTIN:21,SIGTTOU:22,SIGURG:16,SIGXCPU:24,SIGXFSZ:25,SIGVTALRM:26,SIGPROF:27,SIGWINCH:28,SIGIO:23,SIGSYS:12,SSL_OP_ALL:2147486719,SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION:262144,SSL_OP_CIPHER_SERVER_PREFERENCE:4194304,SSL_OP_CISCO_ANYCONNECT:32768,SSL_OP_COOKIE_EXCHANGE:8192,SSL_OP_CRYPTOPRO_TLSEXT_BUG:2147483648,SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS:2048,SSL_OP_EPHEMERAL_RSA:0,SSL_OP_LEGACY_SERVER_CONNECT:4,SSL_OP_MICROSOFT_BIG_SSLV3_BUFFER:32,SSL_OP_MICROSOFT_SESS_ID_BUG:1,SSL_OP_MSIE_SSLV2_RSA_PADDING:0,SSL_OP_NETSCAPE_CA_DN_BUG:536870912,SSL_OP_NETSCAPE_CHALLENGE_BUG:2,SSL_OP_NETSCAPE_DEMO_CIPHER_CHANGE_BUG:1073741824,SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG:8,SSL_OP_NO_COMPRESSION:131072,SSL_OP_NO_QUERY_MTU:4096,SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION:65536,SSL_OP_NO_SSLv2:16777216,SSL_OP_NO_SSLv3:33554432,SSL_OP_NO_TICKET:16384,SSL_OP_NO_TLSv1:67108864,SSL_OP_NO_TLSv1_1:268435456,SSL_OP_NO_TLSv1_2:134217728,SSL_OP_PKCS1_CHECK_1:0,SSL_OP_PKCS1_CHECK_2:0,SSL_OP_SINGLE_DH_USE:1048576,SSL_OP_SINGLE_ECDH_USE:524288,SSL_OP_SSLEAY_080_CLIENT_DH_BUG:128,SSL_OP_SSLREF2_REUSE_CERT_TYPE_BUG:0,SSL_OP_TLS_BLOCK_PADDING_BUG:512,SSL_OP_TLS_D5_BUG:256,SSL_OP_TLS_ROLLBACK_BUG:8388608,ENGINE_METHOD_DSA:2,ENGINE_METHOD_DH:4,ENGINE_METHOD_RAND:8,ENGINE_METHOD_ECDH:16,ENGINE_METHOD_ECDSA:32,ENGINE_METHOD_CIPHERS:64,ENGINE_METHOD_DIGESTS:128,ENGINE_METHOD_STORE:256,ENGINE_METHOD_PKEY_METHS:512,ENGINE_METHOD_PKEY_ASN1_METHS:1024,ENGINE_METHOD_ALL:65535,ENGINE_METHOD_NONE:0,DH_CHECK_P_NOT_SAFE_PRIME:2,DH_CHECK_P_NOT_PRIME:1,DH_UNABLE_TO_CHECK_GENERATOR:4,DH_NOT_SUITABLE_GENERATOR:8,NPN_ENABLED:1,RSA_PKCS1_PADDING:1,RSA_SSLV23_PADDING:2,RSA_NO_PADDING:3,RSA_PKCS1_OAEP_PADDING:4,RSA_X931_PADDING:5,RSA_PKCS1_PSS_PADDING:6,POINT_CONVERSION_COMPRESSED:2,POINT_CONVERSION_UNCOMPRESSED:4,POINT_CONVERSION_HYBRID:6,F_OK:0,R_OK:4,W_OK:2,X_OK:1,UV_UDP_REUSEADDR:4};
},{}],23:[function(require,module,exports) {
"use strict";var e=require("constants");!function(){var e=document.getElementById("text");var t=new Date,n=t.getFullYear()+"年"+(t.getMonth()+1)+"月"+t.getDate()+"日，晴。和昨天一样没吃饭。一直在群里等人带我。  昨天说好今天带我的，现在他们又说今天要援交没有时间带我，还说不仅今天往后"+(t.getDate()+1)+"号、"+(t.getDate()+2)+"号都不会带我，居然还说以后都不带我了，简直不能忍一定要好好记下来";document.getElementById("text").innerText=n;var o=document.getElementById("file");function c(t,n){document.getElementById(t).addEventListener("click",function(t){var o,c;c=n,(o=e).classList.contains(c)?o.classList.remove(c):o.classList.add(c)},!1)}o.addEventListener("change",function(e){var t,n=o.files;if(n.length)if(-1!=n[0].type.indexOf("gif"))alert("暂不支持GIF文件");else{blob=URL.createObjectURL(n[0]);(t=n[0],new Promise(function(e,n){var o=new FileReader;o.readAsDataURL(t),o.onload=function(){return e(o.result)},o.onerror=function(e){return n(e)}})).then(function(e){document.getElementById("uploadImg").src=e}).catch(function(e){alert("上传失败, 请尝试更换浏览器后重试")})}},!1),document.querySelectorAll(".select-img img").forEach(function(e,t,n){e.addEventListener("click",function(e){var t=this.src;document.getElementById("uploadImg").src=t},!1)}),document.getElementById("uploadImg").addEventListener("click",function(e){o.click()},!1),document.getElementById("start-tnt").onclick=function(){!function(){var e=document.getElementById("tnt");try{var t=new(window.SpeechRecognition||window.webkitSpeechRecognition)}catch(t){console.error(t),e.parentNode.removeChild(e),alert("您的浏览器暂不支持语音识别")}var n=document.getElementById("text"),o=document.getElementById("recording-instructions"),c=n.innerHTML;t.continuous=!0,t.onresult=function(e){var t=e.resultIndex,o=e.results[t][0].transcript;1==t&&o==e.results[0][0].transcript||(c+=o,n.innerText=c)},t.onstart=function(e){o.innerText="正在识别, 请讲话"},t.onerror=function(e){"no-speech"==e.error&&(o.innerText="未检测到语音，请再试一次")},document.getElementById("start-recording").addEventListener("click",function(e){console.log("开始录音"),t.start(),c.length&&(c+=" ")}),document.getElementById("stop-recording").addEventListener("click",function(e){console.log("录音停止"),t.stop(),o.innerText="语音识别暂停"})}(),this.parentNode.removeChild(this),document.getElementById("tnt").style.display="block",document.getElementById("recording-instructions").innerText="已开启 TNT 模式, 仅支持小部分现代浏览器, 请授权网页使用麦克风, 代码在本地环境运行, 不会上传您的任何信息"},c("font-centering","center"),c("font-bold","bold"),c("font-italic","italic"),document.getElementById("font-enlarge").addEventListener("click",function(t){var n=parseInt(getComputedStyle(e).fontSize);e.style.fontSize=n+1+"px"}),document.getElementById("font-reduce").addEventListener("click",function(t){var n=parseInt(getComputedStyle(e).fontSize);e.style.fontSize=n-1+"px"}),document.getElementById("font-css").addEventListener("click",function(e){var t=prompt('(实验性功能) 请输入需要自定义的 css 样式, 格式为 "line-height:1.5;color:red;" 不能少分号!!!');if(t&&t.trim()){var n=t.replace(/\s/g,"").match(/[\w\-]+\:.+\;/g),o=document.createElement("style");o.innerText="#text{"+n+"}",document.body.appendChild(o)}}),document.getElementById("instructions").addEventListener("click",function(e){alert("- 点击图片可上传本地图片, 也可使用自带模板\n- 点击文字可自行编辑\n- 可自定义css(实验性功能), 结尾一定要加分号!!\n- 开启TNT模式后可录制语音并转换为文字\n- TNT 模式仅支持部分浏览器, 推荐使用 Chrome\n- 编辑完后点击生成, 在网页最下方生成的图片上长按即可保存\n- 文本框内支持粘贴word文档, 代码块, 图片等内容\n- 源代码地址: https://github.com/Ice-Hazymoon/bqb_tnt\n- 作者博客: https://imiku.me")}),document.getElementById("download").addEventListener("click",function(e){!function(e,t){html2canvas(e,{allowTaint:!0,taintTest:!1,width:e.offsetWidth,height:e.offsetHeight,scale:2}).then(function(e){document.getElementById("canvas").src=e.toDataURL("image/png"),setTimeout(function(){window.scrollTo(0,document.body.scrollHeight)},300)}).catch(function(e){alert("生成失败, 请尝试更换浏览器后重试"+e)})}(this.parentNode.parentNode.querySelector(".main"))},!1)}();
},{"constants":29}]},{},[23], null)