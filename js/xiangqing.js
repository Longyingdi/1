//获取大盒子对象
var container = document.querySelector('.goodsInfo');
var shulZhi = document.querySelector('.shulZhi');
// console.log(shulZhi);
// var shult = document.querySelector('.shul-t');
// var shulb = document.querySelector('.shul-b');
// console.log(location)
var path1 = location.search
var dt;
if (path1) {
    var id1 = path1.split('?')[1].split('=')[1];
    (async function() {
        var p1 = await promiseAjax({
            url: './php/xiangqing.php',
            data: 'id=' + id1
        })
        dt = eval('(' + p1 + ')')
        var str = `
        <div class="goodsInfo_left">
                <div class="catalogList" id="catalogList">&nbsp;&nbsp;&nbsp;&nbsp;<a href="./zhuye.html" target=_blank>首页</a>&nbsp;&nbsp;&nbsp;&nbsp;＞<a href="./liebiao.html" target=_blank>生鲜蛋奶</a>&nbsp;&nbsp;&nbsp;&nbsp;＞<a>生鲜蛋奶</a></div>
                <div class="goodsImg"><img id="html_img_productImg" src="${dt.imgurl}"></div>
                <!-- <div style="height:20px;margin-top:20px;background-color:White;font-size:18px;display:none;text-align:center" id="div_thirdMerchant">本品由
                     <font color="red" id="merchantName">伊兹密尔西域旗舰店</font>销售与服务<img src="../images/question.png" title="本商品由第三方企业直接销售、发货与服务，六六八八公司提供技术服务">
                </div> -->
            </div>
            <div class="goodsInfo_right">
                <div class="goodsCaption" id="html_img_goodsCaption">${dt.imgname}</div>
                <div class="goodsSubTitle" id="html_goods_Subtitle" style="font-size:18px;font-family:微软雅黑;height:40px"></div>
                <div class="goodsSubTitle" id="html_goods_discountTip"></div>
                <div class="goodsPriceGdsNum">
                    <div class="goodsPrice" id="html_img_goodsPrice">￥${dt.imgprice}</div>
                    <div class="goodsNum" id="html_img_goodsNum">${dt.huohao}</div>
                    <div class="promotion" id="html_div_promotion">${dt.baoyou}</div>
                </div>
                <div id="div_goodsDeliveryFee" style="display:block">
                    <br>
                    <div style="color: rgb(154, 152, 152); z-index: 10; display: none;" id="div_sendTo">配&nbsp;送&nbsp;至&nbsp;&nbsp;&nbsp;
                        <div style="display:inline-block;width:80px;height:25px;line-height:25px;border:1px solid #E4E4E4;text-align:center;" id="div_areaChosen"><label id="lb_chosenAreaName">北京</label><span style="float:right;font-size:20px;margin-right:10px;">∨</span></div>
                        <div style="margin-left:10px;display:inline-block;color:#9a9898" id="div_areaFee"></div>
                    </div>
                    <div id="div_areaListShow" style="display:none">
                        <div style="z-index:99;margin-left:54px;margin-top:-2px;display:block;position:absolute;border:0px;background-color:white;width:80px;height:5px"></div>
                        <div style="z-index:98;display:block;width:360px; height:210px; border:1px solid #E4E4E4;position:absolute;background-color:white;margin-left:53px;" id="div_areaList"></div>
                    </div>

                </div>
                <div class="splitLine"></div>
                <div class="goodsPackage">
                    <table style="width:100%">
                        <tbody>
                            <tr class="baozhuang-w" id="html_tr_goodsPackage">
                                <td colspan="3">
                                    <ul class="baozhang" id="html_GoodsPackage">
                                        <li class="on" goodscatalog="脐橙特级大果">${dt.jijin}</li>
                                        <li  goodscatalog="脐橙特级大果">10斤</li>
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div id="div_crowdfunding_infoTemplate" style="display:none">已众筹到[xxx]个</div>
                <div id="div_crowdfunding_info" style="color:red;font-size:20px;display:none"></div>
                <div class="oprator">
                    <div class="goodsNum">
                        <table>
                            <tbody>
                                <tr class="shuliang" style="height:20px">
                                    <td colspan="2"><input type="text" class="shulZhi" value="1" id="shulZhi" style="float:left">
                                        <div style="float:left" class="shulKz">
                                            <span class="shul-t"></span>
                                            <span class="shul-b"></span>

                                        </div>
                                        <div style="float:left;padding-top:10px;padding-left:2px"><span id="html_span_storeNum"></span></div>
                                        <div id="html_div_preOdrInfo"></div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="goBuy">
                        <table>
                            <tbody>
                                <tr>
                                    <td colspan="3" id="html_td_Operating">
                                    <a href="./gowuche.html" style="display:inline-block;width:183px;height:53px;margin-right: 10px;margin-left: 20px;"><input type="button" class="ss-gm" id="ss-gm"></a>
                                    <a  style="display:inline-block;width:183px;height:53px;"><input type="button" class="ss-jr" id="ss-jr"></a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="tipInfo">
                    <table>
                        <tbody>
                            <tr>
                                <td colspan="3" class="fkfs" id="deliveryInfo">
                                    <div>
                                        <div style="height:30px">
                                            <font color="#ff0000" style="font-size:16px;font-family:宋体">全国大部分地区配送(不包括新疆、西藏、内蒙、青海、宁夏、港澳台)，不支持货到付款</font>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
        
        
        
        
        `
        container.innerHTML = str
    })()
} else {
    alert("非法进入")
    location.href = './liebiao.html'
}
// shult.onclick=function(e){
//     var e=e||window.event
//     var target=e.target||e.srcElement
//     if(target.className)
// }
container.onclick = function(e) {
    var e = e || window.event
    var target = e.target || e.srcElement
        // console.log(target.className);
    if (target.className == 'shul-t') {
        // console.log(target.className);
        // var shulZhivalue = shulZhi.value
        var shulZhivalue = parseInt(target.parentNode.previousElementSibling.value)
        shulZhivalue++
        //在重新把递增的数量赋值给输入框
        target.parentNode.previousElementSibling.value = shulZhivalue
            // var shulZhivalue2 = parseInt(shulZhivalue)
            // console.log(shulZhivalue);
    }
    if (target.className == 'shul-b') {
        var shulZhivalue = parseInt(target.parentNode.previousElementSibling.value)
        if (shulZhivalue <= 1) {
            shulZhivalue = 1
        } else {
            shulZhivalue--
        }
        target.parentNode.previousElementSibling.value = shulZhivalue
    }


    if (target.className == 'ss-jr') {
        var cartList = localStorage.getItem("cartList")
            // console.log(cartList);
        var shulZhivalue = parseInt(target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.previousElementSibling.firstElementChild.firstElementChild.firstElementChild.firstElementChild.firstElementChild.value)
            // console.log(shulZhivalue);
        if (cartList) {
            var a = 0
            cartList = JSON.parse(cartList)
                // var shulZhivalue = parseInt(target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.previousElementSibling.firstElementChild.firstElementChild.firstElementChild.firstElementChild.firstElementChild.value)
                // console.log(cartList);

            cartList.forEach((item) => {
                if (item.id == dt.id) {
                    if (shulZhivalue > 1) {
                        console.log(shulZhivalue);
                        item.numbers += shulZhivalue
                        a++
                        localStorage.setItem('cartList', JSON.stringify(cartList))
                    } else {
                        item.numbers = ++item.numbers
                        a++
                        localStorage.setItem('cartList', JSON.stringify(cartList))
                    }

                }
            })
            if (a == 0) {
                cartList.push(dt)
                dt.numbers = shulZhivalue
                localStorage.setItem('cartList', JSON.stringify(cartList))
            }
        } else {
            dt.numbers = shulZhivalue
            localStorage.setItem('cartList', JSON.stringify([dt]))
        }
    }

}