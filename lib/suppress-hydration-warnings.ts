// Supressão global de avisos de hidratação causados por extensões do navegador
if (typeof window !== 'undefined') {
    // Salva o console.error original
    const originalError = console.error;

    // Sobrescreve console.error para filtrar avisos de hidratação
    console.error = (...args: unknown[]) => {
        const errorMessage = args[0]?.toString() || '';

        // Lista de mensagens a serem suprimidas (causadas por extensões do navegador)
        const suppressedMessages = [
            'Hydration failed',
            'hydrated but some attributes',
            'suppresshydrationwarning',
            'data-new-gr-c-s-check-loaded',
            'data-gr-ext-installed',
            'data-lightpdf-translator',
            'data-lt-installed',
        ];

        // Verifica se a mensagem deve ser suprimida
        const shouldSuppress = suppressedMessages.some(msg =>
            errorMessage.toLowerCase().includes(msg.toLowerCase())
        );

        // Se não deve ser suprimida, mostra o erro normalmente
        if (!shouldSuppress) {
            originalError.apply(console, args);
        }
    };
}

export { };
