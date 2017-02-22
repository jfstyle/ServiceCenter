// JavaScript Document
 window.setInterval(function(){
	$("#hiddenPart").height($(".functionDiv").height());
	},500);
  function setWidth(){
     var  cWidth;
     cWidth = document.documentElement.clientWidth;
	 $(".info_bar ._avt").attr("style","width:"+0.18*cWidth+"px;height:"+0.18*cWidth+"px;");
 $("#hiddenPart").height($(".functionDiv").height());
  }
  _onPageLoaded(function(){
     setWidth();
  })
  window.addEventListener('orientationchange', function(){
     setWidth();
  })
  var chooseImgSrc="/costomer/liugong/images/index/choose_";
  var imgSrc="/costomer/liugong/images/index/nochoose_";
  function goNext(id,url){
		jQuery(".list li").removeClass("check");
	$("#li_"+id).attr("class","check");
	$("#li_member").find("img").attr("src",imgSrc+"member.png");
	$("#li_"+id).find("img").attr("src",chooseImgSrc+id+".png");
	window.setTimeout(function(){
		$("#li_"+id).attr("class","");
		$("#li_member").attr("class","check");
		$("#li_member").find("img").attr("src",chooseImgSrc+"member.png");
		$("#li_"+id).find("img").attr("src",imgSrc+id+".png");
			window.location.href=url;
		},500)
	}
  function goUrl(url){
		window.location.href=url;
	}