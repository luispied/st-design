const color_picker_1 = document.querySelector("#color1");
const color_picker_2 = document.querySelector("#color2");
const color_picker_3 = document.querySelector("#color3");
const color_picker_4 = document.querySelector("#color4");
const color_picker_5 = document.querySelector("#color5");
const color_picker_6 = document.querySelector("#color6");
const color_picker_7 = document.querySelector("#color7");
const li_firstColor = document.querySelector("#firstColor");
const li_secondColor = document.querySelector("#secondColor");
const li_thirdColor = document.querySelector("#thirdColor");
const li_fourthColor = document.querySelector("#fourthColor");
const li_fifthColor = document.querySelector("#fifthColor");
const li_sixthColor = document.querySelector("#sixthColor");
const li_seventhColor = document.querySelector("#seventhColor");
const color_picker_wrapper_1 = document.querySelector(
  "#color-picker-wrapper_1"
);
const color_picker_wrapper_2 = document.querySelector(
  "#color-picker-wrapper_2"
);
const color_picker_wrapper_3 = document.querySelector(
  "#color-picker-wrapper_3"
);
const color_picker_wrapper_4 = document.querySelector(
  "#color-picker-wrapper_4"
);
const color_picker_wrapper_5 = document.querySelector(
  "#color-picker-wrapper_5"
);
const color_picker_wrapper_6 = document.querySelector(
  "#color-picker-wrapper_6"
);
const color_picker_wrapper_7 = document.querySelector(
  "#color-picker-wrapper_7"
);
color_picker_1.onchange = function () {
  color_picker_wrapper_1.style.backgroundColor = color_picker_1.value;
  li_firstColor.style.borderColor = color_picker_1.value;
  li_firstColor.style.boxShadow = "0px 0px 1.5vw" + color_picker_1.value;
};
color_picker_wrapper_1.style.backgroundColor = color_picker_1.value;

color_picker_2.onchange = function () {
  color_picker_wrapper_2.style.backgroundColor = color_picker_2.value;
  li_secondColor.style.borderColor = color_picker_2.value;
  li_secondColor.style.boxShadow = "0px 0px 1.5vw" + color_picker_2.value;
};
color_picker_wrapper_2.style.backgroundColor = color_picker_2.value;

color_picker_3.onchange = function () {
  color_picker_wrapper_3.style.backgroundColor = color_picker_3.value;
  li_thirdColor.style.borderColor = color_picker_3.value;
  li_thirdColor.style.boxShadow = "0px 0px 1.5vw" + color_picker_3.value;
};
color_picker_wrapper_3.style.backgroundColor = color_picker_3.value;

color_picker_4.onchange = function () {
  color_picker_wrapper_4.style.backgroundColor = color_picker_4.value;
  li_fourthColor.style.borderColor = color_picker_4.value;
  li_fourthColor.style.boxShadow = "0px 0px 1.5vw" + color_picker_4.value;
};
color_picker_wrapper_4.style.backgroundColor = color_picker_4.value;

color_picker_5.onchange = function () {
  color_picker_wrapper_5.style.backgroundColor = color_picker_5.value;
  li_fifthColor.style.borderColor = color_picker_5.value;
  li_fifthColor.style.boxShadow = "0px 0px 1.5vw" + color_picker_5.value;
};
color_picker_wrapper_5.style.backgroundColor = color_picker_5.value;

color_picker_6.onchange = function () {
  color_picker_wrapper_6.style.backgroundColor = color_picker_6.value;
  li_sixthColor.style.borderColor = color_picker_6.value;
  li_sixthColor.style.boxShadow = "0px 0px 1.5vw" + color_picker_6.value;
};
color_picker_wrapper_6.style.backgroundColor = color_picker_6.value;

color_picker_7.onchange = function () {
  color_picker_wrapper_7.style.backgroundColor = color_picker_7.value;
  li_seventhColor.style.borderColor = color_picker_7.value;
  li_seventhColor.style.boxShadow = "0px 0px 1.5vw" + color_picker_7.value;
};
color_picker_wrapper_7.style.backgroundColor = color_picker_7.value;
