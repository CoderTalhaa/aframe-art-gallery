AFRAME.registerComponent('animation-listener', {
  init: function () {
    const el = this.el;

    document.addEventListener('keydown', function (event) {
      if (event.key === 'l' || event.key === 'L') {
        // Reset the animation-mixer component
        el.removeAttribute('animation-mixer');

        // Trigger the 'dance' animation to play once
        el.setAttribute('animation-mixer', { clip: '*', loop: 'once' });
        console.log('Key "L" pressed - Playing "dance" animation once');
      }
    });
  }
});

AFRAME.registerComponent('go-up', {
  init: function () {
    const el = this.el;

    const camera = document.querySelector('#rig');
    const player = document.querySelector('#player');

    this.el.addEventListener('click', function (e) {


      camera.setAttribute('animation', {
        property: 'position',
        to: { x: -29, y: 60, z: 14 },
        easing: 'easeInQuad',
        loop: false,
        dur: 7000
      });
    });
  }
});

AFRAME.registerComponent('go-down', {
  init: function () {
    const el = this.el;

    const camera = document.querySelector('#rig');
    const player = document.querySelector('#player');

    this.el.addEventListener('click', function (e) {


      camera.setAttribute('animation', {
        property: 'position',
        to: { x: 0, y: 0, z: 0 },
        easing: 'easeInQuad',
        loop: false,
        dur: 7000
      });
    });
  }
});

AFRAME.registerComponent('glow', {
  init: function () {
    const el = this.el;


    this.el.addEventListener('mouseenter', function (e) {
      el.setAttribute('color', 'yellow');
      el.setAttribute('animation__scale', 'property: scale; to: 1.5 1.5 1.5; dur: 200; easing: easeInOutQuad');
    });

    this.el.addEventListener('mouseleave', function (e) {
      el.setAttribute('color', 'black');
      el.setAttribute('animation__scale', 'property: scale; to: 1 1 1; dur: 200; easing: easeInOutQuad');
    });
  }
});

AFRAME.registerComponent('set-aspect-ratio', {
  init: function () {
    const el = this.el;
    const elMedia = el.getAttribute('src').substring(1);
    const media = document.getElementById(elMedia);

    if (media.tagName === 'A-ASSET-ITEM') {
      const mediaSrc = media.getAttribute('src');
      const newMedia = document.createElement('video');
      newMedia.src = mediaSrc;

      newMedia.addEventListener('loadedmetadata', function () {
        const mediaAspectRatio = newMedia.videoWidth / newMedia.videoHeight;
        el.setAttribute('width', mediaAspectRatio);
      });
    } else if (media.tagName === 'VIDEO') {
      const mediaAspectRatio = media.videoWidth / media.videoHeight;
      el.setAttribute('width', mediaAspectRatio);
    } else {
      const mediaAspectRatio = media.naturalWidth / media.naturalHeight;
      el.setAttribute('width', mediaAspectRatio);
    }
  }
});
