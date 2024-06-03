<link href="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css" rel="stylesheet" />
<script src="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js"></script>
<script>
    $(function () {
        var snmUsers = sessionStorage.getItem('snmUsers')
        const userData = JSON.parse(snmUsers).map((item, key) => {
            return {
                "id":key,
                "text":`${item.node.lastname} ${item.node.firstname} `,
                "email":item.node.email
            }
        })
        $('.select2').select2({
            data: userData,
            dropdownParent: $("#modal_email"),
            minimumResultsForSearch: -1
        });

        $('.select2').on('select2:select', function (e) {
            var data = e.params.data;
            $('#send-mail-recipient-input').val(e.params.data.email)

        });
    })

</script>

<div data-type="mail" class="modal rotarygroup"  id="modal_email" style="display: none">
    <div class="modal-inner">
        <form id="send-mail-form" class="form">
            <div class="modal-body">
                <p>Select your name to receive the photo.</p>
                <select class="select2 form-input" name="state" required>
                    <option></option>
                </select>
                <input type="hidden" name="image" id="send-mail-image" value="">
                <input  style="display: none" class="form-input vkeyboardmail" id="send-mail-recipient-input" type="email" name="recipient" placeholder="E-Mail *" required >
            </div>
            <div id="send-mail-modal-message" class="form-message" style="padding-left: 10px;padding-right: 10px"></div>
            <div class="modal-buttonbar">
                <button class="modal-button rotaryfocus" data-severity="primary" id="send-mail-submit-button" type="submit">
                    <span class="modal-button--icon">
                        <i class="fa fa-check"></i>
                    </span>
                    <span class="modal-button--label">Send</span>
                </button>
                <button class="modal-button rotaryfocus" data-severity="default" id="send-mail-close-button">
                    <span class="modal-button--icon">
                        <i class="fa fa-times"></i>
                    </span>
                    <span class="modal-button--label">Close</span>
                </button>
            </div>
        </form>
    </div>
</div>
<div class="simple-keyboard"></div>
<?php
use Photobooth\Service\AssetService;

$assetService = AssetService::getInstance();
echo '<script src="' . $assetService->getUrl('node_modules/simple-keyboard/build/index.js') . '"></script>';
echo '<script src="' . $assetService->getUrl('resources/js/keyboard.js') . '"></script>';
?>


<style>
    .modal-body {
        display: block;
        width: 100%;
        position: relative;
    }
    .select2 {
        width: 100%;
        display: block;
        color: #333;
    }
    .select2-results__option--selectable {
        font-size: 27px;
        color: #333;
    }
    .select2-search--dropdown .select2-search__field {
        padding: 10px;
        font-size: 25px;
    }
    .select2-container .select2-selection--single, .select2-container--default .select2-selection--single .select2-selection__arrow {
        height: 50px;
    }
    .select2-container--default .select2-selection--single .select2-selection__rendered {
        line-height: 50px;
        text-align: left;
    }
    .select2-container--default .select2-selection--single .select2-selection__arrow b {
        border-width: 10px 8px 0 8px;
        margin-left: -12px;
    }
    .select2-container--default .select2-results>.select2-results__options {
        max-height: 400px;
    }
</style>
