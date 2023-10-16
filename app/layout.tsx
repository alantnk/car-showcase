import { Navbar, Footer } from '@/components';
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'CarHub',
	description: 'Descubra os melhores carros do mundo',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="pt-BR">
			<body className="relative">
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
