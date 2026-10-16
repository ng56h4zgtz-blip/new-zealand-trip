'use strict';
const $ = id => document.getElementById(id);
const esc = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const KEY = 'nz-family-trip-progress-v1';
const photos = {
  "Christchurch": {
    "src": "assets/christchurch.jpg",
    "alt": "Avon River et Bridge of Remembrance, Christchurch"
  },
  "Akaroa": {
    "src": "assets/akaroa.jpg",
    "alt": "Le port d’Akaroa"
  },
  "Mount Cook": {
    "src": "assets/mount-cook.jpg",
    "alt": "Aoraki / Mount Cook et les lacs glaciaires"
  },
  "Dunedin": {
    "src": "assets/dunedin.jpg",
    "alt": "La côte de Dunedin"
  },
  "Te Anau": {
    "src": "assets/te-anau.jpg",
    "alt": "Le lac Te Anau"
  },
  "Queenstown": {
    "src": "assets/queenstown.jpg",
    "alt": "Le lac Wakatipu, région de Queenstown"
  },
  "Glenorchy": {
    "src": "assets/glenorchy.jpg",
    "alt": "Paysage de Glenorchy"
  },
  "Wanaka": {
    "src": "assets/wanaka.jpg",
    "alt": "Un arbre dans le lac Wanaka"
  },
  "Haast": {
    "src": "assets/haast.jpg",
    "alt": "La vallée de Haast"
  },
  "Fox Glacier": {
    "src": "assets/fox-glacier.jpg",
    "alt": "Fox Glacier vu depuis la forêt"
  },
  "Hokitika": {
    "src": "assets/hokitika.jpg",
    "alt": "Hokitika Gorge"
  },
  "Westport": {
    "src": "assets/westport.jpg",
    "alt": "Le littoral de Westport"
  },
  "Marahau": {
    "src": "assets/abel-tasman.jpg",
    "alt": "Une plage du parc Abel Tasman"
  },
  "Kaiteriteri": {
    "src": "assets/kaiteriteri.jpg",
    "alt": "La plage de Kaiteriteri"
  },
  "Picton": {
    "src": "assets/picton.jpg",
    "alt": "Les baies près de Picton"
  },
  "Wellington": {
    "src": "assets/wellington.jpg",
    "alt": "Wellington Harbour"
  },
  "New Plymouth": {
    "src": "assets/new-plymouth.jpg",
    "alt": "Le littoral de New Plymouth"
  },
  "Waitomo": {
    "src": "assets/waitomo.jpg",
    "alt": "Vers luisants dans les grottes de Waitomo"
  },
  "Whakapapa": {
    "src": "assets/tongariro.jpg",
    "alt": "Les Emerald Lakes, parc Tongariro"
  },
  "Taupo": {
    "src": "assets/taupo.jpg",
    "alt": "Sculptures māories au lac Taupo — photographie de la région"
  },
  "Rotorua": {
    "src": "assets/rotorua.jpg",
    "alt": "Paysage géothermique de Rotorua"
  },
  "Waiomu": {
    "src": "assets/coromandel.jpg",
    "alt": "Le littoral de la péninsule de Coromandel"
  },
  "Whangarei": {
    "src": "assets/whangarei.jpg",
    "alt": "Le littoral de Whangarei Heads"
  },
  "Paihia": {
    "src": "assets/paihia.jpg",
    "alt": "Haruru Falls, région de Paihia"
  },
  "Auckland": {
    "src": "assets/auckland.jpg",
    "alt": "Le port d’Auckland et la Sky Tower"
  }
};
let state = {}, selected = null, map = null, routeLayer = null, poiLayer = null, atlasTiles = null;
const dayMaps = new Map();
const categories = {nature:'Nature & panorama',hike:'Randonnée',activity:'Activité',culture:'Culture',wildlife:'Faune',food:'Gastronomie',stop:'Ville / arrêt'};
const colors = {nature:'#3d8263',hike:'#a46633',activity:'#4975b9',culture:'#9964a6',wildlife:'#b07a28',food:'#d45b59',stop:'#75848b'};
const locationUrl = name => 'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(name+', New Zealand');
function routeUrl(d){const prev=DATA[d.id-2];return 'https://www.google.com/maps/dir/?api=1&origin='+encodeURIComponent(prev.place+', New Zealand')+'&destination='+encodeURIComponent(d.place+', New Zealand')+'&travelmode=driving';}
function date2027(d){const [day,month]=d.date.split('/').map(Number);return new Intl.DateTimeFormat('fr-FR',{weekday:'short',day:'numeric',month:'short',year:'numeric',timeZone:'UTC'}).format(new Date(Date.UTC(2027,month-1,day)));}
function validState(x){if(!x||typeof x!=='object'||Array.isArray(x))return {};const clean={};for(const d of DATA){if(!x[d.id]||typeof x[d.id]!=='object')continue;clean[d.id]={};for(const k of ['day','main','option','overnight'])clean[d.id][k]=x[d.id][k]===true;}return clean;}
try{state=validState(JSON.parse(localStorage.getItem(KEY)||'{}'));}catch{}
function save(){try{localStorage.setItem(KEY,JSON.stringify(state));$('save-status').textContent='Progression enregistrée sur cet appareil';}catch{$('save-status').textContent='Enregistrement indisponible : exportez votre progression.';}updateProgress();}
function updateProgress(){const done=DATA.filter(d=>state[d.id]?.day).length;$('progresslabel').textContent=done+' / 42 jours';$('progressfill').style.width=(done/42*100)+'%';document.querySelector('.progressrail').setAttribute('aria-valuenow',String(done));for(const el of document.querySelectorAll('.day')){const s=state[el.dataset.day]||{};el.classList.toggle('done',!!s.day);for(const input of el.querySelectorAll('[data-track]'))input.checked=!!s[input.dataset.track];}}
function filteredDays(){const term=$('search').value.trim().toLocaleLowerCase('fr');return DATA.filter(d=>(!term||Object.values(d).join(' ').toLocaleLowerCase('fr').includes(term)||POIS.some(p=>p.day===d.id&&p.name.toLocaleLowerCase('fr').includes(term)))&&($('region').value==='all'||d.island===$('region').value)&&(!$('options').checked||/réserv|option|possible|selon|alternative/i.test(d.option+' '+d.sleep)));}
function render(){for(const rec of dayMaps.values())rec.map.remove();dayMaps.clear();const days=filteredDays();$('days').innerHTML=days.map(d=>{const photo=photos[d.place],n=String(d.id).padStart(2,'0');return `<article class="day" id="day${d.id}" data-day="${d.id}"><button class="dayhead" id="toggle-${d.id}" aria-controls="body-${d.id}" aria-expanded="false" data-open="${d.id}">${photo?`<img class="day-photo" src="${photo.src}" alt="${esc(photo.alt)}" loading="lazy" width="150" height="160">`:`<span class="day-photo placeholder" aria-hidden="true">${n}</span>`}<span><span class="date">JOUR ${n} · ${esc(date2027(d))}</span><span class="place">${esc(d.place)}</span><span class="summary">${esc(d.summary)}</span><span class="meta"><span>${d.island==='Sud'?'Île du Sud':'Île du Nord'}</span><span>${d.id===22?'Traversée en ferry':d.km>0?'≈ '+d.km+' km · indicatif':'Journée sur place'}</span></span></span><span class="chevron" aria-hidden="true">+</span></button><div class="daybody" id="body-${d.id}" role="region" aria-labelledby="toggle-${d.id}" hidden></div></article>`;}).join('');$('dayCount').textContent=days.length+' JOURNÉE'+(days.length>1?'S':'');$('empty').hidden=days.length!==0;for(const btn of document.querySelectorAll('[data-open]'))btn.addEventListener('click',()=>selectDay(Number(btn.dataset.open)));const id=selected;selected=null;if(id&&days.some(d=>d.id===id))selectDay(id,{scroll:false});updateProgress();refreshAtlas();}
function bodyHtml(d){const pois=POIS.filter(p=>p.day===d.id);return `<div class="section">Programme principal</div><div class="detail">${esc(d.main)}</div><div class="alternative"><div class="section">Options et alternatives</div><div class="detail">${esc(d.option)}</div></div><div class="overnight"><span>NUIT / ÉTAPE</span><div>${esc(d.sleep)}</div></div><section class="poi-section" aria-label="Points d’intérêt de la journée"><div class="section">${pois.length} point${pois.length===1?'':'s'} d’intérêt · cette journée</div>${pois.length?`<div class="poi-list">${pois.map(p=>`<button class="poi-item ${p.status==='optional'?'optional':''}" data-poi="${POIS.indexOf(p)}"><span>${esc(p.name)}<small>${p.status==='optional'?'Alternative':'Programme principal'} · ${esc(categories[p.category])}</small></span><span aria-hidden="true">↗</span></button>`).join('')}</div>`:'<p class="map-caption">Aucun POI distinct répertorié pour cette journée dans le carnet.</p>'}</section><div class="section">La carte du jour</div><div class="daymap" id="daymap-${d.id}" aria-label="Carte interactive du jour ${d.id}"></div><p class="map-caption">● Programme principal · ◇ Alternatives. Positions approximatives ; vérifiez les accès et détours.</p><div class="links"><a href="${locationUrl(d.place)}" target="_blank" rel="noopener">Voir ${esc(d.place)} ↗</a>${d.id===22?`<a href="${locationUrl('Picton Wellington ferry')}" target="_blank" rel="noopener">Traversée Picton → Wellington ↗</a>`:d.id>1&&d.km>0?`<a href="${routeUrl(d)}" target="_blank" rel="noopener">Itinéraire Google Maps ↗</a>`:''}</div><div class="section">Rythme et repos · conseil ajouté</div><div class="detail">${/7–9 h|8 h, difficile|9 h, difficile|6 h 45|5 h 30, difficile/.test(d.main+' '+d.option)?'Grosse journée physique : prévoir des pauses, de l’eau, une marge météo et une activité allégée le lendemain.':'Prévoir des pauses libres et ajuster les visites au temps de route et à la fatigue du groupe.'}</div><div class="trackactions">${[['day','Journée terminée'],['main','Programme principal terminé'],['option','Options terminées'],['overnight','Nuit / étape terminée']].map(([k,t])=>`<label><input type="checkbox" data-track="${k}">${t}</label>`).join('')}</div><p class="map-caption">Source : carnet familial, page ${d.page}.</p>`;}
function selectDay(id,{scroll=true}={}){let el=$('day'+id);if(!el){$('search').value='';$('region').value='all';$('options').checked=false;selected=null;render();el=$('day'+id);}if(!el)return;const close=selected===id;for(const active of document.querySelectorAll('.day.active')){active.classList.remove('active');active.querySelector('.dayhead').setAttribute('aria-expanded','false');active.querySelector('.daybody').hidden=true;}selected=close?null:id;if(close){refreshAtlas();return;}el.classList.add('active');el.querySelector('.dayhead').setAttribute('aria-expanded','true');const body=el.querySelector('.daybody');body.hidden=false;const d=DATA.find(d=>d.id===id);if(!body.hasChildNodes()){body.innerHTML=bodyHtml(d);for(const input of body.querySelectorAll('[data-track]'))input.addEventListener('change',()=>{state[id]??={};state[id][input.dataset.track]=input.checked;save();});for(const btn of body.querySelectorAll('[data-poi]'))btn.addEventListener('click',()=>focusPoi(Number(btn.dataset.poi)));}ensureDayMap(d);updateProgress();refreshAtlas();if(scroll)el.scrollIntoView({block:'start',behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});}
function tiles(m){L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',{attribution:'Tiles © Esri · Sources: Esri, Maxar, Earthstar Geographics',maxZoom:18}).addTo(m);}
function setAtlasStyle(satellite){if(!map)return;if(atlasTiles)map.removeLayer(atlasTiles);atlasTiles=L.tileLayer(satellite?'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}':'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{attribution:satellite?'Tiles © Esri · Sources: Esri, Maxar, Earthstar Geographics':'© OpenStreetMap contributors',maxZoom:satellite?18:18}).addTo(map);$('mapPlan').setAttribute('aria-pressed',String(!satellite));$('mapSatellite').setAttribute('aria-pressed',String(satellite));}
function poiPopup(p){return `<b>${esc(p.name)}</b><br>${p.status==='optional'?'Alternative':'Programme principal'} · Jour ${p.day}<br><a target="_blank" rel="noopener" href="${locationUrl(p.name)}">Ouvrir Google Maps ↗</a>`;}
function ensureDayMap(d){const host=$('daymap-'+d.id);if(!window.L){host.innerHTML='<div class="map-status">La carte ne peut pas se charger. Le programme reste disponible ; utilisez les liens Google Maps ci-dessous.</div>';return;}if(dayMaps.has(d.id)){requestAnimationFrame(()=>dayMaps.get(d.id).map.invalidateSize());return;}const m=L.map(host,{scrollWheelZoom:false}).setView([d.lat,d.lng],10);tiles(m);const base=L.circleMarker([d.lat,d.lng],{radius:9,color:'#fff',weight:2,fillColor:'#173d38',fillOpacity:1}).addTo(m).bindPopup(esc(d.place));const markers=new Map();POIS.forEach((p,i)=>{if(p.day!==d.id)return;const pin=L.circleMarker([p.lat,p.lng],{radius:7,color:'#fff',weight:2,fillColor:p.status==='optional'?'#b78c48':'#3d8263',fillOpacity:1}).addTo(m).bindPopup(poiPopup(p));markers.set(i,pin);});const pins=[base,...markers.values()];if(pins.length>1)m.fitBounds(L.featureGroup(pins).getBounds().pad(.2),{maxZoom:12});dayMaps.set(d.id,{map:m,markers});requestAnimationFrame(()=>m.invalidateSize());}
function focusPoi(index){const p=POIS[index],rec=dayMaps.get(p.day);if(rec){rec.map.setView([p.lat,p.lng],12);rec.markers.get(index)?.openPopup();$('daymap-'+p.day).scrollIntoView({block:'center',behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});}else window.open(locationUrl(p.name),'_blank','noopener');}
function filteredPois(){const ids=new Set(filteredDays().map(d=>d.id));return POIS.filter(p=>ids.has(p.day)&&($('poiCat').value==='all'||p.category===$('poiCat').value)&&($('poiOptional').checked||p.status==='main'));}
function refreshAtlas(){const pois=filteredPois();$('poiCount').textContent=pois.length+' / 111 POIs';if(!map)return;if(routeLayer)map.removeLayer(routeLayer);if(poiLayer)map.removeLayer(poiLayer);routeLayer=L.layerGroup().addTo(map);poiLayer=L.layerGroup().addTo(map);const days=filteredDays();if(days.length)L.polyline(days.map(d=>[d.lat,d.lng]),{color:'#4e7e6c',weight:2,opacity:.6,dashArray:'5 7'}).addTo(routeLayer);for(const d of days){const m=L.circleMarker([d.lat,d.lng],{radius:selected===d.id?10:6,color:'#fff',weight:2,fillColor:d.island==='Sud'?'#276d59':'#b67b4d',fillOpacity:1}).addTo(routeLayer).bindTooltip(`Jour ${d.id} · ${esc(d.place)}`);m.on('click',()=>selectDay(d.id));}if($('poiShow').checked)for(const p of pois)L.circleMarker([p.lat,p.lng],{radius:4,color:'#fff',weight:1,fillColor:colors[p.category],fillOpacity:.9}).bindPopup(poiPopup(p)).addTo(poiLayer);if(selected){const d=DATA.find(d=>d.id===selected);map.setView([d.lat,d.lng],9);$('map-caption').textContent='Jour '+d.id+' · '+d.place+' · '+date2027(d);}else{$('map-caption').textContent='Les étapes, dans l’ordre du carnet familial.';if(days.length)map.fitBounds(L.latLngBounds(days.map(d=>[d.lat,d.lng])).pad(.13),{maxZoom:9});}}
function init(){if(window.L){map=L.map('map',{scrollWheelZoom:false}).setView([-41.1,173.2],5);setAtlasStyle(true);}else $('map').innerHTML='<p class="map-status">Carte indisponible. Les programmes et les liens Google Maps restent disponibles dans chaque journée.</p>';document.querySelector('nav a[href="#atlas"]').addEventListener('click',e=>{if(!matchMedia('(max-width: 760px)').matches)return;e.preventDefault();if(!selected){const first=filteredDays()[0];if(!first)return;selectDay(first.id,{scroll:false});}const target=$('daymap-'+selected);if(target)target.scrollIntoView({block:'center',behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});});$('mapPlan').addEventListener('click',()=>setAtlasStyle(false));$('mapSatellite').addEventListener('click',()=>setAtlasStyle(true));for(const id of ['search','region','options'])$(id).addEventListener(id==='search'?'input':'change',render);for(const id of ['poiShow','poiCat','poiOptional'])$(id).addEventListener('change',refreshAtlas);$('overview').addEventListener('click',()=>{if(selected)selectDay(selected,{scroll:false});else refreshAtlas();});$('resetFilters').addEventListener('click',()=>{$('search').value='';$('region').value='all';$('options').checked=false;render();});$('print').addEventListener('click',()=>{for(const d of filteredDays()){const b=$('body-'+d.id);if(!b.hasChildNodes())b.innerHTML=bodyHtml(d);}window.print();});window.addEventListener('afterprint',()=>render());$('exportProgress').addEventListener('click',()=>{const blob=new Blob([JSON.stringify({format:KEY,savedAt:new Date().toISOString(),progress:state},null,2)],{type:'application/json'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download='nz-family-progress.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);});$('importProgress').addEventListener('click',()=>$('progressFile').click());$('progressFile').addEventListener('change',async e=>{const fileInput=e.target,file=fileInput.files[0];if(!file)return;try{const data=JSON.parse(await file.text());if(data.format!==KEY||!data.progress||typeof data.progress!=='object'||Array.isArray(data.progress))throw Error();state=validState(data.progress);save();$('save-status').textContent='Progression importée et enregistrée.';}catch{$('save-status').textContent='Fichier invalide. Votre progression est conservée.';}fileInput.value='';});render();const hash=location.hash.match(/^#day(\d+)$/);if(hash&&DATA.some(d=>d.id===Number(hash[1])))selectDay(Number(hash[1]));}
document.addEventListener('DOMContentLoaded',init);
