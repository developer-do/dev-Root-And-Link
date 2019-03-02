<?php
header('Content-Type: text/html; charset=UTF-8');

/* URL check 하기
 * $str  =>   url체크 할 문자열
 */
function indexChk($str) {
  $uri = $_SERVER['SCRIPT_NAME'];
  preg_match('/'.$str.'/', $uri, $match);
  if(count($match) === 0) {
    return false;
  } else {
    return true;
  }
}

// MOBILE ? PC CHECK
$mUserAgent = array('iPhone', 'iPod', 'BlackBerry', 'Android', 'Windows CE', 'LG', 'MOT', 'SAMSUNG', 'SonyEricsson');
$chkmobile = false;
for($i = 0; $i < sizeof($mUserAgent); $i++) {
  if(strpos($_SERVER['HTTP_USER_AGENT'], $mUserAgent[$i])) {
    $chkmobile = true;
    break;
  }
}

?>