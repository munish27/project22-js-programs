function getFileExtension(filename){

    const extension = filename.split('.').pop();
    return extension;
}
const result = getFileExtension('module.js');

document.getElementById("file-extension").innerHTML = result;