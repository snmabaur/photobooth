<div data-type="mail" class="modal rotarygroup" id="modal_rename" style="display: none">
    <div class="modal-inner">
        <div class="modal-body">
            <p>Enter your full name</p>
            <form id="set-image-name" class="form">
                <input id="modal_rename_image" type="hidden" name="image" value="undefined">
                <input class="form-input vkeyboard" id="fullName" type="text" name="fullName" placeholder="Full name *" required>
            </form>
        </div>
        <div id="set-image-name-message" class="form-message" style="padding-left: 10px;padding-right: 10px"></div>
        <div class="modal-buttonbar">
            <button class="modal-button rotaryfocus" data-severity="primary" id="set-image-name-submit">
                <span class="modal-button--icon">
                  <i class="fa fa-check"></i>
                </span>
                <span class="modal-button--label">Save</span>
            </button>
            <button id="modal_rename_close" class="modal-button rotaryfocus" data-severity="default">
                <span class="modal-button--icon">
                  <i class="fa fa-times"></i>
                </span>
                <span class="modal-button--label">Close</span>
            </button>
        </div>
    </div>
</div>

<div class="simple-keyboard"></div>
<?php
use Photobooth\Service\AssetService;

$assetService = AssetService::getInstance();
echo '<script src="' . $assetService->getUrl('node_modules/simple-keyboard/build/index.js') . '"></script>';
echo '<script src="' . $assetService->getUrl('resources/js/keyboard.js') . '"></script>';
?>

