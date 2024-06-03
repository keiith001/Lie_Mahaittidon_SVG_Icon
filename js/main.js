console.log("JS file connected");

const iconControl = document.querySelectorAll(".icon-box");
console.log(iconControl);

iconControl.forEach(function (object) {
  object.addEventListener("mousedown", logId);
});

function logId() {
  console.log(this.id);
}
