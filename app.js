const WB_SEARCH='https://www.wildberries.ru/catalog/0/search.aspx?search=';
const products=[
 {id:'lavender',cat:'lavender',name:'Соляной скраб Lavender',desc:'Расслабляющий аромат лаванды и мягкое отшелушивание.',img:'assets/lavender-stool.jpg',tag:'Хит',wb:'https://www.wildberries.ru/catalog/893446402/detail.aspx?size=1350033139'},
 {id:'berries',cat:'berry',name:'Соляной скраб Лесные ягоды',desc:'Яркий ягодный аромат и насыщенная текстура.',img:'assets/berries.jpg',tag:'Бестселлер',wb:WB_SEARCH+encodeURIComponent('APOLINA FOR BODY Лесные ягоды')},
 {id:'coconut',cat:'coconut',name:'Сахарный скраб Кокос',desc:'Нежная сахарная текстура и тёплый кокосовый аромат.',img:'assets/coconut.jpg',tag:'',wb:WB_SEARCH+encodeURIComponent('APOLINA FOR BODY Кокос скраб')},
 {id:'menthol',cat:'menthol',name:'Скраб Menthol',desc:'Охлаждающая свежесть и бодрящее ощущение после душа.',img:'assets/menthol.jpg',tag:'Свежесть',wb:WB_SEARCH+encodeURIComponent('APOLINA FOR BODY Menthol скраб')},
 {id:'kaolin',cat:'kaolin',name:'Скраб Kaolin',desc:'Минеральная текстура каолина для домашнего ритуала ухода.',img:'assets/kaolin.jpg',tag:'',wb:WB_SEARCH+encodeURIComponent('APOLINA FOR BODY Kaolin скраб')},
 {id:'lavset',cat:'lavender',name:'Коллекция Lavender',desc:'Ароматная серия для расслабляющего SPA-ритуала.',img:'assets/lavender-set.jpg',tag:'Набор',wb:WB_SEARCH+encodeURIComponent('APOLINA FOR BODY Lavender набор')},
 {id:'bathset',cat:'bath',name:'Набор для ванны',desc:'Соль, жемчуг и шиммер — готовый сценарий для вечера.',img:'assets/bath-products.jpg',tag:'Подарок',wb:WB_SEARCH+encodeURIComponent('APOLINA FOR BODY для ванны')},
 {id:'berries2',cat:'berry',name:'Лесные ягоды — SPA-ритуал',desc:'Ароматный уход с яркой ягодной текстурой.',img:'assets/berries-bath.jpg',tag:'',wb:WB_SEARCH+encodeURIComponent('APOLINA FOR BODY Лесные ягоды')}
];
const grid=document.getElementById('productGrid');
const dlg=document.getElementById('quickView');
const quick=document.getElementById('quickContent');
function productCard(p){return `<article class="card" data-cat="${p.cat}">
  <button class="imageButton" data-quick="${p.id}" aria-label="Подробнее о ${p.name}"><img src="${p.img}" alt="${p.name}" loading="lazy"></button>
  <div class="cardBody">${p.tag?`<span class="tag">${p.tag}</span>`:''}<h3>${p.name}</h3><p>${p.desc}</p><div class="cardActions"><button class="more" data-quick="${p.id}">Подробнее</button><a class="btn primary" href="${p.wb}" target="_blank" rel="noopener">Купить на WB</a></div></div></article>`}
function render(filter='all'){grid.innerHTML=products.filter(p=>filter==='all'||p.cat===filter).map(productCard).join('');}
render();
document.querySelectorAll('.filter').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('.filter').forEach(x=>x.classList.remove('active'));b.classList.add('active');render(b.dataset.filter);}));
grid.addEventListener('click',e=>{const btn=e.target.closest('[data-quick]');if(!btn)return;const p=products.find(x=>x.id===btn.dataset.quick);if(!p)return;quick.innerHTML=`<img src="${p.img}" alt="${p.name}"><div><p class="eyebrow">APOLINA FOR BODY</p><h2>${p.name}</h2><p>${p.desc}</p><a class="btn primary full" href="${p.wb}" target="_blank" rel="noopener">Купить на Wildberries</a></div>`;dlg.showModal();});
document.getElementById('closeQuick')?.addEventListener('click',()=>dlg.close());
dlg?.addEventListener('click',e=>{if(e.target===dlg)dlg.close();});
const btn=document.getElementById('menuBtn'),nav=document.getElementById('nav');
btn?.addEventListener('click',()=>{const open=nav.classList.toggle('open');btn.setAttribute('aria-expanded',String(open));});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
if('serviceWorker' in navigator){window.addEventListener('load',()=>navigator.serviceWorker.register('sw.js').catch(()=>{}));}
