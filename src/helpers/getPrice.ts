export const getPrice= (price: number, discount: number) => {
    return (price*(100-discount)/100).toFixed(2)
}
