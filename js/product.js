/**
 * Product page — thumbnail switcher
 */
(function () {
    var mainImg = document.getElementById('product-main-img');
    var thumbs = document.querySelectorAll('.product-gallery-thumbs .thumb');

    thumbs.forEach(function (thumb) {
        thumb.addEventListener('click', function () {
            var src = this.getAttribute('data-src');
            if (src && mainImg) {
                mainImg.src = src;
                mainImg.alt = mainImg.alt || 'Product image';
            }
            thumbs.forEach(function (t) {
                t.classList.remove('active');
                t.setAttribute('aria-pressed', 'false');
            });
            this.classList.add('active');
            this.setAttribute('aria-pressed', 'true');
        });
    });
})();
