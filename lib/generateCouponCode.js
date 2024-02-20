
export const generateCouponCode=(title='',expiryDate='')=>{
    // format title to uppercase and remove spaces
    const formattedTitle=title.toUpperCase().replace(/\s+/g,'');

    // format the expiry date to "DDMMYY"
    const formattedExpiryDate= expiryDate.split("-").reverse().join("");

    // combine formatted date and title
    const couponCode=`${formattedTitle}-${formattedExpiryDate}`;
    return couponCode;


} 

// const couponGenerator=()=>{
// const title= "Black friday";
// const expiryDate=new Date("2023-11-4")
// }