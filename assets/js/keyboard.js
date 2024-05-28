$(function () {
    let Keyboard = window.SimpleKeyboard.default;
    // let defaultTheme = 'hg-theme-default';
    console.log('test');
    let keyboard = new Keyboard({
        onChange: (input) => onChange(input),
        onKeyPress: (button) => onKeyPress(button),
        mergeDisplay: true,
        layoutName: 'default',
        /*layout: {
            default: [
                'q w e r t z u i o p',
                'a s d f g h j k l',
                '{shift} y x c v b n m {backspace}',
                '{numbers} {space} {ent}'
            ],
            shift: [
                'Q W E R T Z U I O P',
                'A S D F G H J K L',
                '{shift} Y X C V B N M {backspace}',
                '{numbers} {space} {ent}'
            ],
            numbers: ['1 2 3', '4 5 6', '7 8 9', '{abc} 0 {backspace}']
        },
        display: {
            '{numbers}': ' ',
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
        }*/
        layout: {
            default: ['q w e r t z u i o p {bksp}', 'a s d f g h j k l {enter}', 'y x c v b n m . @', '{space}']
        },
        display: {
            '{enter}': 'return',
            '{bksp}': '⌫',
            '{downkeyboard}': 'Enter',
            '{space}': ' ',
            '{default}': 'ABC',
            '{back}': '⇦'
        }
    });

    const inputDOM = document.querySelector('.vkeyboard');

    const inputDOMMail = document.querySelector('.vkeyboardmail');

    /**
     * Keyboard show
     */
    inputDOM.addEventListener('focus', () => {
        console.log('Show Keyboard');
        showKeyboard();
    });
    inputDOMMail.addEventListener('focus', () => {
        console.log('Show Keyboard Mail');
        showKeyboard();
    });

    /**
     * Keyboard show toggle
     */
    document.addEventListener('mousedown', (event) => {
        console.log(event.target.className);
        if (
            /**
             * Hide the keyboard when you're not clicking it or when clicking an input
             * If you have installed a "click outside" library, please use that instead.
             */

            document.body.classList.contains('show-keyboard') &&
            !event.target.className.includes('input') &&
            !event.target.className.includes('hg-button') &&
            !event.target.className.includes('hg-row') &&
            !event.target.className.includes('hg-functionBtn') &&
            !event.target.className.includes('hg-layout-default') &&
            !event.target.className.includes('hg-theme-default') &&
            !event.target.className.includes('vkeyboard') &&
            !event.target.className.includes('vkeyboardmail')
        ) {
            hideKeyboard();
        }
    });

    /**
     * Update simple-keyboard when input is changed directly
     */
    inputDOM.addEventListener('input', (event) => {
        keyboard.setInput(event.target.value);
    });
    inputDOMMail.addEventListener('input', (event) => {
        keyboard.setInput(event.target.value);
    });

    function onChange(input) {
        inputDOM.value = input;
        inputDOMMail.value = input;
        console.log('Input changed', input);
    }

    function onKeyPress(button) {
        console.log('Button pressed', button);

        /**
         * If you want to handle the shift and caps lock buttons
         */
        /*if (button === '{shift}' || button === '{lock}') {
            handleShift();
        }*/
        if (button.includes('{') && button.includes('}')) {
            handleLayoutChange(button);
        }
    }

    function handleLayoutChange(button) {
        let currentLayout = keyboard.options.layoutName;
        let layoutName;

        switch (button) {
            case '{default}':
                layoutName = currentLayout === 'default' ? 'shift' : 'default';
                break;

            case '{enter}':
                // layoutName = currentLayout ===  "default" ;
                hideKeyboard();
                break;

            default:
                break;
        }

        if (layoutName) {
            keyboard.setOptions({
                layoutName: layoutName
            });
        }
    }
    /*function handleShift() {
        let currentLayout = keyboard.options.layoutName;
        let shiftToggle = currentLayout === 'default' ? 'shift' : 'default';

        keyboard.setOptions({
            layoutName: shiftToggle
        });
    }*/

    function showKeyboard() {
        document.body.classList.add('show-keyboard');
    }

    function hideKeyboard() {
        document.body.classList.remove('show-keyboard');
    }
});
