const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// const p = new Promise((resolve,reject)=>{
//     console.log("Promise를 시작합니다.")
//     resolve("1 ==> 너의 이름은?");
// })
// p.then((msg)=>{
//     console.log(msg);
//     let name;
//     rl.question("2 ==> ",(name) =>{
//         console.log("네가 가고 싶은 곳은?");
//         rl.close();
//     });
//     return `${name}`;
// })
// .then((msg)=>{
//     // let region;
//     rl.question("3 ==>",(region) =>{
//         console.log(`${msg}은 ${region}을 가기를 희망한다.`);
//         rl.close();
//     });
    
// })
// .catch((error)=>{
//     console.log("에러 발생함 ->" + error);
// })


// 위의 자바스크립트 코드에서 두 번째 then()이 실행되지 않는 이유는 첫 번째 then()에서 반환된 값이 제대로 전달되지 않기 때문입니다. 구체적으로, 첫 번째 then() 블록 내에서 rl.question 함수 호출 후 return ${name}; 부분이 의도대로 동작하지 않습니다.

// rl.question 함수는 비동기적으로 동작하여 콜백 함수를 사용합니다. rl.question 호출이 끝나기 전에 then() 블록이 종료되고, name 변수는 아직 정의되지 않았습니다. 따라서 첫 번째 then() 블록은 아무것도 반환하지 않으며, 두 번째 then() 블록이 호출되지 않습니다.


// rl.question을 프라미스로 래핑하는 함수
function questionAsync(query) {
    return new Promise((resolve) => rl.question(query, resolve));
}

const p = new Promise((resolve, reject) => {
    console.log("Promise를 시작합니다.");
    resolve("1 ==> 너의 이름은?");
});

p.then((msg) => {
    console.log(msg);
    return questionAsync("2 ==> ");
})
.then((name) => {
    console.log("네가 가고 싶은 곳은?");
    return questionAsync("3 ==> ").then((region) => {
        console.log(`${name}은 ${region}을 가기를 희망한다.`);
    });
})
.catch((error) => {
    console.log("에러 발생함 ->" + error);
})
.finally(() => {
    rl.close();
});