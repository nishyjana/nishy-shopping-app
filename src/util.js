export default function formatCurrency(num){
    return "RS " + Number(num.toFixed(1)).toLocaleString()+" "
}