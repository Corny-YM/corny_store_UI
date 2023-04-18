// SECTION
const heart_icons = take_all('.products_list .item_detail .icon');
const filter_item = take_one('#section .overview_product .filter_item')
const products_sort = take_one('#section .overview_product .products_sort')

// overlay
const overlay_quick_view = take_all('.overlay_quick_view');
const close_quick_view = take_all('.close_quick_view')
const open_quick_view = take_all('.products_list-item .item_img .btn');

// overlay
open_quick_view.forEach(function(e, index) {
    e.addEventListener('click', function() {
        if(overlay_quick_view[index]) {
            overlay_quick_view[index].classList.toggle('active')
        }
    })
})
close_quick_view.forEach(function(btn, index) {
    btn.addEventListener('click', function(e) {
        if(overlay_quick_view[index]) {
            // Ngăn sự kiện nổi bọt
            e.stopPropagation();
            overlay_quick_view[index].classList.toggle('active')
        }
    })
})
overlay_quick_view.forEach(function(overlay) {
    overlay.addEventListener('click', function(e) {
        console.log(overlay);
        if(e.currentTarget == e.target) {
            overlay.classList.toggle('active');
        }
    })
})

// ================HANDLE SECTION===============
heart_icons.forEach(function(e) {
    e.addEventListener('click', function() {
        e.classList.toggle('active');
    })
})

filter_item.addEventListener('click', function() {
    filter_item.classList.toggle('active')
    products_sort.classList.toggle('active')
})

