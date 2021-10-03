__NUXT_JSONP__("/blog/i-recently-got-to-experience-programming-in-rust-and-it-has-been-one-of-the-best-programming-experiences-of-my-life", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X){return {data:[{blog:{slug:"i-recently-got-to-experience-programming-in-rust-and-it-has-been-one-of-the-best-programming-experiences-of-my-life",description:"First of all, how did I get the opportunity to use Rust? I got to use Rust as a tool to develop a Web assembly Project without having to write the complex web assembly code directly.",title:"I recently got to experience programming in rust and it has been one of the best programming experiences of my life",createdAt:"2021-10-03T08:30:27.601Z",updatedAt:"2021-10-03T09:52:47.539Z",cover:{image:C,alt:"Rust cover image",thumb:C},tags:["rust","system programming","new language"],toc:[{id:D,depth:E,text:F},{id:G,depth:E,text:H}],body:{type:"root",children:[{type:b,tag:g,props:{},children:[{type:a,value:"First of all, how did I get the opportunity to use Rust?"}]},{type:a,value:f},{type:b,tag:g,props:{},children:[{type:a,value:"I got to use Rust as a tool to develop a Web assembly Project without having to write the complex web assembly code directly. The preferred method here is using the wasm-pack rust library which helps compile rust code into corresponding web assembly code."}]},{type:a,value:f},{type:b,tag:g,props:{},children:[{type:a,value:"Why Web assembly?"}]},{type:a,value:f},{type:b,tag:g,props:{},children:[{type:a,value:"Well, Web assembly is like the assembly for the web in the sense that despite being executed on a browser, it runs programs with a near-native performance which couldn’t have been done before with just javascript."}]},{type:a,value:f},{type:b,tag:g,props:{},children:[{type:a,value:"How was my first time experience with rust?"}]},{type:a,value:f},{type:b,tag:g,props:{},children:[{type:a,value:"To be honest with you, the first look at a rust code was pretty daunting."}]},{type:a,value:f},{type:b,tag:g,props:{},children:[{type:a,value:"What’s the deal with having two different data types for string: “&str” and “String”. Also, you are telling me there is no corresponding type for null?"}]},{type:a,value:f},{type:b,tag:g,props:{},children:[{type:a,value:"However, after dabbling into the world of rust a bit more, I came to understand, just how well thought of these peculiarities were in making a programmer's life easier."}]},{type:a,value:f},{type:b,tag:I,props:{id:D},children:[{type:b,tag:J,props:{ariaHidden:K,href:"#enum-option-replaces-null",tabIndex:L},children:[{type:b,tag:c,props:{className:[M,N]},children:[]}]},{type:a,value:F}]},{type:a,value:f},{type:b,tag:g,props:{},children:[{type:a,value:"First, let me deal with the less obvious one: Why is there no null type in rust?"}]},{type:a,value:f},{type:b,tag:g,props:{},children:[{type:a,value:"Null was first introduced more than half a century ago, so it is safe to say that it’s quite an established concept in the field of programming. It used to be considered a boom for programming. However, now as programming is evolving, programmers have come to realize that it’s more of a bane than a boom."}]},{type:a,value:f},{type:b,tag:g,props:{},children:[{type:a,value:"Let’s consider the following code which tries to get model of the discrete GPU on a computer like such:"}]},{type:a,value:f},{type:b,tag:v,props:{className:[w]},children:[{type:b,tag:x,props:{className:[y,z]},children:[{type:b,tag:r,props:{},children:[{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:O}]},{type:a,value:" version "},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"="}]},{type:a,value:" computer"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:"getDiscreteGPU"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:"getModel"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:P}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:g,props:{},children:[{type:a,value:"However, many computers don’t actually ship with a discrete GPU. So, what would be the result of this call? A common bad practice is to return a null reference to indicate the absence of a discrete GPU. Unfortunately, the getModel() method will try to return the Model of a null reference which will result in a NullPointerException at runtime and stop the program from running further. Imagine the program running on a client’s machine, every time he\u002Fshe tries to run the program it just never runs and he\u002Fshe never knows what the problem is."}]},{type:a,value:f},{type:b,tag:g,props:{},children:[{type:a,value:"Here in the words of the creator of null Tony Hoare himself:"}]},{type:a,value:f},{type:b,tag:"blockquote",props:{},children:[{type:a,value:f},{type:b,tag:g,props:{},children:[{type:a,value:"“In 1965, I was designing the first comprehensive type system for references in an object oriented language (ALGOL W). My goal was to ensure that all use of references should be absolutely safe, with checking performed automatically by the compiler. But I couldn’t resist the temptation to put in a null reference, simply because it was so easy to implement. This has led to innumerable errors, vulnerabilities, and system crashes, which have probably caused a billion dollars of pain and damage in the last forty years.”"}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:g,props:{},children:[{type:a,value:"Although Rust doesn’t have a null type, it provides an enum Option that can encode the concept of null as an optional value that can be present or absent."}]},{type:a,value:f},{type:b,tag:v,props:{className:[w]},children:[{type:b,tag:x,props:{className:[y,z]},children:[{type:b,tag:r,props:{},children:[{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"Enum"}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"Option"}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"{"}]},{type:a,value:Q},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"Some"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"T"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:Q},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"None"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"}"}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:g,props:{},children:[{type:a,value:"Now with the Enum Option, the code immediately shows if the computer has a discrete GPU or not (since the discrete GPU is optional). This way the program clearly knows if a given value is allowed to be missing and takes proper measures even when it’s not present."}]},{type:a,value:f},{type:b,tag:g,props:{},children:[{type:a,value:"In a nutshell, the enum option includes methods to explicitly deal with the cases where a value is present as well as where it is absent. Here, the advantage compared to null reference is that the option enum forces you to think about the case where the value is not present. As such, you can prevent unintended null pointer exceptions."}]},{type:a,value:f},{type:b,tag:I,props:{id:G},children:[{type:b,tag:J,props:{ariaHidden:K,href:"#rusts-compiler-is-awesome-it-tells-exactly-whats-the-problem",tabIndex:L},children:[{type:b,tag:c,props:{className:[M,N]},children:[]}]},{type:a,value:H}]},{type:a,value:f},{type:b,tag:g,props:{},children:[{type:a,value:"Another thing I like about rust is Rust’s compiler is very good at telling us what’s the problem. For example:"}]},{type:a,value:f},{type:b,tag:v,props:{className:[w]},children:[{type:b,tag:x,props:{className:[y,z]},children:[{type:b,tag:r,props:{},children:[{type:a,value:"error"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"["}]},{type:b,tag:c,props:{className:[d,R]},children:[{type:a,value:S}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"]"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:" mismatched types\n"},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:A}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"-\u003E"}]},{type:a,value:" src"},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"\u002F"}]},{type:a,value:"main"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:"rs"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:T}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:"11"}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:j}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:T}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:j}]},{type:a,value:"     "},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:"greet"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:"hello"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:P}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:j}]},{type:a,value:U},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:k}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:j}]},{type:a,value:U},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:j}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:j}]},{type:a,value:"           expected "},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:"struct"}]},{type:a,value:" `"},{type:b,tag:c,props:{className:[d,"namespace"]},children:[{type:a,value:"std"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:V}]},{type:a,value:"string"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:V}]}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:O}]},{type:a,value:W},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:" found `"},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"&"}]},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:"str"}]},{type:a,value:"`\n\n"},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:j}]},{type:a,value:"           help"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:X}]},{type:a,value:" using a conversion method"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:" `hello"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:"to_string"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:"`\n\nerror"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:" aborting due to previous error\n\n"},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"For"}]},{type:a,value:" more information about this error"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:X}]},{type:a,value:" `rustc "},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:A}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:A}]},{type:a,value:"explain "},{type:b,tag:c,props:{className:[d,R]},children:[{type:a,value:S}]},{type:a,value:W},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:g,props:{},children:[{type:a,value:"Here, it's clear that we’re dealing with two different data types: std::string::String, aka String, and &str. While greet() expects a String datatype, apparently what we’re passing to it is something of type &str. The compiler even provides help on how to fix it. We just need to convert hello variable to &str using .to_string() method and indeed using "},{type:b,tag:r,props:{},children:[{type:a,value:"greet(hello.to_string())"}]},{type:a,value:" works!"}]},{type:a,value:f},{type:b,tag:g,props:{},children:[{type:a,value:"The difference between &str and String is that String is a growable, heap-allocated data structure whereas str is an immutable fixed-length string somewhere in memory. Since the size is unknown for str we most commonly only use it as a reference: &str. &str can be used to view data that is stored anywhere: in static storage, inside heap-allocated string, or even on the stack which is very convenient. There are times when we need to own string data to constantly update it so we use String in that case but there are other times when we only need to view or use string owned by someone else so we use &str in that case. By having two different data types, it ensures there are no misbehaving strings in a program."}]},{type:a,value:f},{type:b,tag:g,props:{},children:[{type:a,value:"So far, I am absolutely enjoying coding in rust and I wish to continue coding in rust as much as possible. If you are up for a new, enlightening and enriching coding experience like I have I would absolutely recommend you to give rust a try."}]}]},dir:"\u002Fblog",path:"\u002Fblog\u002Fi-recently-got-to-experience-programming-in-rust-and-it-has-been-one-of-the-best-programming-experiences-of-my-life",extension:".md"},prev:{slug:"implementing-facial-expression-detection-cam",title:"Implementing Live Facial Expression Detection on Web Browser using open-source Face-Api",createdAt:"2021-03-15T08:30:27.601Z"},next:{slug:"why-c-language-is-awesome",title:"Why C Language is Awesome",createdAt:"2021-10-03T09:30:27.601Z"}}],fetch:[],mutations:void 0}}("text","element","span","token","punctuation","\n","p","operator","class-name","|","^",":",".","(",")"," ","\n\n","code","function",",","keyword","div","nuxt-content-highlight","pre","language-rust","line-numbers","-","number","https:\u002F\u002Fupload.wikimedia.org\u002Fwikipedia\u002Fcommons\u002Fthumb\u002F3\u002F3d\u002FRust_Foundation_logo.png\u002F500px-Rust_Foundation_logo.png","enum-option-replaces-null",2,"Enum Option replaces null","rusts-compiler-is-awesome-it-tells-exactly-whats-the-problem","Rust's compiler is awesome. It tells exactly what's the problem.","h2","a","true",-1,"icon","icon-link","String",";","\n    ","constant","E0308","3","           ","::","`","try")));