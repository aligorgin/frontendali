export default function Page({ params }: { params: { slug: string } }) {
	console.log(params);
	return <div>hi from {params.slug}</div>;
}
