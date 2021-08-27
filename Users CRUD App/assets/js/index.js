
$("#add_user").submit(function(event){
    alert("Data Inserted Successfully!");
})

$("#update_user").submit(function(event){
    event.preventDefault();
    var form_data=$(this).serializeArray();
    var data={};

    form_data.map((i, j) => {
        data[i['name']]=i['value'];
    });
    console.log(data);

    var request = {
        "url": `http://localhost:3000/api/users/${data.id}`, 
        "method": "PUT",
        "data": data,
    }
    $.ajax(request).done((response) => {
        alert("Successfully updated!")
    })
})

if(window.location.pathname==='/'){
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(()=>{
        var id=$(".table tbody td a.delete").attr('data-id');
        console.log(id);
        var request = {
            "url": `http://localhost:3000/api/users/${id}`, 
            "method": "DELETE",
        }
        if(confirm("Do you really want to delete this user?")){
            $.ajax(request).done((response) => {
                alert("Successfully Deleted!");
                location.reload();
            });
        }    
    });
}