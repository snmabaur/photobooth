<?php

use Photobooth\Utility\ComponentUtility;
use Photobooth\Utility\PathUtility;

echo '<div class="stage stage--result rotarygroup" data-stage="result">';
include PathUtility::getAbsolutePath('template/components/modal.email.php');
include PathUtility::getAbsolutePath('template/components/modal.rename.php');


echo '<div class="stage-inner">';
echo '<div class="buttonbar buttonbar--bottom">';

if ($config['button']['homescreen']) {
    echo ComponentUtility::renderButton('home', $config['icons']['home'], 'homebtn');
}

if ($config['ui']['result_buttons']) {
    if (!$config['button']['force_buzzer']) {
        if ($config['picture']['enabled']) {
            echo ComponentUtility::renderButton('newPhoto', $config['icons']['take_picture'], 'newpic');
        }
        if ($config['custom']['enabled']) {
            echo ComponentUtility::renderButton('newCustom', $config['icons']['take_custom'], 'newcustom');
        }
        if ($config['collage']['enabled']) {
            echo ComponentUtility::renderButton('newCollage', $config['icons']['take_collage'], 'newcollage');
        }
        if ($config['video']['enabled']) {
            echo ComponentUtility::renderButton('newVideo', $config['icons']['take_video'], 'newvideo');
        }
    }

    if ($config['qr']['enabled']) {
        echo ComponentUtility::renderButton('qr', $config['icons']['qr'], 'qrbtn');
    }
    if ($config['gallery']['enabled']) {
        echo ComponentUtility::renderButton('gallery', $config['icons']['gallery'], 'gallerybtn');
    }
    if ($config['mail']['enabled']) {
        echo ComponentUtility::renderButton('mail', $config['icons']['mail'], 'mailbtn');
    }
}

if ($config['print']['from_result']) {
    echo ComponentUtility::renderButton('print', $config['icons']['print'], 'printbtn');
}
if ($config['filters']['enabled']) {
    echo ComponentUtility::renderButton('selectFilter', $config['icons']['filter'], 'imageFilter');
}
if ($config['picture']['allow_delete']) {
    echo ComponentUtility::renderButton('delete', $config['icons']['delete'], 'deletebtn');
}

if ($config['picture_naming']['enabled']) {
    echo ComponentUtility::renderButton('saveImage', $config['icons']['rename'], 'savebtn');
}

echo '</div>';
echo '</div>';
echo '</div>';
