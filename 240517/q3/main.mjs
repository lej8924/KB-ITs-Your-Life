import readline from "readline";
import fs from "fs";
import {getMovie} from "./king.mjs";
import {getTour} from "./tour.mjs";
import { time } from "console";


getMovie().then(() => {
    return getTour();
}).catch((error) => {
    console.error("에러 발생함:", error);
});


// let test2 = async function(){
//     //순서대로 함수를 실행시켜야 하는 경우
//     console.log("func1 func2 순차적으로 실행");
//     let a = await getMovie();
//     let b = await getTour();

//     console.log("===============   결과   =============");
//     console.log(a);
//     console.log(b);
// }
// test2();

// var movie = fs.readFileSync('./movie.txt', "utf8");
// // console.log(movie);

// var tour = fs.readFileSync('./tour.txt', "utf8");
// // console.log(tour);

// console.log("=".repeat(20))
// console.log(`보고 싶은 영화는 ${movie}이고`);
// console.log(`가고 싶은 여행지는 ${tour}`);
// console.log("=".repeat(20))

