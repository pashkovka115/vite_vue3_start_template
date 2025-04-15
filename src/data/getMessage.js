const messages = {
    vite: {message: 'You click to Vite', style: 'border-purple'},
    vue: {message: 'You click to VUE', style: 'border-green'},
    null: null,
}

export const getMessage = code =>{
    return messages[code]
}
