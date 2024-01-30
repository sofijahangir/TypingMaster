function download(filename, content) {
  const element = document.createElement('a');
  element.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(content);
  element.download = filename;

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

document.getElementById('btn').addEventListener('click', function () {
  const filename = document.getElementById('filename').value.trim();
  const text = document.getElementById('textarea1').value;

  if (!filename || !text) {
    alert('Please enter a filename and content.');
    return;
  }

  const exmContent = text;
  const exiContent = `name=${filename}\ndescription=${filename}\nlanguage=eng\n${document.getElementById('textarea2').value}`;

  download(`${filename}.exm`, exmContent);
  download(`${filename}.exi`, exiContent);
}, false);
