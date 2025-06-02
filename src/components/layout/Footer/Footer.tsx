import React from "react";
import { Link } from "react-router-dom";
import './Footer.css';
import { Github, Twitter, Facebook, Instagram } from 'lucide-react';

type CreateLinkProps = {
    url: string;
    urlText: string;
    icon: React.ReactNode;
};

export default function Footer(){

    function CreateLink({ url, urlText, icon }: CreateLinkProps) {
        return (
            <li>
                <Link to={url} className="social__link">
                    {icon}
                    <span className="sr-only">{urlText}</span>
                </Link>
            </li>
        );
    }
    
       
        
    return (
			<footer className="footer">
				<div className="footer__container">
					<ul className="footer__container__social">
						<CreateLink
							url="#"
							urlText=""
							icon={<Github className="social__icon" />}
						/>
						<CreateLink
							url="#"
							urlText=""
							icon={<Twitter className="social__icon" />}
						/>
						<CreateLink
							url="#"
							urlText=""
							icon={<Facebook className="social__icon" />}
						/>
						<CreateLink
							url="#"
							urlText=""
							icon={<Instagram className="social__icon" />}
						/>
					</ul>
					<div className="social__links">
						<ul className="social__links__list">
							<CreateLink url="#" urlText="Audio Description" icon="" />
							<CreateLink url="#" urlText="Investor Relations" icon="" />
							<CreateLink url="#" urlText="Legal Notices" icon="" />
						</ul>
						<ul className="social__links__list">
							<CreateLink url="#" urlText="Help Center" icon="" />
							<CreateLink url="#" urlText="Jobs" icon="" />
							<CreateLink url="#" urlText="Cookie Preferences" icon="" />
						</ul>
						<ul className="social__links__list">
							<CreateLink url="#" urlText="Gift Cards" icon="" />
							<CreateLink url="#" urlText="Terms of Use" icon="" />
							<CreateLink url="#" urlText="Corporate Information" icon="" />
						</ul>
						<ul className="social__links__list">
							<CreateLink url="#" urlText="Media Center" icon="" />
							<CreateLink url="#" urlText="Privacy" icon="" />
							<CreateLink url="#" urlText="Contact Us" icon="" />
						</ul>
                    </div>
						<div className="footer__container__text">
							<p>
								© 2025 LATEFLIX. This product uses the TMDB API but is not
								endorsed or certified by TMDB.
							</p>
						</div>
					
				</div>
			</footer>
		);
}