// const pilihan = "abcde";

// for (let i = 1; i <= 10; i++){
//     console.log(`${i}. Soal nomor ${i}`);
//     for(let j = 0; j < pilihan.length; j++){
//         console.log(` ${pilihan[j]}. Pilih Jawaban `);
//     };
// };

const studentRow = [
    ['Oliver', 'Liam', 'Ujang', 'Noah'],
    ['Amelia', 'Steven', 'Ivan', 'Arip'],
    ['Sophia', 'Mateo', 'Isabella', 'Lucas']
]

for(let i = 0; i < studentRow.length; i++){
    const row = studentRow[i];
    console.log(`Seat Row # ${i + 1 }`);
    for(let j = 0; j < row.length; j++){
        console.log(`  ${row[j]}`);
    };
};
