$(document).ready(function() {

	var clock;
	clock = $(".clock").FlipClock({
		clockFace : "DailyCounter",
		autoStart : false,
		callbacks : {
			stop : function() {
				$(".message").html("Время прошло");
			}
		}
	});
    

	var dt = "May 29 2016 23:59:59";
	var first = new Date(dt);
	var last = Date.now();
	var remaining = first - last;
	remaining /=1000;

	if (first > last) {
		clock.setTime(remaining);
	} else {
		clock.setTime(first);
	};

	clock.setCountdown(true);
	clock.start();

	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#form").submit(function(e) {
		e.preventDefault;
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
			}, 1000);
		});
	});
	
});