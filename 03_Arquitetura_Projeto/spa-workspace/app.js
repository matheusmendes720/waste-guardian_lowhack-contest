/* ========================================
   WASTE GUARDIAN — APP LOGIC
   SPA Navigation & Interactions
   ======================================== */

// ========================================
// NAVIGATION SYSTEM
// ========================================

// Screen elements
const screens = {
    splash: document.getElementById('splash'),
    home: document.getElementById('home'),
    scanner: document.getElementById('scanner'),
    receitas: document.getElementById('receitas'),
    impacto: document.getElementById('impacto'),
    doacao: document.getElementById('doacao'),
    perfil: document.getElementById('perfil')
};

// Navigation function
function navigateTo(screenId) {
    // Hide all screens
    Object.values(screens).forEach(screen => {
        if (screen) screen.classList.remove('active');
    });

    // Show target screen
    const targetScreen = screens[screenId];
    if (targetScreen) {
        targetScreen.classList.add('active');

        // Scroll to top
        window.scrollTo(0, 0);

        // Leaving the scanner → reset scanner to idle
        if (screenId !== 'scanner' && appState.scanner.state !== SCANNER_STATES.IDLE) {
            if (scannerTimer) {
                clearTimeout(scannerTimer);
                scannerTimer = null;
            }
            setScannerState(SCANNER_STATES.IDLE);
        }

        // Initialize scanner UI when entering
        if (screenId === 'scanner' && appState.scanner.state === SCANNER_STATES.IDLE) {
            // Already idle, no-op
        }

        // Trigger screen-specific animations after the screen becomes visible.
        // Small delay so the browser commits the layout / fade-in first.
        setTimeout(() => triggerScreenAnimations(screenId), 60);
    }
}

// ========================================
// STAGGER ANIMATION UTILITY
// ========================================
// Apply increasing animation-delay to matched items so they enter in a cascade.
function applyStaggerAnimation(selector, delayMs = 50, maxItems = 5) {
    const items = document.querySelectorAll(selector);
    items.forEach((item, index) => {
        if (index < maxItems) {
            item.style.animationDelay = `${index * delayMs}ms`;
        }
        item.classList.add('stagger-item');
    });
}

// ========================================
// COUNT-UP ANIMATION
// ========================================
// Animate a numeric element from 0 → its current text value.
function animateCountUp(element, _unused, duration = 1200) {
    if (!element) return;

    const originalText = element.textContent.trim();
    const match = originalText.match(/^([\D]*)([\d.,]+)(.*)$/);
    if (!match) return;

    const prefix = match[1] || '';
    const numStr = match[2];
    const suffix = match[3] || '';

    const isFloat = numStr.includes(',') || (numStr.includes('.') && !/^\d{4,}$/.test(numStr));
    const final = parseFloat(numStr.replace(',', '.'));
    if (isNaN(final)) return;

    const startTime = performance.now();

    function tick(now) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Ease-out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = final * eased;
        const display = isFloat
            ? current.toFixed(1)
            : Math.round(current).toString();
        element.textContent = `${prefix}${display}${suffix}`;
        if (progress < 1) {
            requestAnimationFrame(tick);
        } else {
            // Snap to exact final value (including original casing)
            element.textContent = originalText;
        }
    }

    element.textContent = `${prefix}${isFloat ? '0.0' : '0'}${suffix}`;
    requestAnimationFrame(tick);
}

// ========================================
// IMPACTO SCREEN ANIMATIONS
// ========================================
function animateImpactoScreen() {
    // Bar chart: capture each bar's target height, reset to 0, then animate
    const bars = document.querySelectorAll('#impacto .bar');
    bars.forEach((bar, i) => {
        const targetHeight = bar.style.height;
        if (targetHeight) {
            bar.style.setProperty('--bar-height', targetHeight);
        }
        bar.classList.remove('animated');
        // Force reflow so the height: 0 → animated transition restarts
        void bar.offsetWidth;
        setTimeout(() => bar.classList.add('animated'), 50 * i);
    });

    // Progress bar: same pattern
    const progressFill = document.querySelector('#impacto .progress-fill');
    if (progressFill) {
        progressFill.classList.remove('animated');
        void progressFill.offsetWidth;
        setTimeout(() => progressFill.classList.add('animated'), 200);
    }

    // Count-up stat numbers (start slightly after the bars begin)
    const statNumbers = document.querySelectorAll('#impacto .stat-number');
    statNumbers.forEach((el, i) => {
        setTimeout(() => animateCountUp(el, 0, 1200), 100 * i);
    });
}

// ========================================
// SCREEN ANIMATION DISPATCHER
// ========================================
function triggerScreenAnimations(screenId) {
    switch (screenId) {
        case 'home':
            applyStaggerAnimation('#home .impact-card', 50, 5);
            applyStaggerAnimation('#home .action-card', 50, 5);
            break;
        case 'scanner':
            // Scanner has its own state-driven animation; nothing to do here.
            break;
        case 'receitas':
            applyStaggerAnimation('#receitas .recipe-card', 50, 5);
            break;
        case 'impacto':
            animateImpactoScreen();
            break;
        case 'doacao':
            applyStaggerAnimation('#doacao .coop-card', 50, 5);
            break;
        case 'perfil':
            applyStaggerAnimation('#perfil .profile-stat', 50, 5);
            applyStaggerAnimation('#perfil .menu-item', 50, 5);
            break;
    }
}

// ========================================
// SPLASH SCREEN
// ========================================

// Auto-transition from splash after 2.5 seconds
setTimeout(() => {
    const splash = document.getElementById('splash');
    if (splash && splash.classList.contains('active')) {
        navigateTo('home');
    }
}, 2500);

// ========================================
// SCANNER SIMULATION
// ========================================

// ========================================
// GLOBAL APP STATE (context passing between screens)
// ========================================
window.appState = {
    scanner: { lastScannedProduct: null, state: 'idle' },
    receitas: { contextProduct: null },
    doacao: { contextProduct: null }
};

// Mock scan results (8-product database)
const mockScans = [
    { id: "iogurte", icon: "🍶", name: "Iogurte Natural Integral", expiry: "05/06/2026", daysLeft: 2, value: "R$ 8,90", co2: "250g" },
    { id: "pao", icon: "🍞", name: "Pão de Forma Integral", expiry: "04/06/2026", daysLeft: 1, value: "R$ 6,50", co2: "180g" },
    { id: "banana", icon: "🍌", name: "Banana Prata (3 un)", expiry: "03/06/2026", daysLeft: 0, value: "R$ 4,90", co2: "120g" },
    { id: "leite", icon: "🥛", name: "Leite Integral UHT", expiry: "08/06/2026", daysLeft: 5, value: "R$ 5,90", co2: "200g" },
    { id: "queijo", icon: "🧀", name: "Queijo Minas Frescal", expiry: "06/06/2026", daysLeft: 3, value: "R$ 12,90", co2: "400g" },
    { id: "tomate", icon: "🍅", name: "Tomate Italiano (4 un)", expiry: "05/06/2026", daysLeft: 2, value: "R$ 7,80", co2: "150g" },
    { id: "maca", icon: "🍎", name: "Maçã Fuji (5 un)", expiry: "12/06/2026", daysLeft: 9, value: "R$ 9,50", co2: "100g" },
    { id: "cenoura", icon: "🥕", name: "Cenoura Orgânica (1 kg)", expiry: "10/06/2026", daysLeft: 7, value: "R$ 4,50", co2: "80g" }
];

// Scanner state machine constants
const SCANNER_STATES = {
    IDLE: 'idle',
    SCANNING: 'scanning',
    RESULT: 'result',
    ERROR: 'error'
};

let scannerTimer = null;

// ========================================
// EXPIRY BADGE HELPER (daysLeft → text + class)
// ========================================
function getExpiryBadge(product) {
    const daysLeft = product.daysLeft;
    // expiry format: DD/MM/YYYY → "DD/MM" for the badge
    const shortDate = product.expiry ? product.expiry.slice(0, 5) : '';

    if (daysLeft === 0) {
        return { text: `⚠️ Vence hoje (${shortDate})`, className: 'danger' };
    }
    if (daysLeft === 1) {
        return { text: `⚠️ Vence amanhã (${shortDate})`, className: 'warning' };
    }
    if (daysLeft >= 2 && daysLeft <= 7) {
        return { text: `⏰ Vence em ${daysLeft} dias`, className: 'warning' };
    }
    return { text: `✅ Fresco, vence em ${daysLeft} dias`, className: 'success' };
}

// ========================================
// SCANNER STATE MACHINE
// ========================================

// Set scanner to a specific state (UI updates only)
function setScannerState(newState) {
    const scannerScreen = screens.scanner;
    if (!scannerScreen) return;

    appState.scanner.state = newState;

    // Remove all state classes, add the new one
    scannerScreen.classList.remove(
        'scanner-state-idle',
        'scanner-state-scanning',
        'scanner-state-result',
        'scanner-state-error'
    );
    scannerScreen.classList.add(`scanner-state-${newState}`);

    const scanAnimation = scannerScreen.querySelector('.scan-animation');
    const scanText = scanAnimation ? scanAnimation.querySelector('p') : null;
    const scanIcon = scanAnimation ? scanAnimation.querySelector('.scan-icon') : null;
    const captureBtn = scannerScreen.querySelector('.capture-btn');
    const mockResult = scannerScreen.querySelector('.mock-result');

    switch (newState) {
        case SCANNER_STATES.IDLE:
            if (scanText) scanText.textContent = 'Posicione o produto dentro do quadro';
            if (scanIcon) scanIcon.classList.remove('pulsing');
            if (captureBtn) captureBtn.disabled = false;
            if (mockResult) mockResult.classList.remove('active');
            removeScannerErrorUI();
            removeScanAgainButton();
            break;

        case SCANNER_STATES.SCANNING:
            if (scanText) scanText.textContent = 'Escaneando...';
            if (scanIcon) scanIcon.classList.add('pulsing');
            if (captureBtn) captureBtn.disabled = true;
            if (mockResult) mockResult.classList.remove('active');
            removeScannerErrorUI();
            removeScanAgainButton();
            break;

        case SCANNER_STATES.RESULT:
            if (scanText) scanText.textContent = 'Produto identificado!';
            if (scanIcon) scanIcon.classList.remove('pulsing');
            if (captureBtn) captureBtn.disabled = false;
            if (mockResult) mockResult.classList.add('active');
            removeScannerErrorUI();
            addScanAgainButton();
            break;

        case SCANNER_STATES.ERROR:
            if (scanText) scanText.textContent = 'Erro no escaneamento';
            if (scanIcon) scanIcon.classList.remove('pulsing');
            if (captureBtn) captureBtn.disabled = true;
            if (mockResult) mockResult.classList.remove('active');
            showScannerErrorUI();
            removeScanAgainButton();
            break;
    }
}

// Inject error UI for the error state
function showScannerErrorUI() {
    const scannerScreen = screens.scanner;
    if (!scannerScreen) return;
    if (scannerScreen.querySelector('.scanner-error')) return;

    const errorEl = document.createElement('div');
    errorEl.className = 'scanner-error';
    errorEl.innerHTML = `
        <div class="error-icon" aria-hidden="true">⚠️</div>
        <p class="error-message">Não foi possível identificar o produto.</p>
        <button class="btn-retry" type="button">Tentar novamente</button>
    `;
    scannerScreen.querySelector('.camera-frame').after(errorEl);

    errorEl.querySelector('.btn-retry').addEventListener('click', () => {
        setScannerState(SCANNER_STATES.SCANNING);
        performScan();
    });
}

function removeScannerErrorUI() {
    const errorEl = document.querySelector('.scanner-error');
    if (errorEl) errorEl.remove();
}

// Add a "scan again" affordance to the result card so result → idle is reachable
function addScanAgainButton() {
    const resultCard = document.querySelector('#scanner .result-card');
    if (!resultCard) return;
    if (resultCard.querySelector('.scan-again-btn')) return;

    const btn = document.createElement('button');
    btn.className = 'scan-again-btn';
    btn.type = 'button';
    btn.innerHTML = '← Escanear novamente';
    btn.addEventListener('click', () => {
        setScannerState(SCANNER_STATES.IDLE);
    });
    resultCard.appendChild(btn);
}

function removeScanAgainButton() {
    const btn = document.querySelector('.scan-again-btn');
    if (btn) btn.remove();
}

// Run the actual scan: 1.5s delay then 95% success / 5% error
function performScan() {
    if (scannerTimer) {
        clearTimeout(scannerTimer);
        scannerTimer = null;
    }

    scannerTimer = setTimeout(() => {
        scannerTimer = null;
        const isError = Math.random() < 0.05;

        if (isError) {
            setScannerState(SCANNER_STATES.ERROR);
        } else {
            const product = mockScans[Math.floor(Math.random() * mockScans.length)];
            appState.scanner.lastScannedProduct = product;
            displayScanResult(product);
            setScannerState(SCANNER_STATES.RESULT);
        }
    }, 1500);
}

// Render a scanned product into the result card
function displayScanResult(product) {
    const resultCard = document.querySelector('.result-card');
    if (!resultCard) return;

    const foodIcon = resultCard.querySelector('.food-icon');
    const titleEl = resultCard.querySelector('h3');
    const expiryWarning = resultCard.querySelector('.expiry-warning');
    const detailValues = resultCard.querySelectorAll('.detail-value');

    if (foodIcon) foodIcon.textContent = product.icon;
    if (titleEl) titleEl.textContent = product.name;

    if (expiryWarning) {
        const { text, className } = getExpiryBadge(product);
        expiryWarning.textContent = text;
        expiryWarning.classList.remove('warning', 'danger', 'success');
        expiryWarning.classList.add(className);
    }

    if (detailValues[0]) detailValues[0].textContent = product.value;
    if (detailValues[1]) detailValues[1].textContent = product.co2;
}

// Capture button → start scanning
document.querySelector('.capture-btn')?.addEventListener('click', function() {
    if (appState.scanner.state === SCANNER_STATES.SCANNING) return;
    setScannerState(SCANNER_STATES.SCANNING);
    performScan();
});

// Intercept clicks on result-action buttons (Ver Receitas / Agendar Doação)
// so we can populate appState before navigation. Use capture phase so we
// run before the inline onclick="navigateTo(...)" handler.
function setupResultActionHandlers() {
    const resultActions = document.querySelector('#scanner .result-actions');
    if (!resultActions) return;

    resultActions.addEventListener('click', function(e) {
        const btn = e.target.closest('.btn-result');
        if (!btn) return;

        const product = appState.scanner.lastScannedProduct;
        if (!product) return;

        if (btn.classList.contains('secondary')) {
            // Agendar Doação
            appState.doacao.contextProduct = product;
        } else {
            // Ver Receitas
            appState.receitas.contextProduct = product;
        }
    }, true);
}

// ========================================
// RECIPE MODAL
// ========================================

// Recipe data
const recipes = {
    torta: {
        name: 'Torta de Iogurte',
        icon: '🍰',
        time: '30 min',
        level: 'Fácil',
        cost: 'R$ 12',
        co2: '400g',
        ingredients: [
            '1 iogurte natural (200g)',
            '2 ovos',
            '1 xícara de farinha de trigo',
            '1/2 xícara de açúcar',
            '1 colher de sopa de óleo',
            '1 colher de chá de fermento'
        ],
        steps: [
            'Preheat o forno a 180°C.',
            'Misture o iogurte com os ovos e o óleo.',
            'Adicione o açúcar e misture bem.',
            'Acrescente a farinha e o fermento.',
            'Misture até ficar homogêneo.',
            'Despeje em uma forma untada.',
            'Asse por 25-30 minutos.'
        ]
    },
    smoothie: {
        name: 'Smoothie Proteico',
        icon: '🥤',
        time: '5 min',
        level: 'Fácil',
        cost: 'R$ 8',
        co2: '250g',
        ingredients: [
            '1 iogurte natural',
            '1 banana madura',
            '1 colher de aveia',
            '1 colher de mel',
            '100ml de leite'
        ],
        steps: [
            'Coloque todos os ingredientes no liquidificador.',
            'Bata por 2 minutos até ficar homogêneo.',
            'Sirva imediatamente.',
            'Receita para 1 porção.'
        ]
    },
    bolo: {
        name: 'Bolo de Iogurte',
        icon: '🎂',
        time: '45 min',
        level: 'Médio',
        cost: 'R$ 15',
        co2: '500g',
        ingredients: [
            '2 iogurtes naturais',
            '2 xícaras de farinha de trigo',
            '1 e 1/2 xícara de açúcar',
            '3 ovos',
            '1/2 xícara de óleo',
            '1 colher de sopa de fermento'
        ],
        steps: [
            'Preheat o forno a 180°C.',
            'Bata os ovos com o açúcar até ficar fofo.',
            'Adicione o iogurte e o óleo.',
            'Acrescente a farinha aos poucos.',
            'Por último, adicione o fermento.',
            'Asse por 35-40 minutos.'
        ]
    },
    sorvete: {
        name: 'Sorvete Caseiro',
        icon: '🍦',
        time: '20 min',
        level: 'Fácil',
        cost: 'R$ 18',
        co2: '600g',
        ingredients: [
            '2 iogurtes naturais',
            '1 lata de leite condensado',
            '200ml de creme de leite',
            'Frutas a gosto (morango, manga)'
        ],
        steps: [
            'Bata o iogurte com o leite condensado.',
            'Acrescente o creme de leite.',
            'Misture bem até ficar cremoso.',
            'Adicione as frutas picadas.',
            'Leve ao freezer por 4+ horas.',
            'Sirva em bolas.'
        ]
    }
};

// Track the element that opened the modal so we can restore focus on close
let modalLastFocused = null;
let modalKeydownHandler = null;

// Show recipe detail
function showRecipeDetail(recipeId) {
    const recipe = recipes[recipeId];
    if (!recipe) return;

    const modal = document.getElementById('recipe-modal');
    const content = modal.querySelector('.modal-content');

    // Update modal content
    content.innerHTML = `
        <button class="modal-close" onclick="closeRecipeModal()" aria-label="Fechar">×</button>
        <div class="recipe-detail-header">
            <span class="recipe-icon-large">${recipe.icon}</span>
            <h2>${recipe.name}</h2>
        </div>
        <div class="recipe-detail-meta">
            <span>⏱️ ${recipe.time}</span>
            <span>🟢 ${recipe.level}</span>
            <span>💰 ${recipe.cost}</span>
            <span>🌱 ${recipe.co2}</span>
        </div>
        <div class="recipe-detail-section">
            <h3>📋 Ingredientes</h3>
            <ul>
                ${recipe.ingredients.map(i => `<li>${i}</li>`).join('')}
            </ul>
        </div>
        <div class="recipe-detail-section">
            <h3>👩‍🍳 Modo de Preparo</h3>
            <ol>
                ${recipe.steps.map(s => `<li>${s}</li>`).join('')}
            </ol>
        </div>
        <div class="recipe-impact-detail">
            <span>🌱 Você economiza ${recipe.cost} e evita ${recipe.co2} de CO₂</span>
        </div>
    `;

    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Save the previously focused element to restore on close
    modalLastFocused = document.activeElement;

    // Focus the close button (first focusable element) for keyboard users
    const firstFocusable = content.querySelector(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    if (firstFocusable) {
        firstFocusable.focus();
    }

    // Set up focus trap
    setupModalFocusTrap(modal);
}

// Trap Tab focus inside the modal while it is open
function setupModalFocusTrap(modal) {
    // Remove any previous handler before adding a new one
    if (modalKeydownHandler) {
        document.removeEventListener('keydown', modalKeydownHandler);
    }

    modalKeydownHandler = function(e) {
        if (!modal.classList.contains('active')) return;

        if (e.key === 'Escape') {
            e.preventDefault();
            closeRecipeModal();
            return;
        }

        if (e.key !== 'Tab') return;

        const focusables = modal.querySelectorAll(
            'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (focusables.length === 0) return;

        const first = focusables[0];
        const last = focusables[focusables.length - 1];

        if (e.shiftKey && document.activeElement === first) {
            e.preventDefault();
            last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
            e.preventDefault();
            first.focus();
        }
    };

    document.addEventListener('keydown', modalKeydownHandler);
}

// Close recipe modal
function closeRecipeModal() {
    const modal = document.getElementById('recipe-modal');
    modal.classList.remove('active');
    document.body.style.overflow = '';

    // Remove the keydown handler
    if (modalKeydownHandler) {
        document.removeEventListener('keydown', modalKeydownHandler);
        modalKeydownHandler = null;
    }

    // Restore focus to the element that opened the modal
    if (modalLastFocused && typeof modalLastFocused.focus === 'function') {
        modalLastFocused.focus();
    }
    modalLastFocused = null;
}

// Close modal when the backdrop (the modal element itself, not its content) is clicked
function setupModalBackdropClose() {
    const modal = document.getElementById('recipe-modal');
    if (!modal) return;
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeRecipeModal();
        }
    });
}

// ========================================
// INJECT CSS FOR NEW SCANNER STATES & STAGGER ITEMS
// (Kept in JS so the file is self-contained for the new features)
// ========================================
function injectScannerStyles() {
    if (document.getElementById('scanner-styles')) return;

    const style = document.createElement('style');
    style.id = 'scanner-styles';
    style.textContent = `
        /* Pulsing scan icon (reuses scanPulse keyframes) */
        .scan-icon.pulsing {
            display: inline-block;
            animation: scanPulse 1500ms var(--ease-in-out) infinite;
        }
        .scan-icon {
            font-size: 48px;
            line-height: 1;
        }

        /* Scanner state-driven visibility for the existing scan-animation */
        .scanner-state-idle .scan-animation,
        .scanner-state-scanning .scan-animation,
        .scanner-state-result .scan-animation,
        .scanner-state-error .scan-animation {
            display: flex;
        }
        .scanner-state-result .scan-animation,
        .scanner-state-idle .scan-animation {
            opacity: 0.7;
        }

        /* Capture button disabled state */
        .capture-btn:disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }

        /* Error UI injected dynamically */
        .scanner-error {
            padding: var(--space-4, 1rem);
            text-align: center;
            background: var(--color-danger-bg, #FEE2E2);
            color: var(--color-danger-fg, #991B1B);
            border-top: 1px solid var(--color-danger-border, #FCA5A5);
            animation: fadeSlideUp var(--duration-normal, 250ms) var(--ease-out, ease-out);
        }
        .scanner-error .error-icon {
            font-size: 40px;
            display: block;
            margin-bottom: var(--space-2, 0.5rem);
        }
        .scanner-error .error-message {
            font-size: var(--text-sm, 0.875rem);
            font-weight: var(--weight-medium, 500);
            margin-bottom: var(--space-3, 0.75rem);
        }
        .scanner-error .btn-retry {
            padding: var(--space-2, 0.5rem) var(--space-4, 1rem);
            background: var(--color-danger-fg, #991B1B);
            color: white;
            border: none;
            border-radius: var(--radius-md, 10px);
            font-weight: var(--weight-semibold, 600);
            font-family: var(--font-sans, sans-serif);
            cursor: pointer;
            min-height: var(--touch-target-min, 44px);
        }
        .scanner-error .btn-retry:hover {
            filter: brightness(0.9);
        }

        /* Scan-again affordance on the result card */
        .scan-again-btn {
            display: block;
            width: 100%;
            margin-top: var(--space-3, 0.75rem);
            padding: var(--space-2, 0.5rem);
            background: transparent;
            border: none;
            color: var(--color-primary, #16A34A);
            font-weight: var(--weight-medium, 500);
            font-size: var(--text-sm, 0.875rem);
            cursor: pointer;
            font-family: var(--font-sans, sans-serif);
        }
        .scan-again-btn:hover {
            text-decoration: underline;
        }

        /* Stagger item baseline animation (reuses fadeSlideUp) */
        .stagger-item {
            animation: fadeSlideUp var(--duration-normal, 250ms) var(--ease-out, ease-out) both;
        }
    `;
    document.head.appendChild(style);
}

// ========================================
// ANIMATIONS & EFFECTS
// ========================================

// Button press animation
document.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('touchstart', function() {
        this.style.transform = 'scale(0.95)';
    });
    
    btn.addEventListener('touchend', function() {
        this.style.transform = '';
    });
});

// ========================================
// STORAGE (Mock Data)
// ========================================

// User data (mock)
const userData = {
    name: 'Maria Silva',
    initials: 'MS',
    level: 'Economizador',
    points: 2340,
    ranking: 47,
    totalRanking: 312,
    streak: 7,
    foodsSaved: 24.5,
    co2Avoided: 18.2,
    moneySaved: 180,
    scans: 23,
    badges: [
        { id: 'iniciante', name: 'Iniciante Verde', earned: true },
        { id: 'economizador', name: 'Economizador', earned: true },
        { id: 'heroi', name: 'Herói Climático', earned: true },
        { id: 'mestre', name: 'Mestre', earned: false }
    ]
};

// Save user data to localStorage (for persistence)
function saveUserData() {
    try {
        localStorage.setItem('wasteGuardianUser', JSON.stringify(userData));
    } catch (e) {
        console.log('LocalStorage not available');
    }
}

// Load user data from localStorage
function loadUserData() {
    try {
        const saved = localStorage.getItem('wasteGuardianUser');
        if (saved) {
            const data = JSON.parse(saved);
            Object.assign(userData, data);
        }
    } catch (e) {
        console.log('LocalStorage not available');
    }
}

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    loadUserData();

    // Update UI with user data
    updateUIWithUserData();

    // Save data periodically
    setInterval(saveUserData, 30000); // Every 30 seconds

    // Wire up scanner, modal, and result-action context passing
    injectScannerStyles();
    setScannerState(SCANNER_STATES.IDLE);
    setupResultActionHandlers();
    setupModalBackdropClose();

    // Trigger animations for the initially active screen (home)
    triggerScreenAnimations('home');

    console.log('🚀 Waste Guardian SPA initialized');
    console.log('📊 User data:', userData);
});

// Update UI with user data
function updateUIWithUserData() {
    // Update profile
    const profileAvatar = document.querySelector('#perfil .profile-avatar');
    const profileName = document.querySelector('#perfil .profile-info h2');
    const profileLevel = document.querySelector('#perfil .profile-level');
    
    if (profileAvatar) profileAvatar.textContent = userData.initials;
    if (profileName) profileName.textContent = userData.name;
    if (profileLevel) profileLevel.textContent = `🌱 Nível ${userData.level}`;
    
    // Update stats
    const statsPoints = document.querySelector('#perfil .profile-stat-value:nth-child(1)');
    const statsRanking = document.querySelector('#perfil .profile-stat-value:nth-child(2)');
    const statsScans = document.querySelector('#perfil .profile-stat-value:nth-child(3)');
    
    if (statsPoints) statsPoints.textContent = userData.points;
    if (statsRanking) statsRanking.textContent = userData.ranking;
    if (statsScans) statsScans.textContent = userData.scans;
    
    // Update home greeting
    const welcomeText = document.querySelector('#home .welcome-card h2');
    if (welcomeText) {
        const firstName = userData.name.split(' ')[0];
        welcomeText.textContent = `Olá, ${firstName}! 👋`;
    }
    
    // Update streak
    const streakElement = document.querySelector('#home .streak');
    if (streakElement) {
        streakElement.textContent = `🔥 ${userData.streak} dias consecutivos`;
    }
    
    // Update impact stats
    const impactKg = document.querySelector('#home .impact-card.primary .impact-value');
    const impactCo2 = document.querySelector('#home .impact-card.secondary .impact-value');
    
    if (impactKg) impactKg.textContent = `${userData.foodsSaved}kg`;
    if (impactCo2) impactCo2.textContent = `${userData.co2Avoided}kg`;
    
    // Update ranking
    const rankingPos = document.querySelector('#home .ranking-pos');
    if (rankingPos) rankingPos.textContent = `#${userData.ranking}/${userData.totalRanking}`;
    
    // Update profile stats
    const profileStats = document.querySelectorAll('#perfil .profile-stat-value');
    if (profileStats[0]) profileStats[0].textContent = userData.points;
    if (profileStats[1]) profileStats[1].textContent = userData.ranking;
    if (profileStats[2]) profileStats[2].textContent = userData.scans;
}

// ========================================
// DEMO MODE: Simulate actions
// ========================================

// Simulate scan action
function simulateScan() {
    // Random scan result
    const randomScan = mockScans[Math.floor(Math.random() * mockScans.length)];
    
    // Update user stats
    userData.scans++;
    userData.points += 10; // 10 points per scan
    
    // Update food saved (mock calculation)
    userData.foodsSaved += 0.1;
    userData.co2Avoided += 0.05;
    userData.moneySaved += 0.5;
    
    // Save to localStorage
    saveUserData();
    updateUIWithUserData();
    
    console.log('📱 Simulated scan:', randomScan.name);
}

// ========================================
// CONSOLE LOGO
// ========================================

console.log(`
╔═══════════════════════════════════════════════════════════╗
║                                                           ║
║   🌿  WASTE GUARDIAN — SPA v1.0                          ║
║      "Cada grama conta"                                   ║
║                                                           ║
║   🚀 Deploy: Netlify                                       ║
║   📱 Platform: Mobile-First SPA                            ║
║   🎯 Mission: Zero food waste                              ║
║                                                           ║
╚═══════════════════════════════════════════════════════════╝
`);

// Make functions globally available
window.navigateTo = navigateTo;
window.showRecipeDetail = showRecipeDetail;
window.closeRecipeModal = closeRecipeModal;
window.setScannerState = setScannerState;
window.performScan = performScan;
window.applyStaggerAnimation = applyStaggerAnimation;
window.animateCountUp = animateCountUp;
window.animateImpactoScreen = animateImpactoScreen;
window.triggerScreenAnimations = triggerScreenAnimations;
window.getExpiryBadge = getExpiryBadge;
window.appState = appState;