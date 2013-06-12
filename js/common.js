//分类切换
$(document).ready(function(){
	var catgry = $(".catgry");
	var catgry_box = $(".catgry_box");
	catgry.each(function(index){
		catgry.eq(index).hover(function(){
			$(this).addClass("cur");
			catgry_box.eq(index).show();
		},function(){
			catgry.removeClass("cur");
			catgry_box.eq(index).hide();
		});
	});
});

//选项卡切换
function ChangeTab(i,j)
{
	var tab_title = $(".tab_news").eq(i).find("ul.tab_title li");
	var tab_content = $(".tab_news").eq(i).find("ul.tab_content");
	tab_title.removeClass("cur");
	tab_title.eq(j).addClass("cur");
	tab_content.hide();
	tab_content.eq(j).show();
}