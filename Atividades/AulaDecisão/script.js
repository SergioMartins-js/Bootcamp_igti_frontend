function maior(a, b, c) {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else {
    return c;
  }
}

function menor(a, b, c) {
  var r = a < b && a < c ? a : b < a && b < c ? b : c;
  return r;
}

function FormatarMes(mes) {
  switch (mes) {
    case 1:
      return "Janeiro";
      break;
    case 2:
      return "Fevereiro";
      break;
    case 3:
      return "Março";
      break;
    case 4:
      return "Abril";
      break;
    case 5:
      return "Maio";
      break;
    case 6:
      return "Junho";
      break;
    case 7:
      return "Julho";
      break;
    case 8:
      return "Agosto";
      break;
    case 9:
      return "Setembro";
      break;
    case 10:
      return "Outubro";
      break;
    case 11:
      return "Novembro";
      break;
    case 12:
      return "Dezembro";
      break;
    default:
      return "Mês inválido";
  }
}
