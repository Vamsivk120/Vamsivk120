const music = document.getElementById('bgMusic');
const musicBtn = document.getElementById('musicBtn');

function toggleMusic() {
  if(music.paused) {
    music.play();
    musicBtn.innerHTML = '🔊';
    musicBtn.classList.add('playing');
  } else {
    music.pause();
    musicBtn.innerHTML = '🎵';
    musicBtn.classList.remove('playing');
  }
}

musicBtn.addEventListener('click', toggleMusic);

function createAnimations() {
  const container = document.getElementById('animations-container');
  
  // 30 Baby Pink Petals
  for(let i=0;i<30;i++){
    let p=document.createElement('div');
    p.className='petal';
    p.style.left=Math.random()*100+'%';
    p.style.animationDelay=Math.random()*8+'s';
    p.style.animationDuration=(8 + Math.random()*4)+'s';
    container.appendChild(p);
  }
  
  // 15 Flowers 🌸
  for(let i=0;i<15;i++){
    let f=document.createElement('div');
    f.className='flower';
    f.innerHTML='🌸';
    f.style.left=Math.random()*100+'%';
    f.style.animationDelay=Math.random()*10+'s';
    f.style.animationDuration=(10 + Math.random()*5)+'s';
    container.appendChild(f);
  }
}

function openInvite(){ 
  let burst = document.createElement('div');
  burst.style.cssText = 'position:fixed;top:50%;left:50%;width:20px;height:20px;background:#D4AF37;border-radius:50%;transform:translate(-50%,-50%);animation:burst 0.8s ease-out forwards;z-index:1000;pointer-events:none;';
  document.body.appendChild(burst);
  setTimeout(()=>burst.remove(), 800);

  document.getElementById('envelope').classList.add('hide'); 
  setTimeout(()=>{
    document.querySelectorAll('.section').forEach(s=>s.classList.add('active'));
  }, 700);
  
  setTimeout(() => {
    music.play().catch(()=>{});
    musicBtn.innerHTML = '🔊';
    musicBtn.classList.add('playing');
  }, 1000);
} 

document.getElementById('envelope').addEventListener('click', openInvite);
window.addEventListener('load', createAnimations);

const weddingDate = new Date("Aug 27, 2026 03:22:00").getTime(); 
setInterval(()=>{ 
  let now = new Date().getTime(); 
  let d = weddingDate - now; 
  let days = Math.floor(d/(1000*60*60*24)); 
  if(days >= 0) document.getElementById('countdown').innerHTML = days + " Days to Go"; 
},1000);