// ==================== I18N STRINGS ====================
const STR = {
  pt: {
    artistTag: "Illustrator · Comic Colorist",
    navCommissions: "Commissions",
    navPortfolio: "Portfolio",
    navReviews: "Reviews",

    revTitle: "Reviews",
    revSub: "Feedback de clientes anteriores",
    hoverHint: "Clique para configurar",
    fromPrefix: "A partir de",
    lblFinalizacao: "Finalização",
    lblPages: "Número de páginas",
    perPageTag: "/ página",
    pagesUnit: "páginas",
    lblUso: "Uso",
    usoPersonal: "Personal",
    usoComercial: "Comercial",
    lblTotal: "Total",
    lblPayment: "Formas de pagamento",
    tosSummary: "Termos de Serviço",
    tosModalTitle: "Termos de Serviço — completo",
    acceptLabel: "Eu aceito os Termos de Serviço",
    startRequest: "Start Request",
    acceptWarning: "Você precisa aceitar os Termos de Serviço antes de pedir a commission.",
    comercialSuffix: " (uso comercial — licença ampliada)",
    galleryCaption: "Exemplos desse formato",
    reqTitle: "Commission Request",
    reqIntro: "Depois que você enviar o pedido, vou revisar pra ver se sou a pessoa certa pro que você precisa. Se sim, envio uma proposta com o preço e prazo exatos antes de seguirmos. Dê o máximo de detalhes possível!",
    reqGuestLabel: "Pedido como convidado",
    reqLblName: "Seu nome*",
    reqLblContact: "Seus dados de contato",
    reqRequiredTag: "Obrigatório",
    reqVerifyBtn: "Verificar e-mail",
    reqVerifyValid: "E-mail válido.",
    reqVerifyInvalid: "Esse e-mail não parece válido. Confira e tente de novo.",
    slotsOpen: "{n}/{max} vagas disponíveis",
    slotsClosed: "Sem vagas no momento",
    slotsLoading: "Carregando vagas…",
    modalSlotsOpen: "{n} de {max} vagas disponíveis na fila",
    modalSlotsClosed: "Não há vagas disponíveis na fila no momento",
    modalSlotsLoading: "Verificando vagas disponíveis…",
    noSlotsTitle: "Sem vagas disponíveis",
    noSlotsText: "No momento não há vagas disponíveis na fila. Desculpe pelo transtorno — fique de olho, novas vagas abrem regularmente!",
    reqVerifyEmpty: "Digite um e-mail antes de verificar.",
    reqOptionalTag: "Opcional",
    reqLblDeadline: "Você tem um prazo pra esse projeto?",
    reqDeadlineHelp: "Refere-se à sua data de conclusão preferida. Não sou obrigada a entregar até essa data — depois de receber a proposta, confirme se o prazo garantido encaixa com o seu. Taxa de urgência pode ser aplicada.",
    reqLblBriefPersonagem: "Descrição do personagem",
    reqBriefHelpPersonagem: "Descrição rápida da comissão — os detalhes serão discutidos assim que eu entrar em contato.",
    reqLblBriefIlustracao: "Descrição da ilustração",
    reqBriefHelpIlustracao: "Descrição rápida da ilustração — os detalhes serão discutidos assim que eu entrar em contato.",
    reqLblBriefOutro: "Descreva o que você precisa",
    reqBriefHelpOutro: "Descrição rápida do que você tem em mente — os detalhes serão discutidos assim que eu entrar em contato.",
    reqDescPlaceholder: "Descreva aqui...",
    reqDescCounter: "{n}/500 palavras",
    reqDescTooLong: "Limite de 500 palavras excedido — resuma um pouco antes de enviar.",
    reqPriceLabel: "Preço base",
    reqPriceDisclaimer: "Esse valor é uma estimativa automática baseada no seu pedido e não deve ser considerado o preço final da commission. Posso cotar um valor diferente após revisar o pedido.",
    reqAgreeHtml: 'Ao enviar um pedido, você concorda com os {link} da artista.',
    reqAgreeLinkText: "Termos de Serviço",
    reqSubmit: "Submit Request",
    reqSending: "Enviando pedido...",
    reqSubmittedMsg: "Pedido enviado! Vou revisar e te responder por e-mail em breve.",
    reqSubmitError: "Algo deu errado ao enviar o pedido. Tenta de novo em alguns instantes ou me manda uma mensagem direta.",
    reqDuplicateTitle: "Pedido já enviado",
    reqDuplicateText: "Você já enviou esse mesmo pedido recentemente!!! Aguarde minha resposta por e-mail antes de enviar de novo — Se quiser fazer um pedido de um tipo diferente de commission, pode enviar normalmente.",
    reqCooldownText: "Aguarde só mais alguns instantes antes de enviar de novo.",
    reqDailyCapText: "Você atingiu o limite de pedidos por hoje. Tenta de novo amanhã, ou me manda uma mensagem direta se for urgente.",
    confirmModalTitle: "Pedido enviado!",
    confirmModalText: "Recebi sua commission request. Vou revisar os detalhes e te responder por e-mail em breve — fique de olho na caixa de entrada (e no spam).",
    confirmModalClose: "Voltar ao início",
    otherCardDesc: "Não achou o que precisa nas categorias acima? Me conta o que você tem em mente.",
    steamCapsuleCardDesc: "Arte para capa/capsule do seu jogo na Steam — header, capsule pequena e grande.",
    aCombinarPrice: "Valor a combinar",
    tosPreviewText: "50/50 ou pagamento integral via PayPal. 50% do total não é reembolsável após entrar na fila. Clique no ícone pra ler o TOS completo.",
    tosUsagePersonal: "Sua commission é apenas para uso pessoal — você não pode revender meu trabalho, usá-lo comercialmente ou de forma empresarial sem acordo prévio.",
    tosUsageComercial: "Sua commission é para uso comercial/empresarial, conforme combinado — isso te dá licença para usá-la comercialmente (ex: produtos, merchandising, material promocional, capa/capsule de jogo, etc.), mas a titularidade e os direitos autorais da arte permanecem comigo. Revenda da arte em si (como arquivo digital ou impressão avulsa) não está incluída e segue exigindo acordo prévio.",
    tosHtml: `
      <p><strong>Pagamento</strong></p>
      <p>Você pode pagar 50/50 (50% no início, 50% após a pintura finalizada) ou o valor integral no início. Pagamentos somente via PayPal, em USD.</p>
      <p>Os preços podem variar dependendo da complexidade do pedido. Comunicação é importante — seja o mais claro possível. Pode haver cobrança extra se eu tiver que lidar com alterações constantes causadas por falta de comunicação clara.</p>
      <p><strong>Processo</strong></p>
      <p>1. Depois de negociarmos o preço, envio a fatura e começo a trabalhar assim que o pagamento for confirmado.</p>
      <p>2. Com o pagamento confirmado, preciso de uma descrição detalhada do personagem — quanto mais informação, melhor. Você também pode enviar referências visuais, explicando qual parte da imagem quer que eu use e como. Tudo que não for especificado, eu preencho com minha própria criatividade artística.</p>
      <p>3. O pedido é feito por etapas, e a cada etapa envio uma atualização e peço feedback. Depois que uma etapa é aprovada, não volto atrás pra mudar coisas grandes nas etapas seguintes. Atualizações acontecem pelo menos uma vez por semana.</p>
      <p>4. Só envio o arquivo final depois que a commission estiver totalmente paga.</p>
      <p><strong>Política de reembolso e termos</strong></p>
      <p>{{USAGE_CLAUSE}}</p>
      <p>Eu reservo o direito de usar qualquer commission finalizada pra me promover e postar em redes sociais, a menos que tenhamos combinado o contrário explicitamente.</p>
      <p>50% do valor total combinado não é reembolsável — essa parte reserva sua vaga na minha fila de trabalho, independente do valor pago em faturas específicas.</p>
      <p>Seu pagamento não será reembolsado de forma alguma se eu já tiver começado e avançado algumas etapas do seu pedido — você está pagando pelo tempo e serviço investidos, não só pelo produto final.</p>
      <p>Você concorda em creditar meu trabalho quando for compartilhá-lo; pode usar minhas redes sociais pra isso.</p>
      <p>Tudo discutido por e-mail ou qualquer outro meio de comunicação vale tanto quanto estes termos escritos.</p>
      <p>Não permito a criação de NFTs usando nenhum dos meus trabalhos.</p>
      <p>Este é um serviço digital — não há item físico a ser enviado ou entregue.</p>
      <p>Ao pagar a fatura, você confirma que leu e concorda com estes Termos de Serviço.</p>
    `
  },
  en: {
    artistTag: "Illustrator · Comic Colorist",
    navCommissions: "Commissions",
    navPortfolio: "Portfolio",
    navReviews: "Reviews",

    revTitle: "Reviews",
    revSub: "Feedback from past clients",
    hoverHint: "Click to configure",
    fromPrefix: "From",
    lblFinalizacao: "Finish",
    lblPages: "Number of pages",
    perPageTag: "/ page",
    pagesUnit: "pages",
    lblUso: "Usage",
    usoPersonal: "Personal",
    usoComercial: "Commercial",
    lblTotal: "Total",
    lblPayment: "Payment methods",
    tosSummary: "Terms of Service",
    tosModalTitle: "Terms of Service — full",
    acceptLabel: "I accept the Terms and Services",
    startRequest: "Start Request",
    acceptWarning: "You need to accept the Terms of Service before requesting a commission.",
    comercialSuffix: " (commercial use — extended license)",
    galleryCaption: "Examples of this format",
    reqTitle: "Commission Request",
    reqIntro: "Once you submit your request, I'll review it to determine if I'm the right fit for your needs. If so, I'll send you a proposal with your exact pricing and timing before we move forward. Please provide as much detail upfront as possible!",
    reqGuestLabel: "Requesting as Guest",
    reqLblName: "Your name*",
    reqLblContact: "Your contact details",
    reqRequiredTag: "Required",
    reqVerifyBtn: "Verify email",
    reqVerifyValid: "Email looks valid.",
    reqVerifyInvalid: "This email doesn't look valid. Please check it and try again.",
    slotsOpen: "{n}/{max} slots available",
    slotsClosed: "No slots available right now",
    slotsLoading: "Loading slots…",
    modalSlotsOpen: "{n} of {max} slots available in the queue",
    modalSlotsClosed: "There are no slots available in the queue right now",
    modalSlotsLoading: "Checking slot availability…",
    noSlotsTitle: "No slots available",
    noSlotsText: "There are no open slots in the queue right now. Sorry for the inconvenience — new slots open up regularly, so check back soon!",
    reqVerifyEmpty: "Type an email before verifying.",
    reqOptionalTag: "Optional",
    reqLblDeadline: "Do you have a deadline for this project?",
    reqDeadlineHelp: "Refers to your preferred completion date. Artists are not required to deliver by this date. Once you receive a proposal, make sure the guaranteed delivery date fits with your timeline before accepting. Rush order fees may apply.",
    reqLblBriefPersonagem: "Character description",
    reqBriefHelpPersonagem: "Quick description of the commission — details will be discussed once I get in touch.",
    reqLblBriefIlustracao: "Illustration description",
    reqBriefHelpIlustracao: "Quick description of the illustration — details will be discussed once I get in touch.",
    reqLblBriefOutro: "Describe what you need",
    reqBriefHelpOutro: "Quick description of what you have in mind — details will be discussed once I get in touch.",
    reqDescPlaceholder: "Describe it here...",
    reqDescCounter: "{n}/500 words",
    reqDescTooLong: "500-word limit exceeded — trim it down a bit before submitting.",
    reqPriceLabel: "Base price",
    reqPriceDisclaimer: "Note that this is an auto-generated estimate based on your request and should not be considered as the final price of the commission. The artist may quote you a different price after reviewing your request.",
    reqAgreeHtml: 'By submitting a request, you agree to the artist {link}.',
    reqAgreeLinkText: "Terms of Service",
    reqSubmit: "Submit Request",
    reqSending: "Sending request...",
    reqSubmittedMsg: "Request submitted! I'll review it and get back to you by email soon.",
    reqSubmitError: "Something went wrong sending the request. Try again in a bit or reach out to me directly.",
    reqDuplicateTitle: "Request already sent",
    reqDuplicateText: "You've already sent this exact request recently!!! Please wait for my email reply before sending it again — If you would like to requests a different commission type it can still be sent normally.",
    reqCooldownText: "Please wait just a few more seconds before submitting again.",
    reqDailyCapText: "You've reached the request limit for today. Please try again tomorrow, or reach out to me directly if it's urgent.",
    confirmModalTitle: "Request sent!",
    confirmModalText: "I've received your commission request. I'll review the details and get back to you by email soon — keep an eye on your inbox (and spam folder).",
    confirmModalClose: "Back to top",
    otherCardDesc: "Didn't find what you need in the categories above? Tell me what you have in mind.",
    steamCapsuleCardDesc: "Cover/capsule artwork for your Steam game — header, small and large capsule.",
    aCombinarPrice: "Price to be discussed",
    tosPreviewText: "50/50 or full payment via PayPal. 50% of the total is non-refundable once you're queued. Click the icon to read the full TOS.",
    tosUsagePersonal: "Your commission is for personal use only — you cannot resell my work, or use it commercially or for business purposes, without prior agreement.",
    tosUsageComercial: "Your commission is for commercial/business use, as agreed — this grants you a license to use it commercially (e.g. products, merchandising, promotional material, game cover/capsule, etc.), but ownership and copyright of the art remain with me. Reselling the art itself (as a digital file or standalone print) is not included and still requires prior agreement.",
    tosHtml: `
      <p><strong>Payment</strong></p>
      <p>You can either do 50/50 (50% of the payment in the beginning, and 50% after the painting is finished), or the full payment in the beginning. Payments only through PayPal, in USD only.</p>
      <p>Prices may vary depending on the complexity of the request. Communication is important, so remember to be as clear as possible — there can be extra charges if I have to deal with constant alterations due to miscommunication.</p>
      <p><strong>Process</strong></p>
      <p>1. After we negotiate a price, I'll send you the invoice and will start working after confirming the payment.</p>
      <p>2. Once the payment is confirmed, I'll need a detailed description of the subject — the more information, the better. You can also send image references, explaining which part of the image you'd like me to use and how. Anything you don't specify, I'll fill in with my own artistic creativity.</p>
      <p>3. The request will be done step by step, and on each step I'll send you an update and ask for feedback. Once a step is approved, I won't go back to change big things in later stages. Updates are made at least once a week.</p>
      <p>4. I'll only send the final file after the commission is fully paid.</p>
      <p><strong>Refund policy &amp; terms</strong></p>
      <p>{{USAGE_CLAUSE}}</p>
      <p>I reserve the right to use any finished commission to promote myself and post it on social media, unless we've explicitly agreed otherwise.</p>
      <p>50% of the total agreed value is non-refundable — this reserves your spot on my work queue, regardless of the specific invoice amounts paid.</p>
      <p>Your payment won't be refunded at all once I've started working on your piece and advanced a few steps — you're paying for invested time and services, not solely the finished product.</p>
      <p>You agree to credit my work when it's shared; you can use my social media tags for crediting purposes.</p>
      <p>Everything discussed through email or any other communication channel is considered as valid as these written terms.</p>
      <p>I do not allow any NFT to be made using any of my work.</p>
      <p>This is a digital service — there won't be a physical item shipped or delivered.</p>
      <p>By paying the invoice, you confirm you've read and agree to this Terms of Service.</p>
    `
  }
};

let LANG = 'en';

// ==================== IMAGES ====================
// Folder layout to drop real files into (relative to the repo root):
//   images/commissions/gallery/<formatoKey>/<finalKey>/1.jpg..4.jpg — used
//     BOTH in the config modal's gallery AND cycled on the front card
//     (which shows image 1 from each finalização tier) — one set of files
//     covers both places, no separate "cards" folder to keep in sync.
//   images/portfolio/<n>.jpg                                — one file per
//     piece, used both as the grid thumbnail (resized on the fly via wsrv,
//     see WSRV_ORIGIN/wsrvThumb below) and as the lightbox full image.
//   images/avatar/avatar.jpg                                — header avatar
//   images/hero/hero.jpg                                    — header background art
//   images/reviews/<n>.jpg                                  — round avatar for the
//     n-th reviewer in reviewsData (1-indexed, matches array order)
//
// Optional per-image captions: drop a `captions.md` file next to any of
// the numbered folders above (images/portfolio/captions.md, or
// images/commissions/gallery/<formatoKey>/<finalKey>/captions.md) to give
// individual images their own title/description instead of the generated
// "Piece N" title or the shared category description. See the
// PORTFOLIO CAPTIONS section further down for the exact file format.
const IMG_BASE = 'images/';
const IMG_PATHS = {
  galleryExample: (formatoKey, finalKey, n) => `${IMG_BASE}commissions/gallery/${formatoKey}/${finalKey}/${n}.jpg`,
  // Manually-curated portfolio set — always leads the ALL tab, in this
  // exact numeric order. Drop numbered files in (1.jpg, 2.jpg, ...); new
  // ones are picked up automatically on next load. These are untagged
  // (no category), so they only ever show up in the ALL tab — category
  // tabs are fed exclusively by the commission gallery auto-pull below.
  // Single file serves both the grid thumbnail and the lightbox full view
  // (same pattern as galleryExample above) — no separate thumb/full pair.
  portfolioImage: (n) => `${IMG_BASE}portfolio/${n}.jpg`,
  avatar:         () => `${IMG_BASE}avatar/avatar.jpg`,
  hero:           () => `${IMG_BASE}hero/hero.jpg`,
  // One round avatar file per reviewer, matched to reviewsData by array
  // index (1-based) — images/reviews/1.jpg is reviewsData[0]'s avatar, etc.
  // Falls back to the placeholder circle automatically if missing, same
  // pattern as every other tryBgImage() spot on the site.
  reviewAvatar:   (n) => `${IMG_BASE}reviews/${n}.jpg`,
  portfolioCaptions: () => `${IMG_BASE}portfolio/captions.md`,
  galleryCaptions: (formatoKey, finalKey) => `${IMG_BASE}commissions/gallery/${formatoKey}/${finalKey}/captions.md`
};
const CARD_CYCLE_INTERVAL_MS = 4500; // dwell time per image before crossfading
const CARD_CYCLE_FADE_MS = 1200;     // crossfade duration — kept slow/gentle on purpose

// ==================== IMAGE RESIZING (wsrv.nl) ====================
// Generates a resized/compressed URL for a given source image on demand —
// no separate thumbnail files to create or maintain. wsrv.nl fetches the
// original from the live site, resizes+caches it at its edge, and returns
// the smaller version. Used ONLY for display srcs (e.g. the portfolio grid
// below); existence probing (probeImage/probeNumberedFolder further down)
// always checks the raw original path, never the wsrv URL — wsrv doesn't
// reliably 404 the way the raw file does, so routing probes through it
// could make missing images look like they exist.
// IMPORTANT: wsrv can only fetch images that are actually live on the
// public internet, so this can't work from a local file:// preview or a
// localhost dev server — those cases fall back to the original, full-size
// image automatically.
const SITE_ORIGIN = 'bielves.github.io';
const IS_LOCAL_PREVIEW = ['', 'localhost', '127.0.0.1'].includes(location.hostname);

function wsrvThumb(rawPath, widthPx){
  if(IS_LOCAL_PREVIEW) return rawPath;
  const fullUrl = `https://${SITE_ORIGIN}/${rawPath}`;
  return `https://wsrv.nl/?url=${encodeURIComponent(fullUrl)}&w=${widthPx}&fit=cover&output=webp&q=70`;
}

// Tries to load `src` in the background; only swaps the element's
// background-image if the file actually exists, otherwise the CSS
// placeholder pattern + label text stay put. This means the site keeps
// working with zero images uploaded — just drop files into the folders
// above later and they'll pick up automatically on next load.
function tryBgImage(el, src){
  const img = new Image();
  img.onload = () => {
    el.style.backgroundImage = `url("${src}")`;
    el.classList.add('has-image');
  };
  img.src = src;
}

// Cycles through the SAME images used in the commission config modal's
// gallery (images/commissions/gallery/<formatoKey>/<finalKey>/<n>.jpg) — so
// the front card previews the same art "Click to configure" leads to.
// Each turn picks a RANDOM finalização tier + a random example number (1..
// EXAMPLES_PER_TIER) out of every combo that exists for this card, waits,
// then slowly crossfades to it — so the mix of styles shown feels varied
// instead of always the same fixed order. Files that don't exist yet are
// simply skipped (tried again at random later) instead of breaking the
// cycle; if nothing at all exists for this card, it just leaves the
// placeholder showing and doesn't spin a hot loop trying forever.
function startCardImageCycle(container, formatoKey){
  const layerA = document.createElement('div');
  const layerB = document.createElement('div');
  layerA.className = 'card-img-layer';
  layerB.className = 'card-img-layer';
  layerA.style.transitionDuration = layerB.style.transitionDuration = CARD_CYCLE_FADE_MS + 'ms';
  container.appendChild(layerA);
  container.appendChild(layerB);

  const finalKeys = Object.keys(DATA[formatoKey].finalizacoes);

  let onA = true;
  let paused = false;
  let destroyed = false;
  let currentSrc = null;
  let validCombos = null; // null = discovery still running; [] = confirmed nothing exists
  container.addEventListener('mouseenter', () => paused = true);
  container.addEventListener('mouseleave', () => paused = false);

  function scheduleNextTurn(delay){
    const timerId = setTimeout(turn, delay);
    cardCycleTimers.push(timerId);
  }

  // Checks every combo exactly ONCE (via the shared, deduped probeCache —
  // same cache discoverPortfolio() draws from, so files it has already
  // checked aren't re-requested here) and keeps only the ones that
  // actually exist. This replaces the old "keep re-trying every 4.5s
  // forever" behavior: a card with nothing uploaded yet now does one
  // cheap HEAD-request pass and then simply stays on its placeholder —
  // it never asks again until the page is reloaded.
  async function discoverValidCombos(){
    // Phase 1: cheap check — does this finalização have ANY example
    // uploaded at all? Only example #1 is probed per finalização here.
    // A tier with nothing uploaded yet gets exactly one guaranteed-404
    // request instead of EXAMPLES_PER_TIER of them.
    const firstChecks = await Promise.all(
      finalKeys.map(finalKey => probeImage(IMG_PATHS.galleryExample(formatoKey, finalKey, 1)))
    );
    const populatedFinalKeys = finalKeys.filter((_, i) => firstChecks[i]);

    // Phase 2: only for finalizações confirmed non-empty, check the
    // remaining example numbers (2..EXAMPLES_PER_TIER).
    const remainingCombos = [];
    populatedFinalKeys.forEach(finalKey => {
      for(let n = 2; n <= EXAMPLES_PER_TIER; n++) remainingCombos.push({ finalKey, n });
    });
    const remainingResults = await Promise.all(
      remainingCombos.map(combo => probeImage(IMG_PATHS.galleryExample(formatoKey, combo.finalKey, combo.n)))
    );

    validCombos = [
      ...populatedFinalKeys.map(finalKey => ({ finalKey, n: 1 })),
      ...remainingCombos.filter((_, i) => remainingResults[i])
    ];
  }

  function turn(){
    if(destroyed) return;
    if(paused){ scheduleNextTurn(400); return; }
    if(!validCombos || validCombos.length === 0) return; // nothing to cycle to — stop, don't reschedule

    const shuffled = validCombos.slice().sort(() => Math.random() - 0.5);
    const combo = shuffled.find(c => IMG_PATHS.galleryExample(formatoKey, c.finalKey, c.n) !== currentSrc) || shuffled[0];
    const src = IMG_PATHS.galleryExample(formatoKey, combo.finalKey, combo.n);

    container.classList.add('has-image');
    const showLayer = onA ? layerB : layerA;
    const hideLayer = onA ? layerA : layerB;
    // Use the resized/compressed version (same wsrv pipeline as the
    // portfolio grid), not the raw full-res original. Crossfading a large
    // background-image forces the browser into a GPU compositing layer
    // that gets rasterized at reduced resolution *during* the opacity
    // animation for performance, then re-rendered sharp once it settles —
    // that's what caused the "blurry mid-fade, sharp after" look. Feeding
    // it an already-small image removes the need for that downsampling.
    showLayer.style.backgroundImage = `url("${wsrvThumb(src, 500)}")`;
    showLayer.classList.add('active');
    hideLayer.classList.remove('active');
    onA = !onA;
    currentSrc = src;
    // Lets the click handler know which finalização tier AND which
    // example number this particular image belongs to, so the config
    // modal can auto-select that same tier + open with that same
    // image already showing in the big display, instead of always
    // resetting to image 1.
    container.dataset.currentFinal = combo.finalKey;
    container.dataset.currentImageN = combo.n;
    scheduleNextTurn(CARD_CYCLE_INTERVAL_MS);
  }

  discoverValidCombos().then(() => {
    if(destroyed) return;
    turn();
  });
  cardCycleDestroyers.push(() => { destroyed = true; });
}
// ==================== PRICING CONFIG (EDIT HERE) ====================
// All prices are entered ONCE, in USD — that's the site's base/default
// currency (shown to English visitors).
//
// When the site is switched to Portuguese, every price is automatically
// converted to Brazilian Reais (BRL) using the exchange rate below — you
// never need to type BRL prices anywhere.
//
// USD_TO_BRL = how many BRL equal 1 USD. Default is 5 (1 USD ≈ R$5),
// which is close to the real-world average — update this number whenever
// the actual rate drifts noticeably (check google.com/search?q=usd+to+brl).
// A fixed rate like this is the simplest approach and avoids depending on
// a live currency API (which could fail, rate-limit, or go offline); if
// you'd rather always show the live rate, that's possible too — just ask.
const USD_TO_BRL = 5;

// Which currency prices are shown in — independent of LANG (a PT visitor
// can still browse prices in USD and vice versa). Changed via the currency
// dropdown in the commission modal; defaults to USD everywhere.
let DISPLAY_CURRENCY = 'USD';

// To change any commission price, edit the "preco" number (in USD) for the
// matching tier below — everything else on the site (cards, modals, the
// request form) automatically pulls from these same numbers.
// ==================== DADOS PLACEHOLDER (bilíngue) ====================
const DATA = {
  icon: {
    label: { pt: "Icon / PFP", en: "Icon / PFP" },
    img: { pt: "Imagem Icon/PFP", en: "Icon/PFP image" },
    cardDesc: {
      pt: "Close-up do rosto do personagem, ideal pra usar como pfp.",
      en: "Close-up of the character's face, great for a pfp."
    },
    finalizacoes: {
      sketch:      { preco: 20,  desc: { pt: "Sketch simples, sem linha limpa. 1 revisão.", en: "Rough sketch, no clean line. 1 revision." } },
      lineart:     { preco: 30,  desc: { pt: "Lineart limpo, sem cor. 1 revisão.", en: "Clean lineart, no color. 1 revision." } },
      flat:        { preco: 40,  desc: { pt: "Cor plana, sem sombra. 2 revisões.", en: "Flat color, no shading. 2 revisions." } },
      cellshading: { preco: 60,  desc: { pt: "Shading básico em blocos. 2 revisões.", en: "Basic block shading. 2 revisions." } }
    }
  },
  bust: {
    label: { pt: "Headshot / Bust", en: "Headshot / Bust" },
    img: { pt: "Imagem Bust", en: "Bust image" },
    cardDesc: {
      pt: "Cabeça e ombros, bom equilíbrio entre detalhe e prazo.",
      en: "Head and shoulders, good balance of detail and turnaround."
    },
    finalizacoes: {
      sketch:      { preco: 30,  desc: { pt: "Sketch de busto. 1 revisão.", en: "Bust sketch. 1 revision." } },
      lineart:     { preco: 45,  desc: { pt: "Lineart de busto. 1 revisão.", en: "Bust lineart. 1 revision." } },
      flat:        { preco: 60,  desc: { pt: "Cor plana. 2 revisões.", en: "Flat color. 2 revisions." } },
      cellshading: { preco: 85,  desc: { pt: "Shading básico. 2 revisões.", en: "Basic shading. 2 revisions." } },
      rendered:    { preco: 140, desc: { pt: "Rendering completo, luz elaborada. 3 revisões.", en: "Full render, elaborate lighting. 3 revisions." } }
    }
  },
  halfbody: {
    label: { pt: "Half Body", en: "Half Body" },
    img: { pt: "Imagem Half Body", en: "Half Body image" },
    cardDesc: {
      pt: "Da cintura pra cima, com espaço pra mãos e props.",
      en: "Waist-up, room for hands and props."
    },
    finalizacoes: {
      sketch:      { preco: 45,  desc: { pt: "Sketch cintura pra cima.", en: "Waist-up sketch." } },
      lineart:     { preco: 65,  desc: { pt: "Lineart cintura pra cima.", en: "Waist-up lineart." } },
      flat:        { preco: 90,  desc: { pt: "Cor plana.", en: "Flat color." } },
      cellshading: { preco: 130, desc: { pt: "Shading básico.", en: "Basic shading." } },
      rendered:    { preco: 210, desc: { pt: "Rendering completo.", en: "Full render." } }
    }
  },
  fullbody: {
    label: { pt: "Full Body (sem bg)", en: "Full Body (no bg)" },
    img: { pt: "Imagem Full Body", en: "Full Body image" },
    cardDesc: {
      pt: "Corpo inteiro, sem cenário ou com fundo simples.",
      en: "Full body, no scenery or simple background."
    },
    finalizacoes: {
      sketch:      { preco: 70,  desc: { pt: "Sketch corpo inteiro.", en: "Full body sketch." } },
      lineart:     { preco: 100, desc: { pt: "Lineart corpo inteiro.", en: "Full body lineart." } },
      flat:        { preco: 140, desc: { pt: "Cor plana.", en: "Flat color." } },
      cellshading: { preco: 200, desc: { pt: "Shading básico.", en: "Basic shading." } },
      rendered:    { preco: 320, desc: { pt: "Rendering completo.", en: "Full render." } }
    }
  },
  fullbody_bg: {
    label: { pt: "Full Body + BG elaborado", en: "Full Body + Elaborate BG" },
    img: { pt: "Imagem Full Body com cenário", en: "Full Body with scenery" },
    cardDesc: {
      pt: "Corpo inteiro com cenário completo, o tier mais elaborado.",
      en: "Full body with a complete scene, the most elaborate tier."
    },
    finalizacoes: {
      lineart:     { preco: 130, desc: { pt: "Lineart com cenário.", en: "Lineart with scenery." } },
      flat:        { preco: 190, desc: { pt: "Cor plana com cenário.", en: "Flat color with scenery." } },
      cellshading: { preco: 260, desc: { pt: "Shading com cenário.", en: "Shading with scenery." } },
      rendered:    { preco: 400, desc: { pt: "Rendering completo com cenário elaborado.", en: "Full render with elaborate scenery." } }
    }
  },
  // "descKind" controls which label/help text shows in the Commission Request
  // modal's description textarea: 'personagem' (character), 'ilustracao'
  // (full scene/illustration) or 'outro' (open-ended, no fixed pricing).
  fullillustration: {
    label: { pt: "Full Illustration", en: "Full Illustration" },
    img: { pt: "Imagem Full Illustration", en: "Full Illustration image" },
    cardDesc: {
      pt: "Ilustração completa — múltiplos personagens, cenário elaborado, composição livre.",
      en: "Full illustration — multiple characters, elaborate scenery, free composition."
    },
    descKind: 'ilustracao',
    finalizacoes: {
      lineart:     { preco: 180, desc: { pt: "Lineart de ilustração completa.", en: "Full illustration lineart." } },
      flat:        { preco: 260, desc: { pt: "Cor plana, ilustração completa.", en: "Flat color, full illustration." } },
      cellshading: { preco: 350, desc: { pt: "Shading, ilustração completa.", en: "Shading, full illustration." } },
      rendered:    { preco: 550, desc: { pt: "Rendering completo, ilustração completa.", en: "Full render, full illustration." } }
    }
  },
  // Client provides their own finished lineart/sketch and just wants it
  // colored. Single fixed-price tier, priced PER PAGE (see "perPage" below)
  // instead of a flat price — the page stepper in the config modal
  // multiplies "preco" by however many pages the client selects.
  coloring: {
    label: { pt: "Coloração", en: "Coloring" },
    img: { pt: "Imagem Coloração", en: "Coloring image" },
    cardDesc: {
      pt: "Envie sua lineart ou sketch pronta e eu coloro. Preço por página.",
      en: "Send your finished lineart or sketch and I'll color it. Priced per page."
    },
    finalizacoes: {
      coloring: {
        preco: 30,
        perPage: true,
        desc: {
          pt: "Coloração de uma página (lineart ou sketch fornecido por você). 2 revisões.",
          en: "Coloring for one page (lineart or sketch you provide). 2 revisions."
        }
      }
    }
  },
  // No fixed pricing tiers — client describes the request freely and price
  // is quoted after contact. "custom" is a single placeholder finalização
  // so it still fits the existing finalização/price plumbing.
  other: {
    label: { pt: "Outro tipo de ilustração", en: "Other type of illustration" },
    img: { pt: "Imagem Outro tipo", en: "Other type image" },
    cardDescKey: 'otherCardDesc',
    descKind: 'outro',
    finalizacoes: {
      custom: { preco: null, desc: { pt: "Conte os detalhes do que você precisa — preço definido após contato.", en: "Tell me the details of what you need — price set after contact." } }
    }
  },
  // Single fixed-price tier (no Finalização picker) — same pattern as
  // "other" above, just with a real price instead of a custom quote.
  steamcapsule: {
    label: { pt: "Steam Capsule Art", en: "Steam Capsule Art" },
    img: { pt: "Imagem Steam Capsule Art", en: "Steam Capsule Art image" },
    cardDescKey: 'steamCapsuleCardDesc',
    descKind: 'ilustracao',
    finalizacoes: {
      standard: { preco: 220, desc: { pt: "Arte de capsule para Steam (header, capsule pequena e grande).", en: "Steam capsule artwork (header, small and large capsule)." } }
    }
  }
};

const FINAL_LABELS = {
  sketch:      { pt: "Sketch / Rough", en: "Sketch / Rough" },
  lineart:     { pt: "Lineart Only", en: "Lineart Only" },
  flat:        { pt: "Flat Color", en: "Flat Color" },
  cellshading: { pt: "Cell Shading", en: "Cell Shading" },
  rendered:    { pt: "Rendered / Painterly", en: "Rendered / Painterly" },
  custom:      { pt: "A combinar", en: "To be discussed" },
  standard:    { pt: "Padrão", en: "Standard" },
  coloring:    { pt: "Coloração", en: "Coloring" }
};

// Real gallery images live at commissions/gallery/<formatoKey>/<finalKey>/1..N.jpg —
// the same folders the modal's gallery thumbnails browse (see GALLERY_PER_TIER_MAX
// further down) and the front-card cycler below draws its previews from.
// EXAMPLES_PER_TIER only controls the front-card cycler's pool of (tier, image
// number) combos to gamble on each turn — it doesn't cap how many images the
// modal gallery can browse, so uploading more than this per tier is fine.
const EXAMPLES_PER_TIER = 4;

const COMERCIAL_MULT = 2;
let modalUsoAtual = 'personal';
let currentFormatoKey = null;
// Page count for "perPage" tiers (currently just Coloring) — the config
// modal's stepper multiplies the tier's base "preco" by this value. Reset
// to 1 every time the modal is opened fresh (see openCommissionModal).
let modalPages = 1;
const PAGES_MIN = 1;
const PAGES_MAX = 50;

function t(key){ return STR[LANG][key]; }
function tf(key, vars){
  let str = t(key);
  Object.keys(vars).forEach(k => { str = str.replace('{' + k + '}', vars[k]); });
  return str;
}

// ==================== COMMISSION SLOTS (Trello via GitHub Actions) ====================
let SLOTS = null;

async function loadSlots(){
  const headerEl = document.getElementById('commission-status');
  const modalTextEl = document.getElementById('modalSlotsText');
  if(headerEl) headerEl.textContent = t('slotsLoading');
  if(modalTextEl) modalTextEl.textContent = t('modalSlotsLoading');
  try{
    const res = await fetch('slots.json', { cache: 'no-store' });
    if(!res.ok) throw new Error('slots.json not found');
    SLOTS = await res.json();
  } catch(err){
    console.error('Could not load slots.json', err);
    SLOTS = null;
  }
  renderSlotsUI();
}

function renderSlotsUI(){
  const headerEl = document.getElementById('commission-status');
  const modalBox = document.getElementById('modalSlotsStatus');
  const modalTextEl = document.getElementById('modalSlotsText');
  if(!headerEl || !modalBox || !modalTextEl) return;

  if(!SLOTS){
    headerEl.textContent = '';
    modalTextEl.textContent = '';
    return;
  }

  const open = SLOTS.available > 0;
  headerEl.textContent = open
    ? '🟢 ' + tf('slotsOpen', { n: SLOTS.available, max: SLOTS.maxSlots })
    : '🔴 ' + t('slotsClosed');

  modalBox.classList.toggle('closed', !open);
  modalTextEl.textContent = open
    ? tf('modalSlotsOpen', { n: SLOTS.available, max: SLOTS.maxSlots })
    : t('modalSlotsClosed');
}
function precoMinimo(formatoData){
  const precos = Object.values(formatoData.finalizacoes).map(f => f.preco).filter(p => p !== null);
  return precos.length ? Math.min(...precos) : null;
}
// True if ANY tier of this card is priced "perPage" (Coloring right now) —
// used to append the "/ page" tag next to the card's price so it's clear
// upfront that the number shown is a per-page rate, not a flat price.
function formatoHasPerPage(formatoData){
  return Object.values(formatoData.finalizacoes).some(f => f.perPage);
}
// null price means "quote after contact" (used by the "Other type of
// illustration" card, which has no fixed pricing tiers).
// All "preco" values in DATA are stored in USD. This function displays
// them in USD by default, and converts to BRL (using USD_TO_BRL above)
// whenever DISPLAY_CURRENCY is set to BRL via the currency dropdown.
function formatPrice(usdValue){
  if(usdValue === null || usdValue === undefined) return t('aCombinarPrice');
  if(DISPLAY_CURRENCY === 'BRL'){
    const brl = usdValue * USD_TO_BRL;
    return 'R$ ' + brl.toFixed(2).replace('.', ',');
  }
  return '$ ' + usdValue.toFixed(2);
}

// Fills in the ToS's usage clause depending on the personal/comercial
// choice made on the commission config step (modalUsoAtual) — same TOS
// text otherwise, just this one clause differs.
function getTosHtml(){
  const clause = modalUsoAtual === 'comercial' ? t('tosUsageComercial') : t('tosUsagePersonal');
  return t('tosHtml').replace('{{USAGE_CLAUSE}}', clause);
}

// ==================== RENDER STATIC STRINGS ====================
function renderStaticText(){
  document.getElementById('artistTag').textContent = t('artistTag');
  document.getElementById('navCommissions').textContent = t('navCommissions');
  document.getElementById('navPortfolio').textContent = t('navPortfolio');
  document.getElementById('navReviews').textContent = t('navReviews');
  document.getElementById('revTitle').textContent = t('revTitle');
  document.getElementById('revSub').textContent = t('revSub');
  document.getElementById('lblFinalizacao').textContent = t('lblFinalizacao');
  document.getElementById('lblPages').textContent = t('lblPages');
  document.getElementById('lblUso').textContent = t('lblUso');
  document.getElementById('usoPersonalBtn').textContent = t('usoPersonal');
  document.getElementById('usoComercialBtn').textContent = t('usoComercial');
  document.getElementById('lblTotal').textContent = t('lblTotal');
  document.getElementById('lblPayment').textContent = t('lblPayment');
  document.getElementById('tosSummary').textContent = t('tosSummary');
  document.getElementById('tosPreview').textContent = t('tosPreviewText');
  document.getElementById('tosFull').innerHTML = getTosHtml();
  document.getElementById('acceptLabel').textContent = t('acceptLabel');
  document.getElementById('startRequestBtn').textContent = t('startRequest');
  document.getElementById('acceptWarning').textContent = t('acceptWarning');
  document.getElementById('galleryCaption').textContent = t('galleryCaption');
  document.getElementById('noSlotsTitle').textContent = t('noSlotsTitle');
  document.getElementById('noSlotsText').textContent = t('noSlotsText');
  renderSlotsUI();

  document.getElementById('reqTitle').textContent = t('reqTitle');
  document.getElementById('reqIntro').textContent = t('reqIntro');
  document.getElementById('reqGuestLabel').textContent = t('reqGuestLabel');
  document.getElementById('reqLblName').textContent = t('reqLblName');
  document.getElementById('reqLblContact').textContent = t('reqLblContact');
  document.getElementById('reqRequiredTag').textContent = t('reqRequiredTag');
  document.getElementById('reqVerifyBtn').textContent = t('reqVerifyBtn');
  document.getElementById('reqOptionalTag1').textContent = t('reqOptionalTag');
  document.getElementById('reqLblDeadline').textContent = t('reqLblDeadline');
  document.getElementById('reqDeadlineHelp').textContent = t('reqDeadlineHelp');
  // reqLblBrief / reqBriefHelp / reqDescCounter are set dynamically in
  // openRequestModal() because their text depends on which commission card
  // (character / illustration / other) the visitor picked.
  document.getElementById('reqDescricao').placeholder = t('reqDescPlaceholder');
  document.getElementById('confirmModalTitle').textContent = t('confirmModalTitle');
  document.getElementById('confirmModalText').textContent = t('confirmModalText');
  document.getElementById('confirmModalCloseBtn').textContent = t('confirmModalClose');
  document.getElementById('reqPriceLabel').textContent = t('reqPriceLabel');
  document.getElementById('reqPriceDisclaimer').textContent = t('reqPriceDisclaimer');
  document.getElementById('reqSubmitBtn').textContent = t('reqSubmit');

  const reqAgreeEl = document.getElementById('reqAgree');
  reqAgreeEl.innerHTML = t('reqAgreeHtml').replace(
    '{link}',
    `<a id="reqTosLink">${t('reqAgreeLinkText')}</a>`
  );
  document.getElementById('reqTosLink').addEventListener('click', openTosPage);

  if(currentFormatoKey){
    updateRequestSummary();
  }
}

// ==================== NAV TABS ====================
document.querySelectorAll('nav button').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('nav button').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('main section').forEach(s => s.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(btn.dataset.tab).classList.add('active');
  });
});

// ==================== LANGUAGE TOGGLE ====================
document.getElementById('langPt').addEventListener('click', () => setLang('pt'));
document.getElementById('langEn').addEventListener('click', () => setLang('en'));

function setLang(lang){
  LANG = lang;
  document.getElementById('langPt').classList.toggle('active', lang === 'pt');
  document.getElementById('langEn').classList.toggle('active', lang === 'en');
  renderStaticText();
  renderCommissionCards();
  renderPortfolioTabs();
  renderPortfolio();
  renderReviews();
  if(commissionModalOverlay.classList.contains('active') && currentFormatoKey){
    openCommissionModal(currentFormatoKey, true);
  }
  if(requestModalOverlay.classList.contains('active') && currentFormatoKey){
    const descKind = DATA[currentFormatoKey].descKind || 'personagem';
    const keys = DESC_KIND_KEYS[descKind];
    document.getElementById('reqLblBrief').textContent = t(keys.lbl);
    document.getElementById('reqBriefHelp').textContent = t(keys.help);
    updateDescCounter();
    updateRequestSummary();
  }
}

// ==================== THEME TOGGLE ====================
const themeToggle = document.getElementById('themeToggle');
themeToggle.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
themeToggle.addEventListener('click', () => {
  const isDark = document.body.classList.toggle('dark');
  themeToggle.textContent = isDark ? '☀️' : '🌙';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// ==================== HIDE HEADER ON SCROLL ====================
const topWrap = document.getElementById('topWrap');
const pageContent = document.getElementById('pageContent');

let heroH = 0;
let navH = 0;

// Keeps #pageContent's padding-top matched to however much of the fixed
// top-wrap is actually visible right now — full hero+nav height while the
// hero is showing, just nav height once it's minimized. Without this the
// padding stayed pinned to the full (hero+nav) height forever, leaving a
// hero-sized gap of empty space above the content whenever the hero was
// scrolled out of view.
function syncPageContentPadding(){
  const hidden = topWrap.classList.contains('hide-hero');
  pageContent.style.paddingTop = (hidden ? navH : heroH + navH) + 'px';
}

function setHeroHeightVar(){
  const heroEl = document.querySelector('.hero');
  const navEl = document.querySelector('nav');
  heroH = heroEl.offsetHeight;
  navH = navEl.offsetHeight;
  document.documentElement.style.setProperty('--hero-h', heroH + 'px');
  syncPageContentPadding();
}
window.addEventListener('load', setHeroHeightVar);
window.addEventListener('resize', setHeroHeightVar);

const headerBubble = document.getElementById('headerBubble');
let hasHiddenOnce = false;
let bubbleHideTimer = null;

window.addEventListener('scroll', () => {
  const y = window.scrollY;
  const heroH = document.querySelector('.hero').offsetHeight;
  const nearTop = y < heroH * 0.5;

  if(nearTop){
    // Only reveal the header once we're actually back near the top of the
    // page — scrolling up a little further down (e.g. while browsing the
    // bottom of the Portfolio grid) should NOT bring it back.
    const wasHidden = topWrap.classList.contains('hide-hero');
    topWrap.classList.remove('hide-hero');
    if(wasHidden && hasHiddenOnce){
      // Brief "welcome back" flash on the reveal itself, not a bubble that
      // stays stuck open for as long as you happen to linger near the top.
      headerBubble.classList.add('show');
      clearTimeout(bubbleHideTimer);
      bubbleHideTimer = setTimeout(() => headerBubble.classList.remove('show'), 1600);
    }
    if(wasHidden) syncPageContentPadding();
  } else {
    const wasVisible = !topWrap.classList.contains('hide-hero');
    topWrap.classList.add('hide-hero');
    hasHiddenOnce = true;
    headerBubble.classList.remove('show');
    if(wasVisible) syncPageContentPadding();
  }
}, { passive:true });

// Hovering the avatar also reveals the speech bubble, regardless of scroll state
const avatarPlaceholder = document.getElementById('avatarPlaceholder');
avatarPlaceholder.addEventListener('mouseenter', () => {
  headerBubble.classList.add('show');
});
avatarPlaceholder.addEventListener('mouseleave', () => {
  headerBubble.classList.remove('show');
});

// ==================== COMMISSION CARDS ====================
const cardList = document.getElementById('cardList');

// Re-rendered on language switch — old card DOM nodes get discarded, so we
// track their pending timers (cardCycleTimers) and a "stop" flag per card
// (cardCycleDestroyers) here and clear/trigger them each time to avoid
// orphaned timers piling up in the background or old cycles still trying
// to swap images into DOM nodes that no longer exist.
let cardCycleTimers = [];
let cardCycleDestroyers = [];

function renderCommissionCards(){
  cardCycleTimers.forEach(clearTimeout);
  cardCycleTimers = [];
  cardCycleDestroyers.forEach(stop => stop());
  cardCycleDestroyers = [];
  cardList.innerHTML = '';
  Object.keys(DATA).forEach(formatoKey => {
    const formatoData = DATA[formatoKey];

    const card = document.createElement('div');
    card.className = 'card';
    card.dataset.formatoKey = formatoKey;

    const img = document.createElement('div');
    img.className = 'card-img';
    img.textContent = formatoData.img[LANG];
    img.setAttribute('data-hint', t('hoverHint'));
    // Whichever style example is on screen at click time (tracked in
    // img.dataset.currentFinal / currentImageN by startCardImageCycle) is
    // what the user saw and clicked on, so the modal should open with
    // that same finalização tier AND that same image pre-selected,
    // instead of always defaulting to the first tier/image.
    img.addEventListener('click', () => openCommissionModal(
      formatoKey,
      false,
      img.dataset.currentFinal,
      img.dataset.currentImageN ? Number(img.dataset.currentImageN) : undefined
    ));
    startCardImageCycle(img, formatoKey);

    const body = document.createElement('div');
    body.className = 'card-body';

    const title = document.createElement('div');
    title.className = 'card-title';
    title.textContent = formatoData.label[LANG];

    const desc = document.createElement('div');
    desc.className = 'card-desc';
    // Most cards have a bilingual cardDesc object; "Other type" instead
    // points at a plain STR key (cardDescKey) since it has no per-language pair.
    desc.textContent = formatoData.cardDescKey ? t(formatoData.cardDescKey) : formatoData.cardDesc[LANG];

    const price = document.createElement('div');
    price.className = 'card-price';
    price.innerHTML = cardPriceHtml(formatoData);

    body.appendChild(title);
    body.appendChild(desc);
    body.appendChild(price);

    card.appendChild(img);
    card.appendChild(body);
    cardList.appendChild(card);
  });
}

// Shared by renderCommissionCards() and updateCardPrices() so the "from
// $X" markup and the perPage "/ page" tag only need to be written once.
function cardPriceHtml(formatoData){
  const minPrice = precoMinimo(formatoData);
  if(minPrice === null) return formatPrice(minPrice);
  const perPageTag = formatoHasPerPage(formatoData) ? ' ' + t('perPageTag') : '';
  return t('fromPrefix') + ' <span>' + formatPrice(minPrice) + '</span>' + perPageTag;
}

// Updates just the price text on each existing card (e.g. after a currency
// change) — unlike renderCommissionCards(), this never touches
// cardList.innerHTML or the cards' running image cycles, so switching
// currency doesn't reset which example image each card is showing.
function updateCardPrices(){
  Array.from(cardList.children).forEach(card => {
    const formatoData = DATA[card.dataset.formatoKey];
    const priceEl = card.querySelector('.card-price');
    if(!formatoData || !priceEl) return;
    priceEl.innerHTML = cardPriceHtml(formatoData);
  });
}

// ==================== COMMISSION MODAL ====================
const commissionModalOverlay = document.getElementById('commissionModalOverlay');
const noSlotsModalOverlay = document.getElementById('noSlotsModalOverlay');
const galleryMain = document.getElementById('galleryMain');
const galleryMainImg = document.getElementById('galleryMainImg');
const galleryThumbs = document.getElementById('galleryThumbs');
const galleryPrevBtn = document.getElementById('galleryPrevBtn');
const galleryNextBtn = document.getElementById('galleryNextBtn');
const commissionModalTitle = document.getElementById('commissionModalTitle');
const modalFinalizacao = document.getElementById('modalFinalizacao');
const modalDesc = document.getElementById('modalDesc');
const modalPrice = document.getElementById('modalPrice');
const modalUsoToggle = document.getElementById('modalUsoToggle');
const currencySelect = document.getElementById('currencySelect');
const acceptTos = document.getElementById('acceptTos');
const startRequestBtn = document.getElementById('startRequestBtn');
const acceptWarning = document.getElementById('acceptWarning');
const pagesGroup = document.getElementById('pagesGroup');
const pagesValueEl = document.getElementById('pagesValue');
const pagesMinusBtn = document.getElementById('pagesMinus');
const pagesPlusBtn = document.getElementById('pagesPlus');
const pagesUnitPriceEl = document.getElementById('pagesUnitPrice');

// Number of thumbnails visible at once in the modal's bottom roll. If a
// tier ends up with more real images than this, prev/next arrows appear
// so the rest can be browsed instead of being cut off.
const GALLERY_THUMBS_VISIBLE = 4;

// Tracks whichever tier's gallery is currently open, so the arrow button
// handlers (wired up once, below) always act on the right one.
let galleryFormatoKey = null;
let galleryFinalKeyForImages = null;
let galleryThumbNumbers = [];  // image numbers (1, 2, 3...) currently known/browsable for this tier
let galleryWindowStart = 0;    // index into galleryThumbNumbers of the left-most visible thumb
let galleryActiveNumber = 1;   // which image number is showing in galleryMain right now
let galleryDiscoveryToken = 0; // bumped every renderGallery() call so a slow/stale background
                                // discovery from a previously-opened tier can't clobber a newer one

function showGalleryImage(n){
  galleryActiveNumber = n;
  galleryMain.classList.remove('has-image');
  galleryMainImg.removeAttribute('src');
  const src = IMG_PATHS.galleryExample(galleryFormatoKey, galleryFinalKeyForImages, n);
  const preload = new Image();
  preload.onload = () => {
    galleryMainImg.src = src;
    galleryMain.classList.add('has-image');
  };
  preload.src = src;
  galleryThumbs.querySelectorAll('.gallery-thumb').forEach(th => {
    th.classList.toggle('active', Number(th.dataset.n) === n);
  });
}

function renderGalleryThumbsWindow(){
  galleryThumbs.innerHTML = '';
  const windowNums = galleryThumbNumbers.slice(galleryWindowStart, galleryWindowStart + GALLERY_THUMBS_VISIBLE);
  windowNums.forEach(n => {
    const thumb = document.createElement('div');
    thumb.className = 'gallery-thumb' + (n === galleryActiveNumber ? ' active' : '');
    thumb.dataset.n = n;
    thumb.addEventListener('click', () => showGalleryImage(n));
    tryBgImage(thumb, wsrvThumb(IMG_PATHS.galleryExample(galleryFormatoKey, galleryFinalKeyForImages, n), 150));
    galleryThumbs.appendChild(thumb);
  });

  const hasMoreThanFit = galleryThumbNumbers.length > GALLERY_THUMBS_VISIBLE;
  galleryPrevBtn.classList.toggle('hidden', !hasMoreThanFit);
  galleryNextBtn.classList.toggle('hidden', !hasMoreThanFit);
  if(hasMoreThanFit){
    galleryPrevBtn.disabled = galleryWindowStart <= 0;
    galleryNextBtn.disabled = galleryWindowStart + GALLERY_THUMBS_VISIBLE >= galleryThumbNumbers.length;
  }
}

// Wired up once — they always act on whichever tier is currently open
// (tracked via the gallery* variables above), rather than being re-bound
// every time the gallery re-renders.
galleryPrevBtn.addEventListener('click', () => {
  galleryWindowStart = Math.max(0, galleryWindowStart - 1);
  renderGalleryThumbsWindow();
});
galleryNextBtn.addEventListener('click', () => {
  galleryWindowStart = Math.min(galleryThumbNumbers.length - GALLERY_THUMBS_VISIBLE, galleryWindowStart + 1);
  renderGalleryThumbsWindow();
});

function renderGallery(formatoData, finalKey, preselectN){
  galleryFormatoKey = Object.keys(DATA).find(k => DATA[k] === formatoData);
  galleryFinalKeyForImages = formatoData.finalizacoes[finalKey] ? finalKey : Object.keys(formatoData.finalizacoes)[0];

  // Normally opens on image 1, but if the card that was clicked happened
  // to be showing a different example at that moment (preselectN), open
  // on that same image instead — so the big display matches what the
  // user actually saw and clicked on.
  const initialActive = (preselectN && preselectN >= 1) ? preselectN : 1;

  // Shows the usual 1..N row instantly (same snappy, non-blocking feel as
  // before) while a background check looks for any extra images beyond
  // it. Arrows only appear if that check actually finds more than fit.
  // The optimistic row is stretched to include initialActive in case a
  // preselected image happens to fall past the usual visible count.
  const initialCount = Math.max(GALLERY_THUMBS_VISIBLE, initialActive);
  galleryThumbNumbers = Array.from({ length: initialCount }, (_, i) => i + 1);
  galleryWindowStart = Math.max(0, Math.min(
    initialActive - GALLERY_THUMBS_VISIBLE,
    galleryThumbNumbers.length - GALLERY_THUMBS_VISIBLE
  ));
  showGalleryImage(initialActive);
  renderGalleryThumbsWindow();

  const token = ++galleryDiscoveryToken;
  discoverExtraGalleryImages(galleryFormatoKey, galleryFinalKeyForImages, token);
}

// Probes numbered files beyond the visible row (commissions/gallery/
// <formatoKey>/<finalKey>/N.jpg) to find out if there are more examples
// than fit in one row. Stops after a short run of consecutive misses.
// If the real count doesn't exceed the visible row, the simple 1..N view
// from renderGallery() above is left untouched — no need for arrows.
async function discoverExtraGalleryImages(formatoKey, finalKey, token){
  const found = [];
  let misses = 0;
  for(let n = 1; n <= GALLERY_PER_TIER_MAX; n++){
    const result = await probeImage(IMG_PATHS.galleryExample(formatoKey, finalKey, n));
    if(token !== galleryDiscoveryToken) return; // a different card/tier opened meanwhile — abandon
    if(result){
      misses = 0;
      found.push(n);
    } else {
      misses++;
      if(misses >= GAP_TOLERANCE) break;
    }
  }
  if(token !== galleryDiscoveryToken) return;
  if(found.length <= GALLERY_THUMBS_VISIBLE) return; // fits in one row already, nothing to change

  galleryThumbNumbers = found;
  galleryWindowStart = 0;
  renderGalleryThumbsWindow();
}

function openCommissionModal(formatoKey, preserveState, preselectFinal, preselectImageN){
  currentFormatoKey = formatoKey;
  const formatoData = DATA[formatoKey];

  commissionModalTitle.textContent = formatoData.label[LANG];

  const prevFinal = preserveState ? modalFinalizacao.value : null;
  modalFinalizacao.innerHTML = '';
  Object.keys(formatoData.finalizacoes).forEach(fKey => {
    const opt = document.createElement('option');
    opt.value = fKey;
    opt.textContent = FINAL_LABELS[fKey][LANG];
    modalFinalizacao.appendChild(opt);
  });
  // Priority: an in-progress selection being preserved (e.g. language
  // switch) wins first, then the finalização tier whose example image
  // the user actually clicked on, otherwise the dropdown just keeps its
  // natural default (first option).
  if(prevFinal && formatoData.finalizacoes[prevFinal]){
    modalFinalizacao.value = prevFinal;
  } else if(preselectFinal && formatoData.finalizacoes[preselectFinal]){
    modalFinalizacao.value = preselectFinal;
  }

  // Single-tier cards (only one finalização option, e.g. "Other type of
  // illustration" or "Steam Capsule Art") have nothing to pick between, so
  // the selector is just noise — hide it and let the price/desc show the
  // single tier directly.
  document.getElementById('finalizacaoGroup').style.display =
    Object.keys(formatoData.finalizacoes).length <= 1 ? 'none' : '';

  renderGallery(formatoData, modalFinalizacao.value, modalFinalizacao.value === preselectFinal ? preselectImageN : undefined);

  // "Coloring" commissions only make sense as commercial work (client
  // supplies their own lineart/sketch to be colored) — there's no
  // personal-use tier, so the toggle is hidden and usage is pinned to
  // "comercial" (the commercial ToS clause still applies as normal).
  const usoLocked = formatoKey === 'coloring';
  document.getElementById('lblUso').style.display = usoLocked ? 'none' : '';
  modalUsoToggle.style.display = usoLocked ? 'none' : '';

  if(!preserveState){
    modalUsoAtual = usoLocked ? 'comercial' : 'personal';
    modalPages = 1;
    modalUsoToggle.querySelectorAll('button').forEach(b => b.classList.remove('active'));
    modalUsoToggle.querySelector(`[data-uso="${modalUsoAtual}"]`).classList.add('active');
    acceptTos.checked = false;
    acceptWarning.classList.remove('show');
    updateStartButtonState();
    tosFull.classList.remove('open');
    tosExpandBtn.classList.remove('open');
    tosExpandBtn.textContent = '⤢';
    tosPreview.style.display = '';
    tosFull.innerHTML = getTosHtml();
  }

  currencySelect.value = DISPLAY_CURRENCY;
  atualizarModalPreco();
  commissionModalOverlay.classList.add('active');
}

function atualizarModalPreco(){
  const formatoData = DATA[currentFormatoKey];
  const item = formatoData.finalizacoes[modalFinalizacao.value];
  let preco = item.preco;
  // Custom-quote tiers (preco === null) skip the commercial multiplier —
  // there's no base number to multiply yet.
  if(preco !== null && modalUsoAtual === 'comercial'){
    preco = preco * COMERCIAL_MULT;
  }
  // "perPage" tiers (Coloring) multiply by however many pages the client
  // selected in the stepper — applied after the commercial multiplier so
  // "$30/page -> comercial $60/page -> x3 pages = $180" reads naturally.
  if(preco !== null && item.perPage){
    preco = preco * modalPages;
  }
  modalPrice.textContent = formatPrice(preco);
  modalDesc.textContent = item.desc[LANG] + (preco !== null && modalUsoAtual === 'comercial' ? t('comercialSuffix') : '');
  // Currency choice is meaningless for a "price to be discussed" tier —
  // hiding it also stops the (often longer) TBD string from crowding
  // into the dropdown.
  currencySelect.closest('.currency-select-wrap').classList.toggle('hidden', preco === null);
  updatePagesUI(item);
}

// Shows/hides the page-count stepper depending on whether the current
// finalização tier is priced "perPage" (only Coloring right now, but this
// stays generic so any future per-page tier picks it up automatically),
// and keeps its unit-price readout and +/- disabled states in sync.
function updatePagesUI(item){
  const show = !!(item && item.perPage);
  pagesGroup.style.display = show ? '' : 'none';
  if(!show) return;
  // Don't stomp on the input's value while the user is actively typing in
  // it (see the 'input' listener below) — only the +/- buttons and other
  // triggers (currency/usage change, tier switch) need this sync.
  if(document.activeElement !== pagesValueEl) pagesValueEl.value = modalPages;
  pagesMinusBtn.disabled = modalPages <= PAGES_MIN;
  pagesPlusBtn.disabled = modalPages >= PAGES_MAX;
  let unitPrice = item.preco;
  if(modalUsoAtual === 'comercial') unitPrice = unitPrice * COMERCIAL_MULT;
  pagesUnitPriceEl.textContent = formatPrice(unitPrice) + ' ' + t('perPageTag');
}

pagesMinusBtn.addEventListener('click', () => {
  if(modalPages <= PAGES_MIN) return;
  modalPages--;
  atualizarModalPreco();
});
pagesPlusBtn.addEventListener('click', () => {
  if(modalPages >= PAGES_MAX) return;
  modalPages++;
  atualizarModalPreco();
});
// Typing a number directly updates the price live, clamped to the same
// 1..PAGES_MAX range as the +/- buttons. Invalid/empty input (mid-edit,
// e.g. the field briefly empty while retyping) is left alone rather than
// snapped back immediately — snapToRange() below cleans it up on blur/Enter.
pagesValueEl.addEventListener('input', () => {
  const raw = parseInt(pagesValueEl.value, 10);
  if(isNaN(raw)) return;
  modalPages = Math.min(PAGES_MAX, Math.max(PAGES_MIN, raw));
  atualizarModalPreco();
});
function snapPagesInputToValue(){
  pagesValueEl.value = modalPages;
}
pagesValueEl.addEventListener('blur', snapPagesInputToValue);
pagesValueEl.addEventListener('keydown', (e) => {
  if(e.key === 'Enter') pagesValueEl.blur();
});

modalFinalizacao.addEventListener('change', () => {
  modalPages = 1;
  atualizarModalPreco();
  renderGallery(DATA[currentFormatoKey], modalFinalizacao.value);
});
currencySelect.addEventListener('change', () => {
  DISPLAY_CURRENCY = currencySelect.value;
  atualizarModalPreco();
  updateCardPrices();
  // Request modal's price line isn't visible while the config modal is
  // open, but keep it in sync in case it's already populated underneath.
  if(currentFormatoKey) updateRequestSummary();
});
modalUsoToggle.querySelectorAll('button').forEach(btn => {
  btn.addEventListener('click', () => {
    modalUsoToggle.querySelectorAll('button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    modalUsoAtual = btn.dataset.uso;
    atualizarModalPreco();
    tosFull.innerHTML = getTosHtml();
  });
});

function updateStartButtonState(){
  if(acceptTos.checked){
    startRequestBtn.classList.remove('disabled');
    acceptWarning.classList.remove('show');
  } else {
    startRequestBtn.classList.add('disabled');
  }
}

acceptTos.addEventListener('change', updateStartButtonState);

startRequestBtn.addEventListener('click', () => {
  if(!acceptTos.checked){
    acceptWarning.classList.add('show');
    return;
  }
  if(SLOTS && SLOTS.available <= 0){
    commissionModalOverlay.classList.remove('active');
    noSlotsModalOverlay.classList.add('active');
    return;
  }
  acceptWarning.classList.remove('show');
  commissionModalOverlay.classList.remove('active');
  openRequestModal();
});

document.getElementById('noSlotsModalClose').addEventListener('click', () => {
  noSlotsModalOverlay.classList.remove('active');
});
noSlotsModalOverlay.addEventListener('click', (e) => {
  if(e.target === noSlotsModalOverlay) noSlotsModalOverlay.classList.remove('active');
});

document.getElementById('commissionModalClose').addEventListener('click', () => {
  commissionModalOverlay.classList.remove('active');
});
commissionModalOverlay.addEventListener('click', (e) => {
  if(e.target === commissionModalOverlay) commissionModalOverlay.classList.remove('active');
});

// ==================== GALLERY MAIN IMAGE — click-to-zoom ====================
// Clicking the big example image in the commission config modal opens it
// at (near) full screen size; clicking anywhere outside the enlarged image
// closes the zoom and returns to the config modal underneath, which was
// never actually closed — just covered.
const galleryZoomOverlay = document.getElementById('galleryZoomOverlay');
const galleryZoomImg = document.getElementById('galleryZoomImg');

galleryMain.addEventListener('click', () => {
  if(!galleryMain.classList.contains('has-image') || !galleryMainImg.src) return;
  galleryZoomImg.src = galleryMainImg.src;
  galleryZoomOverlay.classList.add('active');
});
function closeGalleryZoom(){
  galleryZoomOverlay.classList.remove('active');
  galleryZoomImg.removeAttribute('src');
}
galleryZoomOverlay.addEventListener('click', (e) => {
  if(e.target === galleryZoomOverlay) closeGalleryZoom();
});
document.addEventListener('keydown', (e) => {
  if(e.key === 'Escape' && galleryZoomOverlay.classList.contains('active')) closeGalleryZoom();
});

// ==================== TOS EXPAND — opens a real new tab ====================
function openTosPage(){
  const pageHtml = `<!DOCTYPE html>
<html lang="${LANG === 'pt' ? 'pt-br' : 'en'}">
<head>
<meta charset="UTF-8">
<title>${t('tosSummary')}</title>
<link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" rel="stylesheet">
<style>
  body{
    margin:0;
    padding:40px 24px 80px;
    background:#f0ede6;
    color:#1a1a1a;
    font-family:'Ubuntu', -apple-system, sans-serif;
  }
  .wrap{max-width:680px; margin:0 auto;}
  h1{
    font-family:'Ubuntu', -apple-system, sans-serif;
    font-weight:800;
    font-size:1.6rem;
    margin:0 0 24px;
    border-bottom:3px solid #1a1a1a;
    padding-bottom:16px;
  }
  p{font-size:0.98rem; line-height:1.7; margin:0 0 16px;}
  strong{font-family:'Ubuntu', -apple-system, sans-serif;}
</style>
</head>
<body>
  <div class="wrap">
    <h1>${t('tosSummary')}</h1>
    <div>${getTosHtml()}</div>
  </div>
</body>
</html>`;
  const blob = new Blob([pageHtml], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  // Anchor + real click is more reliably allowed than window.open() in
  // sandboxed preview iframes. On the live GitHub Pages site this isn't
  // an issue at all since there's no iframe sandbox involved.
  const a = document.createElement('a');
  a.href = url;
  a.target = '_blank';
  a.rel = 'noopener';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 30000);
}

const tosExpandBtn = document.getElementById('tosExpandBtn');
const tosFull = document.getElementById('tosFull');
const tosPreview = document.getElementById('tosPreview');
tosExpandBtn.addEventListener('click', () => {
  const isOpen = tosFull.classList.toggle('open');
  tosExpandBtn.classList.toggle('open', isOpen);
  tosExpandBtn.textContent = isOpen ? '✕' : '⤢';
  tosPreview.style.display = isOpen ? 'none' : '';
});

// ==================== COMMISSION REQUEST MODAL ====================
const requestModalOverlay = document.getElementById('requestModalOverlay');
const reqPriceService = document.getElementById('reqPriceService');
const reqPriceValue = document.getElementById('reqPriceValue');
const reqSubmittedMsg = document.getElementById('reqSubmittedMsg');
// Usage (personal/comercial) is decided once, on the commission config step
// (modalUsoAtual), and simply carried through here — no second toggle.

function updateRequestSummary(){
  if(!currentFormatoKey) return;
  const formatoData = DATA[currentFormatoKey];
  const item = formatoData.finalizacoes[modalFinalizacao.value];
  if(!item) return;

  let preco = item.preco;
  if(preco !== null && modalUsoAtual === 'comercial'){
    preco = preco * COMERCIAL_MULT;
  }
  if(preco !== null && item.perPage){
    preco = preco * modalPages;
  }
  reqPriceService.textContent = formatoData.label[LANG] + ' · ' + FINAL_LABELS[modalFinalizacao.value][LANG] +
    (item.perPage ? ` × ${modalPages} ${t('pagesUnit')}` : '');
  reqPriceValue.textContent = formatPrice(preco);
}

// Maps each commission card's descKind to its label/help STR key pair, so
// the same textarea can say "Character description", "Illustration
// description" or "Describe what you need" depending on what was picked.
const DESC_KIND_KEYS = {
  personagem: { lbl: 'reqLblBriefPersonagem', help: 'reqBriefHelpPersonagem' },
  ilustracao: { lbl: 'reqLblBriefIlustracao', help: 'reqBriefHelpIlustracao' },
  outro:      { lbl: 'reqLblBriefOutro',      help: 'reqBriefHelpOutro' }
};
const DESC_WORD_LIMIT = 500;
const reqDescricaoEl = document.getElementById('reqDescricao');
const reqDescCounterEl = document.getElementById('reqDescCounter');

function countWords(str){
  const trimmed = str.trim();
  return trimmed ? trimmed.split(/\s+/).length : 0;
}

function updateDescCounter(){
  const n = countWords(reqDescricaoEl.value);
  reqDescCounterEl.textContent = tf('reqDescCounter', { n });
  reqDescCounterEl.classList.toggle('over-limit', n > DESC_WORD_LIMIT);
}
reqDescricaoEl.addEventListener('input', updateDescCounter);

// ==================== SUBMISSION GUARD ====================
// Three independent, client-side-only checks against a small history of
// past submissions kept in localStorage. None of this is a real security
// boundary (anyone can clear localStorage or use a private window to reset
// it instantly) — it's a UX nudge for well-meaning visitors, not a barrier
// against someone determined to get around it. Actual abuse resistance
// needs to happen server-side (check what Web3Forms offers there).
//
// A — EXACT-DUPLICATE CHECK (SUBMIT_DEDUP_WINDOW_MS)
//   Blocks re-submitting when email + name + commission type + finalização
//   tier all match a request already sent within the window. Anything
//   different (different type, different tier, different person) goes
//   through immediately — this is deliberately about "is this the same
//   request", not "did you submit something recently".
//
// B — FLAT COOLDOWN (SUBMIT_FLAT_COOLDOWN_MS)
//   A short, content-blind pause between any two submissions at all —
//   just slows down rapid double-clicking, regardless of what's in them.
//
// B — DAILY CAP (SUBMIT_DAILY_CAP / SUBMIT_DAILY_WINDOW_MS)
//   At most N submissions per rolling 24h window, per browser, regardless
//   of content — a soft ceiling against someone deliberately hammering the
//   button with varied content to dodge the exact-duplicate check.
const SUBMIT_DEDUP_WINDOW_MS = 36 * 60 * 60 * 1000; // 36h — how long an identical request stays blocked
const SUBMIT_FLAT_COOLDOWN_MS = 45 * 1000;          // 45s — minimum gap between any two submissions
const SUBMIT_DAILY_WINDOW_MS = 24 * 60 * 60 * 1000; // 24h rolling window for the daily cap
const SUBMIT_DAILY_CAP = 7;                         // max submissions allowed per SUBMIT_DAILY_WINDOW_MS
const SUBMIT_HISTORY_KEY = 'commissionRequest_history';

// Tiny non-cryptographic string hash (djb2). Not for security — just to
// avoid storing raw name/email in localStorage in plaintext, since on a
// shared/public computer anyone opening DevTools afterward could otherwise
// read a previous visitor's name and email directly.
function djb2Hash(str){
  let hash = 5381;
  for(let i = 0; i < str.length; i++){
    hash = ((hash << 5) + hash + str.charCodeAt(i)) | 0; // hash*33 + c
  }
  return (hash >>> 0).toString(36);
}

// Builds the identity used by the exact-duplicate check: normalized
// email + name, plus commission type + tier (tier omitted for single-tier
// cards, where there's nothing to distinguish between).
function buildSubmissionHash(name, email, formatoKey, finalKey){
  const normEmail = email.trim().toLowerCase();
  const normName = name.trim().toLowerCase();
  const hasMultipleTiers = formatoKey && Object.keys(DATA[formatoKey].finalizacoes).length > 1;
  const parts = [normEmail, normName, formatoKey || '', hasMultipleTiers ? finalKey : ''];
  return djb2Hash(parts.join('|'));
}

function getSubmissionHistory(){
  let history;
  try {
    history = JSON.parse(localStorage.getItem(SUBMIT_HISTORY_KEY) || '[]');
  } catch(err) {
    history = [];
  }
  // Prune anything older than the longest window we check (the 36h dedup
  // window) so this never grows unbounded across a long-lived browser.
  const cutoff = Date.now() - SUBMIT_DEDUP_WINDOW_MS;
  return history.filter(entry => entry.ts > cutoff);
}

function recordSubmission(hash){
  const history = getSubmissionHistory();
  history.push({ hash, ts: Date.now() });
  localStorage.setItem(SUBMIT_HISTORY_KEY, JSON.stringify(history));
}

// Checks all three guards for a given (name, email, formatoKey, finalKey)
// combo. Returns null if submission is allowed, or a translation key
// naming which message to show if it's blocked. Checked in order of
// severity: the daily cap is the strongest/most global stop, the exact
// duplicate is specific to this request, and the flat cooldown is the
// catch-all for everything else (rapid resubmits with varied content).
function checkSubmissionGuard(name, email, formatoKey, finalKey){
  const history = getSubmissionHistory();
  const now = Date.now();

  const dailyCount = history.filter(entry => now - entry.ts < SUBMIT_DAILY_WINDOW_MS).length;
  if(dailyCount >= SUBMIT_DAILY_CAP) return 'reqDailyCapText';

  const hash = buildSubmissionHash(name, email, formatoKey, finalKey);
  const isDuplicate = history.some(entry => entry.hash === hash && now - entry.ts < SUBMIT_DEDUP_WINDOW_MS);
  if(isDuplicate) return 'reqDuplicateText';

  const mostRecent = history.reduce((max, entry) => Math.max(max, entry.ts), 0);
  if(mostRecent && now - mostRecent < SUBMIT_FLAT_COOLDOWN_MS) return 'reqCooldownText';

  return null;
}

function openRequestModal(){
  reqSubmittedMsg.classList.remove('show', 'error', 'sending');
  const submitBtnEl = document.getElementById('reqSubmitBtn');
  submitBtnEl.classList.remove('disabled');
  submitBtnEl.disabled = false;
  const verifyResultEl = document.getElementById('reqVerifyResult');
  verifyResultEl.classList.remove('show', 'valid', 'invalid');
  document.getElementById('reqEmail').style.borderColor = 'var(--border-color)';
  document.getElementById('reqName').style.borderColor = 'var(--border-color)';
  const reqSubmitWarningEl = document.getElementById('reqSubmitWarning');
  reqSubmitWarningEl.classList.remove('show');

  // Reset + relabel the description textarea for the chosen card type.
  reqDescricaoEl.value = '';
  const descKind = currentFormatoKey ? (DATA[currentFormatoKey].descKind || 'personagem') : 'personagem';
  const keys = DESC_KIND_KEYS[descKind];
  document.getElementById('reqLblBrief').textContent = t(keys.lbl);
  document.getElementById('reqBriefHelp').textContent = t(keys.help);
  updateDescCounter();

  updateRequestSummary();

  // Early warning, checked with whatever's currently in the name/email
  // fields (may still be blank on a first-time fill — that's fine, the
  // daily cap still applies regardless, and the exact-duplicate check
  // simply won't have anything to match against yet). Re-checked again at
  // submit time below, since these fields can still change after this.
  const guardResult = checkSubmissionGuard(
    document.getElementById('reqName').value,
    document.getElementById('reqEmail').value,
    currentFormatoKey,
    modalFinalizacao.value
  );
  if(guardResult){
    reqSubmitWarningEl.textContent = t(guardResult);
    reqSubmitWarningEl.classList.add('show');
    submitBtnEl.classList.add('disabled');
    submitBtnEl.disabled = true;
  }

  requestModalOverlay.classList.add('active');
}

// Simple client-side format check (not a deliverability check) — lets the
// visitor catch typos before submitting the request.
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

document.getElementById('reqVerifyBtn').addEventListener('click', () => {
  const emailInput = document.getElementById('reqEmail');
  const email = emailInput.value.trim();
  const resultEl = document.getElementById('reqVerifyResult');

  resultEl.classList.remove('valid', 'invalid');

  if(!email){
    resultEl.textContent = t('reqVerifyEmpty');
    resultEl.classList.add('invalid', 'show');
    emailInput.style.borderColor = 'var(--accent)';
    return;
  }

  if(EMAIL_REGEX.test(email)){
    resultEl.textContent = t('reqVerifyValid');
    resultEl.classList.add('valid', 'show');
    emailInput.style.borderColor = '#2ea56f';
  } else {
    resultEl.textContent = t('reqVerifyInvalid');
    resultEl.classList.add('invalid', 'show');
    emailInput.style.borderColor = 'var(--accent)';
  }
});

const WEB3FORMS_ACCESS_KEY = 'd32d8feb-0115-496a-95b9-7003047e2cfa';

document.getElementById('reqSubmitBtn').addEventListener('click', async () => {
  const nameInput = document.getElementById('reqName');
  const emailInput = document.getElementById('reqEmail');
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();

  if(!name || !email){
    nameInput.style.borderColor = name ? 'var(--border-color)' : 'var(--accent)';
    emailInput.style.borderColor = email ? 'var(--border-color)' : 'var(--accent)';
    return;
  }

  // Re-check at submit time too (not just on modal open), since name/email
  // may have changed since then, or an in-progress form might carry over
  // across the cooldown boundary.
  const guardResult = checkSubmissionGuard(name, email, currentFormatoKey, modalFinalizacao.value);
  if(guardResult){
    const reqSubmitWarningEl = document.getElementById('reqSubmitWarning');
    reqSubmitWarningEl.textContent = t(guardResult);
    reqSubmitWarningEl.classList.add('show');
    return;
  }

  const descricao = reqDescricaoEl.value.trim();
  if(countWords(descricao) > DESC_WORD_LIMIT){
    reqDescCounterEl.classList.add('over-limit');
    reqSubmittedMsg.classList.add('show', 'error');
    reqSubmittedMsg.textContent = t('reqDescTooLong');
    return;
  }

  const discord = document.getElementById('reqDiscord').value.trim();
  const deadline = document.getElementById('reqDeadline').value;
  const usageLabel = modalUsoAtual === 'comercial' ? t('usoComercial') : t('usoPersonal');
  const formatoData = currentFormatoKey ? DATA[currentFormatoKey] : null;
  const currentItem = formatoData ? formatoData.finalizacoes[modalFinalizacao.value] : null;
  const serviceLabel = formatoData
    ? formatoData.label[LANG] + ' · ' + FINAL_LABELS[modalFinalizacao.value][LANG] +
      (currentItem && currentItem.perPage ? ` × ${modalPages} ${t('pagesUnit')}` : '')
    : '—';
  // Field name sent to Web3Forms varies with the description kind so the
  // received email is self-explanatory (character vs illustration vs other).
  const descKind = formatoData ? (formatoData.descKind || 'personagem') : 'personagem';
  const descFieldName = {
    personagem: 'Descrição do personagem',
    ilustracao: 'Descrição da ilustração',
    outro: 'Descrição do pedido'
  }[descKind];

  const submitBtn = document.getElementById('reqSubmitBtn');
  submitBtn.disabled = true;
  submitBtn.classList.add('disabled');
  reqSubmittedMsg.classList.remove('error');
  reqSubmittedMsg.classList.add('show', 'sending');
  reqSubmittedMsg.textContent = t('reqSending');

  // The 4 required fields (name, contact, usage, deadline) plus service
  // context, sent as a Web3Forms submission — arrives as an email.
  const payload = {
    access_key: WEB3FORMS_ACCESS_KEY,
    subject: `Nova commission request — ${serviceLabel}`,
    from_name: 'Commission Site',
    "Seu nome": name,
    "Seus dados de contato (e-mail)": email,
    "Discord": discord || '—',
    "Como vai usar essa commission": usageLabel,
    "Prazo do projeto": deadline || 'Sem prazo definido',
    "Formato / Finalização": serviceLabel,
    ...(currentItem && currentItem.perPage ? { "Número de páginas": modalPages } : {}),
    "Preço base estimado": reqPriceValue.textContent,
    [descFieldName]: descricao || '—'
  };

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(payload)
    });
    const result = await response.json();

    reqSubmittedMsg.classList.remove('sending');
    if(result.success){
      reqSubmittedMsg.textContent = t('reqSubmittedMsg');
      recordSubmission(buildSubmissionHash(name, email, currentFormatoKey, modalFinalizacao.value));
      requestModalOverlay.classList.remove('active');
      openConfirmModal();
    } else {
      reqSubmittedMsg.classList.add('error');
      reqSubmittedMsg.textContent = t('reqSubmitError');
      submitBtn.disabled = false;
      submitBtn.classList.remove('disabled');
    }
  } catch (err) {
    reqSubmittedMsg.classList.remove('sending');
    reqSubmittedMsg.classList.add('error');
    reqSubmittedMsg.textContent = t('reqSubmitError');
    submitBtn.disabled = false;
    submitBtn.classList.remove('disabled');
  }
});

document.getElementById('requestModalClose').addEventListener('click', () => {
  requestModalOverlay.classList.remove('active');
});
requestModalOverlay.addEventListener('click', (e) => {
  if(e.target === requestModalOverlay) requestModalOverlay.classList.remove('active');
});

// ==================== SUBMISSION CONFIRMATION POP-UP ====================
const confirmModalOverlay = document.getElementById('confirmModalOverlay');

function openConfirmModal(){
  confirmModalOverlay.classList.add('active');
}
// Closing the confirmation always sends the visitor back to the top of the
// page — makes the "request cycle" feel complete instead of leaving them
// stranded mid-page next to a closed modal.
function closeConfirmModal(){
  confirmModalOverlay.classList.remove('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
document.getElementById('confirmModalCloseBtn').addEventListener('click', closeConfirmModal);
confirmModalOverlay.addEventListener('click', (e) => {
  if(e.target === confirmModalOverlay) closeConfirmModal();
});

// ==================== PORTFOLIO: DYNAMIC IMAGE DISCOVERY ====================
// No manifest file to maintain — images are discovered straight off disk by
// probing numbered filenames. Folder layout:
//
//   images/portfolio/1.jpg..N.jpg
//     -> your hand-picked manual uploads, one file per piece (no thumb/full
//        split). These always lead the ALL tab, in this exact numeric
//        order, and are untagged (no category), so they never appear under
//        a category tab. Add/remove/renumber files to change the picks —
//        nothing in the code needs editing.
//
// Category tabs (PORTFOLIO_CATEGORIES below) are fed exclusively by
// auto-pulling every example image already uploaded for the commission menu
// (images/commissions/gallery/<formatoKey>/<finalKey>/*.jpg), based on that
// finalização — so commission gallery photos never need to be uploaded
// twice, and there's no separate per-category portfolio folder to maintain.
const portfolioGrid = document.getElementById('portfolioGrid');
const portfolioTabsEl = document.getElementById('portfolioTabs');

const PORTFOLIO_CATEGORIES = ['rendered', 'steamcapsules', 'coloring', 'flatcell', 'sketchline', 'others'];
const PORTFOLIO_TAB_LABELS = {
  all:           { pt: 'Tudo',                     en: 'All' },
  rendered:      { pt: 'Rendered',                 en: 'Rendered' },
  steamcapsules: { pt: 'Steam Capsules',           en: 'Steam Capsules' },
  coloring:      { pt: 'Colorista',                en: 'Colorist' },
  flatcell:      { pt: 'Cor Plana & Cell Shading',  en: 'Flat Color & Cell Shading' },
  sketchline:    { pt: 'Sketch & Lineart',          en: 'Sketch & Lineart' },
  others:        { pt: 'Outros',                    en: 'Others' }
};
// Maps a commission "finalização" key to the portfolio tab its gallery
// images should automatically feed into.
const FINAL_TO_PORTFOLIO_CATEGORY = {
  rendered: 'rendered',
  standard: 'steamcapsules',
  coloring: 'coloring',
  flat: 'flatcell',
  cellshading: 'flatcell',
  sketch: 'sketchline',
  lineart: 'sketchline',
  custom: 'others'
};

const PLACEHOLDER_DESC = {
  pt: 'Descrição — técnica, personagem, contexto da peça.',
  en: 'Description — technique, character, context of the piece.'
};
const PORTFOLIO_MAX = 40; // upper bound when probing images/portfolio/thumbs+fulls
const GALLERY_PER_TIER_MAX = 24; // upper bound when probing for extra commission gallery images beyond
                                  // the visible thumbnail row (also used when pulling these same
                                  // images into the matching Portfolio tab, see discoverPortfolio() below)
const GAP_TOLERANCE = 2;        // consecutive missing numbers before we stop probing a folder

let portfolioItems = [];             // every discovered item, in final ALL-tab order
let portfolioReady = false;
let activePortfolioTab = 'all';
let currentLightboxList = [];
let lightboxIndex = 0;

// Resolves true/false for whether src exists — uses a HEAD request instead
// of downloading the actual image, so probing hundreds of numbered
// filenames to see which exist doesn't also download all of them. This is
// what makes loading="lazy" on the actual grid <img> tags meaningful: the
// browser only fetches image bytes for the rows near the viewport, instead
// of every candidate file getting fully downloaded during discovery.
// Cache is keyed by URL and shared by EVERY feature that needs to know
// "does this file exist" (portfolio discovery, gallery modal discovery,
// card image cycler). Each URL is only ever HEAD-probed once per page
// load, no matter how many features ask about it or how many times —
// this is what stops the card cycler from re-probing the same missing
// files forever (see startCardImageCycle above).
const probeCache = new Map(); // src -> Promise<boolean>

function probeImage(src){
  if(probeCache.has(src)) return probeCache.get(src);
  const promise = fetch(src, { method: 'HEAD', cache: 'no-store' })
    .then(res => res.ok)
    .catch(() => false);
  probeCache.set(src, promise);
  return promise;
}

// Probes numbered files 1.jpg, 2.jpg, ... via thumbSrcFn(n) / fullSrcFn(n).
// Cheap two-phase check: file #1 is probed alone first. If it's missing,
// the folder is treated as empty and we stop there — no point firing
// maxN (up to 40) guaranteed-404 requests for a tier nothing's been
// uploaded to yet. Only once #1 confirms the folder has content do we
// probe the rest (2..maxN, in parallel — HEAD requests are cheap with no
// bytes to transfer, so firing a known-populated folder's remaining
// candidates all at once is fine), then walk in order to keep only the
// leading contiguous run, allowing up to GAP_TOLERANCE consecutive gaps
// before stopping.
async function probeNumberedFolder(thumbSrcFn, fullSrcFn, maxN, makeMeta){
  const hasFirst = await probeImage(thumbSrcFn(1));
  if(!hasFirst) return [];

  const rest = await Promise.all(
    Array.from({ length: maxN - 1 }, (_, i) => probeImage(thumbSrcFn(i + 2)))
  );
  const exists = [true, ...rest];

  const items = [];
  let misses = 0;
  for(let n = 1; n <= maxN; n++){
    if(!exists[n - 1]){
      misses++;
      if(misses >= GAP_TOLERANCE) break;
      continue;
    }
    misses = 0;
    items.push({
      thumbSrc: thumbSrcFn(n),
      fullSrc: fullSrcFn(n),
      ...makeMeta(n)
    });
  }
  return items;
}

// ==================== PORTFOLIO CAPTIONS (captions.md) ====================
// Optional per-image title/description override that lives right next to
// the images it describes, e.g. images/portfolio/captions.md or
// images/commissions/gallery/<formatoKey>/<finalKey>/captions.md.
//
// Format — one block per image, keyed by its filename number:
//
//   [1]
//   TITLE_PT: Guerreira em armadura
//   TITLE_EN: Warrior in armor
//   DESC_PT: Peça feita para um cliente, focando em armadura pesada
//     e composição dinâmica.
//   DESC_EN: Commission piece for a client, focusing on heavy armor
//     and dynamic composition.
//
//   [2]
//   TITLE_EN: Dragon knight
//   DESC_EN: Full-body render, cell-shaded.
//
// Rules:
//   - [n] opens the block for <n>.jpg. Everything after it belongs to
//     that image until the next [n] header.
//   - Each field is "KEY: value". A value can wrap onto extra lines —
//     it keeps growing until the next KEY:, the next [n], or a blank
//     line, so you don't need to cram long descriptions onto one line.
//   - Any field can be skipped. TITLE_PT/TITLE_EN/DESC_PT/DESC_EN are
//     independent — e.g. you can set only DESC_EN and leave the rest
//     to fall back automatically.
//   - Missing file, missing [n] block, or missing individual field ->
//     falls back to the generated title ("Piece N") / shared category
//     description exactly as before, so this is purely additive and
//     nothing breaks while captions are filled in gradually.
const CAPTION_KEYS = ['TITLE_PT', 'TITLE_EN', 'DESC_PT', 'DESC_EN'];

function parseCaptionsMd(text){
  const result = {}; // "n" -> { TITLE_PT, TITLE_EN, DESC_PT, DESC_EN }
  let currentN = null;
  let currentKey = null;
  text.split('\n').forEach((raw) => {
    const line = raw.replace(/\r$/, '');
    const headerMatch = line.match(/^\s*\[(\d+)\]\s*$/);
    if(headerMatch){
      currentN = headerMatch[1];
      currentKey = null;
      if(!result[currentN]) result[currentN] = {};
      return;
    }
    if(line.trim() === ''){
      currentKey = null;
      return;
    }
    const keyMatch = line.match(/^([A-Z_]+):\s?(.*)$/);
    if(keyMatch && CAPTION_KEYS.includes(keyMatch[1]) && currentN !== null){
      currentKey = keyMatch[1];
      result[currentN][currentKey] = keyMatch[2];
      return;
    }
    if(currentKey && currentN !== null){
      result[currentN][currentKey] += ' ' + line.trim();
    }
  });
  return result;
}

// Fetches and parses a captions.md file; resolves to {} (no overrides) if
// the file doesn't exist or fails to load, so callers never need to
// special-case a missing file.
function fetchCaptions(url){
  return fetch(url, { cache: 'no-store' })
    .then(res => res.ok ? res.text() : '')
    .then(parseCaptionsMd)
    .catch(() => ({}));
}

// Builds the final { title, desc } (each { pt, en } ) for image n,
// preferring a captions.md entry when present and falling back field by
// field to the given defaults otherwise.
function resolveCaption(captions, n, fallbackTitle, fallbackDesc){
  const entry = captions[String(n)];
  if(!entry) return { title: fallbackTitle, desc: fallbackDesc };
  return {
    title: {
      pt: entry.TITLE_PT || fallbackTitle.pt,
      en: entry.TITLE_EN || fallbackTitle.en
    },
    desc: {
      pt: entry.DESC_PT || fallbackDesc.pt,
      en: entry.DESC_EN || fallbackDesc.en
    }
  };
}

async function discoverPortfolio(){
  // 1) Manually-curated set — always leads the ALL tab, in file order.
  // Untagged (category: null), so these never show under a category tab.
  // captions.md (if present) is fetched alongside the numbered probes and
  // overrides the generated "Piece N" title / placeholder desc per image.
  const manualPromise = fetchCaptions(IMG_PATHS.portfolioCaptions()).then((captions) =>
    probeNumberedFolder(
      IMG_PATHS.portfolioImage,
      IMG_PATHS.portfolioImage,
      PORTFOLIO_MAX,
      (n) => ({
        category: null,
        ...resolveCaption(captions, n, { pt: `Trabalho ${n}`, en: `Piece ${n}` }, PLACEHOLDER_DESC)
      })
    )
  );

  // 2) Auto-pull every commission gallery image into its matching tab —
  // reuses images already uploaded for the commission menu, no re-upload.
  // This is the only source that feeds the category tabs. Kicked off
  // alongside (1) above rather than after it, so the manual set doesn't
  // block the gallery probes (or vice versa) from starting. Each folder's
  // captions.md (if present) overrides the shared format label / finalização
  // desc on a per-image basis.
  const galleryProbes = [];
  Object.keys(DATA).forEach((formatoKey) => {
    const finalizacoes = DATA[formatoKey].finalizacoes || {};
    Object.keys(finalizacoes).forEach((finalKey) => {
      const cat = FINAL_TO_PORTFOLIO_CATEGORY[finalKey];
      if(cat) galleryProbes.push({ formatoKey, finalKey, cat });
    });
  });
  const galleryResultsPromise = Promise.all(galleryProbes.map(async ({ formatoKey, finalKey, cat }) => {
    const finalDesc = (DATA[formatoKey].finalizacoes[finalKey] || {}).desc || PLACEHOLDER_DESC;
    const captions = await fetchCaptions(IMG_PATHS.galleryCaptions(formatoKey, finalKey));
    const items = await probeNumberedFolder(
      (n) => IMG_PATHS.galleryExample(formatoKey, finalKey, n),
      (n) => IMG_PATHS.galleryExample(formatoKey, finalKey, n),
      GALLERY_PER_TIER_MAX,
      (n) => ({
        category: cat,
        ...resolveCaption(captions, n, DATA[formatoKey].label, finalDesc)
      })
    );
    return { cat, items };
  }));

  const [manual, galleryResults] = await Promise.all([manualPromise, galleryResultsPromise]);

  // Assemble final order: manual uploads -> rendered -> steamcapsules ->
  // flatcell -> sketchline -> others (auto-pulled commission gallery images
  // within each category, in DATA/finalização iteration order).
  const byCategory = {};
  PORTFOLIO_CATEGORIES.forEach(c => byCategory[c] = []);
  galleryResults.forEach(({ cat, items }) => byCategory[cat].push(...items));

  portfolioItems = [
    ...manual,
    ...PORTFOLIO_CATEGORIES.flatMap(cat => byCategory[cat])
  ];

  const activeTabStillHasItems = activePortfolioTab === 'all'
    || portfolioItems.some(p => p.category === activePortfolioTab);
  if(!activeTabStillHasItems) activePortfolioTab = 'all';

  portfolioReady = true;
  renderPortfolioTabs();
  renderPortfolio();
}

function portfolioCategoryCounts(){
  const counts = {};
  PORTFOLIO_CATEGORIES.forEach(c => counts[c] = 0);
  portfolioItems.forEach(p => { if(p.category) counts[p.category]++; });
  return counts;
}

function renderPortfolioTabs(){
  portfolioTabsEl.innerHTML = '';
  if(!portfolioReady) return;
  const counts = portfolioCategoryCounts();
  ['all', ...PORTFOLIO_CATEGORIES].forEach((key) => {
    if(key !== 'all' && counts[key] === 0) return; // hide tabs with nothing in them
    const btn = document.createElement('button');
    btn.className = 'portfolio-tab' + (key === activePortfolioTab ? ' active' : '');
    btn.textContent = PORTFOLIO_TAB_LABELS[key][LANG];
    btn.addEventListener('click', () => {
      if(activePortfolioTab === key) return;
      activePortfolioTab = key;
      renderPortfolioTabs();
      renderPortfolio();
    });
    portfolioTabsEl.appendChild(btn);
  });
}

function currentPortfolioList(){
  if(activePortfolioTab === 'all') return portfolioItems;
  return portfolioItems.filter(p => p.category === activePortfolioTab);
}

function renderPortfolio(){
  portfolioGrid.innerHTML = '';
  if(!portfolioReady) return; // discovery still running — nothing to show yet, no fake placeholders
  const list = currentPortfolioList();

  list.forEach((p) => {
    const item = document.createElement('div');
    item.className = 'portfolio-item';

    const img = document.createElement('img');
    img.className = 'portfolio-img';
    img.src = wsrvThumb(p.thumbSrc, 350);
    img.loading = 'lazy';
    img.decoding = 'async';
    img.alt = p.title[LANG];
    item.appendChild(img);

    const hotzone = document.createElement('div');
    hotzone.className = 'portfolio-hotzone';
    item.appendChild(hotzone);

    const caption = document.createElement('div');
    caption.className = 'portfolio-caption';
    const captionTitle = document.createElement('h4');
    captionTitle.textContent = p.title[LANG];
    const captionDesc = document.createElement('p');
    captionDesc.textContent = p.desc[LANG];
    caption.appendChild(captionTitle);
    caption.appendChild(captionDesc);
    item.appendChild(caption);

    item.addEventListener('click', () => openLightbox(p, list));
    portfolioGrid.appendChild(item);
  });
}

// ==================== PORTFOLIO LIGHTBOX ====================
const portfolioModalOverlay = document.getElementById('portfolioModalOverlay');
const lightboxWrap = document.querySelector('.lightbox-wrap');
const lightboxDesc = document.querySelector('.lightbox-desc');
const lightboxBox = document.querySelector('.lightbox-box');
const lightboxPhoto = document.getElementById('lightboxPhoto');
const lightboxSpinner = document.getElementById('lightboxSpinner');
const lightboxTitle = document.getElementById('lightboxTitle');
const lightboxText = document.getElementById('lightboxText');

const ZOOM_SCALE = 1.8;
let panX = 0, panY = 0;
let dragStartX = 0, dragStartY = 0;
let isDragging = false;
let dragMoved = false;

function openLightbox(item, list){
  currentLightboxList = list;
  lightboxIndex = list.indexOf(item);
  showLightboxItem();
}

function showLightboxItem(){
  const p = currentLightboxList[lightboxIndex];
  if(!p) return;

  lightboxPhoto.classList.remove('loaded', 'zoomed', 'dragging');
  resetLightboxPan();
  lightboxSpinner.classList.remove('hidden');
  lightboxTitle.textContent = p.title[LANG];
  lightboxText.textContent = p.desc[LANG];

  lightboxPhoto.onload = () => {
    lightboxSpinner.classList.add('hidden');
    lightboxPhoto.classList.add('loaded');
    fitLightboxToImage();
  };
  lightboxPhoto.src = p.fullSrc; // already confirmed to exist during discovery

  portfolioModalOverlay.classList.add('active');
}

// Sizes the lightbox box to exactly match the photo's own aspect ratio
// (clamped to the viewport) — landscape pieces open wide, square pieces
// open square. The caption's own height is measured first and subtracted
// from the available height budget, so the image + title + description
// always fit together within the viewport instead of the image alone
// eating most of the height and pushing the caption to hug the bottom
// edge (or get clipped by the box's overflow:hidden).
function fitLightboxToImage(){
  const naturalW = lightboxPhoto.naturalWidth;
  const naturalH = lightboxPhoto.naturalHeight;
  if(!naturalW || !naturalH) return;

  // Title/text are already set by the time this runs (showLightboxItem
  // sets them before the image's onload fires), so the desc block's real
  // rendered height — including its own max-height/scroll clamp — is
  // known here rather than guessed at.
  const descH = lightboxDesc ? lightboxDesc.getBoundingClientRect().height : 0;
  const CHROME = 24; // modal border + close button breathing room

  const maxW = Math.min(window.innerWidth * 0.92, 900);
  const maxH = Math.max(window.innerHeight * 0.8 - descH - CHROME, window.innerHeight * 0.35);
  const scale = Math.min(maxW / naturalW, maxH / naturalH, 1);
  const wrapWidth = Math.floor(naturalW * scale);

  lightboxWrap.style.width = wrapWidth + 'px';
  lightboxWrap.style.height = Math.floor(naturalH * scale) + 'px';
  // .lightbox-box is width:auto by default, which shrink-to-fits around
  // its widest child — including the caption's own unwrapped text width.
  // A long caption on a narrow/portrait image would otherwise pull the
  // whole box wider than the photo, leaving a dead gap beside it. Pinning
  // the box to the same width as the image forces the caption to wrap
  // within that width instead.
  if(lightboxBox) lightboxBox.style.width = wrapWidth + 'px';
}
window.addEventListener('resize', () => {
  if(portfolioModalOverlay.classList.contains('active')) fitLightboxToImage();
});

function showLightboxOffset(offset){
  if(!currentLightboxList.length) return;
  lightboxIndex = (lightboxIndex + offset + currentLightboxList.length) % currentLightboxList.length;
  showLightboxItem();
}

function applyPan(){
  lightboxPhoto.style.transform = `translate(${panX}px, ${panY}px) scale(${ZOOM_SCALE})`;
}
function resetLightboxPan(){
  panX = 0; panY = 0;
  lightboxPhoto.style.transform = '';
}
function clampPan(){
  const rect = lightboxWrap.getBoundingClientRect();
  const maxPanX = (rect.width * (ZOOM_SCALE - 1)) / 2;
  const maxPanY = (rect.height * (ZOOM_SCALE - 1)) / 2;
  panX = Math.max(-maxPanX, Math.min(maxPanX, panX));
  panY = Math.max(-maxPanY, Math.min(maxPanY, panY));
}

function closeLightbox(){
  portfolioModalOverlay.classList.remove('active');
  lightboxPhoto.classList.remove('zoomed', 'dragging');
  resetLightboxPan();
}

// Click toggles zoom in/out — but not right after a drag, so releasing a
// pan gesture doesn't also flip the zoom state.
lightboxPhoto.addEventListener('click', () => {
  if(dragMoved){ dragMoved = false; return; }
  const nowZoomed = lightboxPhoto.classList.toggle('zoomed');
  if(nowZoomed) applyPan(); else resetLightboxPan();
});

function startDrag(x, y){
  if(!lightboxPhoto.classList.contains('zoomed')) return;
  isDragging = true;
  dragMoved = false;
  lightboxPhoto.classList.add('dragging');
  dragStartX = x - panX;
  dragStartY = y - panY;
}
function moveDrag(x, y){
  if(!isDragging) return;
  dragMoved = true;
  panX = x - dragStartX;
  panY = y - dragStartY;
  clampPan();
  applyPan();
}
function endDrag(){
  if(!isDragging) return;
  isDragging = false;
  lightboxPhoto.classList.remove('dragging');
}

lightboxPhoto.addEventListener('mousedown', (e) => { e.preventDefault(); startDrag(e.clientX, e.clientY); });
window.addEventListener('mousemove', (e) => { if(isDragging) moveDrag(e.clientX, e.clientY); });
window.addEventListener('mouseup', endDrag);
lightboxPhoto.addEventListener('touchstart', (e) => {
  const t = e.touches[0];
  startDrag(t.clientX, t.clientY);
}, { passive: true });
lightboxPhoto.addEventListener('touchmove', (e) => {
  if(!isDragging) return;
  const t = e.touches[0];
  moveDrag(t.clientX, t.clientY);
}, { passive: true });
lightboxPhoto.addEventListener('touchend', endDrag);

document.getElementById('lightboxPrev').addEventListener('click', (e) => {
  e.stopPropagation();
  showLightboxOffset(-1);
});
document.getElementById('lightboxNext').addEventListener('click', (e) => {
  e.stopPropagation();
  showLightboxOffset(1);
});

document.addEventListener('keydown', (e) => {
  if(!portfolioModalOverlay.classList.contains('active')) return;
  if(e.key === 'ArrowLeft') showLightboxOffset(-1);
  if(e.key === 'ArrowRight') showLightboxOffset(1);
  if(e.key === 'Escape') closeLightbox();
});

document.getElementById('portfolioModalClose').addEventListener('click', closeLightbox);
portfolioModalOverlay.addEventListener('click', (e) => {
  if(e.target === portfolioModalOverlay) closeLightbox();
});

// ==================== REVIEWS ====================
const reviewsList = document.getElementById('reviewsList');
// Each entry's round avatar is pulled from images/reviews/<position>.jpg
// (1-indexed, see IMG_PATHS.reviewAvatar / renderReviews) — e.g. Julia S.
// below is images/reviews/1.jpg, EternalLord is images/reviews/2.jpg, etc.
// Reorder/add/remove entries here and the avatar lookup follows automatically.
const reviewsData = [
  { nome: 'Julia S.', nota: 5, texto: { pt: 'Excelente trabalho de extrema qualidade, sempre entregando mais do que foi pedido!!', en: 'Excellent work of extreme quality, always delivering more than was asked!!' } },
  { nome: 'EternalLord', nota: 4, texto: { pt: 'Eu encomendei uma ilustração de perfil, ficou muito foda. Recomendo muito.', en: 'I commissioned a profile illustration, it turned out amazing. Highly recommend.' } },
  { nome: 'Dlaym', nota: 5, texto: { pt: 'Trabalho sensacional, obrigado tmj', en: 'Sensational work, thanks a lot' } }
];

function starString(nota){
  return '★'.repeat(nota) + '☆'.repeat(5 - nota);
}

function renderReviews(){
  reviewsList.innerHTML = '';
  reviewsData.forEach((r, i) => {
    const card = document.createElement('div');
    card.className = 'review-card';

    const top = document.createElement('div');
    top.className = 'review-top';

    const avatar = document.createElement('div');
    avatar.className = 'review-avatar';
    avatar.textContent = 'Avatar';
    // images/reviews/<n>.jpg, 1-indexed to match this reviewer's position
    // in reviewsData — falls back to the "Avatar" placeholder circle if
    // that file hasn't been uploaded yet (same pattern as every other
    // tryBgImage() spot on the site).
    tryBgImage(avatar, IMG_PATHS.reviewAvatar(i + 1));

    const nameStars = document.createElement('div');
    nameStars.className = 'review-name-stars';

    const name = document.createElement('div');
    name.className = 'review-name';
    name.textContent = r.nome;

    const stars = document.createElement('div');
    stars.className = 'stars';
    stars.textContent = starString(r.nota);

    nameStars.appendChild(name);
    nameStars.appendChild(stars);

    top.appendChild(avatar);
    top.appendChild(nameStars);

    const text = document.createElement('div');
    text.className = 'review-text';
    text.textContent = r.texto[LANG];

    card.appendChild(top);
    card.appendChild(text);
    reviewsList.appendChild(card);
  });
}
// ==================== IMAGE PROTECTION ====================
// Lightweight friction against casual right-click saving/opening of
// artwork — this is NOT real DRM (anyone can still get the file via
// devtools/view-source), it just removes the easy path. Covers both real
// <img> tags (portfolio grid, lightbox) and the background-image divs used
// everywhere else (cards, gallery, avatar, hero/footer), via one delegated
// listener rather than having to remember to wire up every image spot.
const PROTECTED_IMAGE_SELECTOR =
  'img, .card-img, #galleryMain, .gallery-thumb, #avatarPlaceholder, #heroBanner, #footerBg';

document.addEventListener('contextmenu', (e) => {
  if(e.target.closest(PROTECTED_IMAGE_SELECTOR)){
    e.preventDefault();
  }
});
// Stops the browser's native "drag image to new tab/desktop" gesture on
// real <img> elements (background-image divs aren't draggable to begin
// with, so this only needs to target actual <img> tags).
document.addEventListener('dragstart', (e) => {
  if(e.target.tagName === 'IMG'){
    e.preventDefault();
  }
});

// ==================== INIT ====================
renderStaticText();
renderCommissionCards();
discoverPortfolio();
renderReviews();
loadSlots();
tryBgImage(document.getElementById('avatarPlaceholder'), IMG_PATHS.avatar());
tryBgImage(document.getElementById('heroBanner'), IMG_PATHS.hero());
// Footer intentionally reuses the exact same hero image (see the FOOTER
// comment block in style.css) rather than a separate asset — one picture,
// cropped to the top for the header and to the bottom for the footer.
tryBgImage(document.getElementById('footerBg'), IMG_PATHS.hero());
