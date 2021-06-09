<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0//EN"
			"http://www.w3.org/TR/REC-html40/strict.dtd">
<html>
<head>
<meta http-equiv="content-type" content="text/html; charset=utf-8">
<title>URL Decoder/Encoder</title>
<style type="text/css">
<!--
body {background: white; color: black;}
form {margin: 0;}
h1 {font-family: Arial, sans-serif; line-height: 0.85em; border-bottom: 2px solid;
  margin-bottom: 0.33em; padding-bottom: 0;}

textarea {background: #EEF;}

#footer {border-top: 1px solid #000; color: #999; font: italic 75% sans-serif;}
#footer p {margin: 0 0 1em 0;}
#footer img {float: right; margin: 0 0 0.5em 2em;}
-->
</style>
<script type="text/javascript">
function encode() {
	var obj = document.getElementById('dencoder');
	var unencoded = obj.value;
	obj.value = encodeURIComponent(unencoded).replace(/'/g,"%27").replace(/"/g,"%22");	
}
function decode() {
	var obj = document.getElementById('dencoder');
	var encoded = obj.value;
	obj.value = decodeURIComponent(encoded.replace(/\+/g,  " "));
}
</script>
</head>
<body>


<form onsubmit="return false;">
<h1>URL Decoder/Encoder</h1>

<textarea cols="100" rows="20" id="dencoder"></textarea>
<div>
<input type="button" onclick="decode()" value="Decode">
<input type="button" onclick="encode()" value="Encode">
</div>

</form>

</body>
</html>
