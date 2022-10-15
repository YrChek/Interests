const ul = Array.from(document.querySelectorAll('.interests_active'))

ul.forEach((el) => {
    el.previousElementSibling.firstElementChild.addEventListener('change', topClick)
})

function topClick(e) {
    let el = e.currentTarget
    el.indeterminate = false
    let nextElement = el.parentElement.nextElementSibling
    let inputs = Array.from(nextElement.getElementsByTagName('input'))
    inputs.forEach((input) => {
        input.indeterminate = false
        input.checked = el.checked
    })
}

for (let el of ul) {
    let inputs = Array.from(el.getElementsByTagName('input'))
    inputs.forEach((input) => {
        input.addEventListener('change', bottomClick)
    })
}

function bottomClick() {
    for (let el of ul.reverse()) {
        let check = el.querySelectorAll('.interest__check:checked').length
        let input = el.getElementsByTagName('input').length
        let inputTop = el.previousElementSibling.firstElementChild
        inputTop.indeterminate = false;
        let ratio = check / input + 10
        switch(ratio) {
            case 10: inputTop.checked = false; break;
            case 11: inputTop.checked = true; break;
            default: inputTop.indeterminate = true; break;
        }
    }
}