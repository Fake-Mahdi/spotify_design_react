import React from 'react';
import '../styles/style3.css'; 
import { Link } from 'react-router-dom';
import styles from '../styles/Signup.module.css';
function Signup() {
    return (
        <div className={styles.backColor}>
            <div style={{ backgroundColor: 'black', color: 'white', width: '100%', height: '75px', paddingLeft: '80px' }}>
                <div className="change">
                    <div>
                        <h3 className="logo">
                            <Link style={{ color: 'white', textDecoration: 'none' }} to="/">Spotify</Link>
                        </h3>
                    </div>
                </div>
            </div>

            <div className="contente">
                <div >
                    <div><h1 className="text-center titre">J'ai un compte Spotify</h1></div>
                    <div className="text-center" style={{ marginTop: '50px' }}>
                        <a id="btn_5" href="">Continuer Avec Google</a>
                    </div>
                    <div className="text-center" style={{ marginTop: '10px' }}>
                        <a id="btn_5" href="">Continuer Avec Facebook</a>
                    </div>
                    <div className="text-center" style={{ marginTop: '10px' }}>
                        <a id="btn_5" href="">Continuer Avec Apple</a>
                    </div>
                    <div className="text-center" style={{ marginTop: '10px' }}>
                        <a id="btn_5" href="">Continuer Avec un numéro de téléphone</a>
                    </div>
                </div>

                <div className="text-center" style={{ marginTop: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ width: '80%', height: '0.5px', border: '0.5px solid rgb(187, 186, 186)' }}></div>
                </div>

                <div className="formulaire">
                    <div>
                        <div className="col-lg-12 col-md-12 col-xs-12">
                            <label htmlFor="email" style={{ color: 'white' }}>Adresse e-mail ou nom d'utilisateur</label>
                            <input type="email" className="form-control" style={{ outline: 'none' }} id="email" placeholder="Adresse e-mail ou nom d'utilisateur" name="email" />
                        </div>
                    </div>

                    <div style={{ marginTop: '15px' }}>
                        <div className="col-lg-12 col-md-12 col-xs-12">
                            <label htmlFor="password" style={{ color: 'white' }}>Mot de Passe</label>
                            <input type="password" className="form-control" style={{ outline: 'none' }} id="password" placeholder="Mot de Passe" name="password" />
                        </div>
                    </div>

                    <div style={{ marginTop: '30px' }}>
                        <a id="btn6" href="">Se Connecter</a>
                    </div>
                    <div style={{ marginTop: '15px' }}>
                        <a style={{ color: 'white', fontFamily: 'Geologica, sans-serif' }} className="ob" href="">Mot de passe oublié ?</a>
                    </div>
                </div>

                <div className="text-center" style={{ marginTop: '35px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ width: '80%', height: '0.5px', border: '0.5px solid rgb(187, 186, 186)' }}></div>
                </div>

                <div style={{ marginTop: '50px', fontFamily: 'Geologica, sans-serif' }} className="text-center">
                    <span className="Mahdi"></span>
                    Vous n'avez pas de compte ? 
                    <span><a style={{ color: 'white', fontFamily: 'Geologica, sans-serif' }} className="ob" href=""> Je n'ai pas Spotify ?</a></span>
                </div>
            </div>
        </div>
    );
}
export default Signup;