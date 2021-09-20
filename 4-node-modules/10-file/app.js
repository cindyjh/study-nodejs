{
    // const fs = require('fs');

    // // rename(....., callback(erorr, data))
    // // try { renameSync(....) } catch(e) { }// 동기적으로 실행이 되므로 다음줄로 넘어가지 않음, error 발생 시 프로그램이 죽으므로 try catch로 묶어서 샤용
    // // promises.rename.then.catch(0)

    // try {
    //     fs.renameSync('./text.txt', './text-new.txt');
    // } catch(error) {
    //     console.error(error)
    // }

    // fs.rename('./text-new.txt', './text.txt', (error) => {
    //     console.log(error);
    // })

    // fs.promises
    //     .rename('./text2.txt', './text2-new.txt')
    //     // .then(() => console.log('Done!');)
    //     .catch(console.error)

    // console.log('hello');
}