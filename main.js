window.onload = ()=>{
    let urlsStrs = []
    for(let i = 0; i < $(".target-page").length; i++)
    {
        let s = $(".target-page")[i].value
        if(s == "") continue
        urlsStrs.push("site:"+s)
    }
    let urlsStr = urlsStrs.join(" OR ")
    console.log(urlsStr)
    
    $("#query")[0].oninput = () => {
        let word = $("#query")[0].value
        let query = word + " " + urlsStr
        req = "https://www.google.com/search?q=" + encodeURIComponent(query)
        console.log(req)
        $("#request")[0].innerHTML = "<a href='"+req+"'>"+query+"</a>"
    }
    $("#query")[0].oninput()

    $("#emit-query")[0].onclick = () => {
        location.href = req
    }
}