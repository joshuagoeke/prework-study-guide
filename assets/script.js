function listTopics(){
    for(var x = 0; x < listTopics.length; x++){
        console.log(topics[x]);
    }
}
listTopics()
/*
var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];
for(var x = 0; x < topics.length; x++){    
    console.log(topics[x]);
}

var topic = "HTML";
*/

function selectTopic(){
    if (topic === 'HTML'){
        console.log("Let's study HTML!");
    } else if (topic === 'CSS'){
        console.log("Let's study CSS!");
    } else if (topic === 'Git'){
        console.log("Let's study Git!");
    } else if (topic === 'JavaScript'){
        console.log("Let's study JavaScript!");
    } else {
        console.log('Please try again!');
    }
}

/*
var shapes = ["triangle", "square", "pentagon", "circle"];

for(var x = 0; x < shapes.length; x++){
    //code block
    console.log(shapes[x]);
}
*/