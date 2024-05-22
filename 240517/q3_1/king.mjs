import fs from 'fs/promises'; // fs/promises를 사용
import readline from 'readline';

export function getMovie(rl) {
    return new Promise((resolve, reject) => {
        resolve();
    })
    .then(() => {
        return questionAsync(rl, '보고 싶은 영화 입력 >> ');
    })
    .then((movie) => {
        console.log(movie);
        return fs.writeFile('./movie.txt', movie).then(() => movie);
    })
    .catch((error) => {
        console.error("에러 발생함:", error);
    });
}

function questionAsync(rl, query) {
    return new Promise((resolve) => rl.question(query, resolve));
}
