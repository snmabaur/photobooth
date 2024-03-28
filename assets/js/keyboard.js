$(function () {
    let Keyboard = window.SimpleKeyboard.default;
    let defaultTheme = 'hg-theme-default';


    let keyboard = new Keyboard({
        onChange: input => onChange(input),
        onKeyPress: button => onKeyPress(button),
        preventMouseUpDefault: true,
        autoUseTouchEvents: true,
        mergeDisplay: true,
        layoutName: 'default',
        layout: {
            default: [
                'q w e r t y u i o p',
                'a s d f g h j k l',
                '{shift} z x c v b n m {backspace}',
                '{numbers} {space} {ent}'
            ],
            shift: [
                'Q W E R T Y U I O P',
                'A S D F G H J K L',
                '{shift} Z X C V B N M {backspace}',
                '{numbers} {space} {ent}'
            ],
            numbers: ['1 2 3', '4 5 6', '7 8 9', '{abc} 0 {backspace}']
        },
        display: {
            '{numbers}': '123',
            '{ent}': 'return',
            '{escape}': 'esc ⎋',
            '{tab}': 'tab ⇥',
            '{backspace}': '⌫',
            '{capslock}': 'caps lock ⇪',
            '{shift}': '⇧',
            '{controlleft}': 'ctrl ⌃',
            '{controlright}': 'ctrl ⌃',
            '{altleft}': 'alt ⌥',
            '{altright}': 'alt ⌥',
            '{metaleft}': 'cmd ⌘',
            '{metaright}': 'cmd ⌘',
            '{abc}': 'ABC'
        }
    });
    let inputDOM = document.querySelector('.vkeyboard');
    /**
     * Keyboard show
     */
    inputDOM.addEventListener('focus', () => {
        showKeyboard();
    });
    /**
     * Keyboard show toggle
     */
    ['mousedown', 'touchstart'].forEach(function (e) {
        window.addEventListener(e,mouseMoveHandler,false);
    })
    function mouseMoveHandler(e) {
        if (
            /**
             * Hide the keyboard when you're not clicking it or when clicking an input
             * If you have installed a "click outside" library, please use that instead.
             */
            keyboard.options.theme.includes('show-keyboard') &&
            !e.target.className.includes('input') &&
            !e.target.className.includes('hg-button') &&
            !e.target.className.includes('hg-row') &&
            !e.target.className.includes('simple-keyboard')
        ) {
            hideKeyboard();
        }
    }

    /**
     * Update simple-keyboard when input is changed directly
     */
    inputDOM.addEventListener('input', event => {
        keyboard.setInput(event.target.value);
    });


    function onChange(input) {
        inputDOM.value = input;
        console.log('Input changed', input);
    }

    function onKeyPress(button) {
        console.log('Button pressed', button);

        /**
         * If you want to handle the shift and caps lock buttons
         */
        if (button === '{shift}' || button === '{lock}') {handleShift();}
        if (button === '{numbers}' || button === '{abc}') {handleNumbers();}
    }

    function handleShift() {
        let currentLayout = keyboard.options.layoutName;
        let shiftToggle = currentLayout === 'default' ? 'shift' : 'default';

        keyboard.setOptions({
            layoutName: shiftToggle
        });
    }

    function handleNumbers() {
        let currentLayout = keyboard.options.layoutName;
        let numbersToggle = currentLayout !== 'numbers' ? 'numbers' : 'default';

        keyboard.setOptions({
            layoutName: numbersToggle
        });
    }
    function showKeyboard() {
        keyboard.setOptions({
            theme: `${defaultTheme} show-keyboard`
        });
    }
    function hideKeyboard() {
        keyboard.setOptions({
            theme: defaultTheme
        });
    }
})
