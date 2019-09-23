const remote = require('electron').remote

document.querySelector("h1.nav-title").onclick = function () {
  const beforeSize = remote.getCurrentWindow().getSize()
  const position = remote.getCurrentWindow().getPosition()
  remote.getCurrentWindow().setPosition(position[0] + 30, position[1] + 30)
  alert('window size:' + beforeSize + '->' + remote.getCurrentWindow().getSize())
}