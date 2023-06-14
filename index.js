//1
let str_one = "aaa@bbb@ccc"

console.log(
    str_one.replaceAll("@", "!")
);

// 2
let str_two = "HELLOWORLD"

console.log(
    str_two.slice(str_two.search('H'), str_two.search('H') + 1) +
    str_two.slice(str_two.search('ELLO'), str_two.search('ELLO') + 4).toLowerCase() + (" ") + str_two.slice(str_two.search('W'), str_two.search('D') + 5).toLowerCase()
);

//3 
let str_three = "Hello, it is HTML"

console.log(
    str_three.slice(str_three.search('Hello'), str_three.search('Hello') + 5) + str_three.slice(str_three.search(' it is'), str_three.search('it is') + 5) + " not JS"
);


//4
let str_four = "alex"

console.log(
    str_four.charAt(0).toUpperCase() + str_four.slice(1)
)

//5
let num = Math.random()
a = num

console.log(
    Math.round(a)
)


// 6 
let str_five = "Lex luter has a big suit"

console.log(
    str_five.toUpperCase().slice(str_five.toUpperCase().search("A"), str_five.toUpperCase().search("A")+1)+str_five.slice(str_five.search("Lex"), str_five.search("Lex")+3).toLowerCase()
);