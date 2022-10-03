export interface categoriesNames{
    hassub: boolean,
    id: number,
    name: string,
    sub: Array<{
        id:number,
        name:string
    }>
}