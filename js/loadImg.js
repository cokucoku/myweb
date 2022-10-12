/*
 *  loadImg插件.
 *
 *
 *  * Copyright 2021 (c) liguangfa
 *  * https://github.com/cokucoku/myplugin
 *  *
 *
 *  Date: 2021.06.09
 */

let loadImg = function (option) {
    let that = this
    let setOption = {
        imgs: [],
        onComplete: '',
        onLoad: ''
    }
    const myOption = Object.assign(setOption, option)
    let count = 0, len = myOption.imgs.length, bai = 0
    let bais = []
    for (let i = 0; i <= len; i++) {
        bais.push((i / len * 100).toFixed())
    }
    load();

    function load() {
        console.log(count)
        // let st = setInterval(() => {
        //     myOption.onLoad.call(that, bai)
        //     console.log(count)
        //     if (bai === bais[count]) {
        //         console.log(count)
        //         bai=bais[count]
        //         clearInterval(st)
        //     } else {
        //         bai++
        //     }
        //
        // }, 100)
        let img = new Image()
        img.onload = () => {
            bai = (count / len * 100).toFixed()
            myOption.onLoad && myOption.onLoad.call(that, bai)
            if (count >= len) {
                //clearInterval(st)
                myOption.onComplete.call(that, 'ok')
            } else {
                load()
            }
            count++
            //clearInterval(st)
        }
        img.src = myOption.imgs[count]
    }

}
