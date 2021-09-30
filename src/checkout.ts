import { getConstantValue } from "typescript"

export const checkout = (priceRules) => {
    const items = [];

    return {
        scan: (item) => {
            items.push(item)
        },

        getTotal: () => {
            return items.map(item => priceRules[item].normal).reduce((acc, val) => acc + val, 0)
        }
    }
}