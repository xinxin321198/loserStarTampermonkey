// ==UserScript==
// @name         loserStar老王农民知识竞赛
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://nongminjingsai.com/phone/exam/commonExam
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant        none
// @require      https://cdn.bootcdn.net/ajax/libs/jquery/3.7.1/jquery.js
// ==/UserScript==
this.$ = this.jQuery = jQuery.noConflict(true);

(function() {
    'use strict';
    setInterval(function(){
        console.log("获取包含选项的div");
        var itemList = $(".item");
        if (itemList.length>0){
            var item = itemList[0];
            console.log("获取div下的所有选项");
            var children = $(item).children();
            var selectedIndex = Math.floor(Math.random() * children.length);
            console.log("点击第" + (selectedIndex+1) +"个选项");
            $(children[selectedIndex]).trigger("click");
            console.log("获取下一题按钮");

            //如果出现继续答题，就选择继续答题
            var jixudatiBtn = $(".van-button.van-button--default.van-button--large.van-button--round");
            if(jixudatiBtn.length>0){
                console.log("点击继续答题");
                $(jixudatiBtn[1]).trigger("click");
            }else{
                //如果出现提交按钮，就点击提交，不点击下一题
                var tijiaoBtn = $(".van-button.van-button--default.van-button--normal");
                if (tijiaoBtn.length > 0) {
                    console.log("点击提交");
                    $(tijiaoBtn).trigger("click");
                } else {
                    var xiayitiBtn = $("span:contains(下一题)");
                    console.log("点击下一题按钮");
                    $(xiayitiBtn).trigger("click");
                }
            }



        }
    },1100);


})();