const dialog=document.querySelector('#video-dialog');
const player=document.querySelector('#project-video');
document.querySelectorAll('.video-trigger').forEach(button=>button.addEventListener('click',()=>{player.src=button.dataset.video;dialog.showModal();player.play().catch(()=>{});}));
function closeVideo(){player.pause();player.removeAttribute('src');player.load();dialog.close();}
document.querySelector('#close-video').addEventListener('click',closeVideo);
dialog.addEventListener('click',event=>{if(event.target===dialog)closeVideo();});
dialog.addEventListener('close',()=>{player.pause();player.removeAttribute('src');player.load();});
const discordCopy=document.querySelector('.discord-copy');
const discordLabel=document.querySelector('#discord-label');
const discordStatus=document.querySelector('#discord-status');
discordCopy.addEventListener('click',async()=>{
  try{
    await navigator.clipboard.writeText('romka3631');
    discordLabel.textContent='Copied!';
    discordStatus.textContent='Discord username copied to clipboard.';
    window.setTimeout(()=>{discordLabel.textContent='romka3631 · copy ↗';discordStatus.textContent='';},2500);
  }catch{
    discordLabel.textContent='romka3631';
    discordStatus.textContent='Copy this Discord username: romka3631';
  }
});
