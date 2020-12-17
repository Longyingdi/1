//获取操作对象
var pagination = document.querySelector('.Pagination');
var divRow = document.querySelector('.row');
//使用自执行函数获取数据库中对应的数据
(async function() {
    var p1 = await promiseAjax({
        url: './php/zhuyeliebiao.php'
    })
    var dt = eval('(' + p1 + ')')
    var obj = {
        pageInfo: {
            pagenum: 1,
            pagesize: 56,
            totalsize: dt.length,
            totalpage: Math.ceil(dt.length / 56)
        },
        textInfo: {
            first: "首页",
            prev: "上一页",
            next: '下一页',
            last: "尾页"
        },
        change(m) {
            let ar2 = dt.slice((m - 1) * 56, m * 56)
            var str = ''
            for (var attr in ar2) {
                str += ` <li>
                <a href="./xiangqing2.html?id=${ar2[attr].id}" target=_blank>
                <div class="goodsImg">
                <img src="${ar2[attr].imgurl}" title="丹东铁皮西红柿-多款">
                </div>
                <div class="goodsPrice">${ar2[attr].imgprice}</div>
                </a>
                <hr/> 
            </li>
           
`
            }
            divRow.innerHTML = str
        }
    }
    new Pagination(pagination, obj)

})()