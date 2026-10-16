const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict'),cp=require('node:child_process');
const original=cp.execFileSync('git',['show','0be3a5eeb3c9fe4d8ac8edd6875e76a5f99d8134:index.html'],{encoding:'utf8'});
const context={};vm.createContext(context);vm.runInContext(fs.readFileSync('trip-data.js','utf8')+';globalThis.trip={DATA,POIS}',context);
for(const name of ['DATA','POIS']){const baseline=JSON.parse(original.match(new RegExp('const '+name+'=(\\[.*?\\]);','s'))[1]);assert.deepEqual(JSON.parse(JSON.stringify(context.trip[name])),baseline,name+' must remain verbatim');}
assert.equal(context.trip.DATA.length,42);assert.equal(context.trip.POIS.length,111);assert.equal(context.trip.DATA[0].place,'Christchurch');
context.trip.DATA.forEach((d,i)=>{assert.equal(d.id,i+1);const [day,month]=d.date.split('/').map(Number);assert.equal(new Date(Date.UTC(2027,month-1,day)).getTime(),Date.UTC(2027,0,8+i));});
console.log('PASS: original 42 days and 111 POIs unchanged; Christchurch first; dates continuous from 8 January to 18 February 2027.');
