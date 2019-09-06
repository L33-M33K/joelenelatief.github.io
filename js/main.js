$(".underline").each(function() {
	var underlinedObject = $(this);
	var underlinedText = $(this).text();
	var seperatedText = underlinedText.split(" ");

	underlinedObject.addClass("underline-con");
	underlinedObject.removeClass("underline");
	underlinedObject.text("");
	var seperatedTextLength = seperatedText.length;

	for (var i = 0; i < seperatedTextLength; i++) {
		if (i != seperatedText.length-1) {
			underlinedObject.append("<span class=\"underline\">" + seperatedText[i] + "&nbsp;" + "</span>");
		} else {
			underlinedObject.append("<span class=\"underline\">" + seperatedText[i] + "</span>");
		}
	}
});
