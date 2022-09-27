let buttonSubmit = document.getElementById("button");
if (buttonSubmit) {
  buttonSubmit.addEventListener("click", validateContactForm, false);
}

function validateContactForm() {
  let inputnama = document.getElementById("nama");
  let inputAgama = document.getElementById("Agama");
  let inputjenis_kelamin = document.getElementById("jenis_kelamin");
  let inputalamat = document.getElementById("alamat");
  let inputnomer_telpon = document.getElementById("nomer_telpon");
  let inputdata_diri = document.getElementById("data_diri");

  if (inputnama.value == null || inputnama.value == "") {
    inputnama.classList.add("invalid");
    alert("Nama harus di isi");
    return false;
  }
  if (inputAgama.value == null || inputAgama.value == "") {
    inputAgama.classList.add("invalid");
    alert("Agama harus di isi");
    return false;
  }

  if (inputjenis_kelamin.value == null || inputjenis_kelamin.value == "") {
    inputjenis_kelamin.classList.add("invalid");
    alert("Jenis Kelamin harus di isi");
    return false;
  }


  if (inputalamat.value == null || inputalamat.value == "") {
    inputalamat.classList.add("invalid");
    alert("Alamat harus di isi");
    return false;
  }

  if (inputnomer_telpon.value == null || inputnomer_telpon.value == "") {
    inputnomer_telpon.classList.add("invalid");
    alert("nomer telpon harus di isi");
    return false;
  }

  if (inputdata_diri.value == null || inputdata_diri.value == "") {
    inputdata_diri.classList.add("invalid");
    alert("Data Diri harus di isi");
    return false;
  }
}