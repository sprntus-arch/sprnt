"use client";
import { useState } from "react";

const tracks = [
  { id: 1, name: "King Track and Field", city: "Berkeley", state: "CA", region: "Bay Area", rating: 4.6, hours: "6AM – 12AM", surface: "Rubber", lanes: 8, free: true, sensory: 4, noise: "Low", tags: ["Outdoor", "Public", "Well-maintained"] },
  { id: 2, name: "MSJ Track", city: "Fremont", state: "CA", region: "Bay Area", rating: 4.4, hours: "Open 24 hrs", surface: "Rubber", lanes: 8, free: true, sensory: 5, noise: "Low", tags: ["Outdoor", "24 Hours", "World-class"] },
  { id: 3, name: "Washington HS Track", city: "San Francisco", state: "CA", region: "Bay Area", rating: 4.3, hours: "Varies", surface: "Rubber", lanes: 6, free: true, sensory: 3, noise: "Moderate", tags: ["Outdoor", "Public"] },
  { id: 4, name: "Clark Kerr Track", city: "Berkeley", state: "CA", region: "Bay Area", rating: 4.7, hours: "Open", surface: "Dirt", lanes: 4, free: true, sensory: 5, noise: "Low", tags: ["Outdoor", "Scenic"] },
  { id: 5, name: "McCarren Park Track", city: "Brooklyn", state: "NY", region: "New York", rating: 4.7, hours: "6AM – 1AM", surface: "Rubber", lanes: 8, free: true, sensory: 3, noise: "Moderate", tags: ["Outdoor", "8-Lane", "400m"] },
  { id: 6, name: "Macombs Dam Park", city: "Bronx", state: "NY", region: "New York", rating: 4.5, hours: "6AM – 10PM", surface: "Mondo", lanes: 8, free: true, sensory: 3, noise: "Moderate", tags: ["Outdoor", "400m Mondo"] },
  { id: 7, name: "Juniper Valley Park Track", city: "Middle Village", state: "NY", region: "New York", rating: 4.5, hours: "6AM – 9PM", surface: "Rubber", lanes: 6, free: true, sensory: 4, noise: "Low", tags: ["Outdoor", "Park", "Beginner-friendly"] },
  { id: 8, name: "Riverbank State Park Track", city: "New York", state: "NY", region: "New York", rating: 4.6, hours: "6AM – 11PM", surface: "Rubber", lanes: 6, free: true, sensory: 4, noise: "Low", tags: ["Outdoor", "Floodlit"] },
  { id: 9, name: "Dr. Conrad Worrill Track", city: "Chicago", state: "IL", region: "Chicago", rating: 4.5, hours: "7AM – 10PM", surface: "Indoor", lanes: 8, free: false, sensory: 4, noise: "Low", tags: ["Indoor", "State-of-art"] },
  { id: 10, name: "Chase Park Outdoor Track", city: "Chicago", state: "IL", region: "Chicago", rating: 4.7, hours: "6AM – 11PM", surface: "Rubber", lanes: 4, free: true, sensory: 5, noise: "Low", tags: ["Outdoor", "Quiet"] },
  { id: 11, name: "Marquette Park Running Track", city: "Chicago", state: "IL", region: "Chicago", rating: 4.5, hours: "6AM – 11PM", surface: "Rubber", lanes: 4, free: true, sensory: 4, noise: "Low", tags: ["Outdoor", "Park"] },
  { id: 12, name: "Roy H. Cullen Timing Track", city: "Houston", state: "TX", region: "Houston", rating: 5.0, hours: "5AM – 9PM", surface: "Rubber", lanes: 8, free: true, sensory: 5, noise: "Low", tags: ["Outdoor", "World-class", "Restrooms"] },
  { id: 13, name: "400m Memorial Track", city: "Houston", state: "TX", region: "Houston", rating: 4.7, hours: "6AM – 9:30PM", surface: "Concrete", lanes: 4, free: true, sensory: 4, noise: "Low", tags: ["Outdoor", "Memorial Park"] },
  { id: 14, name: "Tom Tellez Track", city: "Houston", state: "TX", region: "Houston", rating: 4.7, hours: "Varies", surface: "Rubber", lanes: 8, free: false, sensory: 4, noise: "Low", tags: ["Outdoor", "Elite"] },
  { id: 15, name: "Rose Mofford Sports Complex", city: "Phoenix", state: "AZ", region: "Phoenix", rating: 4.4, hours: "8AM – 9PM", surface: "Rubber", lanes: 8, free: true, sensory: 3, noise: "Moderate", tags: ["Outdoor", "Full Complex"] },
  { id: 16, name: "Washington HS Track", city: "Phoenix", state: "AZ", region: "Phoenix", rating: 4.5, hours: "Open 24 hrs", surface: "Rubber", lanes: 6, free: true, sensory: 4, noise: "Low", tags: ["Outdoor", "24 Hours"] },
  { id: 17, name: "Track Georgia", city: "Atlanta", state: "GA", region: "Atlanta", rating: 4.5, hours: "6:30AM – 9PM", surface: "Rubber", lanes: 8, free: false, sensory: 4, noise: "Low", tags: ["Outdoor", "Training-focused"] },
  { id: 18, name: "Active Oval – Piedmont Park", city: "Atlanta", state: "GA", region: "Atlanta", rating: 4.8, hours: "Open", surface: "Gravel", lanes: 0, free: true, sensory: 5, noise: "Low", tags: ["Outdoor", "Park", "Scenic"] },
  { id: 19, name: "Roosevelt Track", city: "Seattle", state: "WA", region: "Seattle", rating: 4.3, hours: "Open 24 hrs", surface: "Rubber", lanes: 6, free: true, sensory: 4, noise: "Low", tags: ["Outdoor", "24 Hours"] },
  { id: 20, name: "Cleveland Playfield Track", city: "Seattle", state: "WA", region: "Seattle", rating: 4.3, hours: "4AM – 11:30PM", surface: "Rubber", lanes: 4, free: true, sensory: 4, noise: "Low", tags: ["Outdoor", "Lit"] },
  { id: 21, name: "Queen Anne Bowl Playfield", city: "Seattle", state: "WA", region: "Seattle", rating: 4.2, hours: "4AM – 11:30PM", surface: "Dirt", lanes: 4, free: true, sensory: 4, noise: "Low", tags: ["Outdoor", "Park"] },
  { id: 22, name: "Tropical Park Oval Track", city: "Miami", state: "FL", region: "Miami", rating: 4.8, hours: "6AM – 8PM", surface: "Rubber", lanes: 8, free: true, sensory: 5, noise: "Low", tags: ["Outdoor", "Well-maintained", "400m"] },
  { id: 23, name: "Moore Park Track", city: "Miami", state: "FL", region: "Miami", rating: 4.7, hours: "Varies", surface: "Rubber", lanes: 4, free: true, sensory: 4, noise: "Low", tags: ["Outdoor", "Neighborhood"] },
  { id: 24, name: "Roadrunner Athletic Complex", city: "Denver", state: "CO", region: "Denver", rating: 4.5, hours: "Varies", surface: "Rubber", lanes: 8, free: true, sensory: 3, noise: "Moderate", tags: ["Outdoor", "Downtown"] },
  { id: 25, name: "Harvard Gulch Park", city: "Denver", state: "CO", region: "Denver", rating: 4.7, hours: "9AM – 8PM", surface: "Rubber", lanes: 4, free: true, sensory: 5, noise: "Low", tags: ["Outdoor", "Park", "Mountain views"] },
  { id: 26, name: "Columbus Park Outdoor Track", city: "Boston", state: "MA", region: "Boston", rating: 4.5, hours: "6AM – 11:30PM", surface: "Rubber", lanes: 6, free: true, sensory: 4, noise: "Low", tags: ["Outdoor", "Waterfront"] },
  { id: 27, name: "Reggie Lewis Track Center", city: "Boston", state: "MA", region: "Boston", rating: 4.5, hours: "7AM – 9PM", surface: "Indoor", lanes: 8, free: false, sensory: 4, noise: "Low", tags: ["Indoor", "Elite"] },
  { id: 28, name: "McCurdy Outdoor Track", city: "Boston", state: "MA", region: "Boston", rating: 4.7, hours: "6AM – 9AM", surface: "Rubber", lanes: 8, free: true, sensory: 4, noise: "Low", tags: ["Outdoor", "Harvard"] },
  { id: 29, name: "The Track @ Suffolk Downs", city: "Boston", state: "MA", region: "Boston", rating: 4.4, hours: "7AM – 7PM", surface: "Dirt", lanes: 0, free: true, sensory: 5, noise: "Low", tags: ["Outdoor", "Historic"] },
];

const regions = ["All", "Bay Area", "New York", "Chicago", "Houston", "Phoenix", "Atlanta", "Seattle", "Miami", "Denver", "Boston"];

function getSensory(score) {
  if (score >= 5) return { label: "Ideal", color: "#4ade80" };
  if (score >= 4) return { label: "Great", color: "#a3e635" };
  return { label: "Good", color: "#facc15" };
}

export default function App() {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("All");
  const [freeOnly, setFreeOnly] = useState(false);
  const [sensoryMin, setSensoryMin] = useState(0);
  const [selected, setSelected] = useState(null);

  const results = tracks.filter((t) => {
    const q = search.toLowerCase();
    const matchQ = !q || t.name.toLowerCase().includes(q) || t.city.toLowerCase().includes(q) || t.state.toLowerCase().includes(q);
    const matchR = region === "All" || t.region === region;
    const matchF = !freeOnly || t.free;
    const matchS = t.sensory >= (sensoryMin || 0);
    return matchQ && matchR && matchF && matchS;
  });

  const pick = selected ? tracks.find((t) => t.id === selected) : null;
  const s = pick ? getSensory(pick.sensory) : null;

  return (
    <div style={{ fontFamily: "'Barlow Condensed', sans-serif", background: "#0a0a0a", color: "#f0ede8", minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;700;800;900&family=Barlow:wght@300;400&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { width: 4px; } ::-webkit-scrollbar-thumb { background: #2a2a2a; }
        input, select { font-family: inherit; }
        button { font-family: inherit; cursor: pointer; border: none; }
      `}</style>

      {/* NAV */}
      <div style={{ padding: "16px 32px", borderBottom: "1px solid #1c1c1c", display: "flex", alignItems: "center", gap: 14, position: "sticky", top: 0, background: "#0a0a0af5", backdropFilter: "blur(10px)", zIndex: 50 }}>
        <svg width="30" height="36" viewBox="0 0 38 44" fill="none">
          <path d="M19 1L37 10V28C37 36 19 43 19 43C19 43 1 36 1 28V10L19 1Z" fill="#0a0a0a" stroke="#f0ede8" strokeWidth="1.5" />
          <text x="19" y="26" textAnchor="middle" fill="#f0ede8" fontSize="9" fontWeight="900" letterSpacing="0.5">SPRNT</text>
        </svg>
        <div>
          <div style={{ fontWeight: 900, fontSize: 18, letterSpacing: "0.14em" }}>SPRNT</div>
          <div style={{ fontSize: 9, color: "#555", letterSpacing: "0.18em", marginTop: -2 }}>TRACK FINDER</div>
        </div>
        <div style={{ marginLeft: "auto", fontSize: 11, color: "#444", letterSpacing: "0.12em" }}>
          {results.length} OF {tracks.length} TRACKS
        </div>
      </div>

      {/* HERO */}
      <div style={{ padding: "48px 32px 36px", borderBottom: "1px solid #1c1c1c", background: "#0d0d0d" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <div style={{ fontSize: 9, color: "#444", letterSpacing: "0.22em", marginBottom: 14 }}>— FIND YOUR TRACK</div>
          <h1 style={{ fontSize: "clamp(40px, 7vw, 80px)", fontWeight: 900, lineHeight: 0.9, textTransform: "uppercase", marginBottom: 28 }}>
            PUBLIC TRACKS<br />
            <span style={{ WebkitTextStroke: "1.5px #f0ede8", color: "transparent" }}>ACROSS THE US</span>
          </h1>

          {/* Search */}
          <div style={{ display: "flex", background: "#111", border: "1px solid #222", borderRadius: 6, overflow: "hidden", marginBottom: 16 }}>
            <div style={{ padding: "0 16px", display: "flex", alignItems: "center", color: "#444", fontSize: 20 }}>⌕</div>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search city, state, or track name..."
              style={{ flex: 1, background: "transparent", border: "none", color: "#f0ede8", fontSize: 15, padding: "16px 0", outline: "none" }}
            />
            {search && (
              <button onClick={() => setSearch("")} style={{ padding: "0 16px", background: "transparent", color: "#555", fontSize: 22 }}>×</button>
            )}
          </div>

          {/* Region pills */}
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 14 }}>
            {regions.map((r) => (
              <button key={r} onClick={() => setRegion(r)} style={{
                padding: "6px 14px", borderRadius: 40, fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase",
                background: region === r ? "#f0ede8" : "#111", color: region === r ? "#0a0a0a" : "#555",
                border: "1px solid #1c1c1c", transition: "all 0.15s"
              }}>{r}</button>
            ))}
          </div>

          {/* Filters */}
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" }}>
            <select value={sensoryMin} onChange={(e) => setSensoryMin(Number(e.target.value))} style={{
              background: "#111", border: "1px solid #222", color: "#888", padding: "8px 12px",
              borderRadius: 4, fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", outline: "none"
            }}>
              <option value={0}>Sensory: All</option>
              <option value={3}>Good+</option>
              <option value={4}>Great+</option>
              <option value={5}>Ideal Only</option>
            </select>

            <button onClick={() => setFreeOnly(!freeOnly)} style={{
              padding: "8px 16px", borderRadius: 4, fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase",
              background: freeOnly ? "#f0ede8" : "#111", color: freeOnly ? "#0a0a0a" : "#555",
              border: "1px solid #1c1c1c", transition: "all 0.15s"
            }}>Free Only</button>
          </div>
        </div>
      </div>

      {/* LAYOUT */}
      <div style={{ display: "flex" }}>

        {/* LIST */}
        <div style={{ flex: 1, padding: "24px 32px", overflowY: "auto", maxHeight: "calc(100vh - 300px)" }}>
          {results.length === 0 && (
            <div style={{ textAlign: "center", padding: "60px 0", color: "#444" }}>
              <div style={{ fontSize: 32, marginBottom: 12 }}>🔍</div>
              <div style={{ fontSize: 16, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>No tracks found</div>
              <div style={{ fontSize: 12, color: "#444", marginTop: 6 }}>Try a different city or clear filters</div>
            </div>
          )}
          <div style={{ display: "grid", gridTemplateColumns: pick ? "1fr" : "repeat(auto-fill, minmax(280px, 1fr))", gap: 12, maxWidth: pick ? 560 : 1100, margin: "0 auto" }}>
            {results.map((t) => {
              const sen = getSensory(t.sensory);
              const isSelected = selected === t.id;
              return (
                <div key={t.id} onClick={() => setSelected(isSelected ? null : t.id)} style={{
                  background: isSelected ? "#111" : "#0f0f0f",
                  border: `1px solid ${isSelected ? "#f0ede8" : "#1c1c1c"}`,
                  borderRadius: 8, padding: "20px", cursor: "pointer",
                  transition: "all 0.18s"
                }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                    <span style={{ fontSize: 9, color: "#444", background: "#151515", border: "1px solid #1c1c1c", padding: "2px 8px", borderRadius: 2, letterSpacing: "0.16em", textTransform: "uppercase" }}>{t.region}</span>
                    <span style={{ fontSize: 10, fontWeight: 700, color: sen.color, letterSpacing: "0.1em", textTransform: "uppercase" }}>{sen.label}</span>
                  </div>
                  <div style={{ fontWeight: 800, fontSize: 15, letterSpacing: "0.06em", textTransform: "uppercase", lineHeight: 1.2, marginBottom: 4 }}>{t.name}</div>
                  <div style={{ fontSize: 12, color: "#555", marginBottom: 14 }}>{t.city}, {t.state}</div>
                  <div style={{ height: 1, background: "#1c1c1c", marginBottom: 12 }} />
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: 12, color: "#f0ede8" }}>{"★".repeat(Math.floor(t.rating))} {t.rating}</span>
                    <div style={{ display: "flex", gap: 5 }}>
                      {t.free && <span style={{ fontSize: 9, color: "#666", background: "#151515", border: "1px solid #1c1c1c", padding: "2px 7px", borderRadius: 2, letterSpacing: "0.1em" }}>FREE</span>}
                      <span style={{ fontSize: 9, color: "#666", background: "#151515", border: "1px solid #1c1c1c", padding: "2px 7px", borderRadius: 2, letterSpacing: "0.1em" }}>{t.surface.toUpperCase()}</span>
                    </div>
                  </div>
                  <div style={{ marginTop: 10, fontSize: 11, color: "#555" }}>⏱ {t.hours}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* DETAIL PANEL */}
        {pick && s && (
          <div style={{
            width: 360, borderLeft: "1px solid #1c1c1c", background: "#0c0c0c",
            position: "sticky", top: 60, height: "calc(100vh - 60px)", overflowY: "auto", flexShrink: 0
          }}>
            <div style={{ padding: "24px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 16 }}>
                <div style={{ fontSize: 9, color: "#444", letterSpacing: "0.2em" }}>SELECTED TRACK</div>
                <button onClick={() => setSelected(null)} style={{ background: "transparent", color: "#555", fontSize: 20 }}>×</button>
              </div>

              <h2 style={{ fontSize: 22, fontWeight: 900, letterSpacing: "0.06em", textTransform: "uppercase", lineHeight: 1.1, marginBottom: 4 }}>{pick.name}</h2>
              <div style={{ fontSize: 12, color: "#666", marginBottom: 20 }}>{pick.city}, {pick.state}</div>

              <div style={{ height: 1, background: "#1c1c1c", marginBottom: 20 }} />

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 20 }}>
                {[
                  ["Rating", pick.rating + " ★"],
                  ["Surface", pick.surface],
                  ["Hours", pick.hours],
                  ["Lanes", pick.lanes ? pick.lanes + " lanes" : "Open"],
                  ["Admission", pick.free ? "Free" : "Fee required"],
                  ["Noise", pick.noise],
                ].map(([label, val]) => (
                  <div key={label} style={{ background: "#111", border: "1px solid #1a1a1a", borderRadius: 4, padding: "11px 13px" }}>
                    <div style={{ fontSize: 9, color: "#444", letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: 4 }}>{label}</div>
                    <div style={{ fontSize: 13, fontWeight: 700 }}>{val}</div>
                  </div>
                ))}
              </div>

              {/* Sensory bar */}
              <div style={{ background: "#111", border: "1px solid #1a1a1a", borderRadius: 4, padding: "14px", marginBottom: 16 }}>
                <div style={{ fontSize: 9, color: "#444", letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: 10 }}>🧠 SPRNT Sensory Rating</div>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                  <div style={{ flex: 1, height: 4, background: "#1c1c1c", borderRadius: 2 }}>
                    <div style={{ height: "100%", width: `${pick.sensory * 20}%`, background: s.color, borderRadius: 2 }} />
                  </div>
                  <span style={{ fontSize: 11, fontWeight: 700, color: s.color, letterSpacing: "0.1em", textTransform: "uppercase" }}>{s.label}</span>
                </div>
                <div style={{ fontSize: 11, color: "#555", lineHeight: 1.6 }}>
                  {pick.sensory === 5 && "Quiet, open space. Ideal for first sessions with autistic athletes."}
                  {pick.sensory === 4 && "Calm and predictable. Good for most SPRNT athletes."}
                  {pick.sensory === 3 && "Moderate activity. Preview visit recommended first."}
                </div>
              </div>

              {/* Tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginBottom: 20 }}>
                {pick.tags.map((tag) => (
                  <span key={tag} style={{ background: "#151515", border: "1px solid #222", borderRadius: 2, padding: "3px 9px", fontSize: 10, color: "#666", letterSpacing: "0.1em", textTransform: "uppercase" }}>{tag}</span>
                ))}
              </div>

              {/* Coach tip */}
              <div style={{ background: "#0f0f0f", border: "1px solid #1c1c1c", borderLeft: "2px solid #333", borderRadius: 4, padding: "13px", marginBottom: 20 }}>
                <div style={{ fontSize: 9, color: "#444", letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: 8 }}>SPRNT Coach Tip</div>
                <div style={{ fontSize: 12, color: "#666", lineHeight: 1.6 }}>
                  {pick.sensory >= 4
                    ? "Arrive 15 min early to walk the space with your athlete before training begins."
                    : "Do a preview visit first. Map the environment and identify a safe spot before session day."}
                </div>
              </div>

              {/* CTA */}
              <a href={`https://maps.google.com/?q=${encodeURIComponent(pick.name + " " + pick.city + " " + pick.state)}`} target="_blank" rel="noreferrer" style={{ textDecoration: "none", display: "block", marginBottom: 8 }}>
                <button style={{
                  width: "100%", padding: "13px", background: "#f0ede8", color: "#0a0a0a",
                  borderRadius: 4, fontWeight: 800, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase"
                }}>Get Directions →</button>
              </a>
              <button style={{
                width: "100%", padding: "13px", background: "transparent", color: "#555",
                border: "1px solid #1c1c1c", borderRadius: 4, fontWeight: 700, fontSize: 11,
                letterSpacing: "0.12em", textTransform: "uppercase"
              }}>★ Submit a Sensory Review</button>
            </div>
          </div>
        )}
      </div>

      {/* SUBMIT CTA */}
      <div style={{ padding: "48px 32px", textAlign: "center", borderTop: "1px solid #1c1c1c", background: "#0c0c0c" }}>
        <div style={{ fontSize: 9, color: "#444", letterSpacing: "0.2em", marginBottom: 14 }}>DON'T SEE YOUR TRACK?</div>
        <h3 style={{ fontSize: 28, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 10 }}>SUBMIT A TRACK</h3>
        <p style={{ fontSize: 13, color: "#666", maxWidth: 420, margin: "0 auto 22px", lineHeight: 1.65 }}>
          SPRNT coaches and parents can submit local public tracks to be reviewed and added to the finder.
        </p>
        <button style={{
          background: "#f0ede8", color: "#0a0a0a", padding: "13px 40px",
          borderRadius: 4, fontWeight: 800, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase"
        }}>Submit a Track</button>
      </div>

      <div style={{ padding: "18px 32px", borderTop: "1px solid #1c1c1c", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 10 }}>
        <span style={{ fontWeight: 900, fontSize: 15, letterSpacing: "0.16em" }}>SPRNT</span>
        <span style={{ fontSize: 11, color: "#333", letterSpacing: "0.1em" }}>ALL ABILITIES WELCOME · EST. 2024 · @SPRNT.US</span>
      </div>
    </div>
  );
}
