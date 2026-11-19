// Semua isi website ada di file ini.
// Kalau CV berubah, cukup edit file ini. Komponen lain tidak perlu disentuh.

// Info dasar
export const profile = {
  name: 'Novan Frido Saputro',
  shortName: 'NOVAN',
  initials: 'NF',
  role: 'IT System Administrator · Aspiring DevOps Engineer',
  location: 'Central Java, Indonesia',
  // Teks besar bergaris di belakang judul hero
  outlineText: 'NOVAN FRIDO SAPUTRO',
  // Foto profil (opsional). Taruh file di folder public/, lalu isi namanya, contoh: '/photo.jpg'
  // Kalau dikosongkan (''), yang tampil lingkaran berisi inisial
  photo: '/photo.jpg',
  summary:
    'IT System Administrator with 3+ years of experience managing Linux server infrastructure, virtualization platforms and production systems in a 24/7 managed service environment. Now moving into DevOps, building hands-on experience with containers, CI/CD pipelines, DNS and web infrastructure.',
}

// Angka singkat di bagian About
export const stats = [
  { label: 'Years in production ops', value: '3+' },
  { label: 'Environment', value: '24/7' },
  { label: 'Informatics student', value: '2024–now' },
]

// Kegiatan sekarang, tampil di bawah About
export const currently = [
  { title: 'Building', text: 'CI/CD pipelines and web infra' },
  { title: 'Exploring', text: 'DNS, SSL and email authentication' },
  { title: 'Learning', text: 'Containers and cloud' },
]

// Tool yang ditampilkan sebagai kotak kecil di bagian What I Can Do
export const tools = [
  { name: 'Linux', icon: 'Terminal' },
  { name: 'VMware', icon: 'Layers' },
  { name: 'Docker', icon: 'Container' },
  { name: 'GitHub Actions', icon: 'GitBranch' },
  { name: 'GitLab CI', icon: 'Workflow' },
  { name: 'Cloudflare', icon: 'Cloud' },
  { name: 'AWS', icon: 'Server' },
  { name: 'Grafana', icon: 'Activity' },
  { name: 'Bash', icon: 'Terminal' },
]

// Dua kartu kemampuan utama
export const capabilities = [
  {
    label: 'Infrastructure & Operations',
    icon: 'Server',
    text: 'Keeping production servers and virtual machines healthy: daily operations, patching, monitoring and incident handling with clear escalation.',
    tags: ['RHEL', 'SUSE', 'Windows Server', 'VMware vSphere', 'ESXi / vCenter', 'RHEV', 'Grafana', 'Dynatrace', 'Patching', 'Incident handling'],
  },
  {
    label: 'CI/CD & Web Operations',
    icon: 'Rocket',
    text: 'Shipping changes safely: pipelines that lint and scan every pull request, protected branches, previews before release and quick rollback.',
    tags: ['Docker', 'GitHub Actions', 'GitLab CI', 'Cloudflare DNS', 'SSL/TLS', 'Redirects', 'SPF / DKIM / DMARC', 'AWS EC2', 'Gitleaks'],
  },
]

// Pengalaman kerja, paling baru di atas
export const experience = [
  {
    role: 'L1 MO Server',
    company: 'Metrocom Global Solusi',
    period: 'Nov 2023 – Jun 2026',
    client: 'Client: Telkomsel (OSPLA)',
    points: [
      'Part of the L1 team (alongside L2, SME and a team lead) supporting Telkomsel\'s OSPLA platform, an environment of 18,000+ virtual servers (RHEL, SUSE, Windows Server)',
      'Ran OS health checks and gathered findings to support L2 and SME engineers during production incidents in a 24/7 environment',
      'Provisioned 10–50 VMs per month on VMware vSphere (ESXi, vCenter) and RHEV, from request to handover',
      'Monitored production with Grafana and Dynatrace to catch capacity and service issues early',
      'Applied OS patches and vulnerability fixes in batches through approved change requests (CRQ) after new vulnerability assessment findings',
      'Shared knowledge with teammates on systems and procedures they were less familiar with',
    ],
  },
  {
    role: 'L1 MOVM',
    company: 'PT. Protonema',
    period: 'Sep 2022 – Jul 2023',
    client: 'Client: Telkomsel (OSPLA)',
    points: [
      'Supported VMware, RHEV and Oracle VM environments within Telkomsel\'s OSPLA platform (10,000+ VMs)',
      'Provisioned, deployed and maintained up to 10 VMs per month following standard build and handover steps',
      'Trained 2–3 new team members during onboarding',
      'Tracked capacity and performance trends and handled first-line network troubleshooting',
    ],
  },
]

// Daftar project. link boleh dikosongkan ('') kalau belum ada
export const projects = [
  {
    title: 'novanfs.my.id',
    text: 'This website. Custom domain on Cloudflare (DNS, SSL, redirects), email routing with SPF, DKIM and DMARC at p=reject, CI with lint and Gitleaks, protected main branch, preview deploys and documented rollback.',
    stack: ['React', 'Cloudflare Pages', 'GitHub Actions', 'DMARC'],
    link: 'https://github.com/niemandfs/novanfs.my.id',
  },
  {
    title: 'CI/CD Pipeline with GitLab, Docker and AWS',
    text: 'Multi-stage GitLab pipeline (build, test, review, staging, production) with unit and end-to-end tests. Containerized the app, pushed images to Amazon ECR and deployed to Amazon ECS on EC2.',
    stack: ['GitLab CI', 'Docker', 'Amazon ECR', 'Amazon ECS'],
    link: '',
  },
  {
    title: 'uptime-checker',
    text: 'Small uptime monitor with FastAPI and PostgreSQL in Docker Compose, exposed with Cloudflare Tunnel, frontend on Cloudflare Pages, tested with pytest.',
    stack: ['FastAPI', 'PostgreSQL', 'Docker Compose', 'Cloudflare Tunnel'],
    link: 'https://github.com/niemandfs/uptime-checker',
  },
  {
    title: 'AWS EC2 & Docker',
    text: 'Launched and configured an Ubuntu EC2 instance, set up Docker and SSH access, and deployed a containerized app.',
    stack: ['AWS EC2', 'Ubuntu', 'Docker'],
    link: '',
  },
]

// Pelatihan dan pendidikan
export const trainings = [
  {
    title: 'AWS re/Start',
    org: 'Amazon Web Services program',
    period: '2026',
    text: 'Cloud fundamentals program covering Linux, networking, security, databases and core AWS services, preparing for the AWS Certified Cloud Practitioner exam.',
  },
  {
    title: 'Docker course',
    org: 'Udemy',
    period: '2026',
    text: 'Built images with a Dockerfile, ran containers and pushed images to Docker Hub, then ran the project on an AWS EC2 host.',
  },
  {
    title: 'GitLab CI/CD course',
    org: 'Online course',
    period: '2026',
    text: 'Pipelines with build, test and deploy stages, staging and production jobs, AWS CLI with IAM credentials stored as CI/CD variables.',
  },
  {
    title: 'Bachelor of Informatics Engineering',
    org: 'Asian Cyber University',
    period: '2024 – present',
    text: 'Distance learning program in informatics.',
  },
  {
    title: 'Computer and Network Engineering',
    org: 'SMK Negeri 1 Cilacap',
    period: '2019 – 2022',
    text: 'Vocational high school, computer and network engineering.',
  },
]

// Kontak. Tidak ada nomor HP karena website ini publik
export const contact = {
  email: 'hi@novanfs.my.id',
  github: 'https://github.com/niemandfs',
  githubLabel: 'github.com/niemandfs',
  linkedin: 'https://www.linkedin.com/in/novanfridos',
  linkedinLabel: 'linkedin.com/in/novanfridos',
}

// Menu navigasi: label dan id bagian yang dituju
export const navLinks = [
  { label: 'Projects', id: 'work' },
  { label: 'Toolbox', id: 'skills' },
  { label: 'Track Record', id: 'experience' },
  { label: 'Profile', id: 'about' },
  { label: 'Learning', id: 'trainings' },
]
