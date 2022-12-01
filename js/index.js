var author, title, message, rating;

function review() {
  author = document.getElementById("authName").value;
  message = document.getElementById("floatingTextarea2").value;
  title = document.getElementById("bookTitle").value;
  document.getElementById("authFillIn").innerHTML = "Book Author: " + author;
  document.getElementById("previewTitle").innerHTML = "Book Title: " + title;
  document.getElementById("previewMsg").innerHTML = message;
  var ele = document.getElementsByName("btnradio");
  for (i = 0; i < ele.length; i++) {
    if (ele[i].checked){
      document.getElementById("result").innerHTML = ele[i].value;
      rating = ele[i].value;
    }
  }
  console.log(rating);
}

function submit() {
    let newReview = {rating: rating, title: title, author: author, message: message}
    localStorage.setItem("currentReview", JSON.stringify(newReview));
}

