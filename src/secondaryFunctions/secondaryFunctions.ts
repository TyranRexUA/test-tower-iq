export const pagesArray = (totalCount: number, pageSize: number): number[] => { // return array of numberPages
    const pages: number[] = [];
    for (let i = 1; i <= Math.ceil(totalCount / pageSize); i++) {
        pages.push(i)
    }
    return pages;
}

export const generateRandomNumber = (min: number, max: number): number => {
    return Math.floor(min + Math.random() * (max - min));
}