//SYNC

function test(){
    console.log('does something')
    return "success"
}
// ASYNC
function testAsync(fn){
    setTimeout(()=>{
        console.log('does something')
        fn("success")
    }, 0)   
}

console.log('starting the flow')
// var result = test()
// console.log(result)
testAsync(function(res){
    console.log(res)
})


console.log('finishing...')