/**
 * Created by Administrator on 2017/3/13.
 */

//创建各浏览器兼容的XMLHttpRequest对象
function createXHR(){
    if(typeof XMLHttpRequest != "undefined" ){
        return new XMLHttpRequest();
    }
    else if(typeof ActiveXObject != "undefined"){
        if (typeof arguments.callee.activeXString != "string"){
            var versions = [
                "MSXML2.XMLHttp.6.0","MSXML2.XMLHttp.3.0","MSXML2.XMLHttp"
            ],len;
            for( var i=0; versions.length; i++){
                try{
                    new ActiveXObject(versions[i]);
                    arguments.callee.activeXString=versions[i];
                    break;
                }catch(e){
                    //跳过
                }
            }
        }
        return new ActiveXObject(arguments.callee.activeXString);
    }
    else{
        throw new Error("No XHR object avablied！");
    }
}

    /*
    //使用异步事件
    var xhr = createXHR(); //创建XHR对象
    xhr.open("get","c.txt",false); //准备发送请求
    xhr.send(null); //发送请求
    alert(xhr.status);  //结果：200
    alert(xhr.statusText); //结果：OK
    if((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304){
        alert(xhr.responseText);  //结果：hello,this is Cynthia (是文件c.txt里面的内容)
    }
    else{
        alert("Request is failed : "+xhr.status);
    }  
    xhr.abort(); //取消异步事件
    
    //操作头部信息
    var xhr = createXHR();//创建XHR对象
    xhr.onreadystatechange=function (){
        if(xhr.readyState==4){
            if(xhr.status==200){
                alert(xhr.getResponseHeader('Content-Type')); //获取单个http头部信息,j结果：text/plain
                alert(xhr.getAllResponseHeaders()); //获取http的全部头部信息 ,结果：下图
            }
            else{
                alert("Sorry,获取信息失败，错误代码为： "+xhr.status+"， 错误信息： "+xhr.statusText);
            }
        }
    };
    xhr.open('get',"c.txt",false);
    xhr.setRequestHeader('MyHeader','Cynthia'); //设置http头部信息
    xhr.send(null);

    //GET请求
    var xhr = createXHR();
    var url = "c.txt?rand="+Math.random()+'&name=Cynthia&age=21';
    url = addURLParam(url,"name","Cynthia");
    url = addURLParam(url,"age",21);
    xhr.onreadystatechange=function (){
        if(xhr.readyState==4){
            if(xhr.status==200){
                alert(xhr.responseText);
            }
            else{
                alert("Sorry,获取信息失败，错误代码为： "+xhr.status+"， 错误信息： "+xhr.statusText);
            }
        }
    };
    xhr.open('get',url,true);
    xhr.send(null);
    function addURLParam(url,name,value){  //解决编码问题
        url += (url.indexOf("?") == -1 ? "?" : "&");
        url += encodeURIComponent(name) + "=" + encodeURIComponent(value);
        return url;
    }
  */ 
    
        //POST请求
        var xhr = createXHR();
        var url = "c.txt?rand="+Math.random();
        xhr.onreadystatechange=function (){
            if(xhr.readyState==4){
                if(xhr.status==200){
                    alert(xhr.responseText);
                }
                else{
                    alert("Sorry,获取信息失败，错误代码为： "+xhr.status+"， 错误信息： "+xhr.statusText);
                }
            }
        };
        xhr.open('post',url,true);
        xhr.setRequestHeader("Content-Type","application/x-wwww-form-urlencoded");
        xhr.send('name=Cynthia&age=21');
    
    