var name1 = getCookie('name')
var url2 = location.href
if (name1) {

} else {
    alert('非法进入，请登录')
    location.href = './denglu.html?url=' + url2
}
var mainbox = document.querySelector('.main-box')
var cartlist = localStorage.getItem("cartList") || "[]";
cartlist = JSON.parse(cartlist)
show1()


function show1() {
    if (cartlist.length > 0) {
        var quan1 = cartlist.every(item => {
            return item.select == 1
        })
        var aa = total1()
        var str2 = `
        <div style="width:100%">
        <div class="exchangeGoodsGuide" style="width: 730px; display: inline-block;"><span style="display:inline-block;border:1px solid #ea7c12;width:35px;height:22px;color: #ea7c12;text-align:center;line-height:22px">换购</span>
            <div style="display:inline-block"><span style="color:darkgray;font-size:15px;margin-left:5px">每单满100元，即可享受换购优惠</span><span style="color:#ff0000;font-size:15px;margin-left:15px;cursor:pointer" id="html_div_exchangeRightNow"> 立即换购 &gt;</span> <a href="https://search3.6688.com/SearchList-A--30-0-0-1000-1-1-0--.html"
                    target="_blank" style="font-size:15px;margin-left:10px">去凑单 &gt;</a></div>
        </div>
        <h3 class="InSet" style="text-align:right;width:260px;display:inline-block">已将<span class="InSetNum">${aa[0]}</span>件商品加入购物车</h3>
    </div>


    <div class="InSet-li">
        <div class="InSetTableT">
            <span class="InSetTableT1">购物车中的商品</span>
            <span class="InSetTableT2">单价</span>
            <span class="InSetTableT3">数 量</span>
            <span class="InSetTableT4">商品合计 </span>
            <span class="InSetTableT5">操 作</span>
        </div>
        <table class="CartTable" id="CartTable">
            <tbody>
        `
        cartlist.forEach(item => {
            str2 += `
            <tr>
            <td width="10"><input name="xuan" type="checkbox" ${item.select==1?'checked':''}  class="chkGoods" data-id="${item.id}" cartitemid="100690491" goodstotalmoney="19.9"></td>
            <td class="InSetTabPic" width="85">
                <a class="proImg" href="http://www.6688.com/shop/goods/products.aspx?sn=tc20200226004" id="proImg">
                <img src="${item.imgurl}">
                </a>
            </td>
            <td width="320">
            <a href="http://www.6688.com/shop/goods/products.aspx?sn=tc20200226004" id="html_InSetTitle">${item.imgname}</a>
                <div style="display:none">本品由
                    <font color="red"></font>
                    销售与服务
                    <!-- <img src="images/question.png" title="本商品由第三方企业直接销售、发货与服务，六六八八公司提供技术服务"> -->
                </div>
                <div style="display:none;color:red">本品不参与打折</div>
                <div style="display:none;color:blue">专发海外</div>
            </td>
            <td width="130">￥${item.imgprice}</td>
            <td width="140">
                <input type="text" limitamount="1" goodsstock="190" cartitemid="100690491" goodscaption="【临期特价】次氯酸免洗洗手液消毒液500ml" class="InSetTabCount" style="float:left;" value="${item.numbers}" id="CarNum_0">
                <div style="float:left" class="InSetTabCountKz">
                   <button class="InSetTabCountT" data-id="${item.id}"></button>
                   <button class="InSetTabCountB" data-id="${item.id}" ${item.numbers<=1?'disabled':''}></button>
                </div>
            </td>
            <td width="135">￥${parseInt(item.imgprice)*item.numbers}元</td>
            <td class="InSetTableRig"><span class="delete" data-id="${item.id}" goodsname="【临期特价】次氯酸免洗洗手液消毒液500ml" cartitemid="100690491">删除</span></td>
        </tr>
            `
        })
        str2 += `
        </tbody>
        </table>
        <div class="InSetTableB">
            <div class="InSetTableB-Lef">
                <input type="checkbox" name="quan" ${quan1?'checked':''} class="quan" id="html_input_CheckBox_ChooseAll"> 全选 <img src="https://www.6688.com/images/ljt.jpg" class="OutCart" style="cursor:pointer"></div>
            <div class="InSetTableB-Rig">
                共<span class="InSetNum">${aa[0]}</span>件商品,总计金额：<span class="AllInSetCost" id="AllInSetCost">${aa[1]}元</span>
            </div>
            <div class="clear"></div>

        </div>
    </div>
    <!-- <div class="noThing" style="display: none;">
        您的购物车还是空的，<a href="https://www.6688.com">立即购买</a>

    </div> -->
    <div id="html_div_discountInfo" style="text-align:center;">
        <font style="color:#ff0000;font-size:14px;font-weight:blod">每单满300元，订单生成还会自动95折，您还差196.1元就可以享受啦&nbsp;&nbsp;&nbsp;&nbsp;</font>
    </div>
        `
        mainbox.innerHTML = str2
    } else {
        var str = `
<div style="width:100%">
                    <div class="exchangeGoodsGuide" style="width: 730px; display: inline-block;"><span style="display:inline-block;border:1px solid #ea7c12;width:35px;height:22px;color: #ea7c12;text-align:center;line-height:22px">换购</span>
                        <div style="display:inline-block"><span style="color:darkgray;font-size:15px;margin-left:5px">每单满100元，即可享受换购优惠</span><span style="color:#ff0000;font-size:15px;margin-left:15px;cursor:pointer" id="html_div_exchangeRightNow"> 立即换购 &gt;</span> <a href="https://search3.6688.com/SearchList-A--30-0-0-1000-1-1-0--.html"
                                target="_blank" style="font-size:15px;margin-left:10px">去凑单 &gt;</a>
                                </div>
                    </div>
                    <h3 class="InSet" style="text-align:right;width:260px;display:inline-block">已将<span class="InSetNum">0</span>件商品加入购物车</h3>
                </div>
                <div class="noThing" style="display: block;">
                    您的购物车还是空的，<a href="./zhuye.html">立即购买</a>

                </div>
                <div id="html_div_discountInfo" style="text-align:center;">
                    <font style="color:#ff0000;font-size:14px;font-weight:blod">每单满300元，订单生成还会自动95折，您还差196.1元就可以享受啦&nbsp;&nbsp;&nbsp;&nbsp;</font>
                </div>

`
        mainbox.innerHTML = str
    }
}
mainbox.onclick = function(e) {
    // console.log(cartlist);
    // cartlist = JSON.parse(cartlist)
    var e = e || window.event
    var target = e.target || e.srcElement
    if (target.className == 'InSetTabCountT') {
        var id1 = target.getAttribute('data-id')

        cartlist.forEach(item => {
            if (item.id == id1) {
                item.numbers += 1
            }
        })
        localStorage.setItem('cartList', JSON.stringify(cartlist))
        show1()
    }
    if (target.className == 'InSetTabCountB') {
        var id1 = target.getAttribute('data-id')
        cartlist.forEach(item => {
            if (item.id == id1) {
                item.numbers -= 1

            }

        })
        localStorage.setItem('cartList', JSON.stringify(cartlist))
        show1()
    }
    if (target.innerHTML == '删除') {
        var id1 = target.getAttribute('data-id')
        cartlist2 = cartlist.filter(item => {
            return item.id != id1
        })
        localStorage.setItem('cartList', JSON.stringify(cartlist2))
        location.reload()
    }
    if (target.getAttribute('name') == 'quan') {
        cartlist.forEach(item => {
            if (target.checked) {
                item.select = 1
            } else {
                item.select = 0
            }
        })
        localStorage.setItem('cartList', JSON.stringify(cartlist))
        show1()
    }
    if (target.getAttribute('name') == 'xuan') {
        var id1 = target.getAttribute('data-id')
        cartlist.forEach(item => {
            if (item.id == id1) {
                item.select = item.select ? 0 : 1
            }
        })
        localStorage.setItem('cartList', JSON.stringify(cartlist))
        show1()
    }
    var quan = document.querySelector(".quan")
        // console.log(quan);
    if (target.className == 'OutCart') {
        localStorage.removeItem('cartList')
        location.reload()
            // cartlist.forEach(item => {
            //     if (item.select = 1) {
            //         cartlist.length = 0
            //     } else {

        //     }
        // })
        // localStorage.setItem('cartList', JSON.stringify(cartlist))
        // show1()
    }

}

function total1() {
    var num = 0
    var price = 0
    cartlist.forEach(item => {
        if (item.select == 1) {
            num += item.numbers
            price += parseInt(item.numbers) * parseFloat(item.imgprice)
        }
    })
    return [num, price.toFixed(2)]
}

var zaigou = document.querySelector('.sc_tips')
show2()

function show2() {
    var str3 = `
    <div class="mar_t_10">
    <div class="bold" style="color:red">每单满70元就免邮费。欢迎继续挑选下列特惠产品：</div>
    <div id="html_div_promotionGoodsList">
        <table width="100%" border="0" cellspacing="0" cellpadding="0" class="table_01 table_03">
            <tbody>
                <tr>
                    <td><img src="https://image.6688.com/Upload/mobileImg/tc20171207001.jpg" width="50" height="50"></td>
                    <td>以特价39元购买向日葵蜂蜜500克</td>
                    <td>数量:<input type="text" value="1" id="goodsNum_tc20171207001" style="width:20px"><b><u url="https://www.6688.com/shop/Goods/BuyNow.aspx?Sn=tc20171207001" onclick="javascript:AddGoodsToCars('tc20171207001','goodsNum_tc20171207001')" style="cursor:pointer">购买</u></b></td>
                </tr>
                <tr>
                    <td><img src="https://image.6688.com/Upload/mobileImg/tc20180814001.jpg" width="50" height="50"></td>
                    <td>以特价65元购买昆仑雪菊大罐80克-65折，原价100元</td>
                    <td>数量:<input type="text" value="1" id="goodsNum_tc20180814001" style="width:20px"><b><u url="https://www.6688.com/shop/Goods/BuyNow.aspx?Sn=tc20180814001" onclick="javascript:AddGoodsToCars('tc20180814001','goodsNum_tc20180814001')" style="cursor:pointer">购买</u></b></td>
                </tr>
                <tr>
                    <td><img src="https://image.6688.com/Upload/mobileImg/tc20141219001.jpg" width="50" height="50"></td>
                    <td>以特价90元购买和田大枣混级简装2公斤/箱-原价156元</td>
                    <td>数量:<input type="text" value="1" id="goodsNum_tc20141219001" style="width:20px"><b><u url="https://www.6688.com/shop/Goods/BuyNow.aspx?Sn=tc20141219001" onclick="javascript:AddGoodsToCars('tc20141219001','goodsNum_tc20141219001')" style="cursor:pointer">购买</u></b></td>
                </tr>
                <tr>
                    <td><img src="https://image.6688.com/Upload/mobileImg/tc20200630006.jpg" width="50" height="50"></td>
                    <td>以特价78元购买原价165元的一次性口罩50个（蓝色中童款）</td>
                    <td>数量:<input type="text" value="1" id="goodsNum_tc20200630006" style="width:20px"><b><u url="https://www.6688.com/shop/Goods/BuyNow.aspx?Sn=tc20200630006" onclick="javascript:AddGoodsToCars('tc20200630006','goodsNum_tc20200630006')" style="cursor:pointer">购买</u></b></td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
</div>
    `
    zaigou.innerHTML = str3
}
var jiesuan = document.querySelector('.InSetTableC')
    // console.log(111);
show3()

function show3() {
    var str4 = `
    <div>
                    <a href="./zhuye.html" class="goTosBuy">
                        <span>再逛逛&gt;&gt;</span>
                    </a>
                    <a style="cursor:pointer" class="paymentBt">
                    </a>
                </div>
    `
    jiesuan.innerHTML = str4
}
jiesuan.onclick = function(e) {
    var e = e || window.event
    var target = e.target || e.srcElement
    if (target.className == 'paymentBt') {
        if (confirm("你确定要购买吗？")) {
            alert("你要支付：" + total1()[1])
            var cartlist3 = cartlist.filter(item => {
                return item.select != 1
            })
            localStorage.setItem('cartList', JSON.stringify(cartlist3))
            location.reload()
        }
    }

}