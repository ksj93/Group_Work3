$(function () {

  $('.checkbox').change(function () {
    const textarea_content = $('#content').val()
    console.log(textarea_content);
    const input_name =$('#input_name').val()
    console.log(input_name);
    const input_mail =$('#input_mail').val()
    console.log(input_mail);
    const input_phonenum =$('#input_phonenum').val()
    console.log(input_phonenum);
    $('#content').css('border-color','black')
                 .css('border-width','1px')
    $('#input_name').css('border-color','black')
                    .css('border-width','1px')
    $('#input_mail').css('border-color','black')
                    .css('border-width','1px')
    $('#input_phonenum').css('border-color','black')
                        .css('border-width','1px')
    if (textarea_content == "" && $('.checkbox').prop("checked") == true) {
      $('#content').css('border-color','red')
                   .css('border-width','5px')
    }

    if (input_name=="" && $('.checkbox').prop("checked") == true) {
      $('#input_name').css('border-color','red')
                      .css('border-width','5px')
    }

    if (input_mail=="" && $('.checkbox').prop("checked") == true) {
      $('#input_mail').css('border-color','red')
                       .css('border-width','5px')
    }

    if (input_phonenum=="" && $('.checkbox').prop("checked") == true) {
      $('#input_phonenum').css('border-color','red')
                          .css('border-width','5px')
    }
  })

  $('.button').on('click',function () {
    const textarea_content = $('#content').val()
    console.log(textarea_content);
    const input_name =$('#input_name').val()
    console.log(input_name);
    const input_mail =$('#input_mail').val()
    console.log(input_mail);
    const input_phonenum =$('#input_phonenum').val()
    console.log(input_phonenum);

    if ($('.checkbox').prop("checked") != true) {
      alert("同意されていません!");
    }
    else if ($('.checkbox').prop("checked") == true && (textarea_content == "" || input_name == "" || input_mail== "" || input_phonenum== "") ) {

      alert("内容がありません!");

    }
    else{
      $('#animation').text("内容を送信致しました!")
      .animate({'left': '100%'})
      .animate({'left': '40%'})
      .animate({'fontSize': '96px'})
      .animate({'left': '100%'})
      .animate({'left': '0'})
      .fadeOut(3000);
    }

  })
})
