/**This is the function that we have created to print the pattern of a triangle within the stars by taking two parameters
 * @parameter width specifies the width
 * @para 2 specifies the height
 * we run three for loops inside the parent for loop each for the stars before the space,one for the space and the other for the stars to printed after the space.
 */

function mountain_gap(width,height){
    
    
    for(let i=0;i<=height-1;i++){
    let txt=""
    let stars=i*(width/height)+1
    let totalStars=(width-stars)/2
    let prevStars=Math.floor(totalStars)
    let postStars=Math.floor(totalStars)

        for(let j=0;j<prevStars;j++){
            txt=txt+" "
        }
        for(let j=0;j<stars;j++){
            txt=txt+"*"
        }
        for(let j=0;j<postStars;j++){
            txt=txt+" "
        }
        console.log(txt)
    }
    
}

function main(){
    mountain_gap(20,10)
}

main()
