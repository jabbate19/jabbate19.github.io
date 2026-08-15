import type { Signal, LogEntry } from '../types/project'

export const homeSignals: Signal[] = [
  { k: 'Packet modes', v: 'sniff · anomaly' },
  { k: 'Audits', v: 'users · perms · configs' },
  { k: 'Transport', v: 'ICMP raw' },
  { k: 'Runtime', v: 'Rust · Python · Go · C' },
  { k: 'Arena', v: 'UB Lockdown · RITSEC' },
]

export const homeFocusRows: { label: string }[] = [
  { label: 'Realm: Adversary Emulation Framework and Adding LLM Agency' },
  { label: 'pfSense: Exploring Attach Vectors and Defense Mechanisms' },
  { label: 'Realm: interpreter for agent task graphs' },
  { label: 'Sombra: ICMP shell with ncurses fleet view' },
]

export const homePrinciples: string[] = [
  'parse the bytes yourself',
  'hunt, then harden',
  'quiet transport wins',
  'runbook over recall',
]

export const homeBento = {
  main: {
    meta: 'Go · DSL // C2',
    title: 'Realm: Adversary Emulation Framework',
    desc: 'Adversary Emulation Framework with a focus on scalability, reliability, and automation. Collaborative project now with over 500 stars on Github.',
    foot: ['red-team', 'collab'] as [string, string],
    team: 'red-team' as const,
  },
  side: [
    {
      meta: 'Python · Rust // defense',
      title: 'Blue Team Defense Suite',
      desc: 'Audits accounts and perms, then correlates sockets to pids to kill reverse shells: the checklist I used at UB Lockdown, automated.',
      foot: ['hardening', 'hunting'] as [string, string],
      team: 'blue-team' as const,
    },
    {
      meta: 'Rust · libpcap // detection',
      title: 'RustyBlue: Packet Monitoring and Anomaly Detection',
      desc: 'Manual layer-by-layer decode over raw PCAP bytes. Sniff streams like Wireshark in the terminal; evaluates each flow against a YAML policy for anomalies.',
      foot: ['blue-team', 'terminal pcap'] as [string, string],
      team: 'blue-team' as const,
    }
  ]
}

// Only ever have 4 items in here
export const homeLogs: LogEntry[] = [
  { date: '2025-02-28', html: '<b>Joined</b> ISTS Red Team, collaborating on adversary emulation efforts for some of the best collegiate blue teams.' },
  { date: '2024-10-24', html: '<b>Started</b> role as Security Engineer at Meta on Insider Trust team.' },
  { date: '2022-03-16', html: '<b>Shipped</b> RustyBlue anomaly mode: YAML policy scoring live traffic.' },
  { date: '2023-07-28', html: '<b>Joined</b> Realm contributor team: agent interpreter for autonomous task graphs.' },
]
