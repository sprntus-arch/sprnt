"use client";
import { useState, useEffect, useRef } from "react";

const plans = [
  {
    name: "Parent",
    price: 85,
    tag: "For Families",
    trial: "7 days free",
    features: [
      "Full video tutorial library",
      "Unlimited training plans & drills",
      "Athlete progress tracking",
      "1 live coaching session/month",
      "Sensory-friendly training guides",
      "Resource library & printables",
      "Community access",
    ],
  },
  {
    name: "Coach",
    price: 120,
    tag: "For Coaches",
    trial: "7 days free",
    features: [
      "Full video tutorial library",
      "Unlimited training plans & drills",
      "Athlete progress tracking tools",
      "2 live coaching sessions/month",
      "Resource library & printables",
      "Coach community network",
    ],
  },
  {
    name: "Coach Pro",
    price: 175,
    tag: "Best Value",
    highlight: true,
    trial: "7 days free",
    features: [
      "Everything in Coach",
      "4 live coaching sessions/month",
      "Multi-athlete roster management",
      "Inclusive curriculum templates",
      "Official SPRNT Coach Badge",
      "Early content access",
      "Priority support",
    ],
  },
];

const stats = [
  { value: "20+", label: "Training Programs" },
  { value: "5", label: "Age Groups" },
  { value: "29+", label: "Public Tracks Mapped" },
  { value: "All", label: "Abilities Welcome" },
];

const features = [
  { icon: "▶", title: "Video Tutorials", desc: "Step-by-step track instruction for all abilities and learning styles." },
  { icon: "📋", title: "Training Plans", desc: "Adaptive drills from Beginner to Elite — every age, every level." },
  { icon: "📍", title: "Track Finder", desc: "Locate public tracks near you with sensory ratings for every location." },
  { icon: "📈", title: "Progress Tracking", desc: "Celebrate every milestone with visual athlete dashboards." },
  { icon: "🎙", title: "Live Coaching", desc: "Direct sessions with SPRNT-certified inclusive coaches." },
  { icon: "⭐", title: "Special Abilities", desc: "A dedicated 12-week sensory-first program built for autistic athletes." },
];

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

function Reveal({ children, delay = 0, style = {} }) {
  const [ref, inView] = useInView();
  return (
    <div ref={ref} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? "translateY(0)" : "translateY(28px)",
      transition: `opacity 0.65s ${delay}s ease, transform 0.65s ${delay}s ease`,
      ...style
    }}>{children}</div>
  );
}

export default function SPRNTLanding() {
  const [activePlan, setActivePlan] = useState(1);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div style={{ fontFamily: "'Barlow Condensed', sans-serif", background: "#080808", color: "#f0ede8", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,400;0,700;0,800;0,900;1,900&family=Barlow:wght@300;400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        .btn { transition: all 0.16s ease; cursor: pointer; border: none; font-family: inherit; }
        .btn:hover { filter: brightness(1.08); transform: scale(1.02); }
        .btn-ghost:hover { background: #1c1c1c !important; }
        .plan-card { transition: all 0.2s ease; cursor: pointer; }
        .plan-card:hover { transform: translateY(-4px); }
        .feat-card { transition: all 0.2s ease; }
        .feat-card:hover { border-color: #2a2a2a !important; transform: translateY(-3px); }
        @keyframes heroReveal {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .h1 { animation: heroReveal 0.7s 0.1s ease both; }
        .h2 { animation: heroReveal 0.7s 0.25s ease both; }
        .h3 { animation: heroReveal 0.7s 0.4s ease both; }
        .h4 { animation: heroReveal 0.7s 0.55s ease both; }
        .h5 { animation: heroReveal 0.7s 0.7s ease both; }
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .marquee-inner { animation: marquee 18s linear infinite; display: flex; width: max-content; }
        @keyframes pulse-ring {
          0%,100% { opacity: 0.15; transform: scale(1); }
          50% { opacity: 0.35; transform: scale(1.08); }
        }
        .ring { animation: pulse-ring 3s ease-in-out infinite; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-thumb { background: #2a2a2a; }
      `}</style>

      {/* NAV */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: "0 40px", height: 64,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        background: scrolled ? "#080808f0" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid #1a1a1a" : "none",
        transition: "all 0.3s ease"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <svg width="32" height="38" viewBox="0 0 38 44" fill="none">
            <path d="M19 1L37 10V28C37 36 19 43 19 43C19 43 1 36 1 28V10L19 1Z" fill="#080808" stroke="#f0ede8" strokeWidth="1.5"/>
            <text x="19" y="26" textAnchor="middle" fill="#f0ede8" fontSize="9" fontWeight="900" fontFamily="'Barlow Condensed',sans-serif" letterSpacing="0.5">SPRNT</text>
          </svg>
          <span style={{ fontWeight: 900, fontSize: 22, letterSpacing: "0.14em" }}>SPRNT</span>
        </div>

        <div style={{ display: "flex", gap: 32, fontSize: 12, letterSpacing: "0.14em", color: "#666", textTransform: "uppercase" }} className="desk-nav">
          {["Programs","Track Finder","About"].map(l => (
            <span key={l} style={{ cursor: "pointer", transition: "color 0.15s" }}
              onMouseEnter={e => e.target.style.color="#f0ede8"}
              onMouseLeave={e => e.target.style.color="#666"}>{l}</span>
          ))}
        </div>

        <button className="btn" style={{
          background: "#f0ede8", color: "#080808", padding: "10px 26px",
          borderRadius: 4, fontWeight: 800, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase"
        }}>Start Free Trial</button>
      </nav>

      {/* ── HERO ── */}
      <section style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", padding: "120px 40px 80px", position: "relative", overflow: "hidden" }}>

        {/* Background track lines */}
        {[...Array(12)].map((_, i) => (
          <div key={i} style={{
            position: "absolute", left: 0, right: 0,
            top: `${8 + i * 8}%`, height: "1px",
            background: "rgba(240,237,232,0.04)", pointerEvents: "none"
          }} />
        ))}

        {/* Pulse ring decoration */}
        <div style={{ position: "absolute", right: "-10%", top: "15%", width: 600, height: 600, borderRadius: "50%", border: "1px solid rgba(240,237,232,0.08)", pointerEvents: "none" }} className="ring" />
        <div style={{ position: "absolute", right: "-5%", top: "20%", width: 400, height: 400, borderRadius: "50%", border: "1px solid rgba(240,237,232,0.06)", pointerEvents: "none" }} />

        <div style={{ maxWidth: 1000, margin: "0 auto", width: "100%", position: "relative", zIndex: 2 }}>

          {/* Badge */}
          <div className="h1" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            border: "1px solid #2a2a2a", padding: "6px 18px", borderRadius: 40,
            fontSize: 11, letterSpacing: "0.2em", color: "#666", marginBottom: 28, textTransform: "uppercase"
          }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#f0ede8", display: "inline-block" }} />
            Est. 2024 · Bay Area, CA · All Abilities Welcome
          </div>

          {/* Headline */}
          <h1 className="h2" style={{
            fontSize: "clamp(58px, 12vw, 140px)", fontWeight: 900, lineHeight: 0.87,
            textTransform: "uppercase", letterSpacing: "0.01em", marginBottom: 0
          }}>
            RUN.<br />TRAIN.<br />
            <span style={{ WebkitTextStroke: "2px #f0ede8", color: "transparent", fontStyle: "italic" }}>COMMUNITY.</span>
          </h1>

          {/* Divider + tagline */}
          <div className="h3" style={{ display: "flex", alignItems: "center", gap: 20, margin: "32px 0" }}>
            <div style={{ height: 2, width: 60, background: "#f0ede8" }} />
            <p style={{ fontSize: 17, color: "#888", fontFamily: "'Barlow', sans-serif", fontWeight: 300, maxWidth: 480, lineHeight: 1.65 }}>
              The first track & speed training platform built for coaches, parents, and athletes of all abilities — including those with Special Abilities.
            </p>
          </div>

          {/* CTAs */}
          <div className="h4" style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <button className="btn" style={{
              background: "#f0ede8", color: "#080808", padding: "18px 48px",
              borderRadius: 4, fontWeight: 900, fontSize: 15, letterSpacing: "0.12em", textTransform: "uppercase"
            }}>Start Free 7-Day Trial</button>
            <button className="btn btn-ghost" style={{
              background: "transparent", color: "#f0ede8", border: "1px solid #2a2a2a",
              padding: "18px 40px", borderRadius: 4, fontWeight: 700, fontSize: 14,
              letterSpacing: "0.12em", textTransform: "uppercase"
            }}>See All Programs ↓</button>
          </div>

          {/* Social proof */}
          <div className="h5" style={{ display: "flex", gap: 32, marginTop: 52, flexWrap: "wrap" }}>
            {stats.map((s, i) => (
              <div key={i} style={{ borderLeft: "1px solid #1c1c1c", paddingLeft: 20 }}>
                <div style={{ fontSize: 32, fontWeight: 900, letterSpacing: "0.04em", lineHeight: 1 }}>{s.value}</div>
                <div style={{ fontSize: 11, color: "#555", letterSpacing: "0.16em", textTransform: "uppercase", marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{ position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
          <div style={{ fontSize: 9, color: "#444", letterSpacing: "0.22em", textTransform: "uppercase" }}>Scroll</div>
          <div style={{ width: 1, height: 40, background: "linear-gradient(#444, transparent)" }} />
        </div>
      </section>

      {/* ── MARQUEE TICKER ── */}
      <div style={{ borderTop: "1px solid #1a1a1a", borderBottom: "1px solid #1a1a1a", padding: "14px 0", overflow: "hidden", background: "#0d0d0d" }}>
        <div className="marquee-inner">
          {[...Array(2)].map((_, ri) => (
            <div key={ri} style={{ display: "flex", gap: 0 }}>
              {["RUN", "TRAIN", "COMMUNITY", "ALL ABILITIES", "BEGINNER TO ELITE", "EST. 2024", "@SPRNT.US", "SPECIAL ABILITIES", "YOUTH TO MASTERS", "RUN", "TRAIN", "COMMUNITY", "ALL ABILITIES", "BEGINNER TO ELITE", "EST. 2024", "@SPRNT.US"].map((t, i) => (
                <span key={i} style={{ fontSize: 12, fontWeight: 800, letterSpacing: "0.18em", color: i % 4 === 0 ? "#f0ede8" : "#2a2a2a", padding: "0 32px", textTransform: "uppercase", whiteSpace: "nowrap" }}>
                  {t} {i % 3 === 0 ? "·" : "—"}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ── WHAT IS SPRNT ── */}
      <section style={{ padding: "100px 40px", maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          <Reveal>
            <div style={{ fontSize: 9, color: "#444", letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: 16 }}>What is SPRNT?</div>
            <h2 style={{ fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 900, textTransform: "uppercase", lineHeight: 0.92, marginBottom: 24 }}>
              THE TRACK IS<br />
              <span style={{ WebkitTextStroke: "1.5px #f0ede8", color: "transparent" }}>FOR EVERYONE.</span>
            </h2>
            <div style={{ height: 2, width: 60, background: "#f0ede8", marginBottom: 24 }} />
            <p style={{ fontSize: 15, color: "#777", lineHeight: 1.75, fontFamily: "'Barlow', sans-serif", fontWeight: 300, marginBottom: 20 }}>
              SPRNT is a track & speed training brand built around community. We develop athletes of all abilities — from first-time runners to competitive elites, from 5-year-olds to Masters athletes, and everyone in between.
            </p>
            <p style={{ fontSize: 15, color: "#777", lineHeight: 1.75, fontFamily: "'Barlow', sans-serif", fontWeight: 300, marginBottom: 32 }}>
              Our Special Abilities program is the first sensory-first track curriculum designed specifically for autistic athletes — built on research, built for real families.
            </p>
            <a href="https://instagram.com/sprnt.us" target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
              <button className="btn" style={{
                background: "transparent", color: "#f0ede8", border: "1px solid #2a2a2a",
                padding: "13px 28px", borderRadius: 4, fontWeight: 700, fontSize: 12,
                letterSpacing: "0.14em", textTransform: "uppercase"
              }}>Follow @SPRNT.US on Instagram →</button>
            </a>
          </Reveal>

          <Reveal delay={0.15}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              {[
                { label: "Youth", sub: "Ages 5–12", icon: "🧒" },
                { label: "Teen", sub: "Ages 13–17", icon: "🏃" },
                { label: "Adult", sub: "Ages 18–49", icon: "💪" },
                { label: "Masters", sub: "Ages 50+", icon: "🏅" },
                { label: "Special\nAbilities", sub: "All Ages", icon: "⭐", wide: true },
              ].map((g, i) => (
                <div key={i} style={{
                  gridColumn: g.wide ? "1 / -1" : "auto",
                  background: "#0f0f0f", border: "1px solid #1a1a1a",
                  borderRadius: 8, padding: "20px",
                  display: "flex", alignItems: "center", gap: 14
                }}>
                  <span style={{ fontSize: 26 }}>{g.icon}</span>
                  <div>
                    <div style={{ fontWeight: 800, fontSize: 15, letterSpacing: "0.08em", textTransform: "uppercase", whiteSpace: "pre" }}>{g.label}</div>
                    <div style={{ fontSize: 11, color: "#555", letterSpacing: "0.12em" }}>{g.sub} · 4 Levels</div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section style={{ padding: "80px 40px", background: "#0c0c0c", borderTop: "1px solid #1a1a1a", borderBottom: "1px solid #1a1a1a" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <Reveal>
            <div style={{ display: "flex", alignItems: "baseline", gap: 20, marginBottom: 48, flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "clamp(36px, 5vw, 60px)", fontWeight: 900, textTransform: "uppercase", lineHeight: 0.9 }}>
                EVERYTHING<br />YOU NEED
              </h2>
              <div style={{ flex: 1, height: 2, background: "#1a1a1a", alignSelf: "center", minWidth: 30 }} />
              <span style={{ fontSize: 11, color: "#444", letterSpacing: "0.16em", textTransform: "uppercase" }}>Platform Features</span>
            </div>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 1, border: "1px solid #1a1a1a", borderRadius: 8, overflow: "hidden" }}>
            {features.map((f, i) => (
              <Reveal key={i} delay={i * 0.07}>
                <div className="feat-card" style={{
                  background: "#0f0f0f", padding: "28px 22px",
                  borderRight: i < features.length - 1 ? "1px solid #1a1a1a" : "none",
                  height: "100%"
                }}>
                  <div style={{ fontSize: 26, marginBottom: 14 }}>{f.icon}</div>
                  <div style={{ fontWeight: 800, fontSize: 13, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 8 }}>{f.title}</div>
                  <div style={{ height: 1, background: "#1a1a1a", marginBottom: 12 }} />
                  <div style={{ fontSize: 12, color: "#666", lineHeight: 1.65, fontFamily: "'Barlow', sans-serif", fontWeight: 300 }}>{f.desc}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SPECIAL ABILITIES CALLOUT ── */}
      <section style={{ padding: "100px 40px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 60% 50%, #1a1a0a 0%, #080808 70%)", pointerEvents: "none" }} />
        {[...Array(8)].map((_, i) => (
          <div key={i} style={{ position: "absolute", left: 0, right: 0, top: `${i * 13}%`, height: 1, background: "rgba(240,237,232,0.03)", pointerEvents: "none" }} />
        ))}
        <div style={{ maxWidth: 900, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <Reveal>
            <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 24, flexWrap: "wrap" }}>
              <span style={{ fontSize: 28 }}>⭐</span>
              <div style={{ fontSize: 9, color: "#555", letterSpacing: "0.22em", textTransform: "uppercase", border: "1px solid #222", padding: "4px 14px", borderRadius: 2 }}>Special Abilities Program</div>
            </div>
            <h2 style={{ fontSize: "clamp(40px, 7vw, 88px)", fontWeight: 900, lineHeight: 0.9, textTransform: "uppercase", marginBottom: 24 }}>
              YOUR ATHLETE<br />
              <span style={{ WebkitTextStroke: "1.5px #f0ede8", color: "transparent" }}>BELONGS HERE.</span>
            </h2>
            <div style={{ height: 2, width: 60, background: "#f0ede8", marginBottom: 28 }} />
            <p style={{ fontSize: 16, color: "#777", lineHeight: 1.75, fontFamily: "'Barlow', sans-serif", fontWeight: 300, maxWidth: 580, marginBottom: 40 }}>
              Our 12-week sensory-first curriculum is built on autism research — designed for coaches and parents to get their autistic athletes on the track safely, confidently, and joyfully.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 12, marginBottom: 40 }}>
              {[
                { icon: "👁", label: "Visual Schedules", desc: "No surprises. Every session previewed." },
                { icon: "🔇", label: "Sound Aware", desc: "No whistles. Hand signals throughout." },
                { icon: "🧠", label: "One Cue at a Time", desc: "Research-backed coaching language." },
                { icon: "🏖", label: "Safe Spot Always", desc: "Athletes identify their safe space Day 1." },
              ].map((p, i) => (
                <div key={i} style={{ background: "#111", border: "1px solid #1a1a1a", borderRadius: 6, padding: "18px 16px" }}>
                  <div style={{ fontSize: 22, marginBottom: 10 }}>{p.icon}</div>
                  <div style={{ fontWeight: 800, fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 6 }}>{p.label}</div>
                  <div style={{ fontSize: 12, color: "#555", lineHeight: 1.55, fontFamily: "'Barlow', sans-serif" }}>{p.desc}</div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <button className="btn" style={{
              background: "#f0ede8", color: "#080808", padding: "16px 44px",
              borderRadius: 4, fontWeight: 900, fontSize: 14, letterSpacing: "0.14em", textTransform: "uppercase"
            }}>Access the Special Abilities Program</button>
          </Reveal>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section id="pricing" style={{ padding: "100px 40px", background: "#0c0c0c", borderTop: "1px solid #1a1a1a" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <div style={{ fontSize: 9, color: "#444", letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: 14 }}>Pricing</div>
              <h2 style={{ fontSize: "clamp(36px, 6vw, 72px)", fontWeight: 900, textTransform: "uppercase", lineHeight: 0.9, marginBottom: 14 }}>
                CHOOSE YOUR<br />
                <span style={{ WebkitTextStroke: "1.5px #f0ede8", color: "transparent" }}>PLAN</span>
              </h2>
              <p style={{ fontSize: 14, color: "#555", fontFamily: "'Barlow', sans-serif", letterSpacing: "0.1em" }}>
                Monthly · Cancel anytime · 7-day free trial on every plan
              </p>
            </div>
          </Reveal>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
            {plans.map((plan, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="plan-card" onClick={() => setActivePlan(i)} style={{
                  background: plan.highlight ? "#f0ede8" : "#0f0f0f",
                  border: `1px solid ${activePlan === i && !plan.highlight ? "#f0ede8" : plan.highlight ? "transparent" : "#1a1a1a"}`,
                  borderRadius: 8, padding: "36px 28px", position: "relative", overflow: "hidden",
                  color: plan.highlight ? "#080808" : "#f0ede8"
                }}>
                  {plan.highlight && <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "#080808" }} />}

                  <div style={{
                    display: "inline-block", background: plan.highlight ? "#080808" : "#151515",
                    color: plan.highlight ? "#f0ede8" : "#666", border: plan.highlight ? "none" : "1px solid #1a1a1a",
                    padding: "3px 12px", borderRadius: 2, fontSize: 9, fontWeight: 700,
                    letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 20
                  }}>{plan.tag}</div>

                  <div style={{ marginBottom: 4 }}>
                    <span style={{ fontSize: 60, fontWeight: 900, lineHeight: 1 }}>${plan.price}</span>
                    <span style={{ fontSize: 13, opacity: 0.4, marginLeft: 4 }}>/mo</span>
                  </div>

                  <div style={{ fontSize: 26, fontWeight: 900, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>{plan.name}</div>

                  <div style={{ height: 1, background: plan.highlight ? "#08080820" : "#1a1a1a", marginBottom: 10 }} />

                  <div style={{ fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: plan.highlight ? "#08080880" : "#444", marginBottom: 24 }}>
                    ★ {plan.trial} · No credit card required
                  </div>

                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10, marginBottom: 32 }}>
                    {plan.features.map((f, fi) => (
                      <li key={fi} style={{ display: "flex", gap: 10, fontSize: 13, color: plan.highlight ? "#080808" : "#999", fontFamily: "'Barlow', sans-serif", lineHeight: 1.4 }}>
                        <span style={{ opacity: 0.5, flexShrink: 0 }}>—</span>{f}
                      </li>
                    ))}
                  </ul>

                  <button className="btn" style={{
                    width: "100%", padding: "14px",
                    background: plan.highlight ? "#080808" : "#f0ede8",
                    color: plan.highlight ? "#f0ede8" : "#080808",
                    borderRadius: 4, fontWeight: 900, fontSize: 12,
                    letterSpacing: "0.14em", textTransform: "uppercase"
                  }}>Start Free Trial →</button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── INSTAGRAM CTA ── */}
      <section style={{ padding: "100px 40px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        {[...Array(10)].map((_, i) => (
          <div key={i} style={{ position: "absolute", left: 0, right: 0, top: `${i * 11}%`, height: 1, background: "rgba(240,237,232,0.03)", pointerEvents: "none" }} />
        ))}
        <div style={{ position: "relative", zIndex: 2 }}>
          <Reveal>
            <div style={{ fontSize: 9, color: "#444", letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: 20 }}>Join the Movement</div>
            <h2 style={{ fontSize: "clamp(48px, 10vw, 110px)", fontWeight: 900, lineHeight: 0.88, textTransform: "uppercase", marginBottom: 28 }}>
              JOIN THE<br />
              <span style={{ WebkitTextStroke: "2px #f0ede8", color: "transparent", fontStyle: "italic" }}>SPRNT</span><br />
              COMMUNITY.
            </h2>
            <div style={{ height: 2, width: 60, background: "#f0ede8", margin: "0 auto 28px" }} />
            <p style={{ fontSize: 15, color: "#666", maxWidth: 480, margin: "0 auto 44px", lineHeight: 1.75, fontFamily: "'Barlow', sans-serif", fontWeight: 300 }}>
              Follow us on Instagram for training tips, athlete spotlights, and community content. Link in bio for full platform access.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <a href="https://instagram.com/sprnt.us" target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
                <button className="btn" style={{
                  background: "#f0ede8", color: "#080808", padding: "18px 48px",
                  borderRadius: 4, fontWeight: 900, fontSize: 14, letterSpacing: "0.14em", textTransform: "uppercase"
                }}>Follow @SPRNT.US</button>
              </a>
              <button className="btn btn-ghost" style={{
                background: "transparent", color: "#f0ede8", border: "1px solid #2a2a2a",
                padding: "18px 40px", borderRadius: 4, fontWeight: 700, fontSize: 13,
                letterSpacing: "0.12em", textTransform: "uppercase"
              }}>Start Free Trial</button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: "1px solid #1a1a1a", padding: "32px 40px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16, marginBottom: 24 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <svg width="28" height="34" viewBox="0 0 38 44" fill="none">
              <path d="M19 1L37 10V28C37 36 19 43 19 43C19 43 1 36 1 28V10L19 1Z" fill="#080808" stroke="#f0ede8" strokeWidth="1.5"/>
              <text x="19" y="26" textAnchor="middle" fill="#f0ede8" fontSize="9" fontWeight="900" fontFamily="'Barlow Condensed',sans-serif" letterSpacing="0.5">SPRNT</text>
            </svg>
            <span style={{ fontWeight: 900, fontSize: 18, letterSpacing: "0.14em" }}>SPRNT</span>
          </div>
          <div style={{ display: "flex", gap: 28, fontSize: 11, color: "#444", letterSpacing: "0.14em", textTransform: "uppercase", flexWrap: "wrap" }}>
            {["Programs", "Track Finder", "Special Abilities", "Pricing", "Instagram"].map(l => (
              <span key={l} style={{ cursor: "pointer" }}>{l}</span>
            ))}
          </div>
        </div>
        <div style={{ height: 1, background: "#1a1a1a", marginBottom: 24 }} />
        <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
          <span style={{ fontSize: 11, color: "#333", letterSpacing: "0.1em" }}>RUN. TRAIN. COMMUNITY. · EST. 2024 · @SPRNT.US</span>
          <span style={{ fontSize: 11, color: "#333", letterSpacing: "0.1em" }}>© 2026 SPRNT. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}
