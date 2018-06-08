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
  $.post( "test.php", { first_name: $('#fname').val(),
                        last_name: $('#lname').val(),
                        cell: $('#cell').val(),
                        order_id: getRandomInt(1,99999),
                        item: selected,
                        order_time: Date.now()  } );
  $('#confirmationModal').modal('show');
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

  