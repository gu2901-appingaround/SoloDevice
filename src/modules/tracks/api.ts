export interface Track {
  id: string;
  name: string;
  imageUrl: string;
}

export interface ApiResponse<T> {
  data?: T;
  error?: string;
  details?: string;
  requestId?: string;
}

export const fetchTracks = async (): Promise<ApiResponse<Track[]>> => {
  try {
    // Simulação de 10 imagens de corrida de rua
    const tracks: Track[] = Array.from({ length: 10 }).map((_, i) => ({
      id: `track-${i + 1}`,
      name: `Street Race Track ${i + 1}`,
      imageUrl: `https://images.unsplash.com/photo-1594914141274-72c8427a1fff?auto=format&fit=crop&q=80&w=400&h=300&index=${i}`
    }));

    return { data: tracks };
  } catch (err) {
    return {
      error: "Falha ao carregar corridas",
      details: err instanceof Error ? err.message : "Unknown error",
      requestId: Math.random().toString(36).substring(7)
    };
  }
};
