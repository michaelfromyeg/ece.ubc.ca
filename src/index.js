var elements = document.getElementsByClassName('program-container');
for (i = 1; i < elements.length + 1; i++) {
    (function(i) {
        var pc = document.getElementById("pc" + i);
        var pt = document.getElementById("pt" + i);
        var ps = document.getElementById("ps" + i);
        var w = pc.offsetWidth | 0;
        ps.style.borderRight = w + "px solid transparent";
        pc.onmouseover = pt.onmouseover = function() {
            var currHeight = pt.offsetHeight;
            if (!(currHeight >= 0.3 * pc.offsetHeight)) {
                for (var i = currHeight; i < 0.3 * pc.offsetHeight; i++) {
                    pt.style.height = i + 'px';
                    ps.style.bottom = i + 'px';
                }
            }
        }
        pc.onmouseout = pt.onmouseout = function() {
            pt.style.height = '50px';
            ps.style.bottom = '50px';
        }
    })(i);
}