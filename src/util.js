export default function formatCurrency(num){
    return "RS " + Number(num.toFixed(2)).toLocaleString()+" "
}