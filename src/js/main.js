let form = $("#form");
let body_view = $(".form-container");
let dk_dv = $(".dangky");
let dk_selector = $(".form-title li").first();
let dn_selector = $(".form-title li").last();
let form_dn = $(".form-dangnhap-container");
let form_dk = $(".form-contenter");
let container_form = $(".form-container");
let form_nha_xuat = $(".form-dk");
let bt_huy = $("#bt-huy");

// bt(baner)
let baner_img = $(".mg-baner>img");
let bt_baner_pr = $(".bt-preview");
let bt_baner_next = $(".bt-next");

$(document).ready(function () {
  // hien bang dang nhap
  dk_dv.on("click", function () {
    form.show();
    form_nha_xuat.removeClass("form-hide");
    form_nha_xuat.addClass("show");
  });

  //an bang dang nhap
  body_view.on("click", form_hide);
  bt_huy.on("click", form_hide);
  // chon dang ky
  dk_selector.on("click", function () {
    dk_selector.addClass("form-active");
    dn_selector.removeClass("form-active");
    form_dn.hide();
    form_dk.show();
  });

  // chon danh nhap
  dn_selector.on("click", function () {
    dn_selector.addClass("form-active");
    dk_selector.removeClass("form-active");
    form_dk.hide();
    form_dn.show();
  });
  /// thay anh baner
  bt_baner_pr.on("click", show_baner_pr);
  bt_baner_next.on("click", show_baner_next);
});

/////////////// CAC HAM KHAI BAO THEM
//dang nhap xuat
function form_hide(a) {
  form_nha_xuat.removeClass("show");
  form_nha_xuat.addClass("form-hide");
  setTimeout(ab, 500);
  function ab() {
    form.hide();
  }
}
// thay doi anh baner
function show_baner_pr() {
  let number_baner = baner_img.length;
  let number;
  for (let i = 0; i < number_baner; i++) {
    if (baner_img.eq(i).attr("class") == undefined) {
      number = i;
      baner_img.eq(i).addClass("hide");
    }
  }
  if (number === 0) {
    number = number_baner - 1;
  } else {
    number--;
  }
  baner_img.eq(number).removeAttr("class");
}

function show_baner_next() {
  let number_baner = baner_img.length;
  let number;
  for (let i = 0; i < number_baner; i++) {
    if (baner_img.eq(i).attr("class") == undefined) {
      number = i;
      baner_img.eq(i).addClass("hide");
    }
  }
  if (number == number_baner - 1) {
    number = 0;
  } else {
    number++;
  }
  baner_img.eq(number).removeAttr("class");
}
