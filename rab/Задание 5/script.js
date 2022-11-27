function matan() {
x = +prompt("Введи х");
a = +prompt("Введи а");
if (x && a > 0)
  y = (Math.sqrt(x) + 11) / (Math.pow(x, 2) - (7 * x) + (10 * a));
else y = "None";
document.getElementById('finish').innerHTML = (y);
}