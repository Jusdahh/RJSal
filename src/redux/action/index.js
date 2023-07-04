// Adicionar itens no Carrinho
export const addCart = (produto) => {
    return {
        type: 'ADDITEM',
        payload: produto
    }
}

// Tirar itens do Carrinho
export const delCart = (produto) => {
    return {
        type: 'DELITEM',
        payload: produto
    }
}