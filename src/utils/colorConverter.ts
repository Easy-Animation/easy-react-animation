// background-color: #fc9; /* same as #ffcc99 */ 


export const hexToRGB = (hex: any) => {
    const hexWithoutHashtag = hex[0] === "#" ? hex.substring(1) : hex;
    let hexFiltered = ''
    
    if (hexWithoutHashtag.length === 3) {
        hexWithoutHashtag.split('').forEach((char: string) => {
            hexFiltered += `${char}${char}`;
        });
    } else {
        hexFiltered = hexWithoutHashtag;
    }

    if (hexFiltered.length !== 6){
        return hexFiltered.replace('rgb(','').replace(')','')
    }

    var aRgbHex: any = hexFiltered.match(/.{1,2}/g);
    var aRgb = [
        parseInt(aRgbHex[0], 16),
        parseInt(aRgbHex[1], 16),
        parseInt(aRgbHex[2], 16)
    ];
    
    console.log(`${aRgb[0]}, ${aRgb[1]}, ${aRgb[2]}`)

    return `${aRgb[0]}, ${aRgb[1]}, ${aRgb[2]}`;
} 



