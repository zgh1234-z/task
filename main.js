const name = document.getElementById("name").value;
const text = document.getElementById("text").value;
class Generaltext {
  constructor(text, name, Date) {
    this.text = text;
    this.name = name;
    this.Date = Date;
  }
  Message() {
    console.log(
      this.name + " نویسنده پیام :" + this.text + "در تارسخ " + this.Date
    );
  }
}

checkbox = document.getElementById("chekh");
checkbox.addEventListener("change", (e) => {
  console.log(e.target.checked);
});
