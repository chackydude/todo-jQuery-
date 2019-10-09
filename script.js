// script
$(function() {
	var $taskList = $("#taskList");
	var $taskInput = $("#taskInput");
	var $notification = $("#notification");

	function displayNotification() {
		if (!$tasksList.children().length) {
			$notification.fadeIn("fast");
		} else {
			$notification.css("display", "none")
		}
	};

	$("#taskAdd").on("click", function() {
		if (!$taskInput.val()) {return false;}

		$tasksList.append("<li>" + $taskInput.val() + "button class='delete'>&#1006</button></li>");

		$taskInput.val("");

		displayNotification();

		$(".delete").on("click", function() {
			var $parent = $(this).parent();

			$parent.css("animation", "fadeOut .3s linear");

			setTimeout(function() {
				$parent.remove();
				displayNotififcation();
			}, 295)
		})
	})
})