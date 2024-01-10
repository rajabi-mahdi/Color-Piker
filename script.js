window.onload = function () {
    var Arr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    var Color = [];
    var Button = document.querySelector('.main__button');
    Button.onclick = function () {
        for (var i = 0; i < 6; i++) {
            var RandomNumber = Math.floor(Math.random() * 15);
            Color[i] = Arr[RandomNumber];
        }
        var HexColor = "#" + Color.join('')
        document.body.style.backgroundColor = HexColor;
        document.querySelector('.color__change').innerText = HexColor;
    }
}