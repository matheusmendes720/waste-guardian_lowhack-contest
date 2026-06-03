import { create } from 'zustand'

/**
 * Global app store powered by Zustand.
 * Holds the mock user profile (used by the Home dashboard) and the
 * current top-level screen name (used by the bottom navigation to
 * compute the active item without a parent re-render).
 *
 * The `scanner` slice owns the four-state machine
 * (idle | scanning | result | error) plus the most recent
 * product payload and any error message, so the Scanner screen
 * can drive its UI off the store instead of local state.
 */
export const useAppStore = create((set) => ({
  user: {
    name: 'Maria Silva',
    initials: 'MS',
    firstName: 'Maria',
    streak: 7,
    foodsSavedKg: '2.3',
    co2AvoidedKg: '1.8',
    rankingPosition: 47,
    rankingTotal: 312,
    percentile: 15,
    points: 2340
  },
  currentScreen: 'home',
  setCurrentScreen: (screen) => set({ currentScreen: screen }),

  /* ----------------------------- Scanner state ----------------------------- */
  scanner: {
    state: 'idle', // 'idle' | 'scanning' | 'result' | 'error'
    lastScanned: null,
    lastError: null
  },

  /**
   * Transition the scanner state machine. `payload` is optional and
   * is used to attach a scanned product (on 'result') or an error
   * message (on 'error') to the slice in a single set call.
   */
  setScannerState: (state, payload = {}) =>
    set((s) => ({
      scanner: {
        state,
        lastScanned: payload.lastScanned ?? s.scanner.lastScanned,
        lastError: payload.lastError ?? s.scanner.lastError
      }
    })),

  setLastScanned: (product) =>
    set((s) => ({ scanner: { ...s.scanner, lastScanned: product } })),

  setLastError: (message) =>
    set((s) => ({ scanner: { ...s.scanner, lastError: message } })),

  resetScanner: () =>
    set({ scanner: { state: 'idle', lastScanned: null, lastError: null } }),

  /* ----------------------------- Receitas state ---------------------------- */
  /**
   * Slice for the Receitas (Recipes) screen. The scanner hands off the
   * most recently scanned product via `setContextProduct`, the screen
   * opens the recipe detail modal by writing to `selectedRecipe`, and
   * either value can be cleared in one go with `clearReceitasContext`.
   */
  receitas: {
    contextProduct: null, // product passed in from scanner
    selectedRecipe: null
  },

  setContextProduct: (product) =>
    set((s) => ({ receitas: { ...s.receitas, contextProduct: product } })),

  setSelectedRecipe: (recipe) =>
    set((s) => ({ receitas: { ...s.receitas, selectedRecipe: recipe } })),

  clearReceitasContext: () =>
    set({ receitas: { contextProduct: null, selectedRecipe: null } }),

  /* ----------------------------- Doacao state ----------------------------- */
  /**
   * Slice for the Doacao (Donation) screen. Holds the product
   * context (when navigating from Scanner) and the cooperative
   * the user picked when scheduling a pickup.
   */
  doacao: {
    contextProduct: null,
    pendingCoopId: null
  },

  setDoacaoProduct: (product) =>
    set((s) => ({ doacao: { ...s.doacao, contextProduct: product } })),

  setPendingCoopId: (id) =>
    set((s) => ({ doacao: { ...s.doacao, pendingCoopId: id } })),

  clearDoacaoContext: () =>
    set({ doacao: { contextProduct: null, pendingCoopId: null } })
}))
