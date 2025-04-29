<?php

$a = 7;

switch($a){
    case 0:
        echo "tenho um valor 0";
        break;
    case 1:
        echo "tenho um valor 1";
        break;
    case 2:
    case 3:
    case 4:
    case 5:
        echo "tenho um valor entre 2-5";
        break;
    default:
        echo "Tenho um valor diferente.";
        break;
}
