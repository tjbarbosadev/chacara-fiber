import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

import { containerClasses } from '@/constants/layout';
import { ROUTES } from '@/constants/routes';

export function NotFoundPage() {
  return (
    <section className="flex min-h-[60vh] items-center py-20">
      <div className={`${containerClasses} text-center`}>
        <p className="text-gradient-gold text-6xl font-extrabold md:text-8xl">
          404
        </p>
        <h1 className="text-navy-950 mt-4 text-2xl font-bold uppercase md:text-3xl dark:text-white">
          Página não encontrada
        </h1>
        <p className="text-navy-800 mt-4 dark:text-slate-300">
          A página que você procura não existe ou foi movida.
        </p>
        <Link
          to={ROUTES.HOME}
          className="border-gold-500/60 text-gold-600 hover:bg-gold-500/10 dark:text-gold-500 mt-8 inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-semibold transition-colors"
        >
          <ArrowLeft className="h-5 w-5" aria-hidden="true" />
          Voltar para Home
        </Link>
      </div>
    </section>
  );
}
