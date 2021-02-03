let n = 0;	//代表当前在第几张
let liList = $("#imgWrap li");
let dotWrap = $("#dotWrap")[0];
let ul = $("#imgWrap");
$("#next").click(function () {
    // console.log(1);
    if (n < liList.length - 1) {
        n++
    }
    else {
        n = 0;
    }
    changeImg()
})
$("#prev").click(function () {
    if (n !== 0) {
        n--
    }
    else {
        n = liList.length - 1;
    }
    changeImg()
})
for (let i = 0; i < liList.length; i++) {
    let dot = document.createElement("li");
    if (!i) { dot.className = 'focus' }
    dotWrap.appendChild(dot)
}
let dotList = $("#dotWrap li");
dotList.click(function () {
    n = $(this).index();
    changeImg()
})
function changeImg() {
    ul.animate({
        marginLeft: -(n * 3.2)+"rem"
    })
    dotList.removeClass("focus");
    dotList.eq(n).addClass("focus");
}
