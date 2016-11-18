function IsNullOrEmpty(v) {
	if (v == null || v == "undefined" || v == "")
		return true;

	return false;
}
function checkUser(obj, async) {
	return true;
	//下面是用来检测数据用户的合法性
	var result = false;
	var v = obj.val();
	var id = "txtUser";

	var apiUrl = "/Apis/Tools.asp";
	var data = {
		"method" : "CheckUser",
		"user" : v
	};
	// 回调函数
	var callback = function(result) {
		if (result == "2") {
			alert(id + "该账号已存在，请直接登录");
			return false;
		} else {
			alert(id + "该账号登录成功！");
			return true;
		}
	};

	if (IsNullOrEmpty(v) || v == obj.attr("placeholder")) {
		alert(id + obj.attr("placeholder"));
		return false;
	} else {
		if (async) { // 输入框异步检测
			$.post(apiUrl, data, callback);
		} else { // 点击按钮同步检测
			var valid = $.post(apiUrl, data); // 必须同步
			callback(valid);
			return (valid == "1");
		}
	}
}
//密码必须6到15位
function IsPwdStrong(s) {
	if (s.length < 6)
		return false;
	return true;
}
function checkPwd(obj) {
	var result = false;
	var v = obj.val();
	var id = "txtUser";
	if (IsNullOrEmpty(v) || v == obj.attr("placeholder")) {
		alert(id, obj.attr("placeholder"));
	} else {

		if (IsPwdStrong(v) == false) {
			alert(id + "密码必须6-20位");
			return false;
		}

		result = true;
	}
	return result;
}

//验证两次密码一致
function checkPwd2Same() {
	var id = "txtUser";
	if ($("#txtPwd").val() != $("#txtPwd2").val()) {
		alert(id, "两次密码不一致");
		return false;
	}
	return true;
}
// 按钮验证
function Verify() {
	// 验证接收条款
	
	var accept = $("input[type='checkbox']");
	if (accept != null && accept.is(":checked") == false) {
		alert("请先选中“我接受并同意《用户服务条款》”才能注册");
		return false;
	}

	var result = true;
	//依次检测用户、密码、验证密码的合法性
	/*var result = checkUser($("#txtUser"), false);

	if (result)
		result = checkPwd($("#txtPwd"));

	if (result)
		result = checkPwd($("#txtPwd2"));

	if (result)
		result = checkPwd2Same();*/

	if (result) {
		$("#btnRegister").val("正在注册...");
		return true;
	}
	return false;
}