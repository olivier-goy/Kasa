import "../404/404.css";

function Error() {
  return (
    <div>
      <h1 className="style404">404</h1>
      <p className="styleTextError">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <a href="/" className="styleTextReturn">Retourner sur la page d'accueil</a>
    </div>
  );
}

export default Error;
