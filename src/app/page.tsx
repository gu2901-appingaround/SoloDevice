"use client";

import { homeCopy } from "@/core/copy/home";
import { TrackGallery } from "@/modules/tracks/components/TrackGallery";
import { AuthProvider, useAuth } from "@/modules/auth/context";

const HomePageContent = () => {
  const { isAuthenticated, login, logout } = useAuth();

  return (
    <main className="mx-auto min-h-screen w-full max-w-5xl px-4 py-10 sm:px-8 sm:py-16">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">{homeCopy.title}</h1>
          <p className="text-slate-600 mt-2 text-lg">{homeCopy.description}</p>
        </div>
        <button
          onClick={isAuthenticated ? logout : login}
          className="rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
        >
          {isAuthenticated ? homeCopy.auth.logout : homeCopy.auth.login}
        </button>
      </header>

      {isAuthenticated ? (
        <TrackGallery />
      ) : (
        <section className="w-full flex flex-col items-center justify-center py-32 border border-slate-900/10 bg-white/50 rounded-3xl shadow-sm">
          <p className="text-2xl font-bold text-slate-900">{homeCopy.auth.welcome}</p>
          <p className="text-slate-600 mt-2">{homeCopy.auth.authenticatedMessage}</p>
        </section>
      )}
    </main>
  );
};

export default function HomePage() {
  return (
    <AuthProvider>
      <HomePageContent />
    </AuthProvider>
  );
}

