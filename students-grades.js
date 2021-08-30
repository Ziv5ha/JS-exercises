const grades = [73, 91, 88, 56, 62, 84, 95, 96, 88, 92]
// your code goes here
function range(arr){
    let range = Math.max(...arr)-Math.min(...arr);
    return range;
}
function median(arr){
    let sortArr = arr.slice()
    sortArr.sort(function(a,b){return a-b});
    if (sortArr.length%2===1){
        return sortArr[Math.floor(sortArr.length/2)]
    }
    else{
        return (sortArr[sortArr.length/2-1]+sortArr[sortArr.length/2])/2
    }
}
function rangeSecondHalf(arr){
    let arr2 = arr.slice(Math.floor(arr.length/2));
    let rangeHalf = range(arr2)
    return rangeHalf;
}
function studentStats (gradeSheet){
    let R = range(gradeSheet)
    let M = median(gradeSheet)
    let RSH = rangeSecondHalf(gradeSheet)
    return console.log("Range:" + R + "\nMedian: "+M+"\nHalf Range: "+RSH)
}
// console.log("Range: "+range(grades))
// console.log("Half Range: "+rangeSecondHalf(grades))
// console.log(median(grades))
studentStats (grades)