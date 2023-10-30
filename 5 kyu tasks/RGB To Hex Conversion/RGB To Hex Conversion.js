function rgb(r, g, b) {
    let str="";
    function Hex(color)
    {   
        if(color>255)color=255;
        if(color<0)color=0;
        let color_str = "";
        let first_half = Math.floor(color/16);
        let second_half = color-(first_half*16);
        first_half = first_half.toString(16);
        second_half = second_half.toString(16);
        color_str = color_str + first_half + second_half;
        return color_str;
    }
    str += Hex(r);
    str += Hex(g);
    str += Hex(b);
    str=str.toUpperCase();
    return str;
}