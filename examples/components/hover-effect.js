AFRAME.registerComponent('hover-effect', {
    init : function() {
        const el = this.el;
        this.el.addEventListener('mouseenter', function() {
            el.setAttribute('opacity' , '0.5');
        }
        );
        this.el.addEventListener('mouseleave', function() {
            el.setAttribute('opacity' , '1');
        }
        );
    }
})