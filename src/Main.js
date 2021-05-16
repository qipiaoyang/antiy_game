/**
 * https://github.com/flash2x/AnnieJS
 */
/*
一,想要发布H5项目，依次执行以下命令:
1. gulp
2. gulp released
二,想要发布给微信小程序用，资源很少没有超过2M,资源不需要放在远程服务器，依次执行以下命令:
1. gulp prepareWxApp
2. gulp buildWxAppOnLocal
三,想要发布给微信小程序用，资源很多超过2M，需要将除了js以外的资源放在远程服务器，依次执行以下命令:
1. gulp prepareWxApp
2. gulp buildWxAppOnLine
四,想要发布给微信小游戏用，依次执行以下命令:
1. gulp prepareWxApp
2. gulp buildWxGameOnLocal
*/
window.addEventListener("load",function(){
    annie.debug=false;
    /**
     * 因为这是个文件是入口文件,加载时间越短越好,那么就需要这个文件里代码量越少越好，尽量在其他文件写项目逻辑
     * 装载引擎的Canvas的div的id,可以在一个页面同时放多个stage.
     * 设计尺寸的宽
     * 设计尺寸的高
     * FPS刷新率
     * 缩放模式
     * 渲染模式
     */
    var stage=new annie.Stage("annieEngine",750,1500,24,annie.StageScaleMode.FIXED_WIDTH,0);
    //默认关闭自动旋转和自动resize
    //stage.autoResize=true;
    //stage.autoSteering=true;
    stage.addEventListener(annie.Event.ON_INIT_STAGE,function (e) {
    	//想要同时加载多个场景的话，Annie2x.loadScene的第一个参数可以传数组如 ["scene1","scene2",...]
        annie.loadScene("loading",function(per){
            //加载进度
            // trace("加载进度:"+per+"%");
        },function(result){
            //加载完成 result 里包含了当前加载完成的是哪个场景序号，以及总加载场景数有多少，所以
            //需要同时加载多个模块时可以判断已经加载好的后直接出内容，其他偷偷在后台加载
            if(result.sceneId==result.sceneTotal){
                var load = new loading.Loading();
                stage.addChild(load)
                if(result.sceneId==result.sceneTotal){
                    annie.loadScene(["p1"],function (per) {
                        // console.log(per)
                        load.per_txt.text = per+'%';
                    },function (result) {
                        if(result.sceneId==result.sceneTotal){
                            stage.removeAllChildren();
                            stage.addChild(new p1.P1());
                        }
                    })
                }
            }
        });
    })
});
