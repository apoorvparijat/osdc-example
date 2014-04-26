$(document).ready(function () {
	window.add = function () {
		var first_no = eval($('#first_no').val());
		var second_no = eval($('#second_no').val());
		$('#answer').text(first_no + second_no);
	}
});
