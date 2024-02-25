const bodyParser = require("body-parser"); //Middleware per il parsing dei dati delle richieste HTTP.
const express = require("express");
const path = require("path"); //Modulo per la manipolazione dei percorsi di file e directory.

const app = express();
const port = 3000;

// Imposta la cartella "public" come asset statico
app.use(express.static("public"));

// Mostra il form HTML quando si accede a /form
app.get("/form", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public", "form.html")); // send file invia il file html del form e dirname rappresenta la directory corrente.
});

// si utilizza body-parser per interpretare i dati del form
app.use(bodyParser.urlencoded({ extended: true })); //converte i dati del form in oggetti JavaScript.

// Gestisci la richiesta POST dal form e mostra i dati su /mostra-dati
app.post("/mostra-dati", (req, res) => {
  const { nome, email } = req.body; //si estraggono i dati dal corpo della richiesta usando req.body.

  if (nome && email) {
    return res
      .status(200)
      .send(`Benvenuto ${nome}. Ti sei registrato con ${email}`); //Se entrambi i campi nome e email sono presenti, restituisci un messaggio di benvenuto;
  }

  res.status(400).send("Per favore inserisci tutti i dati richiesti."); //altrimenti, restituisci un messaggio di errore.
});

// Mostra la dashboard solo agli utenti con nome "admin"
app.get("/dashboard", (req, res) => {
  const utente = req.query.nome;

  if (utente === "admin") {
    res.send("Benvenuto nella dashboard, admin!");
  } else {
    res
      .status(403)
      .send(
        "Accesso negato. Solo gli utenti admin possono accedere a questa pagina."
      );
  }
});

app.listen(port, () => console.log(`Server attivo sulla porta ${port}`));
