import type { Metadata } from 'next';
import { PolicyLayout } from '@/components/PolicyLayout';

export const metadata: Metadata = {
  title: 'Política de Privacidade',
};

export default function PrivacyPolicyPage() {
  return (
    <PolicyLayout title="Política de Privacidade" date="20 de março de 2026">
      <h2>1. Introdução</h2>
      <p>
        A <strong>Fast Obras</strong> (&quot;nós&quot;, &quot;nosso&quot; ou &quot;empresa&quot;), inscrita sob o CNPJ correspondente, com sede na Avenida Roberto Silveira, 251 – Centro, Miguel Pereira – RJ, CEP 26900-000, está comprometida em proteger a privacidade e os dados pessoais de seus clientes, parceiros e visitantes do site.
      </p>
      <p>
        Esta Política de Privacidade descreve como coletamos, utilizamos, armazenamos e protegemos suas informações pessoais, em conformidade com a Lei Geral de Proteção de Dados (LGPD – Lei nº 13.709/2018).
      </p>

      <h2>2. Dados que coletamos</h2>
      <p>Podemos coletar os seguintes tipos de dados pessoais:</p>
      <ul>
        <li><strong>Dados de identificação:</strong> nome completo, e-mail, telefone e empresa, fornecidos através do formulário de contato.</li>
        <li><strong>Dados de navegação:</strong> endereço IP, tipo de navegador, páginas visitadas, tempo de permanência, coletados automaticamente por cookies e ferramentas de análise.</li>
        <li><strong>Dados de comunicação:</strong> mensagens enviadas pelo formulário de contato ou por outros canais de atendimento.</li>
      </ul>

      <h2>3. Como utilizamos seus dados</h2>
      <p>Os dados coletados são utilizados para as seguintes finalidades:</p>
      <ul>
        <li>Responder a solicitações de orçamento e contato.</li>
        <li>Enviar informações sobre nossos serviços, quando autorizado.</li>
        <li>Melhorar a experiência de navegação em nosso site.</li>
        <li>Gerar análises estatísticas anônimas sobre o uso do site.</li>
        <li>Cumprir obrigações legais e regulatórias.</li>
      </ul>

      <h2>4. Compartilhamento de dados</h2>
      <p>
        Não vendemos, alugamos ou compartilhamos seus dados pessoais com terceiros para fins comerciais. Seus dados poderão ser compartilhados apenas com:
      </p>
      <ul>
        <li>Prestadores de serviço que auxiliam na operação do site (hospedagem, análise de dados), sob acordo de confidencialidade.</li>
        <li>Autoridades públicas, quando exigido por lei ou decisão judicial.</li>
      </ul>

      <h2>5. Armazenamento e segurança</h2>
      <p>
        Seus dados são armazenados em servidores seguros e protegidos por medidas técnicas e administrativas adequadas para prevenir acessos não autorizados, perda ou destruição. Mantemos seus dados apenas pelo tempo necessário para cumprir as finalidades descritas nesta política.
      </p>

      <h2>6. Seus direitos</h2>
      <p>Conforme a LGPD, você tem direito a:</p>
      <ul>
        <li>Confirmar a existência de tratamento de dados.</li>
        <li>Acessar seus dados pessoais.</li>
        <li>Corrigir dados incompletos, inexatos ou desatualizados.</li>
        <li>Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários.</li>
        <li>Revogar o consentimento a qualquer momento.</li>
      </ul>
      <p>
        Para exercer seus direitos, entre em contato conosco através do e-mail ou telefone disponíveis em nosso site.
      </p>

      <h2>7. Alterações nesta política</h2>
      <p>
        Reservamo-nos o direito de atualizar esta Política de Privacidade a qualquer momento. Recomendamos que a consulte periodicamente. A data da última atualização estará sempre indicada no topo desta página.
      </p>

      <h2>8. Contato</h2>
      <p>
        Para dúvidas, solicitações ou reclamações relacionadas à privacidade e proteção de dados, entre em contato:
      </p>
      <ul>
        <li><strong>Telefone:</strong> +55 (24) 99288-2282</li>
        <li><strong>Endereço:</strong> Avenida Roberto Silveira, 251 – Centro, Miguel Pereira – RJ, CEP 26900-000</li>
      </ul>
    </PolicyLayout>
  );
}
