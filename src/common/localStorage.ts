import { IStorage } from "types/anime";

export function pegarStorage(storage: string) {
    const valor = localStorage.getItem(storage)
    const valorC:IStorage[] | [] = valor ? JSON.parse(valor) : []
    return valorC
}

export function salvarLocalStorage(storage: string, data: IStorage) {
    const antigoStorage = pegarStorage(storage)
    let novoStorage;
    const jaExiste = antigoStorage.find(item => item.id === data.id)
    
    jaExiste ? novoStorage = antigoStorage.filter(item => item.id !== data.id) : novoStorage = [...antigoStorage, data]

    localStorage.setItem(storage, JSON.stringify(novoStorage))
}