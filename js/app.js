let newsList = document.getElementById('newsList')

let chunk = news.articles

function displayNews(){
   for (var key in chunk){
    for (var other in key) {
     let value = chunk[key]
     let liItem = `<img src="${value.urlToImage}" class="img_responsive"><li> <a class="headline" href="${value.url}">  ${value.title} </a> <br> ${value.description}<br><small> Reported By: ${value.author}</small> <br><small> Published at: ${value.publishedAt}</small></li><hr>`
     newsList.innerHTML += liItem
    }
    //console.log(value)
} 
}

displayNews()


//let chunk = news.articles
//
//
//for (var key in chunk){
//    for (var other in key) {
//     var value = chunk[key]
//    console.log(value.author)
//    console.log(value.title)
//    console.log(value.description)
//     console.log(chunk[key].source.name)
//    }
//    //console.log(value)
//}