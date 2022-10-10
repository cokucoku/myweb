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
    let count = 0, len = myOption.imgs.length
    load();

    function load() {
        let img = new Image()
        img.onload = () => {
            let bai=(count / len * 100).toFixed()
            myOption.onLoad && myOption.onLoad.call(that, bai)
            if (count >= len) {
                myOption.onComplete.call(that, 'ok')
            } else {
                load()
            }
            count++
        }
        img.src = myOption.imgs[count]
    }

}
