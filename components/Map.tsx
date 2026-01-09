/// <reference types="@types/google.maps" />

import { usePersistFn } from "@/hooks/usePersistFn";
import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";

// 1. Declaração global para adicionar o namespace 'google' ao objeto Window
declare global {
  interface Window {
    google?: typeof google;
  }
}

// 2. Configuração das constantes e variáveis de ambiente (API Key e Proxy)
const API_KEY = process.env.NEXT_PUBLIC_FORGE_API_KEY;
const FORGE_BASE_URL =
  process.env.NEXT_PUBLIC_FORGE_API_URL || "https://forge.butterfly-effect.dev";
const MAPS_PROXY_URL = `${FORGE_BASE_URL}/v1/maps/proxy`;

// 3. Função utilitária para carregar o script do Google Maps dinamicamente
function loadMapScript() {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    // Define a source usando o proxy e as bibliotecas necessárias
    script.src = `${MAPS_PROXY_URL}/maps/api/js?key=${API_KEY}&v=weekly&libraries=marker,places,geocoding,geometry`;
    script.async = true;
    script.crossOrigin = "anonymous";
    script.onload = () => {
      resolve(null);
      script.remove(); // Remove o script do DOM após o carregamento
    };
    script.onerror = () => {
      console.error("Failed to load Google Maps script");
    };
    document.head.appendChild(script);
  });
}

// 4. Interface de Propriedades (Props)
interface MapViewProps {
  className?: string;
  initialCenter?: google.maps.LatLngLiteral;
  initialZoom?: number;
  onMapReady?: (map: google.maps.Map) => void;
}

// Componente Principal MapView
export function MapView({
  className,
  initialCenter = { lat: 37.7749, lng: -122.4194 }, // Coordenadas padrão
  initialZoom = 12,
  onMapReady,
}: MapViewProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<google.maps.Map | null>(null);

  // 5. Lógica de Inicialização (Hook persistente)
  const init = usePersistFn(async () => {
    await loadMapScript(); // Aguarda o script carregar
    
    if (!mapContainer.current) {
      console.error("Map container not found");
      return;
    }
    
    // Instancia o mapa no container referenciado
    map.current = new window.google.maps.Map(mapContainer.current, {
      zoom: initialZoom,
      center: initialCenter,
      mapTypeControl: true,
      fullscreenControl: true,
      zoomControl: true,
      streetViewControl: true,
      mapId: "DEMO_MAP_ID",
    });

    // Callback para expor a instância do mapa ao componente pai
    if (onMapReady) {
      onMapReady(map.current);
    }
  });

  // 6. Efeito para disparar a inicialização ao montar
  useEffect(() => {
    init();
  }, [init]);

  // 7. Renderização do container
  return (
    <div ref={mapContainer} className={cn("w-full h-[500px]", className)} />
  );
}