//获取操作对象
var pagination = document.querySelector('.Pagination');
var divRow = document.querySelector('.row');
var path1 = location.search
    //使用自执行函数获取数据库中对应的数据
var dt;
if (path1) {
    var liebie1 = path1.split('?')[1].split('=')[1];
    console.log(liebie1);
    (async function() {
        var p1 = await promiseAjax({
            url: './php/liebiao.php',
            data: 'liebie=' + liebie1
        })
        dt = eval('(' + p1 + ')')
        console.log(dt);
        var obj = {
            pageInfo: {
                pagenum: 1,
                pagesize: 80,
                totalsize: dt.length,
                totalpage: Math.ceil(dt.length / 80)
            },
            textInfo: {
                first: "首页",
                prev: "上一页",
                next: '下一页',
                last: "尾页"
            },
            change(m) {
                let ar2 = dt.slice((m - 1) * 80, m * 80)
                var str = ''
                for (var attr in ar2) {
                    str += ` <li>
                            <a href="./xiangqing.html?id=${ar2[attr].id}" target=_blank><img src="${ar2[attr].imgurl}" title="丹东铁皮西红柿-多款"></a>
                            <span class="Price"><b>${ar2[attr].imgprice}</b></span>
                            <hr/> 
                        </li>

            `
                }
                divRow.innerHTML = str
            }
        }
        new Pagination(pagination, obj)
    })()
} else {
    alert("非法进入")
    location.href = './zhuye.html'
}