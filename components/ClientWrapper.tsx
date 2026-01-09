"use client";

import { ReactNode } from "react";

// 1. Interface que define a tipagem (espera elementos filhos)
interface ClientWrapperProps {
    children: ReactNode;
}

// 2. Componente Wrapper para renderização no lado do cliente
export default function ClientWrapper({ children }: ClientWrapperProps) {
    return (
        // 3. Renderiza o conteúdo filho dentro de um Fragmento React
        <>{children}</>
    );
}