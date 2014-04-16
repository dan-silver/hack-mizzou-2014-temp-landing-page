<?php

// $file_url = 'http://2014.hackmizzou.com/SponsorGuide.pdf';
// header('Content-Type: application/octet-stream');
// header("Content-Transfer-Encoding: Binary"); 
// header("Content-disposition: attachment; filename=\"" . basename($file_url) . "\""); 
// readfile($file_url);

$file ="SponsorGuide.pdf";
$filename = 'HackMizzouSponsor.pdf'; /* Note: Always use .pdf at the end. */

header('Content-type: application/pdf');
header('Content-Disposition: inline; filename="' . $filename . '"');
header('Content-Transfer-Encoding: binary');
header('Content-Length: ' . filesize($file));
header('Accept-Ranges: bytes');

@readfile($file);
?>