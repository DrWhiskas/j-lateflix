import React, { use } from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { ContentItem, MediaType } from '../../types/types';
import { getImageUrl } from '../../services/tmdbApi';

interface ContentCardProps {
	item: ContentItem;
	mediaType: MediaType;
}

export default function ContentCard({ item, mediaType }: ContentCardProps) {

	const [isHovered, setIsHovered] = useState(false);


	const title = 'title' in item ? item.title : item.name;
	const releaseDate =
		'release_date' in item ? item.release_date : item.first_air_date;
	const year = releaseDate ? new Date(releaseDate).getFullYear() : '';


	return <div className="contentCard"
		onMouseEnter={() => setIsHovered(true)}
		onMouseLeave={() => setIsHovered(false)}
	>
        <Link to={`/${mediaType}/${item.id}`} className="contentCard__link">
		<img
			src={getImageUrl(item.poster_path)}
			alt={title}
			className="contentCard__image"
		/>
		{ isHovered && (
			<div className="contentCard__overlay">
				<div className="contentCard__title">{title}</div>
				<div className="contentCard__year">{year}</div>
				<div className="contentCard__rating">
					{item.vote_average ? item.vote_average.toFixed(1) : 'N/A'}
					<Heart className="contentCard__heart" />
				</div>
			</div>
		) }
		</Link>
    </div>;
}
