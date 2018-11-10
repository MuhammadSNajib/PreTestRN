
export class Function {
  static thousandsFormat(num) {
    let number = ""
    if (num != "" && num != null) {
      num = parseFloat(num)
      if (num % 1 != 0) {
        num = parseFloat(num.toFixed(2))
      }
      number = num.toString().replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1" + '.');
    }

    return number;
  }
}