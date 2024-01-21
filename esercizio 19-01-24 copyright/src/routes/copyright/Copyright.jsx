import styles from "./copyright.module.scss";

function Copyright() {
  return (
    <div className={styles.copyright_Wrapper}>
      <nav className={styles.navbar}>
        <img
          className={styles.logo_nav}
          src="https://api.freelogodesign.org/assets/thumb/logo/bdd55f703a074abb8bf50c0d3891c0a9_400.png?t=638314396148720000"
        ></img>

        <a href="/" className={styles.home}>
          {/*non funziona Link to secondo procedura*/}
          Home
        </a>
        <a href="/" className={styles.us}>
          Chi siamo
        </a>
        <a href="/" className={styles.contacts}>
          Contatti
        </a>
      </nav>
      <div className={styles.hero}>
        <h1 className={styles.title}>
          Copyright e Utilizzo del Contenuto su BookReader
        </h1>
        <p className={styles.text}>
          Benvenuto su BookReader. Questa pagina fornisce informazioni
          importanti sul copyright e sull'utilizzo del contenuto presente su
          questo sito.
        </p>
        <h1 className={styles.title}>Diritti d'Autore </h1>
        <p className={styles.text}>
          {" "}
          Il contenuto presente su BookReader, inclusi testi, immagini, grafica,
          audio e video, è protetto da copyright e altri diritti di proprietà
          intellettuale. I diritti d'autore sono di proprietà di BookReader o
          dei rispettivi titolari dei diritti d'autore. È vietata la
          riproduzione, la distribuzione o la modifica del contenuto senza
          l'autorizzazione esplicita dei detentori dei diritti.
        </p>
        <h1 className={styles.title}>Utilizzo Consentito</h1>
        <p className={styles.text}>
          Gli utenti sono autorizzati a visualizzare, scaricare e stampare il
          contenuto di BookReader solo per uso personale e non commerciale.
          L'uso del materiale per scopi diversi richiede l'ottenimento
          preventivo di una autorizzazione scritta da parte nostra o del
          rispettivo titolare dei diritti d'autore.
        </p>
        <h1 className={styles.title}>Marchi e Loghi</h1>
        <p className={styles.text}>
          Tutti i marchi e i loghi presenti su BookReader sono di proprietà di
          BookReader o dei rispettivi titolari dei marchi. L'uso non autorizzato
          di tali marchi è espressamente vietato.
        </p>
        <h1 className={styles.title}>Link a Terze Parti</h1>
        <p className={styles.text}>
          {" "}
          Il Sito potrebbe contenere link a siti web di terze parti. Non abbiamo
          alcun controllo sul contenuto di tali siti e non siamo responsabili
          per eventuali violazioni di copyright o altre questioni legali
          associate a tali siti. Si prega di consultare le politiche di
          copyright dei siti collegati.
        </p>
        <h1 className={styles.title}>Contattaci</h1>
        <p className={styles.text}>
          Se hai domande o richieste riguardanti il copyright o l'utilizzo del
          contenuto su BookReader, ti preghiamo di contattarci all'indirizzo{" "}
          <a href="mailto:bookreader@gmail.com" className={styles.link}>
            bookreader@gmail.com
          </a>
          .<br></br>Grazie per visitare BookReader!
        </p>

        <p className={styles.text}>
          Copyright © 2000 - 2024 · BookReader · all rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Copyright;
