/*
* @Author: 75497
* @Date:   2018-07-31 16:43:03
* @Last Modified by:   75497
* @Last Modified time: 2018-08-01 19:23:04
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