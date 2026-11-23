import Image from "next/image";
import logo from "/public/img/logo-header.png";
import {
  Activity,
  Ambulance,
  ArrowRight,
  Baby,
  Bone,
  CalendarDays,
  ChevronDown,
  Clock3,
  Facebook,
  HeartPulse,
  Hospital,
  Instagram,
  Mail,
  MapPin,
  Menu,
  Microscope,
  Phone,
  Pill,
  ShieldCheck,
  Stethoscope,
  Syringe,
  User,
  Users,
  WalletCards,
  Youtube,
} from "lucide-react";

const photo = {
  hero: "img/Hero-slider.png",
  hospital:"img/image (about section).png",
  news: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=85",
  leader:
    "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=700&q=85",
  cmd: "img/cmd.jpeg",
  hand:
    "img/mockups.png",
  map: "https://images.unsplash.com/photo-1524666041070-9b876833b3c4?auto=format&fit=crop&w=900&q=85",
};

const stats = [
  ["15", "Medical services", Hospital],
  ["35", "Healthcare departments", Stethoscope],
  ["30", "Years of service", CalendarDays],
  ["500+", "Specialists", Users],
  ["500k+", "Patients served", HeartPulse],
] as const;

const departments = [
  {
    title: "Ophthalmology",
    desc: "Eye care, vision testing and treatment services.",
    icon: "👓",
    tone: "lilac",
  },
  {
    title: "Pharmacy",
    desc: "Safe and reliable access to prescribed medication.",
    icon: "💊",
    tone: "peach",
  },
  {
    title: "Nursing",
    desc: "Professional nursing care for every patient.",
    icon: "🩺",
    tone: "blue",
  },
  {
    title: "Dentistry",
    desc: "Oral health, dental care and treatment.",
    icon: "🦷",
    tone: "rose",
  },
  {
    title: "Orthopaedics",
    desc: "Bone, joint and musculoskeletal care.",
    icon: "🦴",
    tone: "grey",
  },
];

const services = [
  [
    "General Medicine",
    "Comprehensive assessment, diagnosis and treatment.",
    Stethoscope,
  ],
  ["Surgery", "Specialist surgical services and patient care.", Syringe],
  ["Maternal & Child Health", "Care for mothers, newborns and children.", Baby],
  [
    "Diagnostic Services",
    "Laboratory and diagnostic investigations.",
    Microscope,
  ],
  [
    "Emergency & Critical Care",
    "Responsive care for urgent medical needs.",
    Ambulance,
  ],
  [
    "Pharmaceutical Services",
    "Medication support and pharmaceutical care.",
    Pill,
  ],
  [
    "Specialist Clinics",
    "Consultations across a range of specialties.",
    HeartPulse,
  ],
  ["Rehabilitation", "Support for recovery, mobility and wellbeing.", Activity],
] as const;

const news = [
  {
    title: "UATH strengthens healthcare delivery through collaboration",
    date: "News & announcements",
    image: photo.news,
  },
  {
    title: "Hospital activities and community health outreach",
    date: "Hospital update",
    image: photo.hospital,
  },
  {
    title: "Improving access to quality specialist care",
    date: "Latest update",
    image: photo.hero,
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}

export default function Home() {
  return (
    <main>
      <div className="utility">
        <div className="container utility-inner">
          <span>
            <User size={12} />E Admin
          </span>
          <span>
            <Users size={12} /> Patient Portal
          </span>
        </div>
      </div>

      <div
        className="hero-wrap"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(5,66,43,.78), rgba(10,105,70,.58)), url(${photo.hero})`,
        }}
      >
        <header className="site-header">
          <div className="container nav-wrap">
            <a className="brand" href="#" aria-label="UATH home">
              <Image
                src={logo}
                alt="UATH logo"
                className="brand-mark"
                priority
              />
            </a>
            <nav className="desktop-nav">
              <a href="#home">Home</a>
              <a href="#about">
                About Us <ChevronDown size={12} />
              </a>
              <a href="#departments">
                Resources <ChevronDown size={12} />
              </a>
              <a href="#services">Welfare</a>
              <a href="#contact">Contact</a>
            </nav>
            <a className="nav-portal" href="#portal">
              <span className="status-dot" /> Patient Portal
            </a>
            <button className="mobile-menu" aria-label="Open menu">
              <Menu />
            </button>
          </div>
        </header>

        <section className="hero" id="home">
          <div className="container hero-content">
            <SectionLabel>Welcome to UATH</SectionLabel>
            <h1>
              University of Abuja
              <br />
              Teaching Hospital
            </h1>
            <p className="hero-tag">IN UNITY WE CARE</p>
            <p className="hero-copy">
              Access information about medical services, specialist departments,
              and patient care at the University of Abuja Teaching Hospital.
            </p>
            <p className="hero-copy">
              We are a tertiary healthcare institution committed to quality
              clinical care, medical education, and research in service of
              better health outcomes.
            </p>
            <div className="hero-actions">
              <a className="btn btn-light" href="#services">
                Explore Services <ArrowRight size={15} />
              </a>
              <a className="btn btn-outline" href="#about">
                Who We Are
              </a>
            </div>
          </div>
        </section>
      </div>

      <section className="stats">
        <div className="container stats-grid">
          {stats.map(([number, label, Icon]) => (
            <div className="stat" key={label}>
              <span className="stat-icon">
                <Icon size={20} />
              </span>
              <div>
                <strong>{number}</strong>
                <small>{label}</small>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section about-section" id="about">
        <div className="container">
          <div className="about-grid">
            <div className="about-copy">
              <SectionLabel>About the hospital</SectionLabel>
              <h2>Advancing Healthcare Through Care, Knowledge and Research</h2>
              <p>
                The University of Abuja Teaching Hospital, located in
                Gwagwalada, Abuja, is a tertiary healthcare institution
                dedicated to providing specialist medical services, training
                healthcare professionals, and supporting medical research. Since
                its establishment in 1992 and subsequent development into a
                teaching hospital in 2006, UATH has served an important role in
                Nigeria’s healthcare and medical education landscape. Our
                commitment is to provide quality healthcare in a professional,
                compassionate, and respectful environment while contributing to
                the development of the next generation of healthcare
                professionals.
              </p>
             
            </div>
            <div className="about-image image-frame">
              <img src={photo.hospital} alt="Modern hospital building" />
            </div>
          </div>

          <div className="department-heading" id="departments">
           
          </div>
          <div className="department-grid">
            <div>
              <SectionLabel>Find a department</SectionLabel>
              <h3 style={{ fontSize: "1.8rem", lineHeight: "1.3", fontWeight: "600" }}>
                Explore Our
                <br />
                Departments
              </h3>
              <p>Find the right team and specialist care for your needs.</p>
            </div>
            {departments.map((item) => (
              <a
                href="#contact"
                className={`department-card ${item.tone}`}
                key={item.title}
              >
                <span className="department-art">{item.icon}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <span className="card-arrow">
                  <ArrowRight size={15} />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="services-section" id="services">
        <div className="container">
          <div className="section-heading centered">
            <SectionLabel>Medical services</SectionLabel>
            <h2>Healthcare Services For Different Needs</h2>
            <p>
              Explore our range of medical services delivered by skilled and
              caring professionals.
            </p>
          </div>
          <div className="services-grid">
            {services.map(([title, desc, Icon]) => (
              <a href="#contact" className="service-card" key={title}>
                <span className="service-icon">
                  <Icon size={17} />
                </span>
                <h3>{title}</h3>
                <p>{desc}</p>
                <span className="service-arrow">
                  <ArrowRight size={14} />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="portal-section" id="portal">
        <div className="container portal-grid">
          <div className="portal-copy">
            <SectionLabel>Your healthcare, made easier</SectionLabel>
            <h2>
              Take Control Of Your Healthcare Experience With The UATH Patient
              Portal.
            </h2>
            <ul>
              <li>
                <ShieldCheck size={16} /> Access your health information
                securely
              </li>
              <li>
                <CalendarDays size={16} /> Manage appointments and visits
              </li>
              <li>
                <WalletCards size={16} /> Enjoy a simpler patient experience
              </li>
            </ul>
            <a className="btn btn-green" href="#contact">
              Visit Patient Portal <ArrowRight size={15} />
            </a>
          </div>
          <div className="portal-visual">
          {/* change hand.png to your actual filename in public/img/ */}
          <Image
            src="/img/mockups.png"
            alt="UATH patient portal app on a phone"
            fill
            sizes="(max-width: 800px) 100vw, 50vw"
            className="portal-image"
          />
        </div>

        </div>
      </section>

      <section className="section news-section">
        <div className="container">
          <div className="news-heading">
            <div>
              <SectionLabel>News and announcements</SectionLabel>
              <h2>The Latest From UATH</h2>
            </div>
            <p>
              Stay informed with the latest news, updates and activities from
              our hospital.
            </p>
          </div>
          <div className="news-grid">
            <a
              className="featured-news"
              href="#contact"
              style={{
                backgroundImage: `linear-gradient(0deg, rgba(0,35,22,.78), transparent 75%), url(${photo.news})`,
              }}
            >
              <span>Hospital News</span>
              <h3>Working together to improve healthcare delivery</h3>
              <small>
                Read the latest update <ArrowRight size={13} />
              </small>
            </a>
            <div className="news-list">
              {news.map((item) => (
                <a href="#contact" className="news-item" key={item.title}>
                  <img src={item.image} alt="" />
                  <span>
                    <small>{item.date}</small>
                    <b>{item.title}</b>
                    <em>
                      Read more <ArrowRight size={12} />
                    </em>
                  </span>
                </a>
              ))}
            </div>
          </div>

         <div className="leadership">
  <div className="leadership-copy">
    <p className="leadership-eyebrow">Leadership and Accountability</p>
    <h2>Guided By A Commitment To Better Healthcare</h2>
    <p className="leadership-text">
      The University of Abuja Teaching Hospital is committed to delivering
      healthcare, supporting medical education, and advancing research through
      responsible institutional leadership and professional service. Explore
      the people, policies, and institutional information that guide our work.
    </p>
    <a className="leadership-btn" href="#contact">
      Meet Our Leadership
    </a>
  </div>

  <div className="leader-photo">
    <Image
      src={photo.cmd}
      alt="Professor Thairu Yunusa, Chief Managing Director"
      fill
      sizes="(max-width: 800px) 100vw, 420px"
      className="leader-image"
    />
    <div className="leader-caption">
      <strong>Professor Thairu Yunusa</strong>
      <p>Chief Managing Director</p>
    </div>
  </div>
</div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="container contact-grid">
          <div>
            <SectionLabel>Contact info</SectionLabel>
            <h2>We’re Here To Help You Find The Right Information</h2>
            <p>
              Reach out to our team for enquiries, appointments and information
              about hospital services.
            </p>
            <div className="contact-details">
              <div>
                <span>
                  <MapPin size={17} />
                </span>
                <p>
                  <b>Visit us</b>
                  <small>Gwagwalada, Abuja, Nigeria</small>
                </p>
              </div>
              <div>
                <span>
                  <Phone size={17} />
                </span>
                <p>
                  <b>Call us</b>
                  <small>+234 (0) 000 000 0000</small>
                </p>
              </div>
              <div>
                <span>
                  <Mail size={17} />
                </span>
                <p>
                  <b>Email us</b>
                  <small>info@uath.gov.ng</small>
                </p>
              </div>
            </div>
          </div>
          <div className="map-frame">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3941.2076637103537!2d7.060004425017986!3d8.953003291105336!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e8761a5143a33%3A0x866d7b05d20e927b!2sUniversity%20of%20Abuja%20Specialist%20Hospital!5e0!3m2!1sen!2sng!4v1795463834462!5m2!1sen!2sng"
    title="University of Abuja Teaching Hospital location"
    loading="lazy"
    allowFullScreen
    referrerPolicy="strict-origin-when-cross-origin"
  />
</div>
        </div>
      </section>

      <section className="closing-cta">
        <div className="container">
          <h2>
            Better Access To Healthcare Begins With
            <br />
            The Right Information.
          </h2>
          <p>
            We are here to support your healthcare journey with trusted
            information and services.
          </p>
          <div className="hero-actions">
            <a className="btn btn-light" href="#services">
              Explore Services
            </a>
            <a className="btn btn-outline" href="#contact">
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <a className="brand brand-light" href="#">
              <Image
                src={logo}
                alt="UATH logo"
                className="brand-mark"
                priority
              />
              
            </a>
            <p>Committed to quality healthcare, teaching and research.</p>
            <div className="socials">
              <a href="#" aria-label="Facebook">
                <Facebook size={15} />
              </a>
              <a href="#" aria-label="Instagram">
                <Instagram size={15} />
              </a>
              <a href="#" aria-label="YouTube">
                <Youtube size={15} />
              </a>
            </div>
          </div>
          <div>
            <h3>Explore</h3>
            <a href="#about">About Us</a>
            <a href="#departments">Departments</a>
            <a href="#services">Medical Services</a>
            <a href="#contact">Contact</a>
          </div>
          <div>
            <h3>Information</h3>
            <a href="#portal">Patient Portal</a>
            <a href="#contact">News & Updates</a>
            <a href="#contact">FAQs</a>
            <a href="#contact">Careers</a>
          </div>
          <div>
            <h3>Contact</h3>
            <p>Gwagwalada, Abuja, Nigeria</p>
            <p>+234 (0) 000 000 0000</p>
            <p>info@uath.gov.ng</p>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>
            © {new Date().getFullYear()} University of Abuja Teaching Hospital.
          </span>
          <span>Privacy Policy&nbsp;&nbsp; Terms of Use</span>
        </div>
      </footer>
    </main>
  );
}
