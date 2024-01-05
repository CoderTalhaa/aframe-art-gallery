AFRAME.registerComponent('animation-listener', {
  init: function () {
    const el = this.el;

    document.addEventListener('keydown', function (event) {
      if (event.key === 'c' || event.key === 'C') {
        // Reset the animation-mixer component
        el.removeAttribute('animation-mixer');

        // Trigger the 'dance' animation to play once
        el.setAttribute('animation-mixer', { clip: '*', loop: 'once' });
        console.log('Key "C" pressed - Playing "dance" animation once');
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

AFRAME.registerComponent('cursor-listener', {
  init: function () {
    let el = this.el;
    let isOpen = false;
    el.addEventListener('click', function () {
      // Show the dialog-plane on hover
      const content = document.getElementById('content-container');

      if (!isOpen) {
        content.style.display = 'block';
      } else {
        content.style.display = 'none';
      }

      isOpen = !isOpen;
    });
  }
});

AFRAME.registerComponent('show-dialog', {
  init: function () {
    const el = this.el;
    const dialog = document.getElementById('dialog');

    el.addEventListener('mouseenter', function () {
      dialog.setAttribute('visible', 'true');
    });

    el.addEventListener('mouseleave', function () {
      dialog.setAttribute('visible', 'false');
    });
  }
});


AFRAME.registerComponent('clickable-link', {
  schema: {
    url: { type: 'string' }
  },
  init: function () {
    const el = this.el;

    // Define the openLink function
    const openLink = (url) => {
      // Open the link in the same window/tab
      window.open(url, '_blank');

      // Alternatively, open the link in a new window/tab
      // window.open(url, '_blank');
    };

    // Set up the click event
    el.addEventListener('click', () => {
      // Call the openLink function with the provided URL
      openLink(this.data.url);
    });
  }
});