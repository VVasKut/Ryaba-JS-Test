const dataURL = "https://api.myjson.com/bins/jcmhn";

function handleButton() {
	$.getJSON(dataURL, handleData);
	
	
}

function handleData(data) {

	let storyLine = "";

	let inputs = {
		var1: $("input[name=var1]")[0].value,
		var2: $("input[name=var2]")[0].value,
		var3: $("input[name=var3]")[0].value,
		var4: $("input[name=var4]")[0].value,
		var5: $("input[name=var5]")[0].value,
		var6: $("input[name=var6]")[0].value,
		speach: $("input[name=speach]")[0].value
	}

	data["text"].forEach(function(item, index) {
		for (key in inputs) {
			item = item.replace("{" + key + "}", inputs[key]);
		} 

		storyLine = storyLine + item + "<br>";
	});

	$("#result").html(storyLine);
 }

function handleDataAnother(data) {
  // кажется, какой-то из этих способов сработает
  //const var1 = $("input[name=var1]")[0].value()
  //const var1 = $("input[name=var1]").value()
  //const var1 = $("input[name=var1]")[0].default()

  // надо сделать так чтобы сообщения подменились на значения из формы
  let text = "Здесь могла быть ваша реклама";
	$("#result").text(text);
}

function init() {
	$("#button-fetch").click(handleButton);
}

$(document).ready(init);
