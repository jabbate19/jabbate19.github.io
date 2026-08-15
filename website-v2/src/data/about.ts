import type { PersonInfo, TimelineEntry, OutsideRow } from '../types/about'

export const personInfo: PersonInfo = {
  name: 'Joe, Security Engineer',
  from: 'Seaford, NY',
  basedIn: 'Seaford, NY',
  focus: 'Insider Threats, Data Loss Prevention, Detection Engineering',
}

export const timelineEntries: TimelineEntry[] = [
  {
    id: 'tl-1',
    period: 'Oct. 2024 — Present',
    role: 'Security Engineer',
    where: 'Meta · New York, NY',
    desc: 'Joining a company with a massive scale, I have been able to push my automation, data analysis, and design skills to the limit. I have worked as a part of the Data Exfiltraiton and Data Misuse teams, now focusing on Data Exfil.',
    featured: true,
    steps: [
      { level: 'IC5', period: 'Aug. 2026 — Present', role: 'Senior Security Engineer — IC5' },
      { level: 'IC4', period: 'Aug. 2025 — Aug. 2026', role: 'Security Engineer — IC4' },
      { level: 'IC3', period: 'Oct. 2024 — Aug. 2025', role: 'Security Engineer — IC3' },
    ],
  },
  { id: 'tl-2', period: 'June 2024 to August 2024', role: 'Security Engineering Intern', where: 'Citadel - New York, NY', desc: 'My first exposure to Insider Threat work. Enjoyed the challenge of identifying and mitigating potential threats within the organization, working with tight parameters and finding ways to scale.' },
  { id: 'tl-3', period: 'May 2023 to August 2023', role: 'Security Engineering Intern', where: 'MITRE - McLean, VA', desc: 'Researched Counter-UAS and AIS Deterrent Strategies as part of the Offensitve Operations and Effects team. To this day, I still love exploring RF for new opportunities to research.' },
  { id: 'tl-4', period: 'Before that', role: 'Rochester Institute of Technology', where: 'Rochester, NY', desc: 'Learned everything I could about security, software engineering, and system administration. Maintained a full datacenter running Proxmox, OKD, and Ceph. Competed, Won, and Red Teamed competitions hosted by RITSEC.' },
]

export const outsideRows: OutsideRow[] = [
  { k: 'Other Security Interests', vHtml: 'Router Lead for <a href="https://ists.io">ISTS</a> Red Team. Coordinating team finding ways to maintain access and disrupt operations on pfSense.' },
  { k: 'When not at keyboard', vHtml: '<ul><li>FIRST Technical Advisor for FIRST Tech Challenge Long Island Region. Managing volunteer teams and coordinating fields for multiple events per year.</li><li>Getting into Beach Volleyball and Golf</li><li>Skiing, exploring other areas of the US</li><li>Training for my First 5k!</li><li>Re-teaching myself the Saxophone</li></ul>' },
  { k: 'Learning now', vHtml: 'Writing my own harnesses and teaching myself to prompt AI for unique tasks and environments' },
]
