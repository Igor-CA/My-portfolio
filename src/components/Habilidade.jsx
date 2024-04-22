export default function Habilidade({ icon, name, description }) {
	return (
		<li className="flex items-center justify-center max-w-fit m-auto">
			<div className="max-w-prose">
				<h3 className="font-bold">{name}</h3>
				<p className="my-2.5 indent-8 leading-7">{description}</p>
			</div>
			<div className="text-7xl ">
				{icon}
			</div>
		</li>
	);
}
