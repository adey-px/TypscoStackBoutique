/**
 * Define Type for Products
 */
export type Product = {
	_id?: string;
	name: string;
	slug: string;
	category: string;
	description: string;
	image: string;
	brand: string;
	price: number;
	stockNum: number;
	ratings: number;
	reviews: number;
};
