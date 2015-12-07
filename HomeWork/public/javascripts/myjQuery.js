$(document).ready(function(){
    $('#input').keyup(function(){
        var reqData = $('#input').val();
        if(reqData.length>2 && reqData !="") {
            $('#confirm').html('');
            var dataString = 'companyName=' + reqData;
            $.ajax({
                type: "GET",
                url: "http://localhost:8000/company",
                data: dataString,
                processData: false,
                success: function (returnedData) {
                    for (var i = 0; i < returnedData.length; i++) {
                        $('#confirm').append('<option id="' + i +'">' + returnedData[i] + '</option>');
                        }
                    
                    $('#confirm').css("display", "block");
                    //$("#confirm :first").attr("selected", "selected");
                    $('#confirm').on("click", "option", function(){

                        $('#input').val(returnedData[this.id]);
                        $('#confirm').html('');
                        $('#confirm').css("display", "none");
                    });
                }
            });
        }
    })
});


