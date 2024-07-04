const canvas = document.getElementById("wheel");
const ctx = canvas.getContext("2d");
const spinButton = document.getElementById("spinButton");
const prizesForm = document.getElementById("prizesForm");
const prizesInput = document.getElementById("prizes");

let prizes = prizesInput.value.split(",");
let slices = prizes.length;
const sliceAngle = 2 * Math.PI / slices;
const colors = ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF", "#FF9F40", "#FFCD56", "#4CAF50"];
let currentAngle = 0;
let spinTimeout = null;

function drawWheel() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    slices = prizes.length;
    const sliceAngle = 2 * Math.PI / slices;

    for (let i = 0; i < slices; i++) {
        ctx.beginPath();
        ctx.moveTo(canvas.width / 2, canvas.height / 2);
        ctx.arc(canvas.width / 2, canvas.height / 2, canvas.width / 2, currentAngle, currentAngle + sliceAngle);
        ctx.fillStyle = colors[i % colors.length];
        ctx.fill();
        ctx.stroke();

        ctx.save();
        ctx.translate(canvas.width / 2, canvas.height / 2);
        ctx.rotate(currentAngle + sliceAngle / 2);
        ctx.textAlign = "right";
        ctx.fillStyle = "#000";
        ctx.font = "20px Arial";
        ctx.fillText(prizes[i], canvas.width / 2 - 10, 10);
        ctx.restore();

        currentAngle += sliceAngle;
    }
}

function spinWheel() {
    let spinAngle = Math.random() * 10 + 10;
    let spinTime = 0;
    let spinTimeTotal = Math.random() * 3000 + 4000;

    function rotateWheel() {
        spinTime += 30;
        if (spinTime >= spinTimeTotal) {
            clearTimeout(spinTimeout);
            const degrees = (currentAngle * 180 / Math.PI) % 360;
            const index = Math.floor((360 - degrees) / (360 / slices));
            alert(`You won ${prizes[index]}!`);
            return;
        }
        currentAngle += (spinAngle * Math.PI / 180);
        drawWheel();
        spinTimeout = setTimeout(rotateWheel, 30);
    }

    rotateWheel();
}

spinButton.addEventListener("click", spinWheel);

prizesForm.addEventListener("submit", (e) => {
    e.preventDefault();
    prizes = prizesInput.value.split(",");
    drawWheel();
});

drawWheel();
