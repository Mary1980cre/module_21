let num;
function setNum() {
	num = Math.ceil(Math.random() * 100);
}

const myPromise = new Promise((resolve, reject) => {

	setTimeout(setNum(), 3000);
	if (num % 2 == 0) {
		resolve(`Завершено успешно. Сгенерированное число - ${num}`);
	} else {
		reject(`Завершено с ошибкой. Сгенерированное число - ${num}`);
	}
});

myPromise
	.then((result) => {
		console.log('Обработка resolve', result);
	})
	.catch((error) => {
		console.log('Обработка reject', error);
	});