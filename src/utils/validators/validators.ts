export const required = (value: any) => {
    if(value) {
        return undefined
    } return 'Field is required!'
}
export const maxLengthCreator = (maxLength: number) => (value: string) => {
    if(value.length > maxLength) {
        return `Max length ${maxLength} symbols!`
    } return undefined
}
export const minLengthCreator = (minLength: number) => (value: string) => {
    if(value.length < minLength) {
        return `Min length ${minLength} symbols!`
    } return undefined
}

