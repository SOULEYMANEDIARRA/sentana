import { useEffect, useState } from "react";

function Main() {

    const [isTest2, setIsTest2] = useState(false);

    const handleClick = () => {
        setIsTest2(!isTest2);
    };

    useEffect(() => {
        // Effet de défilement pour la navigation
        const handleScroll = () => {
            const nav = document.getElementById('navbar');
            if (window.scrollY > 100) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
        };

        // Défilement fluide pour la navigation
        const smoothScroll = (e) => {
            e.preventDefault();
            const targetId = e.currentTarget.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        };

        window.addEventListener('scroll', handleScroll);
        const navLinks = document.querySelectorAll('a[href^="#"]');
        navLinks.forEach(link => {
            link.addEventListener('click', smoothScroll);
        });

        // Nettoyage
        return () => {
            window.removeEventListener('scroll', handleScroll);
            navLinks.forEach(link => {
                link.removeEventListener('click', smoothScroll);
            });
        };
    }, []);

    return (
        <div className="barbershop">
            {/* Section Hero */}
            <section className="hero-section">
                {/* Navigation */}
                <nav id="navbar">
                    <div className="logo">SENTANA</div>
                    <div className="nav-links">
                        <a href="#about">À propos</a>
                        <a href="#services">Services</a>
                        <a href="#gallery">Galerie</a>
                        <a href="#team">Équipe</a>
                        <a href="#contact">Contact</a>
                    </div>
                    <div className="nav-icons">
                        <svg onClick={handleClick} style={{ cursor: "pointer" }} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M2.75 5.25h18.5M2.75 12h18.5m-18.5 6.75h18.5" />
                        </svg>
                    </div>
                </nav>
                <div onClick={handleClick} className={`overlay2 ${isTest2 ? 'overlay3' : ''}`} >
                    <a href="#about">À propos</a>
                    <a href="#services">Services</a>
                    <a href="#gallery">Galerie</a>
                    <a href="#team">Équipe</a>
                    <a href="#contact">Contact</a>
                </div>


                {/* Fond vidéo */}
                {/* <div className="video-background">
                    <iframe
                        src="https://www.youtube.com/embed/7oT2po7yB0E?autoplay=1&mute=1&loop=1&playlist=7oT2po7yB0E"
                        frameBorder="0"
                        allow="autoplay; fullscreen"
                        allowFullScreen
                        title="YouTube video"
                    ></iframe>
                </div> */}
                <div className="overlay"></div>

                {/* Contenu Hero */}
                <div className="form-container">
                    <div className="glass-box">
                        <h2 className="form-title">Prendre un rendez-vous</h2>
                        <form>
                            <input type="text" placeholder="Prenom Nom" className="input white-bg" />
                            <input type="email" placeholder="Email" className="input dark-bg" />
                            <input type="tel" placeholder="Phone" className="input dark-bg" />
                            <div className="input-group">
                                <select className="input dark-bg datetime-local" id="datetime">
                                    <option value="">Choisir une date</option>
                                    <option value="2025-05-01 08:00">01 Mai - 08h00</option>
                                    <option value="2025-05-01 10:30">01 Mai - 10h30</option>
                                    <option value="2025-05-02 14:15">02 Mai - 14h15</option>
                                    <option value="2025-05-03 18:45">03 Mai - 18h45</option>
                                </select>
                                <button type="submit" className="submit-btn">Soumettre</button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="hero-content">
                    <div className="hero-text">
                        Bienvenue chez SENTANA, où chaque client est au centre de notre attention. Offrez-vous une coupe ou un soin de qualité dans un cadre moderne et chaleureux.                    </div>
                    <div className="hero-text2">
                        <h1 className="main-title">SENTANA-BARBER-SHOP<br /> STYLE MODERNE</h1>
                        {/* <p className="subtitle">DÉCOUVREZ NOS RÉALISATIONS</p> <br /> */}
                        {/* <a href="#gallery" className="discover-btn">Explorer</a> */}
                    </div>
                </div>

            </section>

            {/* Section À propos */}
            {/* <section id="about">
                <div className="about-image"></div>
                <div className="about-content">
                    <h2 className="section-title">Notre Héritage</h2>
                    <p className="about-text">
                        Fondé en 2010, WILERE combine des techniques de barbier traditionnelles avec un style contemporain.
                        Nos maîtres se sont formés à Londres, New York et Tokyo pour vous offrir une expérience de grooming ultime.
                    </p>
                    <p className="about-text">
                        Chaque coupe est une œuvre d'art, chaque rasage un rituel. Nous honorons les traditions intemporelles
                        tout en adoptant une esthétique moderne.
                    </p>
                    <a href="#services" className="discover-btn">Nos Services</a>
                </div>
            </section> */}
            <section className="container">
                <div>
                    {/* Texte */}
                    <div className="left">
                        <h1>
                            UN SERVICE <br /> AU-DELÀ<br />DES ATTENTES
                        </h1>
                        <p>
                            Notre salon de coiffure est un espace conçu exclusivement pour les hommes
                            qui apprécient la qualité premium, le respect du temps et un look impeccable.
                            Nous vous aiderons à avoir du style et à vous sentir confiant, en toute discrétion.
                        </p>
                        <button className="btn">Envoyer une demande →</button>
                    </div>

                    {/* Carte */}
                    <div className="map-card">
                        <img src="https://i.imgur.com/MkmFeEG.png" alt="Carte" />
                    </div>

                    {/* Infos */}
                    <div className="info">
                        <div className="info-block">
                            <div className="icon-box">📍</div>
                            <div className="info-text">
                                <h3>LOCALISATION</h3>
                                <p>
                                    Au golf à 300 mètres de MAXI-SOLIDE
                                </p>
                            </div>
                        </div>

                        <hr style={{ borderColor: "#6a5f5a", width: "100%" }} />

                        <div className="info-block">
                            <div className="icon-box">☎️</div>
                            <div className="info-text">
                                <h3>+1 234 5678</h3>
                                <p>
                                    Mardi – Dimanche : 13h – 23h /
                                    Lundi : fermé
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section Services */}
            {/* <section id="services">
                <h2 className="section-title">Nos Services</h2>
                <div className="services-grid">
                    <div className="service-card">
                        <div className="service-icon">✂️</div>
                        <h3 className="service-title">Coupe Classique</h3>
                        <p>Une coupe de précision utilisant des techniques traditionnelles</p>
                        <p className="service-price">À partir de 50€</p>
                    </div>
                    <div className="service-card">
                        <div className="service-icon">🧔</div>
                        <h3 className="service-title">Taillage de Barbe</h3>
                        <p>Forme experte et conditionnement</p>
                        <p className="service-price">À partir de 35€</p>
                    </div>
                    <div className="service-card">
                        <div className="service-icon">🧴</div>
                        <h3 className="service-title">Traitement Royal</h3>
                        <p>Coupe, rasage à la serviette chaude et massage facial</p>
                        <p className="service-price">120€</p>
                    </div>
                </div>
            </section> */}

            {/* Section Galerie */}
            <section id="gallery">
                <h2 className="section-title">Nos Réalisations</h2>
                <div className="gallery-grid">
                    <div className="gallery-item">
                        <img src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Style de coupe 1" />
                    </div>
                    <div className="gallery-item">
                        <img src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Style de coupe 2" />
                    </div>
                    <div className="gallery-item">
                        <img src="https://images.unsplash.com/photo-1583864697784-a0efc8379f70?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Style de coupe 3" />
                    </div>
                    <div className="gallery-item">
                        <img src="https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Style de coupe 6" />
                    </div>
                    <div className="gallery-item">
                        <img src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Style de coupe 5" />
                    </div>
                    <div className="gallery-item">
                        <img src="https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Style de coupe 6" />
                    </div>

                </div>
            </section>
            <section id="services">
                <h2 className="section-title">Nos Services</h2>
                <div className="services-grid">
                    <div className="service-card">
                        <div className="service-icon">✂️</div>
                        <h3 className="service-title">Coupe Classique</h3>
                        <p>Une coupe de précision utilisant des techniques traditionnelles</p>
                        <p className="service-price">À partir de 1000 FCFA </p>
                    </div>
                    <div className="service-card">
                        <div className="service-icon">🧔</div>
                        <h3 className="service-title">Taillage de Barbe</h3>
                        <p>Forme experte et conditionnement</p>
                        <p className="service-price">À partir de 1000 FCFA</p>
                    </div>
                    <div className="service-card">
                        <div className="service-icon">🧴</div>
                        <h3 className="service-title">Gommage</h3>
                        <p>Nettoyage en profondeur de la peau pour éliminer les cellules mortes et raviver l’éclat du visage</p>
                        <p className="service-price">À partir de 1500 FCFA</p>
                    </div>

                </div>
            </section>

            {/* Section Équipe */}
            {/* <section id="team">
                <h2 className="section-title">Nos Maîtres</h2>
                <div className="team-grid">
                    <div className="team-member">
                        <div className="member-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1583864697784-a0efc8379f70?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80')" }}></div>
                        <h3 className="member-name">Marc Antoine</h3>
                        <p className="member-role">Maître Barbier</p>
                    </div>
                    <div className="team-member">
                        <div className="member-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1583864697784-a0efc8379f70?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80')" }}></div>
                        <h3 className="member-name">Jean-Luc</h3>
                        <p className="member-role">Spécialiste Barbe</p>
                    </div>
                    <div className="team-member">
                        <div className="member-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1583864697784-a0efc8379f70?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80')" }}></div>
                        <h3 className="member-name">Pierre</h3>
                        <p className="member-role">Artiste Coiffeur</p>
                    </div>
                </div>
            </section> */}

            {/* Section Contact */}
            <section id="contact" className="contact-section">
                <h2 className="section-title">Nous Trouver</h2>

                <div className="contact-info">
                    <p>Au golf <br /> près de MAXI-SOLIDE</p>
                    <p>Ouvert du mardi au dimanche<br />13h – 23h</p>
                    <p>+33 1 23 45 67 89</p>
                </div>

                <div className="social-links">
                    <a href="#" aria-label="Facebook">Facebook</a>
                    <a href="#" aria-label="Twitter">Twitter</a>
                </div>

                <p className="copyright">© 2025 SENTANA. Tous droits réservés.</p>
            </section>

        </div>
    );
}

export default Main;