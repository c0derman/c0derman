jQuery(function(a){a(".misha_loadmore").click(function(){a("#more_results_btn").val("تحميل...").addClass("load_button").attr("disabled","disabled");var e=a(this),r={action:"loadmore",query:misha_loadmore_params.posts,page:misha_loadmore_params.current_page,cat:a("#more_results_btn").data("metakey")};a.ajax({url:misha_loadmore_params.ajaxurl,data:r,type:"POST",beforeSend:function(a){e.text("Loading...")},success:function(e){if(!e)return a("#more_results_btn").val("لا يوجدالمزيد من نتائج"),!1;a("#more_results_btn").val("عرض المزيد").removeClass("load_button").removeAttr("disabled","disabled"),a("#grid").append(e),misha_loadmore_params.current_page++,misha_loadmore_params.current_page==misha_loadmore_params.max_page&&a("#more_results_btn").val("لا يوجدالمزيد من نتائج")}})})});