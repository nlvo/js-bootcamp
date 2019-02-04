function Chessboard() {

    var number = 8,
        hastags = '';

    for (var row = 1; row <= number; row++) {
        if (row % 2 == 0) {
            for (var character = 1; character <= number; character++) {
                if (character % 2 == 0) {
                    hastags += ' ';
                } else {
                    hastags += '#';
                }
            }
        } else {
            for (var character = 1; character <= number; character++) {
                if (character % 2 == 0) {
                    hastags += '#';
                } else {
                    hastags += ' ';
                }
            }
        }
        hastags += '\n';
    }
    console.log(hastags);
}

Chessboard();