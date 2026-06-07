"use client";
import { useState } from "react";

const plans = {
  parent: [
    {
      name: "Parent",
      price: 85,
      color: "#FFFFFF",
      tag: "For Families",
      trial: true,
      features: [
        "Full video tutorial library",
        "Unlimited training plans & drills",
        "Athlete progress tracking dashboard",
        "1 live coaching session/month",
        "Adaptive & sensory-friendly guides",
        "Resource library & printables",
        "Community forum access",
      ],
      cta: "Start Free 7-Day Trial",
    },
  ],
  coach: [
    {
      name: "Coach",
      price: 120,
      color: "#FFFFFF",
      tag: "For Coaches",
      trial: true,
      features: [
        "Full video tutorial library",
        "Unlimited training plans & drills",
        "Athlete progress tracking tools",
        "2 live coaching sessions/month",
        "Resource library & printables",
        "Community coach network",
      ],
      cta: "Start Free 7-Day Trial",
    },
    {
      name: "Coach Pro",
      price: 175,
      color: "#FFFFFF",
      tag: "Most Popular",
      highlight: true,
      trial: true,
      features: [
        "Everything in Coach",
        "4 live coaching sessions/month",
        "Multi-athlete roster management",
        "Inclusive curriculum templates",
        "Official SPRNT Coach Badge",
        "Early access to new content",
        "Priority support",
      ],
      cta: "Start Free 7-Day Trial",
    },
  ],
};

const features = [
  { icon: "▶", label: "Video Tutorials", desc: "Step-by-step track instruction built for all abilities and learning styles." },
  { icon: "📋", label: "Training Plans", desc: "Adaptive drills designed with sensory and motor needs in mind." },
  { icon: "📈", label: "Progress Tracking", desc: "Celebrate every milestone with visual athlete dashboards." },
  { icon: "🎙", label: "Live Coaching", desc: "Direct sessions with SPRNT-certified inclusive coaches." },
  { icon: "📚", label: "Resource Library", desc: "Guides, printables, and research-backed tools for parents and coaches." },
];

const pillars = [
  { label: "ALL ABILITIES WELCOME", icon: "👟" },
  { label: "YOUTH & ADULTS", icon: "👥" },
  { label: "SPEED · STRENGTH · COMMUNITY", icon: "🏋️" },
];

export default function SPRNTApp() {
  const [tab, setTab] = useState("parent");

  return (
    <div style={{
      fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif",
      background: "#0A0A0A",
      color: "#F0EDE8",
      minHeight: "100vh",
      overflowX: "hidden",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,400;0,600;0,700;0,800;0,900;1,900&family=Barlow:wght@300;400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .hover-card { transition: transform 0.22s ease; }
        .hover-card:hover { transform: translateY(-5px); }
        .btn { transition: all 0.16s ease; cursor: pointer; border: none; }
        .btn:hover { filter: brightness(1.1); transform: scale(1.02); }
        .tab-btn { transition: all 0.18s ease; cursor: pointer; border: none; }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .f1 { animation: fadeUp 0.55s ease both; }
        .f2 { animation: fadeUp 0.55s 0.12s ease both; }
        .f3 { animation: fadeUp 0.55s 0.24s ease both; }
        .f4 { animation: fadeUp 0.55s 0.36s ease both; }
        @keyframes runner {
          0% { transform: translateX(-10px); }
          100% { transform: translateX(10px); }
        }
        .divider-line {
          height: 2px;
          background: #F0EDE8;
          width: 100%;
          margin: 8px 0 16px;
        }
        .track-stripe {
          height: 1px;
          background: rgba(240,237,232,0.1);
          width: 100%;
        }
      `}</style>

      {/* NAV */}
      <nav style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "18px 48px", borderBottom: "1px solid #222",
        position: "sticky", top: 0,
        background: "#0A0A0Af5", backdropFilter: "blur(12px)", zIndex: 100,
      }}>
        {/* Logo mark */}
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <svg width="38" height="44" viewBox="0 0 38 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 1L37 10V28C37 36 19 43 19 43C19 43 1 36 1 28V10L19 1Z" fill="#0A0A0A" stroke="#F0EDE8" strokeWidth="1.5"/>
            <text x="19" y="26" textAnchor="middle" fill="#F0EDE8" fontSize="10" fontWeight="900" fontFamily="'Barlow Condensed', sans-serif" letterSpacing="0.5">SPRNT</text>
            <line x1="8" y1="32" x2="30" y2="32" stroke="#F0EDE8" strokeWidth="0.8" opacity="0.5"/>
          </svg>
          <span style={{ fontWeight: 900, fontSize: 26, letterSpacing: "0.14em", color: "#F0EDE8", textTransform: "uppercase" }}>SPRNT</span>
        </div>

        <div style={{ display: "flex", gap: 36, fontSize: 13, letterSpacing: "0.14em", color: "#666", textTransform: "uppercase" }}>
          <span style={{ cursor: "pointer", color: "#F0EDE8" }}>Platform</span>
          <span style={{ cursor: "pointer" }}>Coaches</span>
          <span style={{ cursor: "pointer" }}>About</span>
        </div>

        <button className="btn" style={{
          background: "#F0EDE8", color: "#0A0A0A", padding: "11px 28px",
          borderRadius: 4, fontWeight: 800, fontSize: 13, letterSpacing: "0.14em",
          fontFamily: "'Barlow Condensed', sans-serif", textTransform: "uppercase"
        }}>Join Now</button>
      </nav>

      {/* HERO */}
      <section style={{
        padding: "80px 48px 0", position: "relative", overflow: "hidden",
        borderBottom: "1px solid #1C1C1C",
      }}>
        {/* Track lane lines */}
        {[0,1,2,3,4,5].map(i => (
          <div key={i} className="track-stripe" style={{ position: "absolute", top: `${15 + i * 14}%`, left: 0 }} />
        ))}

        <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 2 }}>
          {/* EST badge */}
          <div className="f1" style={{
            display: "inline-flex", alignItems: "center", gap: 10,
            border: "1px solid #333", padding: "5px 16px", borderRadius: 2,
            fontSize: 11, letterSpacing: "0.22em", color: "#888", marginBottom: 24,
            textTransform: "uppercase"
          }}>
            <span style={{ width: 6, height: 6, background: "#F0EDE8", borderRadius: "50%", display: "inline-block" }} />
            Est. 2024 · Run. Train. Community.
          </div>

          <h1 className="f2" style={{
            fontSize: "clamp(64px, 11vw, 130px)",
            fontWeight: 900, lineHeight: 0.88,
            textTransform: "uppercase", letterSpacing: "0.02em",
            marginBottom: 0, fontFamily: "'Barlow Condensed', sans-serif",
            color: "#F0EDE8"
          }}>
            GET YOUR<br />
            ATHLETE<br />
            <span style={{
              WebkitTextStroke: "2px #F0EDE8",
              color: "transparent",
            }}>ON TRACK.</span>
          </h1>

          <div className="divider-line f3" style={{ marginTop: 32, maxWidth: 600 }} />

          <div className="f3" style={{
            display: "flex", gap: 48, flexWrap: "wrap", marginBottom: 48, alignItems: "center"
          }}>
            <p style={{
              fontSize: 17, color: "#888", maxWidth: 440, lineHeight: 1.65,
              fontFamily: "'Barlow', sans-serif", fontWeight: 300,
            }}>
              The first platform built for coaches and parents to empower autistic athletes and kids of all abilities to run, compete, and belong.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <button className="btn" style={{
                background: "#F0EDE8", color: "#0A0A0A",
                padding: "16px 40px", borderRadius: 4,
                fontWeight: 800, fontSize: 15, letterSpacing: "0.12em",
                fontFamily: "'Barlow Condensed', sans-serif", textTransform: "uppercase"
              }}>Start Free Trial</button>
              <button className="btn" style={{
                background: "transparent", color: "#F0EDE8",
                border: "1px solid #444",
                padding: "16px 40px", borderRadius: 4,
                fontWeight: 700, fontSize: 15, letterSpacing: "0.12em",
                fontFamily: "'Barlow Condensed', sans-serif", textTransform: "uppercase"
              }}>Learn More</button>
            </div>
          </div>

          {/* Pillars bar — matches banner style */}
          <div className="f4" style={{
            display: "flex", borderTop: "1px solid #222",
            flexWrap: "wrap",
          }}>
            {pillars.map((p, i) => (
              <div key={i} style={{
                flex: "1 1 160px", padding: "20px 24px",
                borderRight: i < pillars.length - 1 ? "1px solid #222" : "none",
                display: "flex", alignItems: "center", gap: 12
              }}>
                <span style={{ fontSize: 22 }}>{p.icon}</span>
                <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.14em", color: "#AAA", textTransform: "uppercase" }}>{p.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section style={{ padding: "80px 48px", maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: 20, marginBottom: 50 }}>
          <h2 style={{
            fontSize: "clamp(36px, 5vw, 58px)", fontWeight: 900,
            textTransform: "uppercase", letterSpacing: "0.04em",
            fontFamily: "'Barlow Condensed', sans-serif", lineHeight: 1
          }}>
            EVERYTHING<br />YOU NEED
          </h2>
          <div style={{ flex: 1, height: 2, background: "#222", alignSelf: "center" }} />
        </div>

        <div style={{
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 1,
          border: "1px solid #1C1C1C", borderRadius: 6, overflow: "hidden"
        }}>
          {features.map((f, i) => (
            <div key={i} className="hover-card" style={{
              background: "#0F0F0F", padding: "32px 24px",
              borderRight: i < features.length - 1 ? "1px solid #1C1C1C" : "none",
              display: "flex", flexDirection: "column", gap: 14
            }}>
              <span style={{ fontSize: 26 }}>{f.icon}</span>
              <div style={{
                fontWeight: 800, fontSize: 14, letterSpacing: "0.12em",
                textTransform: "uppercase", color: "#F0EDE8", lineHeight: 1.2
              }}>{f.label}</div>
              <div className="divider-line" style={{ width: 32, height: 1, background: "#333", margin: 0 }} />
              <div style={{ fontSize: 13, color: "#666", lineHeight: 1.65, fontFamily: "'Barlow', sans-serif", fontWeight: 300 }}>{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section style={{ background: "#0C0C0C", borderTop: "1px solid #1C1C1C", borderBottom: "1px solid #1C1C1C", padding: "80px 48px" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>

          <div style={{ display: "flex", alignItems: "baseline", gap: 20, marginBottom: 48, flexWrap: "wrap" }}>
            <h2 style={{
              fontSize: "clamp(36px, 5vw, 58px)", fontWeight: 900,
              textTransform: "uppercase", letterSpacing: "0.04em",
              fontFamily: "'Barlow Condensed', sans-serif", lineHeight: 1
            }}>CHOOSE<br />YOUR PLAN</h2>
            <div style={{ flex: 1, height: 2, background: "#222", alignSelf: "center", minWidth: 40 }} />
            <div style={{ fontSize: 13, color: "#555", letterSpacing: "0.1em", textTransform: "uppercase", fontFamily: "'Barlow', sans-serif" }}>
              Monthly · Cancel anytime
            </div>
          </div>

          {/* Tab */}
          <div style={{
            display: "inline-flex", border: "1px solid #222", borderRadius: 4,
            overflow: "hidden", marginBottom: 44
          }}>
            {["parent", "coach"].map(t => (
              <button key={t} className="tab-btn" onClick={() => setTab(t)} style={{
                padding: "12px 40px", fontSize: 13, fontWeight: 800,
                letterSpacing: "0.14em", textTransform: "uppercase",
                fontFamily: "'Barlow Condensed', sans-serif",
                background: tab === t ? "#F0EDE8" : "transparent",
                color: tab === t ? "#0A0A0A" : "#555",
              }}>
                {t === "parent" ? "Parents" : "Coaches"}
              </button>
            ))}
          </div>

          {/* Cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            {plans[tab].map((plan, i) => (
              <div key={i} className="hover-card" style={{
                background: plan.highlight ? "#F0EDE8" : "#111",
                border: `1px solid ${plan.highlight ? "transparent" : "#222"}`,
                borderRadius: 6, padding: "40px 36px", position: "relative", overflow: "hidden",
                color: plan.highlight ? "#0A0A0A" : "#F0EDE8"
              }}>
                {/* Tag */}
                <div style={{
                  display: "inline-block",
                  background: plan.highlight ? "#0A0A0A" : "#1C1C1C",
                  color: plan.highlight ? "#F0EDE8" : "#888",
                  padding: "4px 12px", borderRadius: 2, fontSize: 10,
                  fontWeight: 700, letterSpacing: "0.18em", marginBottom: 24,
                  textTransform: "uppercase"
                }}>{plan.tag}</div>

                {/* Price */}
                <div style={{ marginBottom: 4 }}>
                  <span style={{
                    fontSize: 64, fontWeight: 900, lineHeight: 1,
                    fontFamily: "'Barlow Condensed', sans-serif"
                  }}>${plan.price}</span>
                  <span style={{ fontSize: 14, opacity: 0.4, marginLeft: 6, fontFamily: "'Barlow', sans-serif" }}>/mo</span>
                </div>

                {/* Name */}
                <div style={{
                  fontSize: 28, fontWeight: 900, letterSpacing: "0.1em",
                  textTransform: "uppercase", fontFamily: "'Barlow Condensed', sans-serif",
                  marginBottom: 10
                }}>{plan.name}</div>

                {/* Divider */}
                <div style={{ height: 1, background: plan.highlight ? "#0A0A0A30" : "#222", marginBottom: 12 }} />

                {/* Trial badge */}
                <div style={{
                  fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase",
                  color: plan.highlight ? "#0A0A0A99" : "#555", marginBottom: 28,
                  fontFamily: "'Barlow', sans-serif"
                }}>★ 7-day free trial · No credit card required</div>

                {/* Features */}
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12, marginBottom: 36 }}>
                  {plan.features.map((f, j) => (
                    <li key={j} style={{
                      display: "flex", gap: 10, alignItems: "flex-start",
                      fontFamily: "'Barlow', sans-serif", fontSize: 14,
                      color: plan.highlight ? "#0A0A0A" : "#AAA", lineHeight: 1.45
                    }}>
                      <span style={{ fontWeight: 900, flexShrink: 0, marginTop: 1, opacity: 0.6 }}>—</span>
                      {f}
                    </li>
                  ))}
                </ul>

                <button className="btn" style={{
                  width: "100%", padding: "16px",
                  background: plan.highlight ? "#0A0A0A" : "#F0EDE8",
                  color: plan.highlight ? "#F0EDE8" : "#0A0A0A",
                  borderRadius: 4, fontWeight: 800, fontSize: 13,
                  letterSpacing: "0.14em", textTransform: "uppercase",
                  fontFamily: "'Barlow Condensed', sans-serif"
                }}>{plan.cta}</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ALL INCLUSIVE BANNER */}
      <section style={{
        padding: "90px 48px", textAlign: "center",
        background: "#0A0A0A", position: "relative", overflow: "hidden"
      }}>
        {[0,1,2,3,4,5,6].map(i => (
          <div key={i} className="track-stripe" style={{
            position: "absolute", top: `${i * 14}%`, left: 0
          }} />
        ))}
        <div style={{ position: "relative", zIndex: 2 }}>
          <div style={{
            fontSize: 11, letterSpacing: "0.24em", color: "#555",
            textTransform: "uppercase", marginBottom: 24
          }}>— All Abilities Welcome —</div>

          <h2 style={{
            fontSize: "clamp(52px, 10vw, 120px)", fontWeight: 900, lineHeight: 0.9,
            textTransform: "uppercase", letterSpacing: "0.02em",
            fontFamily: "'Barlow Condensed', sans-serif", marginBottom: 32
          }}>
            THE TRACK IS<br />
            <span style={{ WebkitTextStroke: "2px #F0EDE8", color: "transparent" }}>
              FOR EVERYONE.
            </span>
          </h2>

          <div style={{ height: 2, background: "#F0EDE8", width: 80, margin: "0 auto 32px" }} />

          <p style={{
            maxWidth: 520, margin: "0 auto 44px", color: "#666",
            fontSize: 16, lineHeight: 1.7, fontFamily: "'Barlow', sans-serif", fontWeight: 300
          }}>
            SPRNT was built from the ground up to be radically inclusive — sensory-friendly content, adaptive training, and a community where every athlete is celebrated.
          </p>

          <button className="btn" style={{
            background: "#F0EDE8", color: "#0A0A0A",
            padding: "18px 52px", borderRadius: 4, fontWeight: 900,
            fontSize: 15, letterSpacing: "0.14em",
            fontFamily: "'Barlow Condensed', sans-serif", textTransform: "uppercase"
          }}>Join The Movement</button>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        borderTop: "1px solid #1C1C1C", padding: "28px 48px",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        flexWrap: "wrap", gap: 16
      }}>
        <span style={{
          fontWeight: 900, fontSize: 20, letterSpacing: "0.16em",
          color: "#F0EDE8", fontFamily: "'Barlow Condensed', sans-serif", textTransform: "uppercase"
        }}>SPRNT</span>
        <span style={{ fontSize: 12, color: "#444", letterSpacing: "0.1em", fontFamily: "'Barlow', sans-serif" }}>
          RUN. TRAIN. COMMUNITY. · EST. 2024 · @SPRNT.US
        </span>
        <span style={{ fontSize: 12, color: "#333", letterSpacing: "0.08em", fontFamily: "'Barlow', sans-serif" }}>
          © 2026 SPRNT. All rights reserved.
        </span>
      </footer>
    </div>
  );
}
