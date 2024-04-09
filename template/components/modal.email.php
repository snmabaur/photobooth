<div data-type="mail" class="modal rotarygroup"  id="modal_email" style="display: none">
    <div class="modal-inner">
        <form id="send-mail-form" class="form">
            <div class="modal-body">
                <p>Enter your e-mail address to receive the photo.</p>
                <input type="hidden" name="image" id="send-mail-image" value="">
                <input class="form-input vkeyboardmail" id="send-mail-recipient-input" type="email" name="recipient" placeholder="E-Mail *" required>
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
