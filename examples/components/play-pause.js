AFRAME.registerComponent('play-pause', {
    schema : {
        type : 'selector'
    }
,
init : function() {
    var video = this.data;
    const el = this.el;
    this.el.addEventListener('click', function() {
        if (video.paused) {
            video.play();
            el.setAttribute('src' , '#play');
        } else {
            video.pause();
           el.setAttribute('src' , '#pause');
        }
    }
    );
}


})