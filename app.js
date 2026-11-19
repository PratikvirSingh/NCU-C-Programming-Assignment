let questions = [];
let activeModule = "";
const $ = (s) => document.querySelector(s);
const escapeHtml = (s) => String(s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const modules = [...new Set([])];
async function init(){
  const response = await fetch("assets/questions.json");
  questions = await response.json();
  const names = [...new Set(questions.map(q=>q.module))];
  $("#totalCount").textContent = questions.length;
  names.forEach((name,i)=>{
    const option=document.createElement("option"); option.value=name; option.textContent=`Module ${i+1}`; $("#moduleFilter").append(option);
    const btn=document.createElement("button"); btn.className="module-link"; btn.dataset.module=name;
    btn.innerHTML=`<span>${escapeHtml(name.replace(/^Module \d+ — /,""))}</span><span>${questions.filter(q=>q.module===name).length}</span>`;
    btn.addEventListener("click",()=>{activeModule=activeModule===name?"":name;$("#moduleFilter").value=activeModule;syncNav();render();});
    $("#moduleNav").append(btn);
  });
  $("#searchInput").addEventListener("input",render);
  $("#moduleFilter").addEventListener("change",e=>{activeModule=e.target.value;syncNav();render();});
  $("#difficultyFilter").addEventListener("change",render);
  $("#themeToggle").addEventListener("click",()=>{document.documentElement.dataset.theme=document.documentElement.dataset.theme==="light"?"":"light";});
  document.addEventListener("keydown",e=>{if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==="k"){e.preventDefault();$("#searchInput").focus();}if(e.key==="Escape")closeModal();});
  document.querySelectorAll("[data-close]").forEach(el=>el.addEventListener("click",closeModal));
  render();
}
function syncNav(){document.querySelectorAll(".module-link").forEach(b=>b.classList.toggle("active",b.dataset.module===activeModule));}
function render(){
  const term=$("#searchInput").value.toLowerCase().trim(), mod=$("#moduleFilter").value, diff=$("#difficultyFilter").value;
  const filtered=questions.filter(q=>(!mod||q.module===mod)&&(!diff||q.difficulty===diff)&&(!term||[q.title,q.module,q.statement,q.platform,q.note].join(" ").toLowerCase().includes(term)));
  $("#resultCount").textContent=`${filtered.length} ${filtered.length===1?"problem":"problems"}`;
  $("#emptyState").hidden=filtered.length!==0;
  $("#questionGrid").innerHTML=filtered.map(q=>`<article class="q-card" data-id="${q.id}" tabindex="0" role="button" aria-label="Open ${escapeHtml(q.title)}"><div class="q-meta"><span class="tag">${escapeHtml(q.platform)}</span><span class="difficulty">${escapeHtml(q.difficulty)}</span></div><h3>${escapeHtml(q.title)}</h3><p>${escapeHtml(q.statement)}</p><div class="q-bottom"><span>${escapeHtml(q.module.replace(/^Module \d+ — /,"").toUpperCase())}</span><b>↗</b></div></article>`).join("");
  document.querySelectorAll(".q-card").forEach(card=>{const open=()=>showQuestion(card.dataset.id);card.addEventListener("click",open);card.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();open();}});});
}
function showQuestion(id){
  const q=questions.find(x=>x.id===id); if(!q)return;
  $("#modalContent").innerHTML=`<div class="modal-kicker">${escapeHtml(q.module)} · ${escapeHtml(q.platform)} · ${escapeHtml(q.difficulty)}</div><h2 class="modal-title">${escapeHtml(q.title)}</h2><p class="modal-desc">${escapeHtml(q.statement)}</p><div class="modal-actions"><button class="small-btn primary" id="copyCode">Copy C solution</button><button class="small-btn" id="downloadCode">Download .c file</button></div><div class="code-wrap"><pre><code>${escapeHtml(q.code)}</code></pre></div>${q.sampleInput||q.sampleOutput?`<div class="sample-grid"><div class="sample"><b>SAMPLE INPUT</b><pre>${escapeHtml(q.sampleInput.replace(/\\n/g,"\n"))}</pre></div><div class="sample"><b>SAMPLE OUTPUT</b><pre>${escapeHtml(q.sampleOutput.replace(/\\n/g,"\n"))}</pre></div></div>`:""}${q.note?`<div class="logic-note"><b>Implementation note</b><br>${escapeHtml(q.note)}</div>`:""}`;
  $("#copyCode").addEventListener("click",async()=>{await navigator.clipboard.writeText(q.code);$("#copyCode").textContent="Copied ✓";});
  $("#downloadCode").addEventListener("click",()=>{const blob=new Blob([q.code+"\n"],{type:"text/x-c"});const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download=q.title.toLowerCase().replace(/[^a-z0-9]+/g,"_")+".c";a.click();URL.revokeObjectURL(a.href);});
  $("#modal").classList.add("open");$("#modal").setAttribute("aria-hidden","false");document.body.style.overflow="hidden";
}
function closeModal(){$("#modal").classList.remove("open");$("#modal").setAttribute("aria-hidden","true");document.body.style.overflow="";}
init().catch(err=>{console.error(err);$("#questionGrid").innerHTML="<p>Could not load the question bank. Please run this site through a local web server or GitHub Pages.</p>";});
