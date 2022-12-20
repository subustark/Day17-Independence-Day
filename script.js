var div=document.createElement("div");
div.setAttribute("id","main2");
var div1=document.createElement("div");
div1.setAttribute("class","main");
div.append(div1);
document.body.append(div);


function count(){
    setTimeout(()=>{
        div1.innerHTML="10";
        setTimeout(()=>{
            div1.innerHTML="9";
            setTimeout(()=>{
                div1.innerHTML="8";
                setTimeout(()=>{
                    div1.innerHTML="7";
                    setTimeout(()=>{
                        div1.innerHTML="6";
                        setTimeout(()=>{
                            div1.innerHTML="5";
                            setTimeout(()=>{
                                div1.innerHTML="4";
                                setTimeout(()=>{
                                    div1.innerHTML="3";
                                    setTimeout(()=>{
                                        div1.innerHTML="2";
                                        setTimeout(()=>{
                                            div1.innerHTML="1";
                                            setTimeout(()=>{
                                                div1.innerHTML="HAPPY INDEPENDANCE DAY";
                                            },1000)
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
}
count()