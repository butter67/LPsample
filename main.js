topImage = new Array (
    "./image/free-to-use-sounds-3jNE1Uc257I-unsplash.jpg",
    "./image/toa-heftiba-HbUEtK9vnJc-unsplash.jpg",
    "./image/lama-roscu-Wpg3Qm0zaGk-unsplash (1).jpg",
)
var imgCount = 0;
// var nowCount = -1;
// var flg = 0;

function slideImage() {
    // nowCount = (nowCount < topImage.length -1)? nowCount+1 : 0;
    // flg = (flg == 0)? 1:0;
    // if(flg == 0){
    //     document.getElementById("idshow1").src = topImage[nowCount];
    //     // 次の画像をセットする
    //     document.getElementById("idshow1").className = "fadein";
    //     // フェードイン
    //     document.getElementById("idshow2").className = "fadeout";
    //     // フェードアウト
    //     }else{
    //     document.getElementById("idshow2").src = topImage[nowCount];
    //     // 次の画像をセットする
    //     document.getElementById("idshow1").className = "fadeout";
    //     // フェードアウト
    //     document.getElementById("idshow2").className = "fadein";
    // }
    // setTimeout("slideImage()", 5000);

    if(imgCount == topImage.length -1){
        imgCount = 0 ;
    } else {
        imgCount++;
    }
    document.roop.src = topImage[imgCount];
    setTimeout("slideImage()", 5000);
}

slideImage();