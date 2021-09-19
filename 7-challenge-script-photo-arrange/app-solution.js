const path = require('path')
const fs = require('fs')
const os = require('os')

// 계획
// 1. 사용자가 원하는 폴더의 이름을 받아온다.

console.log(process.argv[2])

const folder = process.argv[2]
const workingDir = path.join(__dirname, folder)
if (!folder || !fs.existsSync(workingDir)) {
    console.error('Please enter folder name in test')
    return
}

console.log(workingDir)
// 2. 그 폴더 안에 video, captured, duplicated 폴더를 만든다.
const videoDir = path.join(workingDir, 'video')
const captureDir = path.join(workingDir, 'capture')
const duplicatedDir = path.join(workingDir, 'duplicated')

!fs.existsSync(videoDir) && fs.mkdirSync(videoDir)
!fs.existsSync(captureDir) && fs.mkdirSync(captureDir)
!fs.existsSync(duplicatedDir) && fs.mkdirSync(duplicatedDir)

// 3. 폴더 안에 있는 파일들을 다 돌면서 해당하는 비디오(mp4|mov), 캡쳐(png|aae), 복제(IMG_E) 디렉토리로 이동시킨다.
fs.promises
    .readdir(workingDir)
    .then(processFiles)
    .catch(console.log)

function processFiles(files) {
    files.forEach((file) => {
        if (isVideoFile(file)) {
            move(file, videoDir);
        } else if (isCapturedFile(file)) {
            move(file, captureDir);
        } else if (isDuplicatedFile(files, file)) {
            move(file, duplicatedDir);
        }
    })
}

function isVideoFile(file) {
    const regExp = /(mp4|mov)$/gm
    const match = file.match(regExp)
    return !!match
}

function isCapturedFile(file) {
    const regExp = /(png|aae)$/gm
    const match = file.match(regExp)
    return !!match
}
function isDuplicatedFile(files, file) {
    // IMG_XXX -> IMG_EXXX
    if (!file.startsWith('IMG_') || file.startsWith('IMG_E')) {
        return false
    }

    const edited = `IMG_E${file.split('_')[1]}`
    const found = files.find(f => f.includes(edited))
    return !!found
}

function move(file, targetDir) {
    console.info(`move ${file} to ${path.basename(targetDir)}`)
    const oldPath = path.join(workingDir, file)
    const newPath = path.join(targetDir, file)
    fs.promises
        .rename(oldPath, newPath)
        .catch(console.error)
}