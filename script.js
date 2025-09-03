// แสดงปีปัจจุบันอัตโนมัติใน footer
document.getElementById("y").textContent = new Date().getFullYear();

// ตัวอย่างการใช้ canvas
const canvas = document.getElementById("mypaint");
if (canvas) {
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "#2563eb";
  ctx.fillRect(20, 20, 150, 100);
  ctx.fillStyle = "#fff";
  ctx.font = "20px Inter";
  ctx.fillText("Hello!", 50, 80);
}
