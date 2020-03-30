(() => {
    const $separators = document.querySelectorAll ('.separator-dino');
    let counter = 0;

    $separators.forEach(($separators) => {
        $separators.addEventListener('click', function (){
            !this.classList.contains('-cliecked') && counter++;
            this.classList.add('-clicked');
            counter === 4 && showKey();
        });
    });

    function showKey() {
        alert("Mostra Key animada!!!");
    }
}) ();