import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, Bell, User } from 'lucide-react';

export default function Navbar() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [searchQuery, setSearchQuery] = useState('');
    const [searchOpen, setSearchOpen] = useState(false);

	const location = useLocation();

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	useEffect(() => {
		setMobileMenuOpen(false);
	}, [location]); // fermeture du menu quand l’URL change

	const handleSearchSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (searchQuery.trim()) {
			window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
		}
	};
	return (
		<nav className={`navbar ${isScrolled ? 'scrolled' : 'not-scrolled'}`}>
			<div className="navbar__container">
				<div className="navbar__container__links">
					<Link to="/" className="navbar__logo">
						LATEFLIX
					</Link>
					<nav className="navbar__nav">
						<ul className="navbar__nav__list">
							<li>
								<Link to="/" className="navbar__nav__list__link">
									Home
								</Link>
							</li>
							<li>
								<Link to="/" className="navbar__nav__list__link">
									TV Shows
								</Link>
							</li>
							<li>
								<Link to="/" className="navbar__nav__list__link">
									Movies
								</Link>
							</li>
							<li>
								<Link to="/" className="navbar__nav__list__link">
									My List
								</Link>
							</li>
						</ul>
					</nav>
					<button
						className="btn__burger"
						onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
					>
						{mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
					</button>
				</div>
				<div className="secondaryNav">
					<div className={`search-box ${searchOpen ? 'open' : ''}`}>
						<form onSubmit={handleSearchSubmit} className="form-container">
							<button
								type="button"
								className="search-button"
								onClick={() => setSearchOpen(!searchOpen)}
								aria-label="Toggle search"
							>
								<Search size={20} />
							</button>

							{searchOpen && (
								<input
									type="text"
									placeholder="Titles, people, genres"
									className="search-input"
									value={searchQuery}
									onChange={(e) => setSearchQuery(e.target.value)}
									autoFocus
								/>
							)}
						</form>
					</div>
					<button className="btn__notification btn__account">
						<Bell size={20} />
					</button>
					<Link to="/" className="btn__account">
						<User size={20} />
					</Link>
				</div>
                {mobileMenuOpen && (
                    <div className="navbar__mobile-menu">
                        <ul className="navbar__mobile-menu__list">
                            <li>
                                <Link to="/" className="navbar__mobile-menu__list__link">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className="navbar__mobile-menu__list__link">
                                    TV Shows
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className="navbar__mobile-menu__list__link">
                                    Movies
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className="navbar__mobile-menu__list__link">
                                    My List
                                </Link>
                            </li>
                        </ul>
                    </div>
                )}

			</div>
		</nav>
	);
}
