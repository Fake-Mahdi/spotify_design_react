import React from 'react';
import '../styles/style.css'; 
import styles from '../styles/Home.module.css';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper and SwiperSlide components
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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
              <div className="text-center" style={{ marginTop: '20px', marginBottom: '12px' }}><a id="thebutton" href="#">francais</a></div>
            </div>
  
          </div>
  
          <div style={{ padding: '10px' }} className="col-lg-9 col-md-8 col-xs-12 col-sm-12 ">
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
              
              <div className='custom-scrollbar' style={{ marginTop: '15px' }}>
              <div className="flex4">
                <div className="text-left">
                  <h3 className="title" style={{ color: 'white', fontWeight: 'bold' }}>Artistes Populaires</h3>
                </div>
                <div>
                  <a className="link"  style={{ color: '#b3b3b3', fontFamily: 'Noto Sans, sans-serif', fontSize: '15px' }} href="#">Tout afficher</a>
                </div>
              </div>

                <div>
                <Swiper
      spaceBetween={15} // Space between slides
      slidesPerView={5} // 5 slides per view on large screens
      breakpoints={{
        320: { slidesPerView: 1 }, // 1 slide per view on small screens
        640: { slidesPerView: 2 }, // 2 slides per view on slightly larger screens
        768: { slidesPerView: 3 }, // 3 slides per view on medium screens
        1024: { slidesPerView: 4 }, // 4 slides per view on larger screens
        1280: { slidesPerView: 5 }  // 5 slides per view on large screens
      }}
    >
      <SwiperSlide>
        <div className="card" style={{ padding: '15px', borderRadius: '15px' }}>
          <div className="image-container">
            <img src="/artist/toto.webp" loading="lazy" alt="toto" className="centered-image img-rounded" style={{ borderRadius: '50%' }} />
          </div>
          <p className="text-left texty">ElGrandeToto</p>
          <p className="texty2">Artist</p>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="card" style={{ padding: '15px', borderRadius: '15px' }}>
          <div className="image-container">
            <img src="/artist/gims.webp" loading="lazy" alt="toto" className="centered-image img-rounded" style={{ borderRadius: '50%' }} />
          </div>
          <p className="text-left texty">GIMS</p>
          <p className="texty2">Artist</p>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="card" style={{ padding: '15px', borderRadius: '15px' }}>
          <div className="image-container">
            <img src="/artist/stormy.webp" loading="lazy" alt="toto" className="centered-image img-rounded" style={{ borderRadius: '50%' }} />
          </div>
          <p className="text-left texty">Stormy</p>
          <p className="texty2">Artist</p>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="card" style={{ padding: '15px', borderRadius: '15px' }}>
          <div className="image-container">
            <img src="/artist/7liwa.webp" loading="lazy" alt="toto" className="centered-image img-rounded" style={{ borderRadius: '50%' }} />
          </div>
          <p className="text-left texty">7liwa</p>
          <p className="texty2">Artist</p>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="card" style={{ padding: '15px', borderRadius: '15px' }}>
          <div className="image-container">
            <img src="/artist/snor.webp" loading="lazy" alt="toto" className="centered-image img-rounded" style={{ borderRadius: '50%' }} />
          </div>
          <p className="text-left texty">snor</p>
          <p className="texty2">Artist</p>
        </div>
      </SwiperSlide>
      
      {/* Add more SwiperSlide components for additional cards */}
    </Swiper>
                </div>

              <div className="flex4">
                <div className="text-left">
                  <h3 className="title" style={{ color: 'white', fontWeight: 'bold' }}>Playlists Soptify</h3>
                </div>
                <div>
                  <a className="link"  style={{ color: '#b3b3b3', fontFamily: 'Noto Sans, sans-serif', fontSize: '15px' }} href="#">Tout afficher</a>
                </div>
              </div>

              <div style={{ marginTop: '10px' }}>
              <Swiper
      spaceBetween={30}
      slidesPerView={4}  // Default to 4 slides per view for large screens
      breakpoints={{
        320: { slidesPerView: 1 },   // For mobile devices
        640: { slidesPerView: 2 },   // For tablets
        1024: { slidesPerView: 3 },  // For medium-sized screens
        1200: { slidesPerView: 4 },  // For large screens, show 4 slides
        1440: { slidesPerView: 4 },  // For extra large screens, show 4 slides
      }}
      pagination={{ clickable: true }}
    >
      {/* First card */}
      <SwiperSlide>
        <div className="card" style={{ padding: '15px', borderRadius: '15px' }}>
          <div className="image-container">
            <img
              src="/ALBUMS/wallpaperflare.com_wallpaper (9).webp"
              alt="ASTO WORLD"
              loading="lazy"
              className="centered-image img-rounded"
            />
          </div>
          <p className="text-left text">ASTO WORLD</p>
          <p className="text2">Travis Scott</p>
        </div>
      </SwiperSlide>

      {/* Second card */}
      <SwiperSlide>
        <div className="card" style={{ padding: '15px', borderRadius: '15px' }}>
          <div className="image-container">
            <img
              src="/ALBUMS/wallpaperflare.com_wallpaper (10).webp"
              alt="SWEETNER"
              loading="lazy"
              className="centered-image img-rounded"
            />
          </div>
          <p className="text-left text">SWEETNER</p>
          <p className="text2">Arianna Grande</p>
        </div>
      </SwiperSlide>

      {/* Third card */}
      <SwiperSlide>
        <div className="card" style={{ padding: '15px', borderRadius: '15px' }}>
          <div className="image-container">
            <img
              src="/ALBUMS/wallpaperflare.com_wallpaper (11).webp"
              alt="GINE"
              loading="lazy"
              className="centered-image img-rounded"
            />
          </div>
          <p className="text-left text">GINE</p>
          <p className="text2">6ix9ine</p>
        </div>
      </SwiperSlide>

      {/* Fourth card */}
      <SwiperSlide>
        <div className="card" style={{ padding: '15px', borderRadius: '15px' }}>
          <div className="image-container">
            <img
              src="/ALBUMS/wallpaperflare.com_wallpaper (12).webp"
              alt="24K MAGIC"
              loading="lazy"
              className="centered-image img-rounded"
            />
          </div>
          <p className="text-left text">24K MAGIC</p>
          <p className="text2">Bruno Mars</p>
        </div>
      </SwiperSlide>
    </Swiper>
              </div>

              <div className="flex4">
                <div className="text-left">
                  <h3 className="title" style={{ color: 'white', fontWeight: 'bold' }}>Albums Populaires</h3>
                </div>
                <div>
                  <a className="link"  style={{ color: '#b3b3b3', fontFamily: 'Noto Sans, sans-serif', fontSize: '15px' }} href="#">Tout afficher</a>
                </div>
              </div>

              <div style={{ marginTop: '10px' }}>
              <Swiper
      spaceBetween={30}
      slidesPerView={4}  // Default to 4 slides per view for large screens
      breakpoints={{
        320: { slidesPerView: 1 },   // For mobile devices
        640: { slidesPerView: 2 },   // For tablets
        1024: { slidesPerView: 3 },  // For medium-sized screens
        1200: { slidesPerView: 4 },  // For large screens, show 4 slides
        1440: { slidesPerView: 4 },  // For extra large screens, show 4 slides
      }}
      pagination={{ clickable: true }}
    >
      {/* First card */}
      <SwiperSlide>
        <div className="card" style={{ padding: '15px', borderRadius: '15px' }}>
          <div className="image-container">
            <img
              src="/tracks/inconnu.webp"
              alt="ASTO WORLD"
              loading="lazy"
              className="centered-image img-rounded"
            />
          </div>
          <p className="text-left text">inconnu</p>
          <p className="text2">Artist</p>
        </div>
      </SwiperSlide>

      {/* Second card */}
      <SwiperSlide>
        <div className="card" style={{ padding: '15px', borderRadius: '15px' }}>
          <div className="image-container">
            <img
              src="/tracks/morphine.webp"
              alt="SWEETNER"
              loading="lazy"
              className="centered-image img-rounded"
            />
          </div>
          <p className="text-left text">Morphine</p>
          <p className="text2">Artist</p>
        </div>
      </SwiperSlide>

      {/* Third card */}
      <SwiperSlide>
        <div className="card" style={{ padding: '15px', borderRadius: '15px' }}>
          <div className="image-container">
            <img
              src="/tracks/shobe.webp"
              alt="GINE"
              loading="lazy"
              className="centered-image img-rounded"
            />
          </div>
          <p className="text-left text">Shobee</p>
          <p className="text2">Artist</p>
        </div>
      </SwiperSlide>

      {/* Fourth card */}
      <SwiperSlide>
        <div className="card" style={{ padding: '15px', borderRadius: '15px' }}>
          <div className="image-container">
            <img
              src="/tracks/L'ferda.webp"
              alt="24K MAGIC"
              loading="lazy"
              className="centered-image img-rounded"
            />
          </div>
          <p className="text-left text">L'ferda</p>
          <p className="text2">Artist</p>
        </div>
      </SwiperSlide>
    </Swiper>
              </div>

              <div style={{ margin: '15px'}} className="row" >

              <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12" >
              <h4 style={{ color: 'white' }}>Société</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
              <li><a href="#" className="footer-link">A propos</a></li>
              <li><a href="#" className="footer-link">Offres d'emploi</a></li>
              <li><a href="#" className="footer-link">For the Record</a></li>
              </ul>
              </div>

              <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12" >
              <h4 style={{ color: 'white' }}>Communautés</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
              <li><a href="#" className="footer-link">Espace artistes</a></li>
              <li><a href="#" className="footer-link">Développeurs</a></li>
              <li><a href="#" className="footer-link">Campagnes publicitaires</a></li>
              <li><a href="#" className="footer-link">Investisseurs</a></li>
              <li><a href="#" className="footer-link">Fournisseurs</a></li>
              </ul>
              </div>

              <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12" >
              <h4 style={{ color: 'white' }}>Liens utiles</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
              <li><a href="#" className="footer-link">Assistance</a></li>
              <li><a href="#" className="footer-link">Appli mobile gratuite</a></li>
              </ul>
              </div>

              <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12" >
              <h4 style={{ color: 'white' }}>Abonnements Spotify</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
              <li><a href="#" className="footer-link">Premium Personnel</a></li>
              <li><a href="#" className="footer-link">Premium Duo</a></li>
              <li><a href="#" className="footer-link">Premium Famille</a></li>
              <li><a href="#" className="footer-link">Premium Étudiants</a></li>
              <li><a href="#" className="footer-link">Spotify Free</a></li>
              </ul>
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