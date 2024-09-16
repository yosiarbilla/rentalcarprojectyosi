import { useEffect } from "react";
import CategoryItem from "../components/CategoryItem";
import { useProductStore } from "../stores/useProductStore";
import FeaturedProducts from "../components/FeaturedProducts";

const categories = [
	{href: "/mobil", name: "Mobil", imageUrl: "/bmwgreen.png"},
	{href: "/bus", name: "Bis", imageUrl: "/bus.png"},
	{href: "/sepeda", name: "Sepeda", imageUrl: "/sepeda.png"},
	{href: "/motor", name: "Motor", imageUrl: "/hondascoopymerah.png"},
];

const HomePage = () => {
	const { fetchFeaturedProducts, products, isLoading } = useProductStore();

	useEffect(() => {
		fetchFeaturedProducts();
	}, [fetchFeaturedProducts]);

	return (
		<div className='relative min-h-screen text-white overflow-hidden'>
			<div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
				<h1 className='text-center text-5xl sm:text-6xl font-bold text-emerald-400 mb-4'>
					Explore Our Fleet
				</h1>
				<p className='text-center text-xl text-gray-300 mb-12'>
					Discover the Best Rental Service In Town!
				</p>

				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 object-contain'>
					{categories.map((category) => (
						<CategoryItem category={category} key={category.name} />
					))}
				</div>

				{!isLoading && products.length > 0 && <FeaturedProducts featuredProducts={products} />}
			</div>
		</div>
	);
};
export default HomePage;
