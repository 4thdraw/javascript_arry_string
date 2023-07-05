let count = ["월","화","수","목","금","토","일"];
count[6] = "와신난다." 
count[6] = "일"
for(i in count){
        count[i] += "요일"
}     
console.log( count ) // 데이터 Array 원본
console.log( count.join('|') ) //중요함 왜? 데이터가 문자가 되거든요~
console.log( count.splice(3,2), "오지지널데이터는 ? "+count)
count.push('마지막에추가')
console.log( count)

const stdata = "010-7128-1041"
//문자열을 배열로 변환 (split 함수)
let stArr  = stdata.split('-') // stArr은 배열입니다.
console.log(stArr)