

let btn = document.querySelector('.calc');
btn.addEventListener('click', ()=>{
    const roman = { I:1, V:5, X:10, L:50, C:100, D:500, M:1000};
    let s = document.getElementById('num').value;
    let result = document.querySelector('.result');
    let num = 0;
    for(let i=0; i<s.length; i++){
        const curr = roman[s[i]];
        const next = roman[s[i+1]];
        (curr<next)?(num-=curr):(num+=curr);
    }
    result.innerHTML = num;
})