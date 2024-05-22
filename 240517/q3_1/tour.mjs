import fs from 'fs/promises'; // fs/promises를 사용
import readline from 'readline';

export function getTour(rl) {
    return new Promise((resolve, reject) => {
        resolve();
    })
    .then(() => {
        return questionAsync(rl, '가고 싶은 여행지 입력 >> ');
    })
    .then((tour) => {
        console.log(tour);
        return fs.writeFile('./tour.txt', tour).then(() => tour);
    })
    .catch((error) => {
        console.error("에러 발생함:", error);
    });
}

function questionAsync(rl, query) {
    return new Promise((resolve) => rl.question(query, resolve));
}
