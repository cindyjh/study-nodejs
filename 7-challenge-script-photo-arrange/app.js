
const fs = require('fs')
const path = require('path')
const { exit } = require('process')

// 첫 번째 인자로 받은 경로에 존재하는 모든 파일들을 읽어와
const myArgs = process.argv.slice(2)
if (myArgs.length === 0) {
    console.log('folder name required.')
    exit;
}
const folderName = myArgs[0]
const targetDirPath = path.join(__dirname, folderName)
if (!fs.existsSync(targetDirPath)) {
    console.log('folder does not exist.')
    exit;
}

// make directory
makeDirectory(targetDirPath, 'video')
makeDirectory(targetDirPath, 'captured')
makeDirectory(targetDirPath, 'duplicated')

// 확장자 별로 정리
const fileNames = fs.readdirSync(targetDirPath)
fileNames.forEach((fileName) => {
    const extension = path.extname(fileName)
    switch (extension) {
        // video
        case '.mp4':
        case '.mov':
            moveFile(targetDirPath, fileName, 'video')
            break;
        // captured
        case '.png':
        case '.aae':
            moveFile(targetDirPath, fileName, 'captured')
            break;
        case '.jpg':
            if (isDuplicatedFile(fileName)) {
                moveFile(targetDirPath, fileName, 'duplicated')
            }
            break;
        default:
            break;
    }
})

function makeDirectory(basePath, DirName) {
    const dirPath = path.join(basePath, DirName)
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath)
    }
}

function moveFile(baseDirPath, fileName, destination) {
    fs.rename(
        path.join(baseDirPath, fileName),
        path.join(baseDirPath, destination, fileName),
        (err) => console.error(err)
    )
    console.log(`move ${fileName} to ${destination}`)
}

function isDuplicatedFile(fileName) {
    const pattern = /^IMG_E/i
    return pattern.test(fileName)
}