import 'flowbite';

window.addEventListener('error', (error) => {
  alert(error.message + ' (' + error.filename + ':' + error.lineno + ')');
});
