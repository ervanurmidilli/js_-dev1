function showTime() {
  let info = document.querySelector("#myClock");
  var tarih = new Date();
  var saat = tarih.getHours();
  var dakika = tarih.getMinutes();
  var saniye = tarih.getSeconds();
  info.innerHTML = `${saat} : ${dakika} : ${saniye}`;
  setTimeout(showTime, 1000);
}
function showDate() {
  let info2 = document.querySelector("#myDate");
  var tarih = new Date();
  var gün = tarih.getDate();

  if (tarih.getMonth() <= 9) {
    var ay = `0${tarih.getMonth() + 1}`;
  }

  var yil = tarih.getFullYear();

  info2.innerHTML = `${gün} : ${ay} : ${yil}`;
  setTimeout(showDate, 1000);
  console.log(ay);
}

showTime();
showDate();
