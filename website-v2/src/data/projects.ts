import type { Project } from '../types/project'

export const projects: Project[] = [
  {
    id: 1,
    tags: ['Go', 'C2 framework', 'DSL'],
    team: 'red-team',
    title: 'Realm',
    desc: 'Collaborative red-team engagement platform focused on operator automation. Contributed to an interpreter language that lets agents act without using a traditional command-line interface.',
    bullets: [
      ['Interpreter', 'Custom language with red-team primitives: agents execute scripted TTPs instead of shell commands'],
      ['Automation', 'Designed for reduced operator overhead and repeatable engagements'],
    ],
    linkLabel: 'github.com/spellshift/realm',
  },
  {
    id: 2,
    tags: ['C', 'raw sockets', 'ncurses'],
    team: 'red-team',
    title: 'Sombra (RShell)',
    desc: 'ICMP shell for attack/defend competitions. Commands are appended to ICMP payloads; clients reply with results in the next echo. Operator drives fleets from an ncurses TUI with fan-out send and result panes.',
    bullets: [
      ['Transport', 'Raw ICMP with tagged payload framing: no TCP footprint'],
      ['TUI', 'ncurses console for mass send, per-implant view and result spooling'],
    ],
    linkLabel: 'github.com/jabbate19/sombra',
  },
  {
    id: 3,
    tags: ['Python', 'Rust', 'Hardening'],
    team: 'blue-team',
    title: 'Blue Team Defense Suite',
    desc: 'Python and Rust toolkits that automates the first 15 minutes of defense in attack/defend competitions. Audits users, configs and perms, then hunts reverse shells with network + process correlation built on RustyBlue learnings.',
    bullets: [
      ['Audit', 'Enumerates accounts, sudoers, perms and configs to strip low-hanging misconfig'],
      ['Hunt', 'Correlates open sockets to pids to spot and kill reverse shells'],
      ['Playbook', 'Born from UB Lockdown experience: automates what I checked by hand'],
    ],
    linkLabel: 'github.com/jabbate19/steeloxide',
  },
  {
    id: 4,
    tags: ['Rust', 'libpcap', 'YAML'],
    team: 'blue-team',
    title: 'RustyBlue',
    desc: 'Packet inspector for blue-team ops. Sniff mode recreates Wireshark in the terminal; anomaly mode scores traffic against a YAML policy. Manual layer-by-layer parsing over raw PCAP bytes.',
    bullets: [
      ['Sniff', 'TUI packet stream with per-layer decode (eth → ip → tcp/udp/icmp)'],
      ['Anomaly', 'YAML policy defines safe vs suspicious flows; flags in real time'],
      ['Parser', 'No higher-level dissector: 8-bit array slices mapped to RFC headers by hand'],
    ],
    linkLabel: 'github.com/jabbate19/rustyblue',
  },
]
