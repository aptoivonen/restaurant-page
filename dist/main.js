(()=>{"use strict";function t(t,e,n){if(!t)return null;const a=document.createElement(t);return e&&(a.className=e),n&&(a.textContent=n),a}function e({imgSource:e,imgAlt:n,title:a,text:i}){const s=t("div","card"),d=t("img");d.src=e,d.alt=n,s.appendChild(d);const o=t("div","body");s.appendChild(o);const c=t("h2",null,a);o.appendChild(c);const r=t("p",null,i);return o.appendChild(r),s}const n=function(){const n=t("main"),a=t("div","container");n.appendChild(a);const i=t("div","tabs-buttons");a.appendChild(i);const s=t("button","tab-button tab-button-active","Menu");s.setAttribute("data-index","0"),i.appendChild(s);const d=t("button","tab-button","Contact");d.setAttribute("data-index","1"),i.appendChild(d);const o=t("div","tabs-sections");return a.appendChild(o),o.appendChild(function(){const n=t("section","tab-section tab-section-active");n.setAttribute("data-index","0");const a=t("div","cards");return n.appendChild(a),a.appendChild(e({imgSource:"first-course.jpg",imgAlt:"First course",title:"Appetizing Clams and Zuccini",text:"This delicious first course prepares your palette for the main course. It includes clams from the Pacific and fresh zuccini."})),a.appendChild(e({imgSource:"soup.jpg",imgAlt:"Soup",title:"Baltic Zander Soup",text:"Zander straight from the Baltic in a spicy soup takes you back 15th-century Baltic piracy era."})),a.appendChild(e({imgSource:"dessert.jpg",imgAlt:"Dessert",title:"Pancakes with Bilberries and Sirup",text:"Pancakes served with ginger sirup, bilberries, and banana slices."})),n}()),o.appendChild(function(){const e=t("section","tab-section");e.setAttribute("data-index","1");const n=t("div","panel");e.appendChild(n);const a=t("h2",null,"My Sea Food Restautant");n.appendChild(a);const i=t("p",null,"Telephone: 555-555 555");n.appendChild(i);const s=t("address",null,"Address: Milton Road 67, Miami, FL");return n.appendChild(s),e}()),n};!function(){const e=document.getElementById("content");e.appendChild(function(){const e=t("header"),n=t("h1",null,"My Sea Food Restaurant");e.appendChild(n);const a=t("div","container");e.appendChild(a);const i=t("div","panel");a.appendChild(i);const s=t("p",null,"My restaurant offers a wide variaty of sea food for every mouth.");i.appendChild(s);const d=t("a","call-to-action","Grab your bite!");return d.href="#main",i.appendChild(d),e}()),e.appendChild(n())}();const a=document.querySelector(".tabs-buttons"),i="tab-button-active",s=document.querySelectorAll(".tab-section"),d="tab-section-active";a.addEventListener("click",(function(t){var e;t.target.classList.contains("tab-button")&&(a.querySelectorAll(".tab-button").forEach((t=>t.classList.remove(i))),s.forEach((t=>t.classList.remove(d))),e=parseInt(t.target.dataset.index,10),a.querySelectorAll(".tab-button")[e].classList.add(i),s[e].classList.add(d))}))})();