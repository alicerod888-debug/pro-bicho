# ProBicho Clínica Veterinária 24h – Site institucional

Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer Motion · Lucide Icons.

## Rodar localmente
1. Instale o Node.js 18.18 ou superior e abra a pasta no VS Code.
2. `npm install`
3. `npm run dev` e acesse http://localhost:3000
4. Para testar a versão de produção: `npm run build && npm start`

## Publicar (GitHub + Vercel)
1. `git init && git add . && git commit -m "Site ProBicho"`
2. Crie um repositório vazio no GitHub e rode `git remote add origin <URL>` e `git push -u origin main`.
3. Em vercel.com, clique em **Add New > Project**, importe o repositório e clique em **Deploy** (nenhuma configuração extra é necessária).
4. Opcional: em **Settings > Environment Variables**, crie `NEXT_PUBLIC_SITE_URL` com o domínio final (ex.: `https://probicho24hrs.com.br`) e conecte o domínio em **Settings > Domains**.

## Onde editar
- `lib/site.ts`: telefone, WhatsApp, endereço, redes sociais, mapa e mensagens dos botões.
- `lib/content.ts`: diferenciais, serviços, equipe, estrutura e **depoimentos**.
- Depoimentos: a lista `testimonials` está vazia de propósito. Adicione apenas avaliações reais (com autorização do tutor); o carrossel aparece sozinho.

## Fotos
Os textos vieram do site atual da clínica. As fotos da equipe e da estrutura são carregadas do site atual (`i0.wp.com`). Para independência e velocidade máxima, baixe-as, coloque em `public/images/` e troque as referências em `lib/content.ts` e `components/` por `/images/arquivo.webp`.
Ainda não há fotos do PetCenter: a seção usa uma composição sem imagens e pode receber fotos reais depois.

## Notas de conteúdo
- Nenhum número de impacto (anos, atendimentos) foi exibido, pois não há dados confirmados; contadores animados só devem ser adicionados com dados reais.
- A animação respeita `prefers-reduced-motion`.
