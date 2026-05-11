'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Users,
  ClipboardCheck,
  UserPlus,
  CheckCircle2,
  Clock,
  Megaphone,
} from 'lucide-react';

type Stats = { attendance: number; sites: number; applicants: number };
type Site = {
  id: string;
  name: string;
  head: number;
  tomorrowHead?: number;
  permanent?: boolean;
};
type Tone = 'done' | 'planning' | 'permanent';

const DAILY_SITE_NAMES = ['A 현장', 'B 현장', 'C 현장', 'D 현장'];
const PERMANENT_SITE_NAME = 'E 현장';

const DEFAULT_STATS: Stats = { attendance: 200, sites: 20, applicants: 400 };

const DEFAULT_SITES: Site[] = [
  { id: 'A 현장', name: 'A 현장', head: 75, tomorrowHead: 72 },
  { id: 'B 현장', name: 'B 현장', head: 58, tomorrowHead: 60 },
  { id: 'C 현장', name: 'C 현장', head: 60, tomorrowHead: 56 },
  { id: 'D 현장', name: 'D 현장', head: 7, tomorrowHead: 8 },
  { id: PERMANENT_SITE_NAME, name: PERMANENT_SITE_NAME, head: 12, permanent: true },
];

function getOperatingDay(): Date {
  const d = new Date();
  if (d.getHours() < 5) d.setDate(d.getDate() - 1);
  d.setHours(0, 0, 0, 0);
  return d;
}

function getDateSeed(d: Date): number {
  return d.getFullYear() * 10000 + (d.getMonth() + 1) * 100 + d.getDate();
}

function mulberry32(seed: number) {
  let s = seed >>> 0;
  return function () {
    s = (s + 0x6d2b79f5) >>> 0;
    let t = s;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function dailyData(d: Date): { stats: Stats; sites: Site[] } {
  const rng = mulberry32(getDateSeed(d));

  const attendance = Math.floor(rng() * 201) + 100;
  const perSite = Math.floor(rng() * 19) + 2;
  const sites = Math.max(1, Math.round(attendance / perSite));
  const multiplier = 1.5 + rng() * 1.5;
  const applicants = Math.round(attendance * multiplier);

  const count = DAILY_SITE_NAMES.length;
  const weights = Array.from({ length: count }, () => 0.1 + rng() * 1.5);
  const wSum = weights.reduce((a, b) => a + b, 0);
  const heads = weights.map((w) => Math.max(1, Math.round((w / wSum) * attendance)));
  const diff = attendance - heads.reduce((a, b) => a + b, 0);
  heads[0] = Math.max(1, heads[0] + diff);

  const tomorrowHeads = heads.map((h) => Math.max(1, Math.round(h * (0.85 + rng() * 0.3))));

  const dailySites: Site[] = DAILY_SITE_NAMES.map((name, i) => ({
    id: name,
    name,
    head: heads[i],
    tomorrowHead: tomorrowHeads[i],
  }));

  const permanentHead = Math.floor(rng() * 18) + 8;
  const permanentSite: Site = {
    id: PERMANENT_SITE_NAME,
    name: PERMANENT_SITE_NAME,
    head: permanentHead,
    permanent: true,
  };

  return {
    stats: { attendance, sites, applicants },
    sites: [...dailySites, permanentSite],
  };
}

function shuffleDailySites(sites: Site[], moves: number): Site[] {
  if (moves <= 0) return sites;
  const dailyIdx = sites.map((s, i) => (s.permanent ? -1 : i)).filter((i) => i >= 0);
  if (dailyIdx.length < 2) return sites;

  const heads = sites.map((s) => s.head);
  for (let i = 0; i < moves; i++) {
    const from = dailyIdx[Math.floor(Math.random() * dailyIdx.length)];
    const to = dailyIdx[Math.floor(Math.random() * dailyIdx.length)];
    if (from === to) continue;
    if (heads[from] <= 1) continue;
    heads[from] -= 1;
    heads[to] += 1;
  }
  return sites.map((s, i) => ({ ...s, head: heads[i] }));
}

function isNightHours(): boolean {
  const h = new Date().getHours();
  return h >= 21 || h < 5;
}

function formatKoreanDate(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  const dow = ['일', '월', '화', '수', '목', '금', '토'][d.getDay()];
  return `${y}.${m}.${day} (${dow})`;
}

function isRecruitingTomorrow(hour: number): boolean {
  return hour >= 12 && hour < 21;
}

export default function Hero() {
  const [stats, setStats] = useState<Stats>(DEFAULT_STATS);
  const [sites, setSites] = useState<Site[]>(DEFAULT_SITES);
  const [today, setToday] = useState<string>('');
  const [hour, setHour] = useState<number>(8);

  useEffect(() => {
    const d = getOperatingDay();
    const data = dailyData(d);
    setStats(data.stats);
    setSites(data.sites);
    setToday(formatKoreanDate(d));
    setHour(new Date().getHours());
  }, []);

  useEffect(() => {
    const t = window.setInterval(() => {
      setHour(new Date().getHours());
    }, 60000);
    return () => window.clearInterval(t);
  }, []);

  useEffect(() => {
    const t = window.setInterval(() => {
      if (!isNightHours()) return;
      setSites((prev) => shuffleDailySites(prev, Math.floor(Math.random() * 3) + 1));
    }, 20000);
    return () => window.clearInterval(t);
  }, []);

  const dailySorted = [...sites]
    .filter((s) => !s.permanent)
    .sort((a, b) => b.head - a.head);
  const permanent = sites.filter((s) => s.permanent);
  const ordered = [...dailySorted, ...permanent];

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-b from-blue-50/60 to-white"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-5 pb-20 pt-16 md:grid-cols-2 md:px-8 md:pb-28 md:pt-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col justify-center"
        >
          <span className="mb-5 inline-flex w-fit items-center rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold text-[#0669F7]">
            인력사무소 전용 SaaS
          </span>

          <h1 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            인력사무소 운영을
            <br />
            <span className="text-[#0669F7]">가다 데스크</span> 하나로.
          </h1>

          <p className="mt-5 text-base leading-relaxed text-slate-600 md:text-lg">
            당일 인력 배치, 출역 관리, 현장 마감, 일당 지급, 직접지급시스템까지.
            <br />
            인력사무소의 반복 업무를 줄이고 현장 운영 데이터를 한눈에 확인하세요.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#0669F7] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0556d6]"
            >
              계정 발급 요청하기
              <ArrowRight size={16} aria-hidden />
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              요금제 보기
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="relative"
        >
          <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-soft-lg md:p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-medium text-slate-500">오늘의 운영 현황</p>
                <p className="mt-0.5 text-base font-semibold text-slate-900">
                  {today || ' '}
                </p>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FFC72C]/15 px-2.5 py-1 text-xs font-semibold text-amber-700">
                <span className="h-1.5 w-1.5 rounded-full bg-[#FFC72C]" />
                실시간
              </span>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-3">
              <Stat
                icon={<Users size={16} />}
                label="출역"
                value={`${stats.attendance.toLocaleString('ko-KR')}명`}
              />
              <Stat
                icon={<ClipboardCheck size={16} />}
                label="마감"
                value={`${stats.sites.toLocaleString('ko-KR')}현장`}
              />
              <Stat
                icon={<UserPlus size={16} />}
                label="지원자"
                value={`${stats.applicants.toLocaleString('ko-KR')}명`}
              />
            </div>

            <div className="mt-5">
              <p className="text-xs font-semibold text-slate-500">현장별 마감 현황</p>
              <ul className="mt-2 overflow-hidden rounded-xl border border-slate-100">
                {ordered.map((site, idx) => (
                  <SiteRow
                    key={site.id}
                    name={site.name}
                    head={site.head}
                    tomorrowHead={site.tomorrowHead}
                    permanent={!!site.permanent}
                    recruiting={isRecruitingTomorrow(hour)}
                    isLast={idx === ordered.length - 1}
                  />
                ))}
              </ul>
            </div>
          </div>

          <div className="pointer-events-none absolute -right-4 -top-4 hidden h-24 w-24 rounded-full bg-blue-100/60 blur-2xl md:block" />
          <div className="pointer-events-none absolute -bottom-4 -left-4 hidden h-24 w-24 rounded-full bg-amber-100/60 blur-2xl md:block" />
        </motion.div>
      </div>
    </section>
  );
}

function Stat({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl bg-slate-50 p-3">
      <div className="flex items-center gap-1.5 text-slate-500">
        <span className="text-[#0669F7]" aria-hidden>
          {icon}
        </span>
        <span className="text-xs font-medium">{label}</span>
      </div>
      <p className="mt-1.5 text-lg font-bold text-slate-900">{value}</p>
    </div>
  );
}

const TONE_STYLE: Record<Tone, { icon: React.ReactNode; cls: string }> = {
  done: {
    icon: <CheckCircle2 size={14} aria-hidden />,
    cls: 'text-[#0669F7] bg-blue-50',
  },
  planning: {
    icon: <Clock size={14} aria-hidden />,
    cls: 'text-slate-600 bg-slate-100',
  },
  permanent: {
    icon: <Megaphone size={14} aria-hidden />,
    cls: 'text-amber-700 bg-[#FFC72C]/20',
  },
};

function StatusBadge({ tone, label }: { tone: Tone; label: string }) {
  const t = TONE_STYLE[tone];
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold ${t.cls}`}
    >
      {t.icon}
      {label}
    </span>
  );
}

function SiteRow({
  name,
  head,
  tomorrowHead,
  permanent,
  recruiting,
  isLast,
}: {
  name: string;
  head: number;
  tomorrowHead?: number;
  permanent: boolean;
  recruiting: boolean;
  isLast: boolean;
}) {
  const headLabel = permanent
    ? `모집 ${head.toLocaleString('ko-KR')}명`
    : `출역 ${head.toLocaleString('ko-KR')}명`;
  const showTomorrow = !permanent && recruiting && tomorrowHead != null;

  return (
    <motion.li
      layout
      transition={{ type: 'spring', stiffness: 320, damping: 28 }}
      className={`flex items-center justify-between gap-3 bg-white px-3.5 py-3 ${
        isLast ? '' : 'border-b border-slate-100'
      }`}
    >
      <div className="min-w-0">
        <p className="text-sm font-semibold text-slate-900">{name}</p>
        <motion.p
          key={head}
          initial={{ opacity: 0.4, y: -2 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="text-xs text-slate-500"
        >
          {headLabel}
        </motion.p>
      </div>
      <div className="flex flex-col items-end gap-1">
        {permanent ? (
          <StatusBadge tone="permanent" label="상시 모집" />
        ) : (
          <>
            <StatusBadge tone="done" label="마감 완료" />
            {showTomorrow && (
              <StatusBadge
                tone="planning"
                label={`내일 ${tomorrowHead!.toLocaleString('ko-KR')}명 모집`}
              />
            )}
          </>
        )}
      </div>
    </motion.li>
  );
}
