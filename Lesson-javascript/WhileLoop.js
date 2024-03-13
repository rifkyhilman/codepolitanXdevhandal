let maximum = parseInt(prompt('Masukan nilai maksimal!'));
while (!maximum){
    maximum = parseInt(prompt('Masukan nilai maksimal!'));
}

let targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);

let guess = parseInt(prompt('Isi tebakan pertama kamu!'));
while (parseInt(guess) !== targetNum){
    if(guess > targetNum) {
        guess = prompt('Terlalu tinggi! tebak lagi: ');
    } else {
        guess = prompt('Terlalu rendah! tebak lagi:');
    }
}

alert('Selamat Tebakan Anda benar!!');