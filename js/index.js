/*
* @Author: 75497
* @Date:   2018-07-31 16:43:03
* @Last Modified by:   75497
* @Last Modified time: 2018-08-01 19:28:52
*/
window.onload=function(){
	let header = document.getElementsByClassName("header")[0];
	let item = header.getElementsByClassName("item")[0];
	let son = item.getElementsByClassName("son")[2];
    let jie = document.getElementsByClassName("jie")[0];
    console.log(son, jie);
    son.onmouseenter = function () {
        jie.style.height = "300px";
        jie.style.borderTop="1px solid #007fff";
        // jie.style.boxShadow = "0 7px 6px rgba(0,0,0,0.2)";
        // jie.style.lineHeight = "300px";
        
    }
    son.onmouseleave = function () {
        jie.style.height = 0;
         jie.style.borderTop="none";
        // jie.style.boxShadow = "none";
        // jie.style.lineHeight = "none";
    }

    let animating = document.getElementsByClassName("animating")[0];
    let ans= animating.getElementsByClassName("ans");
    let iconfont1 = animating .getElementsByClassName("iconfont1")[0];
    let iconfont2 = animating .getElementsByClassName("iconfont2")[0];
    let indicator = animating.getElementsByClassName("indicator")[0];
    let bt = indicator.getElementsByClassName("bt");
    console.log(ans)
    let t = setInterval(move, 1000);
    let num = 0;

    function move() {
        num++;
        if (num == ans.length) {
            num = 0;
        }
        for (let i = 0; i < ans.length; i++) {
            ans[i].style.zIndex = 5;
            bt[i].style.background = "";
        }
        ans[num].style.zIndex = 10;
        bt[num].style.background = "#fff";
    }

    animating.onmouseenter = function () {
        iconfont2.style.display="block";
        iconfont1.style.display="block";
        clearInterval(t);
    }
    animating.onmouseleave = function () {
         iconfont2.style.display="none";
        iconfont1.style.display="none";
        t = setInterval(move, 1000);
    }
    iconfont2.onclick = function () {
        move1();
    }

    function move1() {
        num--;
        if (num < 0) {
            num = ans.length - 1;
        }
        for (let j = 0; j < ans.length; j++) {
            ans[j].style.zIndex = 5;
            bt[j].style.background = "none";
        }
        ans[num].style.zIndex = 10;
        bt[num].style.background = "#fff";
    }

    iconfont1.onclick = function () {
        move();
    }
    for (let x = 0; x < bt.length; x++) {
        bt[x].onclick = function () {
            for (let y = 0; y < bt.length; y++) {
                ans[y].style.zIndex = 5;
                bt[y].style.background = "none";
            }
            ans[x].style.zIndex = 10;
            bt[x].style.background = "#fff";
            num = x;
        }
    }

     let big = document.getElementsByClassName("big")[0];
        let active = big.getElementsByClassName("active")[0];
        let sons = active.getElementsByClassName("sons");
        let pro = active.getElementsByClassName("pro");
        console.log(sons,pro);
        for (let i = 0; i < sons.length; i++) {
            sons[i].onmouseenter = function () {
                for (let j = 0; j < sons.length; j++) {
                    pro[j].style.display = "none";
                    
                }

                pro[i].style.display = "block";
                
            }

        } 
}