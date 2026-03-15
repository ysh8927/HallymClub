'use client';

import Link from 'next/link';
import { Bell, Search, LogIn, Menu, X } from 'lucide-react';
import { useState } from 'react';
import Button from '@/components/ui/Button';
import { cn } from '@/lib/utils';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[var(--bg)]/90 backdrop-blur-md border-b border-[var(--bdr)]">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
            <span className="text-white text-xs font-bold">H</span>
          </div>
          <span className="font-serif font-semibold text-sm text-[var(--txt)]">
            한림 클럽링크
          </span>
        </Link>

        {/* Nav — desktop */}
        <nav className="hidden md:flex items-center gap-1 ml-4">
          <Link href="/clubs" className="text-xs text-[var(--txt2)] hover:text-[var(--txt)] px-3 py-1.5 rounded-lg hover:bg-[var(--bg2)] transition-colors">
            동아리 탐색
          </Link>
          <Link href="/my-clubs" className="text-xs text-[var(--txt2)] hover:text-[var(--txt)] px-3 py-1.5 rounded-lg hover:bg-[var(--bg2)] transition-colors">
            내 동아리
          </Link>
          <Link href="/federation" className="text-xs text-[var(--txt2)] hover:text-[var(--txt)] px-3 py-1.5 rounded-lg hover:bg-[var(--bg2)] transition-colors">
            총동아리연합회
          </Link>
        </nav>

        <div className="flex-1" />

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button className="hidden sm:flex items-center gap-2 text-xs text-[var(--txt3)] bg-[var(--bg2)] hover:bg-[var(--bg3)] px-3 py-1.5 rounded-lg border border-[var(--bdr)] transition-colors cursor-pointer">
            <Search size={12} />
            <span>검색...</span>
            <kbd className="text-[10px] bg-[var(--bg3)] px-1.5 py-0.5 rounded border border-[var(--bdr)]">⌘K</kbd>
          </button>

          <button className="relative p-2 rounded-lg hover:bg-[var(--bg2)] transition-colors text-[var(--txt2)] cursor-pointer">
            <Bell size={16} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-rose-500 rounded-full" />
          </button>

          <Button variant="primary" size="sm" className="hidden sm:inline-flex">
            <LogIn size={13} />
            로그인
          </Button>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-[var(--bg2)] transition-colors text-[var(--txt2)] cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <div className="md:hidden border-t border-[var(--bdr)] bg-[var(--bg)] px-4 py-3 flex flex-col gap-1 animate-fade-in">
          <Link href="/clubs" className="text-sm text-[var(--txt2)] py-2 px-3 rounded-lg hover:bg-[var(--bg2)]" onClick={() => setMenuOpen(false)}>
            동아리 탐색
          </Link>
          <Link href="/my-clubs" className="text-sm text-[var(--txt2)] py-2 px-3 rounded-lg hover:bg-[var(--bg2)]" onClick={() => setMenuOpen(false)}>
            내 동아리
          </Link>
          <Link href="/federation" className="text-sm text-[var(--txt2)] py-2 px-3 rounded-lg hover:bg-[var(--bg2)]" onClick={() => setMenuOpen(false)}>
            총동아리연합회
          </Link>
          <div className="pt-2 border-t border-[var(--bdr)]">
            <Button variant="primary" size="sm" className="w-full justify-center">
              <LogIn size={13} />
              로그인
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
