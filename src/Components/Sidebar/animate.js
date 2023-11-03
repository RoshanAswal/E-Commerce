const btn=document.getElementById('checkBox');
const filterDiv=document.getElementsByClassName('minFilter');
const checked=btn.checked;

if(checked){
    filterDiv.style.left=0;
}