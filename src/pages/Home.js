import React from 'react';
import '../styles/style.css'; 
import styles from '../styles/Home.module.css';
import { Link } from 'react-router-dom';
function Home() {
  return (
    <div className={styles.backColor}  >
      <div className="container-fluid">
        <div className="row">
          <div style={{ padding: '0px' }} className="col-lg-3 col-md-4 col-xs-12 col-sm-12">
            <div style={{ backgroundColor: '#121212', padding: '4px 12px', marginTop: '10px', borderRadius: '15px', marginBottom: '10px' }}>
              <ul style={{ margin: '15px' }}>
                <li><Link to="/">Accueil</Link></li>
                <li><a href="#">Recherche</a></li>
              </ul>
            </div>
            <div style={{ backgroundColor: '#121212', padding: '10px', marginTop: '10px', borderRadius: '15px', marginBottom: '10px' }}>
              <div className="flex">
                <div><h4 style={{ fontFamily: 'Noto Sans, sans-serif' }}>Bibliothéque</h4></div>
                <div id="plus">+</div>
              </div>
              <div className="content" style={{ height: '200px', overflow: 'hidden', overflowY: 'scroll' }}>
                <div style={{ backgroundColor: '#242424', padding: '10px', borderRadius: '10px' }}>
                  <div className="text-left" style={{ color: 'white', fontWeight: '700', fontSize: '15px', marginBottom: '10px', fontFamily: 'Noto Sans, sans-serif' }}>Créez Votre prémiere Playlist</div>
                  <div className="text-left" style={{ color: 'white', fontSize: '14px', fontFamily: 'Noto Sans, sans-serif', marginBottom: '12px' }}>C'est simple, nous allons vous aidez</div>
                  <div className="text-left" style={{ marginBottom: '15px', marginTop: '25px' }}><a id="btn" href="#">Créer une playlist</a></div>
                </div>
  
                <div style={{ backgroundColor: '#242424', padding: '10px', borderRadius: '10px', marginTop: '12px' }}>
                  <div className="text-left" style={{ color: 'white', fontWeight: '700', fontSize: '15px', marginBottom: '10px', fontFamily: 'Noto Sans, sans-serif' }}>Cherchons quelques podcast aux quels vous abonner</div>
                  <div className="text-left" style={{ color: 'white', fontSize: '14px', fontFamily: 'Noto Sans, sans-serif', marginBottom: '12px' }}>Nous Vous transmettrons des information sur les episodes</div>
                  <div className="text-left" style={{ marginBottom: '15px', marginTop: '25px' }}><a id="btn" href="#">Parcourir les Prodcast</a></div>
                </div>
              </div>
  
              <div style={{ marginTop: '20px', fontFamily: 'Noto Sans, sans-serif', fontSize: '14px', padding: '10px' }}><a style={{ fontFamily: 'Noto Sans, sans-serif', fontSize: '10px', color: '#b3b3b3' }} href="cookies">Cookies</a></div>
              <div style={{ marginTop: '20px', marginBottom: '12px' }}><a id="btn5" href="#">francais</a></div>
            </div>
  
          </div>
  
          <div style={{ padding: '10px' }} className="col-lg-9 col-md-8 col-xs-12 col-sm-12">
            <div className="flex2">
              <div className="flexy">
                <div className="change"> &lt; </div>
                <div className="change"> &gt; </div>
              </div>
              <div className="flexe">
                <div><Link id="btn2" to="/Inscrire">S'inscrire</Link></div>
                <div><Link id="btn1" to="/Signup">Se Connecter</Link></div>
              </div>
            </div>
            <div style={{ backgroundColor: '#121212', padding: '12px', borderRadius: '15px' }}>
              <div className="flex4">
                <div className="text-left">
                  <h3 style={{ color: 'white', fontWeight: 'bold' }}>Playlists Soptify</h3>
                </div>
                <div>
                  <a style={{ color: '#b3b3b3', fontFamily: 'Noto Sans, sans-serif', fontSize: '15px' }} href="#">Tout afficher</a>
                </div>
              </div>
              
              <div style={{ marginTop: '15px' }}>
                <div className="row" style={{ margin: '10px' }}>
                  {/* First card */}
                  <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                    <div className="card" style={{ backgroundColor: 'rgb(10 9 9)', padding: '15px', borderRadius: '15px' }}>
                      <div className="image-container">
                        <img src="/ALBUMS/wallpaperflare.com_wallpaper (9).webp" alt=""  loading="lazy" className="centered-image img-rounded" />
                      </div>
                      <p className="text-left text">Travis Scott is on top</p>
                      <p className="text2">Travis is one of the top hottest 50 celebrities</p>
                    </div>
                  </div>
              
                  {/* Second card */}
                  <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                    <div className="card" style={{ backgroundColor: 'rgb(10 9 9)', padding: '15px', borderRadius: '15px' }}>
                      <div className="image-container">
                        <img src="/ALBUMS/wallpaperflare.com_wallpaper (10).webp" alt="" loading="lazy"  className="centered-image img-rounded" />
                      </div>
                      <p className="text-left text">RapCaviar</p>
                      <p className="text2">Music from Arianna Grande, Selena Gomez, and Nikki</p>
                    </div>
                  </div>
              
                  {/* Third card */}
                  <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                    <div className="card" style={{ backgroundColor: 'rgb(10 9 9)', padding: '15px', borderRadius: '15px' }}>
                      <div className="image-container">
                        <img src="/ALBUMS/wallpaperflare.com_wallpaper (11).webp" loading="lazy" alt=""  className="centered-image img-rounded" />
                      </div>
                      <p className="text-left text">Travis Scott is on top</p>
                      <p className="text2">Rock Rap And Many More Legendary Music Are </p>
                    </div>
                  </div>
              
                  {/* Fourth card */}
                  <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                    <div className="card" style={{ backgroundColor: 'rgb(10 9 9)', padding: '15px', borderRadius: '15px' }}>
                      <div className="image-container">
                        <img src="/ALBUMS/wallpaperflare.com_wallpaper (12).webp" loading="lazy" alt="" className="centered-image img-rounded" />
                      </div>
                      <p className="text-left text">All out 2010S</p>
                      <p className="text2">This Biggest Songs Of 2010s</p><br />
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
          
        </div>
  
      </div>
      <footer>
      <div className="flexeble">
        <div>
          <div 
            style={{ 
              color: 'white', 
              fontSize: '13px', 
              fontFamily: "'Noto Sans', sans-serif", 
              letterSpacing: '1px' 
            }}
          >
            Extrait Sur Spotify
          </div>
          <div 
            style={{ 
              color: 'white', 
              fontSize: '13px', 
              fontFamily: "'Noto Sans', sans-serif", 
              letterSpacing: '1px' 
            }}
          >
            Inscrivez-vous pour écouter titres et podcasts en illimité, avec quelques coupures pubs. Pas besoin de carte de crédit.
          </div>
        </div>
        <div>
          <div>
          <Link id="btn3" to="/Inscrire">S'inscrire</Link>
          </div>
        </div>
      </div>
    </footer>
    </div>
  );
}

export default Home;