import readline from 'readline';
import fs from 'fs';
import { getMovie } from './king.mjs';
import { getTour } from './tour.mjs';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

getMovie(rl).then(() => {
    return getTour(rl);
}).then(()=>{
    let movie = fs.readFileSync('./movie.txt', "utf8");
    // console.log(movie);
    
    let tour = fs.readFileSync('./tour.txt', "utf8");
    // console.log(tour);
    
    console.log("=".repeat(20))
    console.log(`보고 싶은 영화는 ${movie}이고`);
    console.log(`가고 싶은 여행지는 ${tour}`);
    console.log("=".repeat(20))
}
).catch((error) => {
    console.error("에러 발생함:", error);
}).finally(() => {
    rl.close();
});



