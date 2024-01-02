AFRAME.registerComponent('hdri', {
  schema: {
    url: {type: 'string' ,  default : 'https://cdn.glitch.global/4ae2ce04-2cd7-4411-b3fd-7503c389b5ce/RESIZE-EXPORT-128-64-wasteland_clouds_puresky_1k.hdr?v=1699382834457'}, // Define the data schema
  },
  init: function () {
    const { url } = this.data; // Get the URL from the component data
    const sceneEl = this.el; // Reference to the A-Frame scene element
    const scene = sceneEl.object3D; // THREE.js scene object
    const renderer = sceneEl.renderer; // A-Frame renderer
    // Set up the HDRI loader
    const rgbeLoader = new THREE.RGBELoader();
    // rgbeLoader.setDataType(THREE.UnsignedByteType);
    rgbeLoader.load(url, (texture) => {
   
  texture.mapping = THREE.EquirectangularReflectionMapping;
scene.environment = texture;
    });
  }
});