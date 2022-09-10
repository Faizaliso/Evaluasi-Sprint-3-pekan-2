//===|1 a|===
const arr = [1,2,3,4,5]
let [a,b,c,d,e] = arr 

//===|1 b|===
// [a,b,c,d,e] = [e,d,c,b,a]
console.log(a,b,c,d,e)

//===|2|===
const array = [1,2,3,4,5,6,7,8,9,10]
let removearr = function (){
    let [a,b,c,d, ...value] = array
    return [d, ...value]
}
console.log(removearr()); 

//===|3|===
let x = true 
let promise = new Promise (function(resolve, reject){
    if (x== true){
        resolve({
            "nama" : "Hp Pavilion",
            "merk" : "HP",
            "price" : 10000000
        })
    }else{
        reject('error')
    }
})
promise.then(
    
  );