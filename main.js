//<!--휴대폰 번호 자동 hypen==code=====================================================================================================================-->					

    function OnCheckTEL(oTa) { 
        var oForm = oTa.form ; 
        var sMsg = oTa.value ; 
        var onlynum = "" ; 
        var imsi=0; 
        onlynum = RemoveDash2(sMsg);  //하이픈 입력시 자동으로 삭제함 
        onlynum =  checkDigit(onlynum);  // 숫자만 입력받게 함 
        var retValue = ""; 
    
        if(event.keyCode != 12 ) { 
            if(onlynum.substring(0,2) == 02) {  // 서울전화번호일 경우  10자리까지만 나타나교 그 이상의 자리수는 자동삭제 
                    if (GetMsgLen(onlynum) <= 1) oTa.value = onlynum ; 
                    if (GetMsgLen(onlynum) == 2) oTa.value = onlynum + "-"; 
                    if (GetMsgLen(onlynum) == 4) oTa.value = onlynum.substring(0,2) + "-" + onlynum.substring(2,3) ; 
                    if (GetMsgLen(onlynum) == 4) oTa.value = onlynum.substring(0,2) + "-" + onlynum.substring(2,4) ; 
                    if (GetMsgLen(onlynum) == 5) oTa.value = onlynum.substring(0,2) + "-" + onlynum.substring(2,5) ; 
                    if (GetMsgLen(onlynum) == 6) oTa.value = onlynum.substring(0,2) + "-" + onlynum.substring(2,6) ; 
                    if (GetMsgLen(onlynum) == 7) oTa.value = onlynum.substring(0,2) + "-" + onlynum.substring(2,5) + "-" + onlynum.substring(5,7) ; ; 
                    if (GetMsgLen(onlynum) == 8) oTa.value = onlynum.substring(0,2) + "-" + onlynum.substring(2,6) + "-" + onlynum.substring(6,8) ; 
                    if (GetMsgLen(onlynum) == 9) oTa.value = onlynum.substring(0,2) + "-" + onlynum.substring(2,5) + "-" + onlynum.substring(5,9) ; 
                    if (GetMsgLen(onlynum) == 10) oTa.value = onlynum.substring(0,2) + "-" + onlynum.substring(2,6) + "-" + onlynum.substring(6,10) ; 
                    if (GetMsgLen(onlynum) == 11) oTa.value = onlynum.substring(0,2) + "-" + onlynum.substring(2,6) + "-" + onlynum.substring(6,10) ; 
                    if (GetMsgLen(onlynum) == 12) oTa.value = onlynum.substring(0,2) + "-" + onlynum.substring(2,6) + "-" + onlynum.substring(6,10) ; 
            } 
            if(onlynum.substring(0,2) == 05 ) {  // 05로 시작되는 번호 체크 
                if(onlynum.substring(2,3) == 0 ) {  // 050으로 시작되는지 따지기 위한 조건문 
                        if (GetMsgLen(onlynum) <= 3) oTa.value = onlynum ; 
                        if (GetMsgLen(onlynum) == 4) oTa.value = onlynum + "-"; 
                        if (GetMsgLen(onlynum) == 5) oTa.value = onlynum.substring(0,4) + "-" + onlynum.substring(4,5) ; 
                        if (GetMsgLen(onlynum) == 6) oTa.value = onlynum.substring(0,4) + "-" + onlynum.substring(4,6) ; 
                        if (GetMsgLen(onlynum) == 7) oTa.value = onlynum.substring(0,4) + "-" + onlynum.substring(4,7) ; 
                        if (GetMsgLen(onlynum) == 8) oTa.value = onlynum.substring(0,4) + "-" + onlynum.substring(4,8) ; 
                        if (GetMsgLen(onlynum) == 9) oTa.value = onlynum.substring(0,4) + "-" + onlynum.substring(4,7) + "-" + onlynum.substring(7,9) ; ; 
                        if (GetMsgLen(onlynum) == 10) oTa.value = onlynum.substring(0,4) + "-" + onlynum.substring(4,8) + "-" + onlynum.substring(8,10) ; 
                        if (GetMsgLen(onlynum) == 11) oTa.value = onlynum.substring(0,4) + "-" + onlynum.substring(4,7) + "-" + onlynum.substring(7,11) ; 
                        if (GetMsgLen(onlynum) == 12) oTa.value = onlynum.substring(0,4) + "-" + onlynum.substring(4,8) + "-" + onlynum.substring(8,12) ; 
                        if (GetMsgLen(onlynum) == 13) oTa.value = onlynum.substring(0,4) + "-" + onlynum.substring(4,8) + "-" + onlynum.substring(8,12) ; 
              } else { 
                    if (GetMsgLen(onlynum) <= 2) oTa.value = onlynum ; 
                    if (GetMsgLen(onlynum) == 3) oTa.value = onlynum + "-"; 
                    if (GetMsgLen(onlynum) == 4) oTa.value = onlynum.substring(0,3) + "-" + onlynum.substring(3,4) ; 
                    if (GetMsgLen(onlynum) == 5) oTa.value = onlynum.substring(0,3) + "-" + onlynum.substring(3,5) ; 
                    if (GetMsgLen(onlynum) == 6) oTa.value = onlynum.substring(0,3) + "-" + onlynum.substring(3,6) ; 
                    if (GetMsgLen(onlynum) == 7) oTa.value = onlynum.substring(0,3) + "-" + onlynum.substring(3,7) ; 
                    if (GetMsgLen(onlynum) == 8) oTa.value = onlynum.substring(0,3) + "-" + onlynum.substring(3,6) + "-" + onlynum.substring(6,8) ; ; 
                    if (GetMsgLen(onlynum) == 9) oTa.value = onlynum.substring(0,3) + "-" + onlynum.substring(3,7) + "-" + onlynum.substring(7,9) ; 
                    if (GetMsgLen(onlynum) == 10) oTa.value = onlynum.substring(0,3) + "-" + onlynum.substring(3,6) + "-" + onlynum.substring(6,10) ; 
                    if (GetMsgLen(onlynum) == 11) oTa.value = onlynum.substring(0,3) + "-" + onlynum.substring(3,7) + "-" + onlynum.substring(7,11) ; 
                    if (GetMsgLen(onlynum) == 12) oTa.value = onlynum.substring(0,3) + "-" + onlynum.substring(3,7) + "-" + onlynum.substring(7,11) ; 
              } 
            } 
    
            if(onlynum.substring(0,2) == 03 || onlynum.substring(0,2) == 04  || onlynum.substring(0,2) == 06  || onlynum.substring(0,2) == 07  || onlynum.substring(0,2) == 08 ) {  // 서울전화번호가 아닌 번호일 경우(070,080포함 // 050번호가 문제군요) 
                    if (GetMsgLen(onlynum) <= 2) oTa.value = onlynum ; 
                    if (GetMsgLen(onlynum) == 3) oTa.value = onlynum + "-"; 
                    if (GetMsgLen(onlynum) == 4) oTa.value = onlynum.substring(0,3) + "-" + onlynum.substring(3,4) ; 
                    if (GetMsgLen(onlynum) == 5) oTa.value = onlynum.substring(0,3) + "-" + onlynum.substring(3,5) ; 
                    if (GetMsgLen(onlynum) == 6) oTa.value = onlynum.substring(0,3) + "-" + onlynum.substring(3,6) ; 
                    if (GetMsgLen(onlynum) == 7) oTa.value = onlynum.substring(0,3) + "-" + onlynum.substring(3,7) ; 
                    if (GetMsgLen(onlynum) == 8) oTa.value = onlynum.substring(0,3) + "-" + onlynum.substring(3,6) + "-" + onlynum.substring(6,8) ; ; 
                    if (GetMsgLen(onlynum) == 9) oTa.value = onlynum.substring(0,3) + "-" + onlynum.substring(3,7) + "-" + onlynum.substring(7,9) ; 
                    if (GetMsgLen(onlynum) == 10) oTa.value = onlynum.substring(0,3) + "-" + onlynum.substring(3,6) + "-" + onlynum.substring(6,10) ; 
                    if (GetMsgLen(onlynum) == 11) oTa.value = onlynum.substring(0,3) + "-" + onlynum.substring(3,7) + "-" + onlynum.substring(7,11) ; 
                    if (GetMsgLen(onlynum) == 12) oTa.value = onlynum.substring(0,3) + "-" + onlynum.substring(3,7) + "-" + onlynum.substring(7,11) ; 
    
            } 
            if(onlynum.substring(0,2) == 01) {  //휴대폰일 경우 
                if (GetMsgLen(onlynum) <= 2) oTa.value = onlynum ; 
                if (GetMsgLen(onlynum) == 3) oTa.value = onlynum + "-"; 
                if (GetMsgLen(onlynum) == 4) oTa.value = onlynum.substring(0,3) + "-" + onlynum.substring(3,4) ; 
                if (GetMsgLen(onlynum) == 5) oTa.value = onlynum.substring(0,3) + "-" + onlynum.substring(3,5) ; 
                if (GetMsgLen(onlynum) == 6) oTa.value = onlynum.substring(0,3) + "-" + onlynum.substring(3,6) ; 
                if (GetMsgLen(onlynum) == 7) oTa.value = onlynum.substring(0,3) + "-" + onlynum.substring(3,7) ; 
                if (GetMsgLen(onlynum) == 8) oTa.value = onlynum.substring(0,3) + "-" + onlynum.substring(3,7) + "-" + onlynum.substring(7,8) ; 
                if (GetMsgLen(onlynum) == 9) oTa.value = onlynum.substring(0,3) + "-" + onlynum.substring(3,7) + "-" + onlynum.substring(7,9) ; 
                if (GetMsgLen(onlynum) == 10) oTa.value = onlynum.substring(0,3) + "-" + onlynum.substring(3,6) + "-" + onlynum.substring(6,10) ; 
                if (GetMsgLen(onlynum) == 11) oTa.value = onlynum.substring(0,3) + "-" + onlynum.substring(3,7) + "-" + onlynum.substring(7,11) ; 
                if (GetMsgLen(onlynum) == 12) oTa.value = onlynum.substring(0,3) + "-" + onlynum.substring(3,7) + "-" + onlynum.substring(7,11) ; 
            } 
    
            if(onlynum.substring(0,1) == 1) {  // 1588, 1688등의 번호일 경우 
                if (GetMsgLen(onlynum) <= 3) oTa.value = onlynum ; 
                if (GetMsgLen(onlynum) == 4) oTa.value = onlynum + "-"; 
                if (GetMsgLen(onlynum) == 5) oTa.value = onlynum.substring(0,4) + "-" + onlynum.substring(4,5) ; 
                if (GetMsgLen(onlynum) == 6) oTa.value = onlynum.substring(0,4) + "-" + onlynum.substring(4,6) ; 
                if (GetMsgLen(onlynum) == 7) oTa.value = onlynum.substring(0,4) + "-" + onlynum.substring(4,7) ; 
                if (GetMsgLen(onlynum) == 8) oTa.value = onlynum.substring(0,4) + "-" + onlynum.substring(4,8) ; 
                if (GetMsgLen(onlynum) == 9) oTa.value = onlynum.substring(0,4) + "-" + onlynum.substring(4,8) ; 
                if (GetMsgLen(onlynum) == 10) oTa.value = onlynum.substring(0,4) + "-" + onlynum.substring(4,8) ; 
                if (GetMsgLen(onlynum) == 11) oTa.value = onlynum.substring(0,4) + "-" + onlynum.substring(4,8) ; 
                if (GetMsgLen(onlynum) == 12) oTa.value = onlynum.substring(0,4) + "-" + onlynum.substring(4,8) ; 
            } 
        } 
    } 
    
    function RemoveDash2(sNo) { 
    var reNo = "" 
    for(var i=0; i<sNo.length; i++) { 
        if ( sNo.charAt(i) != "-" ) { 
        reNo += sNo.charAt(i) 
        } 
    } 
    return reNo 
    } 
    
    function GetMsgLen(sMsg) { // 0-127 1byte, 128~ 2byte 
    var count = 0 
        for(var i=0; i<sMsg.length; i++) { 
            if ( sMsg.charCodeAt(i) > 127 ) { 
                count += 2 
            } 
            else { 
                count++ 
            } 
        } 
    return count 
    } 
    
    function checkDigit(num) { 
        var Digit = "1234567890"; 
        var string = num; 
        var len = string.length 
        var retVal = ""; 
    
        for (i = 0; i < len; i++) 
        { 
            if (Digit.indexOf(string.substring(i, i+1)) >= 0) 
            { 
                retVal = retVal + string.substring(i, i+1); 
            } 
        } 
        return retVal; 
    } 
    
 					
//<!--주민 번호 자동 hypen==code=====================================================================================================================-->					
 
    function OnCheckbirth(oTa) { 
        var oForm = oTa.form ; 
        var sMsg = oTa.value ; 
        var onlynum = "" ; 
        var imsi=0; 
        onlynum = RemoveDash2(sMsg);  //하이픈 입력시 자동으로 삭제함 
        onlynum =  checkDigit(onlynum);  // 숫자만 입력받게 함 
        var retValue = ""; 
    
        if(event.keyCode != 12 ) { 
            if(onlynum.substring(0,2) == 02){
                    if (GetMsgLen(onlynum) <= 5) oTa.value = onlynum ; 
                    if (GetMsgLen(onlynum) == 6) oTa.value = onlynum + "-"; 
                    if (GetMsgLen(onlynum) == 7) oTa.value = onlynum.substring(0,6) + "-" + onlynum.substring(6) + "******" ; 
					if (GetMsgLen(onlynum) >= 7) oTa.value = onlynum.substring(0,6) + "-" + onlynum.substring(6) + "******" ;               
            }else{
					if (GetMsgLen(onlynum) <= 5) oTa.value = onlynum ; 
                    if (GetMsgLen(onlynum) == 6) oTa.value = onlynum + "-"; 
                    if (GetMsgLen(onlynum) == 7) oTa.value = onlynum.substring(0,6) + "-" + onlynum.substring(6) + "******"; 
					if (GetMsgLen(onlynum) >= 7) oTa.value = onlynum.substring(0,6) + "-" + onlynum.substring(6) + "******"; 
              

			  } 
            } 
    } 
    
    function RemoveDash2(sNo) { 
    var reNo = "" 
    for(var i=0; i<sNo.length; i++) { 
        if ( sNo.charAt(i) != "-" ) { 
        reNo += sNo.charAt(i) 
        } 
    } 
    return reNo 
    } 
    
    function GetMsgLen(sMsg) { // 0-127 1byte, 128~ 2byte 
    var count = 0 
        for(var i=0; i<sMsg.length; i++) { 
            if ( sMsg.charCodeAt(i) > 127 ) { 
                count += 2 
            } 
            else { 
                count++ 
            } 
        } 
    return count 
    } 
    
    function checkDigit(num) { 
        var Digit = "1234567890"; 
        var string = num; 
        var len = string.length 
        var retVal = ""; 
    
        for (i = 0; i < len; i++) 
        { 
            if (Digit.indexOf(string.substring(i, i+1)) >= 0) 
            { 
                retVal = retVal + string.substring(i, i+1); 
            } 
        } 
        return retVal; 
    } 
    
 //   </script>
//<!--주민 번호 숫자만 받기==code=====================================================================================================================-->					
//<script> 
    function OnCheckbirth(oTa) { 
        var oForm = oTa.form ; 
        var sMsg = oTa.value ; 
        var onlynum = "" ; 
        var imsi=0; 
        onlynum = RemoveDash2(sMsg);  //하이픈 입력시 자동으로 삭제함 
        onlynum =  checkDigit(onlynum);  // 숫자만 입력받게 함 
        var retValue = ""; 
    
        if(event.keyCode != 12 ) { 
            if(onlynum.substring(0,2) == 02){
                    if (GetMsgLen(onlynum) <= 6)oTa.value = onlynum ; 
                  //  if (GetMsgLen(onlynum) == 6) oTa.value = onlynum + "-"; 
                    if (GetMsgLen(onlynum) == 7) oTa.value = onlynum.substring(0,6) + "-" + onlynum.substring(6) + "******" ; 
					if (GetMsgLen(onlynum) >= 7) oTa.value = onlynum.substring(0,6) + "-" + onlynum.substring(6) + "******" ;               
            }else{
					if (GetMsgLen(onlynum) <=6 ) oTa.value = onlynum ; 
                   // if (GetMsgLen(onlynum) == 6) oTa.value = onlynum + "-"; 
                    if (GetMsgLen(onlynum) == 7) oTa.value = onlynum.substring(0,6) + "-" + onlynum.substring(6) + "******"; 
					if (GetMsgLen(onlynum) >= 7) oTa.value = onlynum.substring(0,6) + "-" + onlynum.substring(6) + "******"; 
              

			  } 
            } 
    } 
    
    function RemoveDash2(sNo) { 
    var reNo = "" 
    for(var i=0; i<sNo.length; i++) { 
        if ( sNo.charAt(i) != "-" ) { 
        reNo += sNo.charAt(i) 
        } 
    } 
    return reNo 
    } 
    
    function GetMsgLen(sMsg) { // 0-127 1byte, 128~ 2byte 
    var count = 0 
        for(var i=0; i<sMsg.length; i++) { 
            if ( sMsg.charCodeAt(i) > 127 ) { 
                count += 2 
            } 
            else { 
                count++ 
            } 
        } 
    return count 
    } 
    
    function checkDigit(num) { 
        var Digit = "1234567890"; 
        var string = num; 
        var len = string.length 
        var retVal = ""; 
    
        for (i = 0; i < len; i++) 
        { 
            if (Digit.indexOf(string.substring(i, i+1)) >= 0) 
            { 
                retVal = retVal + string.substring(i, i+1); 
            } 
        } 
        return retVal; 
    } 
    
 //   </script>
//<!--주민 번호 & 성별 자동 구분==code=====================================================================================================================-->					
//<script> 
	function check_jumin() { 
		if (ipt.jumin1.value.length >= 6 && ipt.jumin2.value.length == 1) {
				var sexCode = document.ipt.jumin2.value.substring(0,1);
				if (sexCode%2 == 1) ipt.sex[0].click(); else ipt.sex[1].click();
	
				var  birthYear = document.ipt.jumin1.value.substring(0,2);
				document.ipt.birth_y.value = (sexCode>=3) ? "20"+birthYear : "19"+birthYear;
				document.ipt.birth_m.value = document.ipt.jumin1.value.substring(2,4);
				document.ipt.birth_d.value = document.ipt.jumin1.value.substring(4,6);
		}
	}
    function check_jumin() { 
		if (ipt.jumin1.value.length >= 6 && ipt.jumin2.value.length == 1) {
				var sexCode = document.ipt.jumin2.value.substring(0,1);
				if (sexCode%2 == 1) ipt.sexdstnCd[0].click(); else ipt.sexdstnCd[1].click();
	
				var  birthYear = document.ipt.jumin1.value.substring(0,2);
				document.ipt.birth_y.value = (sexCode>=3) ? "20"+birthYear : "19"+birthYear;
				document.ipt.birth_m.value = document.ipt.jumin1.value.substring(2,4);
				document.ipt.birth_d.value = document.ipt.jumin1.value.substring(4,6);
		}
	}
//</script>
//<!--foucus 이동==code=====================================================================================================================-->					
//<script> 

//주민1->주민2
	function checkNext_1() {
		if (ipt.jumin1.value.length == 6) {
				ipt.jumin2.focus();
			}
		}
//주민2->폰번
	function checkNext_2(){
		if(ipt.jumin2.value.length == 1) {
				ipt.num2.focus();
			}
	}
	
	
//주민1->주민2
function checkNext_3() {
		if (ipt.jumin3.value.length == 6) {
				ipt.jumin4.focus();
			}
		}
//주민2->폰번
	function checkNext_4(){
		if(ipt.jumin4.value.length == 1 ) {
				ipt.num2.focus();
			}
	}



//폰번->주소
function checkNext_3(){
		if(ipt.num2.value.length == 11) {
				ipt.addr_3.focus();
			}
	}	
//	</script>