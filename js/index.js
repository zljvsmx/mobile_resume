$(function(){
	//音频播放处理
	
	(function musicplay(){
		var musicMenu=$("#musicMenu");
		var musicAudio=$("#musicAudio");
		musicMenu[0].addEventListener('click',function(){
			if(musicAudio[0].paused){
				musicAudio[0].play();
				musicMenu.addClass("move");
				return;
			}else{
				musicAudio[0].pause();
				musicAudio.attr("class","music");
			}
		},false)
		function controlMusic(){
			musicAudio[0].play();
			musicAudio[0].addEventListener('canplay',function(){
				musicMenu.css("display","block");
				musicMenu.addClass("move");
			},false)
		}
		window.setTimeout(controlMusic,1000);
	})();
	
//	$("audio").audioPlayer();
	
	//REM
	(function(){
		var scale=$("body").width()/750;
		var oMain=$(".main");
		if($("body").width()>750){
			oMain.css("margin","0 auto");
			oMain.css("width","750");
			return;
		}
		$("html").css("font-size",scale*100+"px");
	})()
	
	//SWIPER
	var mySwiperB = new Swiper ('.swiper-container-b', {
	    direction: 'vertical',
	    loop: true,
	    //当切换结束时给当前页面添加ID，通过回调函数判断是否执行动画
	    onSlideChangeEnd:function(swiper){
	    		var slideArry=swiper.slides;//获取当前所有活动页面个数，包括一头一尾复制的两个页面
	    		var curIn=swiper.activeIndex;//当前页面的索引值
	    		var total=slideArry.length;
	    		var targetId="page";
	    		switch(curIn){
	    			case 0:
	    				targetId+=total-2;
	    				break;
	    			case (total-1):
	    				targetId+=1;
	    				break;
	    			default:
	    				targetId+=curIn;
	    		}
	    		//给当前页面加ID，同时删除其余页面的ID
	    		for(var i=0;i<total;i++){
	    			if(curIn===i){
	    				slideArry[i].id=targetId;
	    			}else{
	    				slideArry[i].id=null;
	    			}
	    		}
	    		//第三页判断是否是第三页，然后决定是否执行canvas动画
			$(".swiper-container-b .swiper-wrapper div").each(function(){
				if($("#page3").length>0){
					setTimeout(canvas_Wedge,1200)
				}
			})
	    		
	    }
	    
	})
	var mySwiperS=new Swiper('.swiper-container-s',{
		direction: 'horizontal',
		autoplay:5000,
		loop: true,
	})
	
	
	
	
	//KONVA动画特效
	function canvas_Wedge(){
		//H5圆环
		var h5W=$("#canvasH5").width();
		var h5H=$("#canvasH5").height();
		var stage_H5=new Konva.Stage({
			container:"#canvasH5",
			width:h5W,
			height:h5H
		})
		var layer_H5=new Konva.Layer();
		stage_H5.add(layer_H5);
		
		var circle_H5=new Konva.Circle({
			x:h5W/2,
			y:h5H/2,
			
			radius:h5H/4,
			fill:"#1597bb"
			
		})
		
		var wedge_H5=new Konva.Wedge({
			x:h5W/2,
			y:h5H/2,
			rotation:-90,//旋转起始角度,默认是从正90度作为起始点
			angle:0,//这是旋转度数
			radius:h5H/2.5,
			fill:"#7fcde3"
		});
		
		
		layer_H5.add(wedge_H5);
		layer_H5.add(circle_H5);
		
		layer_H5.draw();
		
		
		//CSS3圆环
		var css3W=$("#canvasCSS3").width();
		var css3H=$("#canvasCSS3").height();
		var stage_CSS3=new Konva.Stage({
			container:"#canvasCSS3",
			width:css3W,
			height:css3H
		})
		var layer_CSS3=new Konva.Layer();
		stage_CSS3.add(layer_CSS3);
		
		var circle_CSS3=new Konva.Circle({
			x:css3W/2,
			y:css3H/2,
			radius:css3H/4,
			fill:"#e6ac00"
		})
		
		var wedge_CSS3=new Konva.Wedge({
			x:css3W/2,
			y:css3H/2,
			rotation:-90,//旋转起始角度,默认是从正90度作为起始点
			angle:0,//这是旋转度数
			radius:css3H/2.5,
			fill:"#ffd966"
		});
		layer_CSS3.add(wedge_CSS3);
		layer_CSS3.add(circle_CSS3);
		layer_CSS3.draw();
		
		
		//JS圆环
		var jsW=$("#canvasJS").width();
		var jsH=$("#canvasJS").height();
		var stage_JS=new Konva.Stage({
			container:"#canvasJS",
			width:jsW,
			height:jsH
		})
		var layer_JS=new Konva.Layer();
		stage_JS.add(layer_JS);
		
		var circle_JS=new Konva.Circle({
			x:jsW/2,
			y:jsH/2,
			radius:jsH/4,
			fill:"#b53c2f"
		})
		
		var wedge_JS=new Konva.Wedge({
			x:jsW/2,
			y:jsH/2,
			rotation:-90,//旋转起始角度,默认是从正90度作为起始点
			angle:0,//这是旋转度数
			radius:jsH/2.5,
			fill:"#e88c82"
		});
		layer_JS.add(wedge_JS);
		layer_JS.add(circle_JS);
		layer_JS.draw();
		
		
		//JQ圆环
		var jqW=$("#canvasJQ").width();
		var jqH=$("#canvasJQ").height();
		var stage_JQ=new Konva.Stage({
			container:"#canvasJQ",
			width:jqW,
			height:jqH
		})
		var layer_JQ=new Konva.Layer();
		stage_JQ.add(layer_JQ);
		
		var circle_JQ=new Konva.Circle({
			x:jqW/2,
			y:jqH/2,
			radius:jqH/4,
			fill:"#0aab8d"
		})
		
		var wedge_JQ=new Konva.Wedge({
			x:jqW/2,
			y:jqH/2,
			rotation:-90,//旋转起始角度,默认是从正90度作为起始点
			angle:0,//这是旋转度数
			radius:jqH/2.5,
			fill:"#43dec1"
		});
		layer_JQ.add(wedge_JQ);
		layer_JQ.add(circle_JQ);
		layer_JQ.draw();
		
		
		//Konva圆环
		var konW=$("#canvasKONVA").width();
		var konH=$("#canvasKONVA").height();
		var stage_KON=new Konva.Stage({
			container:"#canvasKONVA",
			width:konW,
			height:konH
		})
		var layer_KON=new Konva.Layer();
		stage_KON.add(layer_KON);
		
		var circle_KON=new Konva.Circle({
			x:konW/2,
			y:konH/2,
			radius:konH/4,
			fill:"#c31865"
		})
		
		var wedge_KON=new Konva.Wedge({
			x:konW/2,
			y:konH/2,
			rotation:-90,//旋转起始角度,默认是从正90度作为起始点
			angle:0,//这是旋转度数
			radius:konH/2.5,
			fill:"#f04d97"
		});
		layer_KON.add(wedge_KON);
		layer_KON.add(circle_KON);
		layer_KON.draw();
		
		wedge_H5.to({
			angle:342,
			duration:2,
			easing:Konva.Easings.EaseOut
		})
		wedge_CSS3.to({
			angle:306,
			duration:2,
			easing:Konva.Easings.EaseOut
		})
		wedge_JS.to({
			angle:288,
			duration:2,
			easing:Konva.Easings.EaseOut
		})
		wedge_JQ.to({
			angle:324,
			duration:2,
			easing:Konva.Easings.EaseOut
		})
		wedge_KON.to({
			angle:220,
			duration:2,
			easing:Konva.Easings.EaseOut
		})
	}
	

//	canvas_Wedge();
	
	
})