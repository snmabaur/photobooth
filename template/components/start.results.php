<div class="stages rotarygroup" id="result">
    <div class="resultInner hidden">
    <?php include 'resultsBtn.php'; ?>
    </div>

    <?php if ($config['qr']['enabled']): ?>
        <div id="qrCode" class="modal">
            <div class="modal__body <?php echo $uiShape; ?>"></div>
        </div>
    <?php endif; ?>
</div>
