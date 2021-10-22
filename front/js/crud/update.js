let data = [
    {course_id: "1", name: "name1", t_name: "t_name1", groups: "4", year: "3bp"},
    {course_id: "2", name: "name2", t_name: "t_name2", groups: "2", year: "3bp"}
]

$(function(){
    $("#name").focus(function(){
        $(this).empty(); 
        for(let i = 0; i<data.length; i++){
            $(this).append(`<option id="`+data[i].groups+`" value="`+data[i].course_id+`">`+data[i].name+`</option>`)
        }
    });
    $("#name").change(function(){
        $("#group").empty();
    })
    $("#group").focus(function(){
        $(this).empty();
        let groups = $("#name").children(":selected").attr("id");
       console.log(groups);
       groups = parseInt(groups);
       for(let j = 1; j<=groups;j++){
        $("#group").append(`<option value="`+j+`">`+j+`</option>`)
       }
    })
    $("#form").on("submit", function(event) {
        event.preventDefault();
        let urlencoded = $("#form").serialize();
        console.log(urlencoded);
        let parsed = Object.fromEntries(
            urlencoded.split('&')
            .map(s => s.split('='))
            .map(pair => pair.map(decodeURIComponent)));
        parsed.group = parseInt(parsed.group);
        console.log(parsed);
    });

})