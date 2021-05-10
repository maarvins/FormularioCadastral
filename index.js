function enviar(event){
  event.preventDefault()

  const data = {
  "name": $("input[name='name']").val() ,
  "email": $("input[name='email']").val() ,
  "phone":parseInt($("input[name='phone']").val().replace(/[()-]/g, ""))  ,
  "addressZip":parseInt($("input[name='addressZip']").val())  ,
  "addressStreet": $("input[name='addressStreet']").val() ,
  "addressNumber":$("input[name='addressNumber']").val()  ,
  "addressDistrict": $("input[name='addressDistrict']").val() ,
  "addressCity": $("input[name='addressCity']").val() ,
  "addressState":$("input[name='addressState']").val()
}

    $("#load").show();
    $.ajax({
    url: "https://simple-api-selection.herokuapp.com/submit/",
    type: "POST",
    data:JSON.stringify(data) ,
    contentType: "application/json",
    dataType: "json",
    statusCode: {
      200: function (result){
        $("#load").hide();
        $("form").hide();
        $("#sucess").show();
      },
      400: function(result){
       const errors = (result.responseJSON);

       errors.forEach((error) => {
         $(".resp").html(error);
        $(`p[name="${error.field}"]`).text(error.error);
       });

      }
    },
    error: function(error) {
      $("#load").hide();
      $(".resp").html(error.responseJSON);
    }
  });
}
