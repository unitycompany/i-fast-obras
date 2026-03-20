import type { Metadata } from 'next';
import { PolicyLayout } from '@/components/PolicyLayout';

export const metadata: Metadata = {
  title: 'Termos e Condições',
  description:
    'Termos e Condições de Uso do site Fast Obras. Conheça as regras de utilização dos nossos serviços e conteúdos.',
  alternates: {
    canonical: 'https://fastobras.com.br/termos-e-condicoes',
  },
};

export default function TermsAndConditionsPage() {
  return (
    <PolicyLayout title="Termos e Condições de Uso" date="20 de março de 2026">
      <h2>1. Aceitação dos termos</h2>
      <p>
        Ao acessar e utilizar o site da <strong>Fast Obras</strong>, você concorda integralmente com estes Termos e Condições de Uso. Caso não concorde com qualquer disposição, recomendamos que não utilize o site.
      </p>

      <h2>2. Sobre a Fast Obras</h2>
      <p>
        A Fast Obras é uma empresa especializada em construção comercial em Steel Frame, com sede na Avenida Roberto Silveira, 251 – Centro, Miguel Pereira – RJ, CEP 26900-000. Nosso site tem como objetivo apresentar nossos serviços, portfólio e facilitar o contato com potenciais clientes.
      </p>

      <h2>3. Uso do site</h2>
      <p>O site destina-se exclusivamente ao uso pessoal e informativo. Ao utilizá-lo, você se compromete a:</p>
      <ul>
        <li>Fornecer informações verdadeiras e atualizadas nos formulários de contato.</li>
        <li>Não utilizar o site para fins ilegais ou não autorizados.</li>
        <li>Não tentar acessar áreas restritas ou interferir no funcionamento do site.</li>
        <li>Não reproduzir, distribuir ou modificar o conteúdo sem autorização prévia.</li>
      </ul>

      <h2>4. Propriedade intelectual</h2>
      <p>
        Todo o conteúdo disponível no site – incluindo textos, imagens, logotipos, vídeos, layouts, gráficos e código-fonte – é de propriedade exclusiva da Fast Obras ou de seus parceiros, estando protegido pelas leis de direitos autorais e propriedade intelectual brasileiras.
      </p>
      <p>
        É proibida a reprodução, total ou parcial, de qualquer conteúdo do site sem autorização expressa por escrito da Fast Obras.
      </p>

      <h2>5. Solicitações de orçamento</h2>
      <p>
        As solicitações de orçamento enviadas pelo formulário de contato não constituem proposta comercial vinculante. Todos os projetos serão avaliados individualmente e as condições comerciais serão formalizadas em contrato específico, quando aplicável.
      </p>

      <h2>6. Limitação de responsabilidade</h2>
      <p>A Fast Obras não se responsabiliza por:</p>
      <ul>
        <li>Indisponibilidade temporária do site por motivos técnicos ou de manutenção.</li>
        <li>Danos decorrentes do uso indevido do site por terceiros.</li>
        <li>Conteúdo de sites externos acessados por links disponibilizados em nosso site.</li>
        <li>Decisões tomadas com base exclusivamente nas informações disponíveis no site.</li>
      </ul>

      <h2>7. Modificações</h2>
      <p>
        A Fast Obras reserva-se o direito de alterar, a qualquer tempo e sem aviso prévio, o conteúdo do site e estes Termos e Condições de Uso. As alterações entram em vigor imediatamente após a publicação.
      </p>

      <h2>8. Legislação aplicável</h2>
      <p>
        Estes Termos e Condições são regidos pela legislação da República Federativa do Brasil. Quaisquer disputas serão dirimidas no foro da comarca de Miguel Pereira – RJ, com renúncia a qualquer outro, por mais privilegiado que seja.
      </p>

      <h2>9. Contato</h2>
      <p>
        Para esclarecimentos sobre estes Termos, entre em contato:
      </p>
      <ul>
        <li><strong>Telefone:</strong> +55 (24) 99288-2282</li>
        <li><strong>Endereço:</strong> Avenida Roberto Silveira, 251 – Centro, Miguel Pereira – RJ, CEP 26900-000</li>
      </ul>
    </PolicyLayout>
  );
}
