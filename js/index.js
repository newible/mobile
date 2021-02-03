let m = 0;	//代表当前在第几张
let liList1 = $("#imgbanner li");
let dotWrap1 = $(".dotwrap")[0]
let ul1 = $("#imgbanner")
function changeImage() {
    ul1.animate({
        marginLeft: -(m * 3.2)+"rem"
    })
    dotList1.removeClass("focus1");
    dotList1.eq(m).addClass("focus1");
}
$(".next").click(function () {
    if (m < liList1.length - 1) {
        m++
    }
    else {
        m = 0;
    }
    changeImage()
})

for (let i = 0; i < liList1.length; i++) {
    let dot1 = document.createElement("li");
    if (!i) { dot1.className = 'focus1' }
    dotWrap1.appendChild(dot1)
}
let dotList1 = $(".dotwrap li");
dotList1.click(function () {
    m = $(this).index();
    changeImage()
})
var autoPlay = setInterval(function(){
    $(".next").click()
},3000)
