function GetSelectedText(){
        var str=null;
        var pre="", suf="";
        var SelObj=null;
        var StringShift=30;
        if(window.getSelection){
            SelObj=window.getSelection();
        }else{
            if(window.document.getSelection){
                    SelObj=window.document.getSelection();
            }else{
                    SelObj=window.document.selection;
            }
        }
        if(SelObj!=null){
           if(SelObj.getRangeAt){
             var r=SelObj.getRangeAt(0);
             str=r.toString();
             var q=window.document.createRange();
             q.setStartBefore(r.startContainer.ownerDocument.body);
             q.setEnd(r.startContainer,r.startOffset);
             pre=q.toString();
             var r2=r.cloneRange();
             r2.setStart(r.endContainer,r.endOffset);
             r2.setEndAfter(r.endContainer.ownerDocument.body);
             suf=r2.toString();
           }else{
              if(SelObj.createRange){
                str=SelObj.createRange().text;
                var r1=SelObj.createRange();
                r1.moveStart("character",-StringShift);
                r1.moveEnd("character",-str.length);
                pre=r1.text;
                var r2=SelObj.createRange();
                r2.moveEnd("character",StringShift);
                r2.moveStart("character",str.length);
                suf=r2.text;
              }else{
                str=""+SelObj;
              }
           }
        }

/*
            var p;
            var s=(p=str.match(/^(\s*)/))&&p[0].length;
            var e=(p=str.match(/(\s*)$/))&&p[0].length;
            pre=pre+str.substring(0,s);
            suf=str.substring(str.length-e,str.length)+suf;
            str=str.substring(s,str.length-e);
            return pre+str+suf;
*/
//        return (pre+" <span style=\"color:red;\">"+str+"</span> "+suf);
        suf=suf.substring(0,StringShift);
        var st=pre.length-StringShift; st=(st<0)?0:st;
        pre=pre.substring(st);
        return (pre+" <span style=\"color:red;\">"+str+"</span> "+suf);
};

function SendOrhoInfo(){
    var orphostr=GetSelectedText();
    if(!orphostr) return false;
    if(orphostr.length>250){
        alert("Вы выбрали слишком большой кусок текста!");
        return false;
    }
    var comment=prompt("Правильное написание или комментарий (необязательно):","");
    if(!comment) {comment='';}
    if(confirm("Отправить сообщение об ошибке?")){
        var messagestring='';
        messagestring='page='+encodeURIComponent(window.document.location.href);
        messagestring+='&orphostr='+encodeURIComponent(orphostr);
        messagestring+='&comment='+encodeURIComponent(comment);
//        alert(messagestring);
        if(XMLHttpRequestObject) {
            XMLHttpRequestObject.open("POST", "http://www.apmath.spbu.ru/ru/orphograph.php");
            XMLHttpRequestObject.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
            XMLHttpRequestObject.onreadystatechange = function(){
                if (XMLHttpRequestObject.readyState == 4 && XMLHttpRequestObject.status == 200) {
                    alert("Спасибо, Ваше сообщение об ошибке принято.");
                }
            }
            XMLHttpRequestObject.send(messagestring);
        }
    }
    return true;
};

function CheckKeyPress(evt){
    var result=0;
    var we=window.event;
    if(we){
        result=(we.keyCode==10)||(we.keyCode==13&&we.ctrlKey);
    }else{
        if(evt){
            result=(evt.which==10&&evt.modifiers==2)||(evt.keyCode==0&&evt.charCode==106&&evt.ctrlKey)||(evt.keyCode==13&&evt.ctrlKey);
        }
    }
    if(result){
        SendOrhoInfo();
        return false;
    }
    return true;
};
window.document.onkeypress=CheckKeyPress;
var XMLHttpRequestObject = false;
if (window.XMLHttpRequest) {
    XMLHttpRequestObject = new XMLHttpRequest();
} else if (window.ActiveXObject) {
    try{
        XMLHttpRequestObject = new ActiveXObject("Msxml2.XMLHTTP");
    }catch(ex) { XMLHttpRequestObject = new ActiveXObject("Microsoft.XMLHTTP");}
}