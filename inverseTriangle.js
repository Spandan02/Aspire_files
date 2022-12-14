function inverseTriangle(width,height){
    for(rowNum=0;rowNum<=height;rowNum++){
        let txt=""
        let leftRatio=1
        let rightRatio=3
        let stars=Math.round(rowNum*(width/height)+1)
        let totalSpace=(width-stars)/4
        let previousSpace=leftRatio*(Math.floor(totalSpace))
        let postSpace=rightRatio*(Math.floor(totalSpace))
        for(let i=0;i<previousSpace;i++){
          txt+=" "
        }
        for(let i=0;i<stars;i++){
          txt+="*"
        }
        for(let i=0;i<postSpace;i++){
          txt+=" "
        }
        console.log(txt)
    }
}

function main(){
  inverseTriangle(10,10)
}

main()