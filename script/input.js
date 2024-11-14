export function input() {     
    const input = document.querySelector('.greeting-container input'); 
    
    if (input) { 
        input.value = localStorage.getItem('test') || ''; 
        input.addEventListener('input', (e) => {         
            localStorage.setItem('test', e.target.value);     
        });
    }
}
