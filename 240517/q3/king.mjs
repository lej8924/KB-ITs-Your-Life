import readline from "readline";
import fs from "fs/promises"; // fs/promises를 사용하여 fs의 비동기 메서드를 사용

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function questionAsync(query) {
    return new Promise((resolve) => rl.question(query, resolve));
}

export function getMovie(){

    
    const p = new Promise((resolve, reject) => {
        resolve();
    });
    
    p.then((msg) => {
        // console.log(msg);
        return questionAsync('보고 싶은 영화 입력 >> ');
    })
    .then((movie) => {
        console.log(movie);
        return fs.writeFile('./movie.txt', movie).then(() => movie);
    })
    .catch((error) => {
        console.error("에러 발생함:", error);
    })
    .finally(() => {
        rl.close();
    });
}

// module.exports = { getMovie };
// rl.question을 프라미스로 래핑하는 함수

