let modal=document.getElementById("Modal"),btn=document.getElementById("order"),span=document.getElementsByClassName("close")[0];btn.onclick=function(){modal.style.display="block",buildForm()},span.onclick=function(){modal.style.display="none"},window.onclick=function(e){e.target==modal&&(modal.style.display="none")};const buildForm=()=>{const e=document.querySelector("#order-form");e.innerHTML="";const t=document.createElement("h2");t.innerText="Información del pedido",e.append(t);const r=document.createElement("span"),o=document.querySelector("input[name='rainbow-color-number']:checked");r.setAttribute("id","colorsCount"),r.setAttribute("name","cantidad"),r.innerHTML="Usted seleccionó <strong>"+o.value+"</strong> colores",e.append(r);let n=document.createElement("div"),c="";n.setAttribute("class","colors__wrapper");const a=document.createElement("input");a.setAttribute("type","text"),a.setAttribute("class","color-picker-wrapper");c=document.querySelector("#color1").dataset.currentColor,a.style.backgroundColor=c,a.setAttribute("name",`color_1:${c}`),n.append(a);const l=document.createElement("input");l.setAttribute("type","text"),l.setAttribute("class","color-picker-wrapper"),l.setAttribute("name","color_2");c=document.querySelector("#color2").dataset.currentColor,l.style.backgroundColor=c,l.setAttribute("name",`color_2:${c}`),n.append(l);const u=document.createElement("input");u.setAttribute("type","text"),u.setAttribute("class","color-picker-wrapper"),u.setAttribute("name","color_3");c=document.querySelector("#color3").dataset.currentColor,u.style.backgroundColor=c,u.setAttribute("name",`color_3:${c}`),n.append(u);const i=document.createElement("input");i.setAttribute("type","text"),i.setAttribute("class","color-picker-wrapper"),i.setAttribute("name","color_4");c=document.querySelector("#color4").dataset.currentColor,i.style.backgroundColor=c,i.setAttribute("name",`color_4:${c}`),n.append(i);const s=document.createElement("input");s.setAttribute("type","text"),s.setAttribute("class","color-picker-wrapper"),s.setAttribute("name","color_5");if(c=document.querySelector("#color5").dataset.currentColor,s.style.backgroundColor=c,s.setAttribute("name",`color_5:${c}`),n.append(s),o.value>=6){const e=document.createElement("input");e.setAttribute("type","text"),e.setAttribute("class","color-picker-wrapper"),e.setAttribute("name","color_6");if(c=document.querySelector("#color6").dataset.currentColor,e.style.backgroundColor=c,e.setAttribute("name",`color_6:${c}`),n.append(e),7==o.value){const e=document.createElement("input");e.setAttribute("type","text"),e.setAttribute("class","color-picker-wrapper"),e.setAttribute("name","color_7");c=document.querySelector("#color7").dataset.currentColor,e.style.backgroundColor=c,e.setAttribute("name",`color_7:${c}`),n.append(e)}}e.append(n);let d=document.createElement("span");d.setAttribute("for","rainbowName"),d.innerText="Nombre en el arcoiris",e.append(d);let m=document.createElement("input");m.setAttribute("type","text"),m.setAttribute("id","rainbowName"),m.setAttribute("name","nombre"),m.setAttribute("placeholder","ingrese nombre para el arcoiris"),m.required=!0,e.append(m),d=document.createElement("span"),d.setAttribute("for","contactName"),d.innerText="Nombre contacto",e.append(d),m=document.createElement("input"),m.setAttribute("type","text"),m.setAttribute("id","contactName"),m.setAttribute("name","contacto"),m.setAttribute("placeholder","ingrese su nombre"),m.required=!0,e.append(m),d=document.createElement("span"),d.setAttribute("for","contactPhone"),d.innerText="Celular contacto",e.append(d),m=document.createElement("input"),m.setAttribute("type","number"),m.setAttribute("id","contactPhone"),m.setAttribute("name","celular"),m.setAttribute("placeholder","ingrese su celular"),m.required=!0,e.append(m),d=document.createElement("span"),d.setAttribute("for","contactEmail"),d.innerText="Correo contacto",e.append(d),m=document.createElement("input"),m.setAttribute("type","email"),m.setAttribute("id","contactEmail"),m.setAttribute("name","email"),m.setAttribute("placeholder","ingrese su correo"),m.required=!0,e.append(m),d=document.createElement("span"),e.append(d),p=document.createElement("p"),p.setAttribute("name","precio"),p.setAttribute("id","price");let b=calcRainbowPrice(o.value);p.innerText=`$ ${b}`,e.append(p);const A=document.createElement("button");A.setAttribute("id","modal-form-button"),A.setAttribute("class","btn"),A.innerText="Comprar",e.append(A),p=document.createElement("p"),p.setAttribute("id","order-form-status"),e.append(p)},calcRainbowPrice=e=>6==e?950:7==e?1100:850;