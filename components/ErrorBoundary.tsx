import { cn } from "@/lib/utils";
import { AlertTriangle, RotateCcw } from "lucide-react";
import { Component, ReactNode } from "react";

// 1. Definição das Interfaces para Props e State
interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

// 2. Componente de Classe (Obrigatório para Error Boundaries no React)
class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  // 3. Ciclo de Vida: Captura o erro e atualiza o estado para renderizar a UI de fallback
  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  render() {
    // 4. Renderização Condicional: Se houver erro, exibe a tela de erro customizada
    if (this.state.hasError) {
      return (
        <div className="flex items-center justify-center min-h-screen p-8 bg-background">
          <div className="flex flex-col items-center w-full max-w-2xl p-8">
            
            {/* Ícone de Alerta */}
            <AlertTriangle
              size={48}
              className="text-destructive mb-6"
            />

            <h2 className="text-xl mb-4">An unexpected error occurred.</h2>

            {/* Exibição do Stack Trace para depuração */}
            <div className="p-4 w-full rounded bg-muted overflow-auto mb-6">
              <pre className="text-sm text-muted-foreground whitespace-break-spaces">
                {this.state.error?.stack}
              </pre>
            </div>

            {/* Botão para recarregar a página */}
            <button
              onClick={() => window.location.reload()}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-lg",
                "bg-primary text-primary-foreground",
                "hover:opacity-90 cursor-pointer"
              )}
            >
              <RotateCcw size={16} />
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    // 5. Renderização Normal: Se não houver erro, renderiza os componentes filhos normalmente
    return this.props.children;
  }
}

export default ErrorBoundary;