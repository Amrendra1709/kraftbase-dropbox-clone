'use client';

import { useEffect, useState } from 'react';
import GridLayout from '@/components/grid-layout';
import CursorFollower from '@/components/cursor-follower';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <main className="min-h-screen">
      <CursorFollower />
      <div className="container mx-auto px-4 py-8 md:py-12">
        <GridLayout />
      </div>
    </main>
  );
}