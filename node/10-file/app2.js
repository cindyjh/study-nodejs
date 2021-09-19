const fs = require('fs').promises;

// 아래 메서드들은 다 비동기적으로 처리됨

// read a file
fs.readFile('./text.txt', 'utf-8')
    .then(data => console.log(data))
    .catch(console.error)

// writing a file
fs.writeFile('./file.txt', 'Hello, Dream Coders! :)')
    .catch(console.error)

fs.appendFile('./file.txt', 'Yo,! :)')
    .then(() => {
        // copy
        fs.copyFile('./file.txt', './file2.txt')
            .catch(console.error)
    })
    .catch(console.error)

// // copy
// fs.copyFile('./file.txt', './file2.txt')
//     .catch(console.error)


// folder
fs.mkdir('sub-folder')
    .catch(console.error)

// 
fs.readdir('./')
    .then(console.log)
    .catch(console.error)