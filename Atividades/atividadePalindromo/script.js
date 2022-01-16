palindromo("aba"); // é palindromo
palindromo("radar"); // é palindromo
palindromo("renner"); // é palindromo
palindromo("bola"); // não é palindromo
palindromo("abacadasd"); // não é palindromo
palindromo(""); // é palindromo
palindromo("x"); // é palindromo

function palindromo(s) {
  if (s == "") {
    console.log(s + " é palíndromo");
    return;
  }
  /*else if (s.length == 1) {
    console.log(s + " é palíndromo");
  } else {
    console.log(s + " é indefinido");
  }

 */ for (var i = 0, j = s.length - 1; i < j; i++, j--) {
    if (s.charAt(i) != s.charAt(j)) {
      console.log(s + " não é palíndromo");
      return;
    }
  }
  console.log(s + " é palíndromo");
}
