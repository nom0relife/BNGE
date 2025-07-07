export interface ApiSearchResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: Game[];
}
export interface GameCardData {
    id: number;
    slug: string;
    name: string;
    background_image: string;
    released: string;
    platforms: { platform: { id: number; name: string; slug: string } }[];
    stores: { store: { id: number; name: string; slug: string } }[];
    genres: { id: number; name: string; slug: string }[];
    tags: { id: number; name: string; slug: string }[];
    rating: number;
    short_screenshots: { id: number; image: string }[];
}

export interface Game {
    id: number;
    slug: string;
    name: string;
    released: string; // ISO date
    tba: boolean;
    background_image: string;
    rating: number;
    rating_top: number;
    ratings: Record<string, any>;
    ratings_count: number;
    reviews_text_count: string;
    added: number;
    added_by_status: Record<string, any>;
    metacritic: number;
    playtime: number;
    suggestions_count: number;
    updated: string; // ISO datetime
    esrb_rating?: EsrbRating;
    platforms: PlatformInfo[];
    genres: { id: number; name: string; slug: string }[];
}

export interface EsrbRating {
    id: number;
    slug: string;
    name: string;
}

export interface PlatformInfo {
    platform: {
        id: number;
        slug: string;
        name: string;
    };
    released_at: string;
    requirements?: {
        minimum?: string;
        recommended?: string;
    };
}
