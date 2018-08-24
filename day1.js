
window.addEventListener('keypress' ,function(e) {
    console.log(e);
    let temp = e.charCode;
    const recievedData = document.querySelectorAll('[data-key-val="'+ temp + '"]');
    const buttonSelected = recievedData[0];
    const audioSelected = recievedData[1];
    console.log(buttonSelected);    
    buttonSelected.classList.add('isPressed');
    audioSelected.play();
    // buttonSelected.classList.remove('isPressed');
});