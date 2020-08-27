function typeLetter(text) {
    var x = document.getElementById('typing-title');
    x.innerHTML += text[0];
    if (text.length > 1) {
        setTimeout(() => {
            typeLetter(text.substring(1, text.length));
        }, 100)
    }
}

typeLetter('Welcome to my first site.')