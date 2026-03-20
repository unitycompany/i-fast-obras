import type { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Termos e Condições',
  robots: { index: false, follow: false },
  alternates: {
    canonical: 'https://fastobras.com.br/termos-e-condicoes',
  },
};

export default function TermsRedirect() {
  redirect('/termos-e-condicoes');
}

