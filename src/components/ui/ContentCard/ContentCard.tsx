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
	const title = 'title' in item ? item.title : item.name;
	const releaseDate =
		'release_date' in item ? item.release_date : item.first_air_date;
	const year = releaseDate ? new Date(releaseDate).getFullYear() : '';


	return <div className="contentCard">
        
    </div>;
}
