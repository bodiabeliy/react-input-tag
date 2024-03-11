export interface CategoryTags {
    categoryIndex: number,
    categoryTags: any[],
    addNewTag:(data:any)=>void,
    removeTag:(index:any) =>void,
    draggTag:(tag: any, currPos: any, newPos: any) => void

    calculateCategoryIndex:(value:any, mathOperation:string) => void
}

 export enum MathOperations {
    ADDITION = '+',
    SUBTRACKTION = '-',
    MULTY = '*',
    DIVIDE = '/',

}

