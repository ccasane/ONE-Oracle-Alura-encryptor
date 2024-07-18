const btnEncryptor = document.querySelector('.encrypt');
const btnDecryptor = document.querySelector('.desencrypt');
const textArea = document.querySelector('#encryptor__text');
const btnCopy = document.querySelector('.encryptor__result__copy');
const resultContainer = document.querySelector('.encryptor__result__area');

btnEncryptor.addEventListener('mouseover', () => {
    btnEncryptor.style.backgroundColor = '#d8dfe8'
    btnEncryptor.style.color = '#0a3871'
    btnDecryptor.style.backgroundColor = '#0a3871'
    btnDecryptor.style.color = '#fff'
})
btnEncryptor.addEventListener('mouseout', () => {
    btnEncryptor.style.backgroundColor = '#0a3871'
    btnEncryptor.style.color = '#fff'
    btnDecryptor.style.backgroundColor = '#d8dfe8'
    btnDecryptor.style.color = '#0a3871'
});
btnDecryptor.addEventListener('mouseover', () => {
    btnDecryptor.style.backgroundColor = '#0a3871'
    btnDecryptor.style.color = '#fff'
    btnEncryptor.style.backgroundColor = '#d8dfe8'
    btnEncryptor.style.color = '#0a3871'
})
btnDecryptor.addEventListener('mouseout', () => {
    btnDecryptor.style.backgroundColor = '#d8dfe8'; 
    btnDecryptor.style.color = '#0a3871'
    btnEncryptor.style.backgroundColor = '#0a3871'
    btnEncryptor.style.color = '#fff'
});

textArea.addEventListener('input', () => {
    textArea.value = textArea.value.replace(/[^a-z\s]/g, '')
});

function encryptText(text) {
    const encryptionKeys = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };
    
    return text.replace(/[eioua]/g, match => encryptionKeys[match]);
};

function decryptText(text) {
    const decryptionKeys = {
        'enter': 'e',
        'imes' : 'i',
        'ai'   : 'a',
        'ober' : 'o',
        'ufat' : 'u'
    };
    
    return text.replace(/enter|imes|ai|ober|ufat/g, match => decryptionKeys[match]);
};

btnEncryptor.addEventListener('click', () => {
    const valueTextArea = textArea.value;
    
    if(valueTextArea === '') {
        alert('¡Ingresa texto por favor!');  
    } else {
        const encryptedText = encryptText(valueTextArea);
        
        resultContainer.innerHTML = `<textarea disabled class="class__result">${encryptedText}</textarea>`;
        resultContainer.appendChild(btnCopy);
        btnCopy.style.display = 'block';
        textArea.value = '';
    }
   
});

btnDecryptor.addEventListener('click', () => {
    const valueTextArea = textArea.value;

    if(valueTextArea === '') {
        alert('¡Ingresa texto por favor!');      
    }  else {
        const decryptedText = decryptText(valueTextArea);

        resultContainer.innerHTML = `<textarea disabled class="class__result">${decryptedText}</textarea>`;
        resultContainer.appendChild(btnCopy);  
        btnCopy.style.display = 'block';
        textArea.value = '';
    }
});

btnCopy.addEventListener('click', () => {
    const textToCopy = resultContainer.querySelector('textarea').value;

    navigator.clipboard.writeText(textToCopy).then(() => {
        alert('¡Texto copiado!');
    }).catch(err => {
        alert('Error al copiar el texto');
        console.error(err);
    });
});