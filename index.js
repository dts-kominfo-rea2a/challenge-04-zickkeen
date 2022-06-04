// ! JANGAN DIMODIFIKASI
const dates = [
  "2019-01-02", // 1546387200 (epoch time, dalam detik)
  "2022-05-06 00:00:00 UTC-2", // 1651802400 (epoch time, dalam detik)
  "2021-03-04 07:00:00 UTC", // 1614841200 (epoch time, dalam detik)
  "2021-04-05 00:00:00 UTC+2", // 1617573600 (epoch time, dalam detik)
  "2020-02-03 UTC+7", // 1580662800 (epoch time, dalam detik)
];

// TODO: Buatlah fungsi createDate
const createDate = (arrayOfString, posisi = 'all') => {
  if (posisi == 'all') {
    const result = []
    for (let i = 0; i < arrayOfString.length; i++) {
      result.push(Date.parse(arrayOfString[i])/1000) // to make this in second by divided 1000.
    };
    return result.sort().join('-');
  }
  if (posisi >= 0) {
    return (Date.parse(arrayOfString[posisi])/1000).toString() // to make this into not millisecond, divided by 1000.
  }
  
};

// ! JANGAN DIMODIFIKASI
(() => {
  // IIFE

  // '1546387200-1580662800-1614841200-1617573600-1651802400' (dalam string)
  console.log(createDate?.(dates));

  // '1614841200' (dalam string)
  console.log(createDate?.(dates, 2));
})();

module.exports = {
  dates,
  createDate,
};
