let db = [];
let contact = {};
// ADD CONTACT


$(document).ready(function() {



$("#create-contact").on("click", function(event) {
  event.preventDefault();

  if ($.trim($("#name").val()) === "" || $.trim($("#surname").val()) === "" ||
      $.trim($("#phone").val()) === "" || $.trim($("#address").val()) === "") {
      alert('Please fill all the empty fields');
      return false;
  }

  contact.firstName = $('#name').val();
  contact.surname = $('#surname').val();
  contact.phone = $("#phone").val();
  contact.address = $("#address").val();

  let row = document.createElement("tr");
  $("table").append(row);
  let cell1 = document.createElement("td");
  let cell2 = document.createElement("td");
  let cell3 = document.createElement("td");
  let cell4 = document.createElement("td");
  let dltBtn = document.createElement("button");
  /* ^ https://stackoverflow.com/questions/268490/jquery-document-createelement-equivalent
     Fastest method */

  $(dltBtn).text("X")
  .css("width", "8.5rem")
  .css("color", "white")
  .css("background-color", "black")
  .attr("class", "dltBtn");


  $(cell1).html(contact.firstName);
  $(cell2).html(contact.surname);
  $(cell3).html(contact.phone);
  $(cell4).html(contact.address);

  row.append(cell1, cell2, cell3, cell4,dltBtn);


  db.push(contact.firstName, contact.surname, contact.phone, contact.address, dltBtn);

  console.log(db);

  $('.dltBtn').on('click', function(event) {
      event.preventDefault();


    var index= db.indexOf(dltBtn) - 4;

    if (index !== -1) {
      db.splice(index,5);
    };

    row.remove(dltBtn)
    .deleteCell();

    console.log(db)


  });

});

// SEARCH

function search(name) {
  for (i = 0; i < db.length; i++) {
    if (!isNaN(name) && db[i] === name) {
      return db[i-2] + "  " + db[i-1] + "   " + db[i] + "  " + db[i+1];
    }
    if (db[i].toString().toUpperCase() === name.toUpperCase()) {
      return db[i] + "  " + db[i+1] + "   " + db[i+2] + "  " + db[i+3];
    }
    $("#found").text("User not found!");
  }


};

$('.searchbutton').on('click', function(event) {
    event.preventDefault();

    var findUserName = $('#query').val();
    var userFound = search(findUserName);

    $("#found").text(userFound);
    console.log(db);
});
});

/*
Sources: stackoverflow.com, w3schools.com, khanacademy.org, api.jquery.com
*/
