const W_KEY = 75; // I
const A_KEY = 74; // J
const S_KEY = 73; // K
const D_KEY = 76; // L

const car = document.getElementById('car');

let keys = {
  up: false,
  down: false,
  left: false,
  right: false
};

document.onkeydown = (e) => {
  if (e.keyCode == W_KEY) {
    keys.up = true;
    document.getElementById('up');
  } else if (e.keyCode == A_KEY) {
    keys.left = true;
    document.getElementById('left');
  } else if (e.keyCode == S_KEY) {
    keys.down = true;
    document.getElementById('down');
  } else if (e.keyCode == D_KEY) {
    keys.right = true;
    document.getElementById('right');
  }
};

document.onkeyup = (e) => {
  if (e.keyCode == W_KEY) {
    keys.up = false;
    document.getElementById('up');
  } else if (e.keyCode == A_KEY) {
    keys.left = false;
    document.getElementById('left');
  } else if (e.keyCode == S_KEY) {
    keys.down = false;
    document.getElementById('down');
  } else if (e.keyCode == D_KEY) {
    keys.right = false;
    document.getElementById('right');
  }
};

const update = () => {
  if (keys.up) {
    let { x, y, z } = car.getAttribute('position');
    let ry = car.getAttribute('rotation').y;
    z -= Math.cos((ry * Math.PI) / 180) / 12;
    x -= Math.sin((ry * Math.PI) / 180) / 12;
    car.setAttribute('position', { x, y, z });
  } else if (keys.down) {
    let { x, y, z } = car.getAttribute('position');
    let ry = car.getAttribute('rotation').y;
    z += Math.cos((ry * Math.PI) / 180) / 10;
    x += Math.sin((ry * Math.PI) / 180) / 10;
    car.setAttribute('position', { x, y, z });
  }

  if (keys.left) {
    let { x, y, z } = car.getAttribute('rotation');
    y += 1.5;
    car.setAttribute('rotation', { x, y, z });
  } else if (keys.right) {
    let { x, y, z } = car.getAttribute('rotation');
    y -= 1.5;
    car.setAttribute('rotation', { x, y, z });
  }
};

setInterval(update, 10);
