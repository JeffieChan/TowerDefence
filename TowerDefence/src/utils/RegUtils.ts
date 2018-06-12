module RegUtils
{
	/**
	 * 检查输入的Email信箱格式是否正确 
	 * @author Andrew_Huang
	 * @export
	 * @param {*} strEmail
	 * @returns {boolean}
	 */
	export function checkEmail(strEmail): boolean
	{
		//var emailReg = /^[_a-z0-9]+@([_a-z0-9]+\.)+[a-z0-9]{2,3}$/; 
		var emailReg = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;
		if (emailReg.test(strEmail))
		{
			return true;
		}
		else
		{
			alert("您输入的Email地址格式不正确！");
			return false;
		}
	}

	/**
	 * 校验ip地址的格式 
	 * @author Andrew_Huang
	 * @export
	 * @param {*} strIP
	 * @returns {boolean}
	 */
	export function isIP(strIP): boolean 
	{
		if (isNull(strIP))
		{
			return false;
		}
		var re = /^(\d+)\.(\d+)\.(\d+)\.(\d+)$/g //匹配IP地址的正则表达式 
		if (re.test(strIP))
		{
			if (Number(RegExp.$1) < 256 && Number(RegExp.$2) < 256 && Number(RegExp.$3) < 256 && Number(RegExp.$4) < 256)
			{
				return true;
			}
		}
		return false;
	}

	/**
	 * 检查输入手机号码是否正确 
	 * @author Andrew_Huang
	 * @export
	 * @param {*} strMobile
	 * @returns {boolean}
	 */
	export function checkMobile(strMobile): boolean
	{
		var regu: string = "/^1[3|4|5|7|8][0-9]\d{4,8}$/";
		var re = new RegExp(regu);
		if (re.test(strMobile))
		{
			return true;
		}
		else
		{
			return false;
		}
	}

	/**
	 * 检查输入的电话号码格式是否正确 
	 * @author Andrew_Huang
	 * @export
	 * @param {*} strPhone
	 * @returns {boolean}
	 */
	export function checkPhone(strPhone): boolean 
	{
		var phoneRegWithArea = /^[0][1-9]{2,3}-[0-9]{5,10}$/;
		var phoneRegNoArea = /^[1-9]{1}[0-9]{5,8}$/;
		var prompt = "您输入的电话号码不正确!";
		if (strPhone.length > 9)
		{
			if (phoneRegWithArea.test(strPhone))
			{
				return true;
			}
			else
			{
				alert(prompt);
				return false;
			}
		}
		else
		{
			if (phoneRegNoArea.test(strPhone))
			{
				return true;
			}
			else
			{
				alert(prompt);
				return false;
			}
		}
	}

	/**
	 * 检查输入字符串是否为空或者全部都是空格 
	 * @author Andrew_Huang
	 * @export
	 * @param {*} str
	 * @returns {boolean}
	 */
	export function isNull(str): boolean
	{
		if (str == "")
		{
			return true;
		}
		var regu = "^[ ]+$";
		var re = new RegExp(regu);
		return re.test(str);
	}

	/**
	 * 检查输入对象的值是否符合整数格式 
	 * @author Andrew_Huang
	 * @export
	 * @param {*} str
	 * @returns {boolean}
	 */
	export function isInteger(str): boolean
	{
		var regu = /^[-]{0,1}[0-9]{1,}$/;
		return regu.test(str);
	}

	/**
	 * 检查输入字符串是否符合正整数格式 
	 * @author Andrew_Huang
	 * @export
	 * @param {*} s
	 * @returns {boolean}
	 */
	export function isNumber(s): boolean
	{
		var regu = "^[0-9]+$";
		var re = new RegExp(regu);
		if (s.search(re) != - 1)
		{
			return true;
		}
		else
		{
			return false;
		}
	}

	/**
	 * 检查输入字符串是否符合金额格式,格式定义为带小数的正数，小数点后最多三位
	 * @author Andrew_Huang
	 * @export
	 * @param {*} s
	 * @returns {boolean}
	 */
	export function isMoney(s): boolean
	{
		var regu = "^[0-9]+[\.][0-9]{0,3}$";
		var re = new RegExp(regu);
		if (re.test(s))
		{
			return true;
		}
		else
		{
			return false;
		}
	}

	/**
	 * 字符串去空格的函数 
	 * @author Andrew_Huang
	 * @export
	 * @param {*} sInputString
	 * @param {*} iType
	 * @returns {boolean}
	 */
	export function cTrim(sInputString, iType): boolean 
	{
		var sTmpStr = ' ';
		var i = - 1;
		if (iType == 0 || iType == 1) 
		{
			while (sTmpStr == ' ')
			{
				++i;
				sTmpStr = sInputString.substr(i, 1);
			}
			sInputString = sInputString.substring(i);
		}
		if (iType == 0 || iType == 2) 
		{
			sTmpStr = ' ';
			i = sInputString.length;
			while (sTmpStr == ' ')
			{
				--i;
				sTmpStr = sInputString.substr(i, 1);
			}
			sInputString = sInputString.substring(0, i + 1);
		}
		return sInputString;
	}
}