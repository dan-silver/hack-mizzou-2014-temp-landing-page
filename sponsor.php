<?php

$file_url = 'http://2014.hackmizzou.com/SponsorGuide.pdf';
header('Content-Type: application/octet-stream');
header("Content-Transfer-Encoding: Binary"); 
header("Content-disposition: attachment; filename=\"" . basename($file_url) . "\""); 
readfile($file_url);

?>