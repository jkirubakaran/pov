$('#exampleModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) // Button that triggered the modal
    document.getElementById('item-ordered').textContent = selected
    //var recipient = button // Extract info from data-* attributes
    //console.log(button)
    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    //var modal = $(this)
    //modal.find('.modal-title').text('New message to ' + recipient)
    //modal.find('.modal-body input').val(recipient)
  })

function toggleOrderConfirmModal(){
  $('#exampleModal').modal('hide');

  data = JSON.stringify({ FirstName: $('#fname').val(),
                          LastName: $('#lname').val(),
                          PhoneNumber: $('#cell').val(),
                          OrderId: getRandomInt(1,99999),
                          ItemName: selected,
                          ReceivedDate: Date.now()  });
                      

  $.ajax({
    type: 'POST',
    url: 'https://coffeereadyfuncapp.azurewebsites.net/api/neworder?code=nA1DsQQRltTEsu2pma7oi8uqSaeEmaazNNxZblOHpKPopgRS0/5ORw==',
    data: JSON.stringify(data),
    headers: {
      'Access-Control-Allow-Credentials': 'true',
          'Access-Control-Allow-Origin': 'https://azurewebsites.net',
          'Access-Control-Allow-Methods': 'POST',
          'Access-Control-Request-Headers': 'X-Custom-Header'
    },
    contentType: "application/json; charset=utf-8",
    traditional: true,
      success: function (data) {
          
      }
    });
/*
  $.post( "test.php", { FirstName: $('#fname').val(),
                        LastName: $('#lname').val(),
                        PhoneNumber: $('#cell').val(),
                        OrderId: getRandomInt(1,99999),
                        ItemName: selected,
                        ReceivedDate: Date.now()  } );
  */
  $('#confirmationModal').modal('show');
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

  