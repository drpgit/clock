const secondHand = document.querySelector(".second");
const minuteHand = document.querySelector(".minute");
const hourHand = document.querySelector(".hour");

function setTime() {
	const now = new Date();
	const seconds = now.getSeconds();
	const secondsDegrees = getDegrees(seconds);
	secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
	const minutes = now.getMinutes();
	const minutesDegrees = getDegrees(minutes);
	minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
	const hours = now.getHours();
	const hoursDegrees = getDegrees(hours);
	hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
	console.log(hours + " " + minutes + " " + seconds);
}

function getDegrees(hand) {
	return ((hand / 60) * 360) + 90;
}

setInterval(setTime, 1000);