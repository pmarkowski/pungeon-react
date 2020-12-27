let download = (data, filename) => {
    let downloadLink = document.createElement("a");
    downloadLink.href = data;
    downloadLink.download = filename;
    downloadLink.target = "_blank"
    downloadLink.click();
}

export default download;
