const btn = document.querySelector(".submit");
const inputMail = document.querySelector("#email");
const inputNom = document.querySelector("#nom");
const inputPwd = document.querySelector("#pwd");
const message = document.querySelector(".text");

function nombreCaractere(text) {
  if (text.length >= 4) return true;
  else return false;
}

function compteEmailvalide(mail) {
  let masque = /@gmail.com|@yahoo.com/;
  return masque.test(mail);
}

function nomValide(inputNom) {
  let masque = /^[a-z]*$/;
  return masque.test(inputNom);
}

function passwordValide(inputPwd) {
  let majuscule = /[A-Z]{1}/;
  let miniscules = /[a-z]{4}/;
  let chiffre = /[0-9]{1}/;
  if (majuscule.test(inputPwd)) {
    if (miniscules.test(inputPwd)) {
      if (chiffre.test(inputPwd)) {
        return true;
      } else return false;
    } else return false;
  } else return false;
}

function ErreurMessage(erreur) {
  message.style.display = "block";
  message.style.color = "black";
  message.textContent = erreur;
}

btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    nombreCaractere(inputMail.value) &&
    nombreCaractere(inputNom.value) &&
    nombreCaractere(inputPwd.value)
  ) {
    if (compteEmailvalide(inputMail.value)) {
      if (nomValide(inputNom.value)) {
        if (passwordValide(inputPwd.value)) {
          message.style.display = "none";
          // alert("Formulaire soumis avec succès");
          window.location.href = "home.html";
        } else {
          ErreurMessage(
            "Veillez entrer un mot de passe Composer d'une majuscule, de 4 miniscules et d'un chiffre"
          );
        }
      } else {
        ErreurMessage("Veillez utiliser que les miniscules pour le nom");
      }
    } else {
      ErreurMessage("Ce mail n'est pas correct");
    }
  } else {
    ErreurMessage("Ces champs doivent comporter plus 4 caractères");
  }
});
