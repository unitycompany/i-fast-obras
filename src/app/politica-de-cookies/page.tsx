import type { Metadata } from 'next';
import { PolicyLayout } from '@/components/PolicyLayout';

export const metadata: Metadata = {
  title: 'Política de Cookies',
};

export default function CookiePolicyPage() {
  return (
    <PolicyLayout title="Política de Cookies" date="20 de março de 2026">
      <h2>1. O que são cookies?</h2>
      <p>
        Cookies são pequenos arquivos de texto armazenados no seu navegador quando você visita um site. Eles permitem que o site reconheça seu dispositivo e memorize informações sobre sua visita, como preferências de idioma e outras configurações.
      </p>

      <h2>2. Como utilizamos cookies</h2>
      <p>O site da <strong>Fast Obras</strong> utiliza cookies para as seguintes finalidades:</p>
      <ul>
        <li><strong>Cookies essenciais:</strong> necessários para o funcionamento básico do site, como navegação entre páginas e acesso a áreas seguras.</li>
        <li><strong>Cookies de análise:</strong> nos ajudam a entender como os visitantes interagem com o site, coletando informações anônimas sobre páginas visitadas, tempo de permanência e origem do tráfego (Google Analytics / Google Tag Manager).</li>
        <li><strong>Cookies de desempenho:</strong> utilizados para monitorar e melhorar a performance do site, garantindo carregamentos rápidos e uma experiência fluida.</li>
      </ul>

      <h2>3. Cookies de terceiros</h2>
      <p>Utilizamos serviços de terceiros que podem instalar cookies no seu navegador:</p>
      <ul>
        <li><strong>Google Tag Manager / Google Analytics:</strong> coleta de dados anônimos de navegação para análise de tráfego e comportamento do usuário.</li>
      </ul>
      <p>
        Esses serviços possuem suas próprias políticas de privacidade. Recomendamos que consulte os termos de cada provedor para entender como seus dados são tratados.
      </p>

      <h2>4. Tipos de cookies por duração</h2>
      <ul>
        <li><strong>Cookies de sessão:</strong> são temporários e eliminados automaticamente quando você fecha o navegador.</li>
        <li><strong>Cookies persistentes:</strong> permanecem no seu dispositivo por um período determinado ou até serem excluídos manualmente.</li>
      </ul>

      <h2>5. Gerenciamento de cookies</h2>
      <p>
        Você pode controlar e gerenciar cookies através das configurações do seu navegador. A maioria dos navegadores permite:
      </p>
      <ul>
        <li>Visualizar os cookies armazenados no seu dispositivo.</li>
        <li>Excluir todos ou alguns cookies.</li>
        <li>Bloquear cookies de terceiros.</li>
        <li>Bloquear cookies de sites específicos.</li>
        <li>Bloquear todos os cookies.</li>
      </ul>
      <p>
        Observe que o bloqueio de cookies pode afetar a funcionalidade de algumas partes do site e a qualidade da sua experiência de navegação.
      </p>

      <h2>6. Base legal</h2>
      <p>
        O uso de cookies no site da Fast Obras está em conformidade com a Lei Geral de Proteção de Dados (LGPD – Lei nº 13.709/2018) e o Marco Civil da Internet (Lei nº 12.965/2014). Cookies essenciais são utilizados com base no legítimo interesse. Cookies de análise são utilizados mediante consentimento do usuário.
      </p>

      <h2>7. Alterações nesta política</h2>
      <p>
        Esta Política de Cookies poderá ser atualizada periodicamente para refletir mudanças nos cookies utilizados ou na legislação aplicável. A data da última atualização estará sempre indicada no topo desta página.
      </p>

      <h2>8. Contato</h2>
      <p>
        Para dúvidas sobre o uso de cookies em nosso site, entre em contato:
      </p>
      <ul>
        <li><strong>Telefone:</strong> +55 (24) 99288-2282</li>
        <li><strong>Endereço:</strong> Avenida Roberto Silveira, 251 – Centro, Miguel Pereira – RJ, CEP 26900-000</li>
      </ul>
    </PolicyLayout>
  );
}
