import React from 'react';
import '../styles/style2.css'; 
import { Link } from 'react-router-dom';
import styles from '../styles/Inscrire.module.css';
function Inscrire() {
  return (
    <div className={styles.backColor}  >
      <div style={{ backgroundColor: '#181818', color: 'white', width: '100%', height: '90px', paddingLeft: '60px' }}>
        <div className="flex">
          <div>
            <h3 className="logo">
              <Link style={{ color: 'white', textDecoration: 'none' }} to="/">Spotify</Link>
            </h3>
          </div>
        </div>
      </div>

      <div className="content">
        <div className="text-left" style={{ width: '85%', height: 'auto', paddingLeft: '15px', color: 'white', fontFamily: 'Geologica, sans-serif' }}>
          <p style={{ fontWeight: 'bold', fontSize: '35px' }}>Inscrivez-vous pour commencer à écouter</p>
        </div>
        <div className="formulaire">
          <div>
            <div className="col-lg-12 col-md-12 col-xs-12">
              <label htmlFor="email" style={{ color: 'white' }}>Adresse e-mail</label>
              <input type="email" className="form-control" style={{ outline: 'none' }} id="email" placeholder="Adresse e-mail ou nom d'utilisateur" name="email" />
              <div>
                <Link style={{ color: '#0fb348', fontFamily: 'Geologica, sans-serif', textDecoration: 'underline' }} to="#">Utilisez plutôt un numéro de téléphone.</Link>
              </div>
            </div>
          </div>
          <div style={{ marginTop: '30px' }}>
            <Link id="btn6" to="#">Suivant</Link>
          </div>

          <div className="text-center" style={{ color: 'white', marginTop: '5px', marginBottom: '5px' }}>
            <p style={{ fontFamily: 'Geologica, sans-serif' }}>ou</p>
          </div>
          <div style={{ width: '100%', height: '0.5px', border: '0.5px solid rgb(187, 186, 186)' }}></div>

          <div className=".flexbbox" style={{ marginBottom: '15px' }} >
            <div className="text-center" style={{ marginTop: '20px' }}>
              <Link id="btn5" to="#">Continuer Avec Google</Link>
            </div>
            <div className="text-center" style={{ marginTop: '10px' }}>
              <Link id="btn5" to="#">Continuer Avec Facebook</Link>
            </div>
          </div>

          <div style={{ width: '100%', height: '0.5px', border: '0.5px solid rgb(187, 186, 186)' }}></div>
        </div>
        <div className="text-center" style={{ marginTop: '5px' }}>
          <p style={{ fontFamily: 'Geologica, sans-serif', color: 'white' }}>
            <span style={{ fontFamily: 'Geologica, sans-serif' }}>Vous avez déjà un compte ?</span>
            <span style={{ textDecoration: 'underline' }}> Connectez-vous ici.</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Inscrire;