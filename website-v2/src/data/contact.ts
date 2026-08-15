export const contactChannels = [
  { label:'GitHub', sub:'all my open source projects, including this website', href:'#', hrefLabel:'github.com/jabbate19' },
  { label:'LinkedIn', sub:'if you wanna be "professional" and connect', href:'#', hrefLabel:'linkedin.com/in/jabbate19' },
  // { label:'Writing', sub:'13 notes, runbook first', href:'#', hrefLabel:'notes' },
  // { label:'Essays', sub:'longer thoughts on design', href:'#', hrefLabel:'essays' },
  { label:'Email', sub:'joe-ihatespam@joeabbate.me, just remember that I hate spam', action:{ type:'copy' as const, value:'joe-ihatespam@joeabbate.me', label:'copy' }, href:'mailto:joe-ihatespam@joeabbate.me', hrefLabel:'open' },
] as const

export const contactColophon = [
  'Deep navy #0a1628, surface #132040, one blue accent #3b82f6. No stock security imagery. No glow.',
  'Inter for display and body, SFMono for code. 8px radius, 1px borders, open whitespace.',
]

export const contactPgp = {
  fingerprint:'8F2E 9C7A E169 D83E 1AFA 4968 7405 78C2 72E9 03EC',
  uid:'Joseph Abbate <joe-ihatespam@joeabbate.me>',
  fpLines:['8F2E 9C7A E169 D83E 1AFA','4968 7405 78C2 72E9 03EC'],
  keyId:'740578C272E903EC',
  algo:'ed25519 · cv25519',
  created:'2024-10-12',
  armor:`-----BEGIN PGP PUBLIC KEY BLOCK-----

mDMEZwnPnRYJKwYBBAHaRw8BAQdAzIXThwHp2UzdmDz39sSFpmYsetdsKrjzNA/s
6/Yob/i0M0pvc2VwaCBBYmJhdGUgKE5ldyBLZXkgT2N0IDIwMjQpIDxqb2VAam9l
YWJiYXRlLm1lPoiTBBMWCgA7FiEEjy6ceuFp2D4a+klodAV4wnLpA+wFAmcJz50C
GwMFCwkIBwICIgIGFQoJCAsCBBYCAwECHgcCF4AACgkQdAV4wnLpA+zUoAD/QpGa
nzSWnkJ6wuKm3I+eDQJJGDOQzRG0fxBiwPXav3sA/R8y1tVVu2T1EpsAHkM0+jIV
5ss8sHCRJ8QXbIqPlJMAiQIzBBMBCAAdFiEEt31zDo1ERwf6kzINcuBYNvglJAUF
AmcJ12AACgkQcuBYNvglJAXC/A/9GcNPiie1SRfxjBxq3396/b3sXc3J7lVA1c+o
tUc08TsR7vbZDTgpRKLff7GwAUJoupYkXNnb/1Qqr/SYZqeA+tGClXDxE9XkYCoy
MVByJ/DPfZBsK+svaDzKL28g1vOQfODxZ2E9LaZpP3MOqNjuUgY+5TZLkLE2IEf+
aNvGH3ikS6MWEr+ey9lUQUd7X3M8foRpANw5gV1moxwMYsYu2PLx9ktKGyOxO6Ce
reV7k+zAerv+mddudoK4P8V+33EKfe1mm7qyRGVHrX1VDh53h5BlsM5Wn7vVPpmd
e4xJP4Y6OraG8PF1EWp1Vjq08ZGmY58MoKRXuRi44AtazndAjrgQJW/TN33Pq2UZ
tGYc+sVqzLzkmIvWeHiCshuZyLeB578PTdygP5JTin1jwlsOyq6EbLLfi+8G6Qs3
T3CGDaw+FEqZB0g6goyzO6+4fNlEvcCzFdTlU6jKl86nKqmPK473vDDBSP6NyNP/
p51IOJtbHkrmgWtKal6PEvEoQcRyIhM3SE9QS3wFsmi7fvll7f/vY0wUzp9m9Vr3
G9kQ147oB2b0StB4J43copy81AiGzBFcXyMwiKLVkdalcxaxSVTyr6ylHhhc4ECJ
vuKceLNe/TKzDhTCKwKEBKN3XuTWi0W5UZ+MI6InsQC964FbBg54ZXGygdp1YVA2
JDMYTN64OARnCc+dEgorBgEEAZdVAQUBAQdANVXoNbDrD3JS/oUuBJMGkfQA1q2h
msrtTlKBzjQjzSYDAQgHiHgEGBYKACAWIQSPLpx64WnYPhr6SWh0BXjCcukD7AUC
ZwnPnQIbDAAKCRB0BXjCcukD7NkcAQDOu7K2vzKq/Ij4F6Y5RAkuWhspK/5+U1Go
4/XtJZE0qwD/bje7+1BjAQavQD4fS/MDMfgryFbaXoQMt7BVfaf2xwc=
=M4uH
-----END PGP PUBLIC KEY BLOCK-----`,
}

export const contactTopics = [
  'Policy linter, path-aware scoping',
  'Provenance badge, SLSA plus Sigstore',
  'Token-scope fuzzer',
  'Row-level scope at query builder',
  'Bypass-rate signals',
  'Runbook-first template',
  'Scope as a design primitive',
]

export const contactLearnItems = [
  { b: 'Title', t: 'Description' },
  { b: 'Title', t: 'Description' },
  { b: 'Title', t: 'Description' },
  { b: 'Title', t: 'Description' },
]
