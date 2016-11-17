$(function() {

			$("#button1").bind("click", function() {
						$("#button1_p").css({
									"color" : "red"
								}).text("Hello World!");
						$(".nav_p").css({
									"color" : "blue"
								}).text("Hello World!");

					});
			$(".f-f0").bind("mouseover", function() {
						$(".div_ptest").text("这是一个触碰测试: " + $(this).text() + "!");
					});
			$(".f-f0").bind("mouseleave", function() {
						$("#button1_p").text("hello world!");
					});

		})