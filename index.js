const btn = document.querySelector(".submit");
const inputMail = document.querySelector("#email");
const inputNom = document.querySelector("#nom");
const inputPwd = document.querySelector("#pwd");
const message = document.querySelector(".text");


/**
 * 
 * @param {string} text mail|inputNom|inputPwd 
 * @returns 
 */
function nombreCaractere(text) {
  if (text.length >= 4) return true;
  else return false;
}

/**
 * 
 * @param {string} mail Adresse email
 * @returns 
 */

function compteEmailvalide(mail) {
  let masque = /@gmail.com|@yahoo.com/;
  return masque.test(mail);
}

/**
 * 
 * @param {string} inputNom Nom de de l'utilisateur
 * @returns 
 */

function nomValide(inputNom) {
  let masque = /^[a-z]*$/;
  return masque.test(inputNom);
}

/**
 * 
 * @param {string} inputPwd Mot de passe
 * @returns 
 */

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

/**
 * 
 * @param {string} erreur message d'erreur
 */

function ErreurMessage(erreur) {
  message.style.display = "block";
  message.style.color = "red";
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
