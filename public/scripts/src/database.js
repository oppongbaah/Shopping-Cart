$(document).ready(function() {
  $('#create').on('click', () => {
    let ok = confirm(`Click OK to create a database named ShoppingCart
    \nand all collections. The collections are:
    \n1. fashions
    \n2. electricals
    \n3. electronics
    \n4. literature
    \nPress cancel to stop this operation
    `);
    if(!ok){
      $('#create').attr('href', '#');
    } else {
      $('#create').attr('href', '/create');
    }
  });
});

$(document).ready(function() {
  $('#clear').on('click', () => {
    let ok = confirm(`This will clear all your collections in the database.
     \n Do you wish to continue this operation?`);
    if(!ok){
      $('#clear').attr('href', '#');
    } else {
      $('#clear').attr('href', '/clear');
    }
  });
});

$(document).ready(function() {
  $('#upload').on('click', () => {
    let ok = confirm(`Click OK to upload all backup data to the collections
    \nYou can delete all backups after the uploading them.
    `);
    if(!ok){
      $('#upload').attr('href', '#');
    } else {
      $('#upload').attr('href', '/upload');
    }
  });
});
