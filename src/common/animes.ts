import parse from 'html-react-parser';

export function formatarTexto(texto: string, tamanho: number) {
    return parse(texto.length >= tamanho ? `${texto.substring(tamanho, 0)}...` : texto)
}   