"use client";
import { useState } from "react";

const phases = [
  {
    id: 1,
    name: "FOUNDATION",
    subtitle: "Trust the Ground",
    duration: "Weeks 1–4",
    color: "#F0EDE8",
    goal: "Build body awareness, sensory tolerance, and environment comfort before any formal running begins.",
    researchNote: "Research confirms autistic athletes often show impaired proprioception and balance. Phase 1 targets vestibular and proprioceptive input first — the neurological prerequisite for running.",
    weeks: [
      {
        week: 1,
        title: "Hello, Track",
        focus: "Environment introduction & sensory mapping",
        sessions: [
          {
            day: "Day 1",
            title: "Meet the Space",
            duration: "20–30 min",
            sensoryNotes: "Arrive early — no crowds. Walk the track perimeter at athlete's own pace. No instruction, just exploration.",
            drills: [
              "Walk the full track once (no time pressure)",
              "Touch the track surface — notice texture",
              "Stand at the start line, look down the lane",
              "Find a 'safe spot' corner they can return to anytime",
            ],
            coachTip: "Do not correct posture or pace. This session is 100% about comfort and safety. Let them lead.",
            parentTip: "Bring noise-canceling headphones if needed. Familiar music is allowed.",
            milestone: "Athlete completes one lap without leaving the track area.",
          },
          {
            day: "Day 2",
            title: "Body Check-In",
            duration: "25–35 min",
            sensoryNotes: "Use visual schedule cards before starting. Predictability reduces anxiety.",
            drills: [
              "Stomping in place — 30 seconds (proprioceptive input)",
              "Bear hug self squeeze — 3 reps (calming deep pressure)",
              "Walk with heavy feet down the straight",
              "Swing arms wide while walking (bilateral coordination)",
              "Shake out hands, shoulders, legs",
            ],
            coachTip: "Use consistent language. 'Heavy feet' and 'big arms' are cues that work across sessions.",
            parentTip: "Note which activities the athlete gravitates toward — these are proprioceptive preferences to lean into.",
            milestone: "Athlete completes the body check-in routine without redirection.",
          },
          {
            day: "Day 3",
            title: "First Jog",
            duration: "25–30 min",
            sensoryNotes: "No whistles. Use a hand signal or visual card to start/stop movement.",
            drills: [
              "Walk 100m / Jog 50m x 2 intervals",
              "Rest at safe spot between each",
              "High knees — 10 steps only",
              "Finish with stomping cool-down",
            ],
            coachTip: "Celebrate every interval completed. Verbal praise should be specific: 'You jogged the whole straight!' not just 'Good job!'",
            parentTip: "Let them pick a reward for showing up — connection between effort and positive outcome is key early.",
            milestone: "Completes first jog interval without stopping.",
          },
        ],
      },
      {
        week: 2,
        title: "Rhythm & Routine",
        focus: "Repetition, predictability, bilateral movement",
        sessions: [
          {
            day: "Day 1",
            title: "Same-Same Practice",
            duration: "30 min",
            sensoryNotes: "Use the identical warm-up sequence from Week 1. Sameness = safety.",
            drills: [
              "Body check-in routine (exact same as W1D2)",
              "Walk/jog intervals: 100m walk / 100m jog x 3",
              "Arm swing focus — coach mirrors athlete",
              "Clap rhythm walk (clap every 4 steps)",
            ],
            coachTip: "Introduce a consistent start phrase — 'Ready, set, go!' said the same way every time.",
            parentTip: "Consistency between home and track matters. Use the same 'ready, set, go' at home during any movement activity.",
            milestone: "Athlete can lead the body check-in sequence themselves.",
          },
          {
            day: "Day 2",
            title: "Feet & Beat",
            duration: "30 min",
            sensoryNotes: "Optional: play rhythmic music at low volume. Drumbeats around 120–140 BPM match a healthy running cadence.",
            drills: [
              "Skip down the straight (bilateral, rhythmic)",
              "Stomp-stomp-clap walk x 2 lengths",
              "Jog to a beat: 1-2-3-4 count aloud or with music",
              "Walk/jog: 100m walk / 150m jog x 2",
            ],
            coachTip: "Rhythm is a proven anchor for motor coordination in autistic athletes. Use counting, music, or clapping consistently.",
            parentTip: "Ask them to show you their skip or stomp at home — generalizing skills matters.",
            milestone: "Athlete maintains jog for a full 150m stretch.",
          },
          {
            day: "Day 3",
            title: "Practice Makes Predictable",
            duration: "30–35 min",
            sensoryNotes: "Introduce a visual 'done' check — a simple chart they can mark when each drill is complete.",
            drills: [
              "Full routine: Check-in → Drills → Intervals → Cool-down",
              "Walk/jog: 100m / 200m x 2",
              "Practice stopping on a cone (motor control)",
              "Shake-out cool-down + deep breaths",
            ],
            coachTip: "The goal this week is to have them predict what comes next. Ask: 'What do we do after jog intervals?' — let them answer.",
            parentTip: "Show them the visual schedule for next week's sessions. Preview = reduced anxiety.",
            milestone: "Athlete can state what comes next in the session routine.",
          },
        ],
      },
      {
        week: 3,
        title: "Posture & Power",
        focus: "Running form basics — head, arms, core",
        sessions: [
          {
            day: "Day 1",
            title: "Tall Tower",
            duration: "35 min",
            sensoryNotes: "Use a mirror or video if available — visual feedback is highly effective for autistic athletes.",
            drills: [
              "Wall drill: Stand tall, slight forward lean (posture check)",
              "March in place — knees to hip height x 20",
              "Arm drive practice: 90° bend, drive forward-back x 20",
              "Jog 200m focusing only on tall posture",
            ],
            coachTip: "'Tall tower' is the cue — head up, chest forward, not hunched. One cue at a time, not multiple corrections simultaneously.",
            parentTip: "Play 'tall tower' at home during walks. Proprioceptive body awareness builds outside sessions too.",
            milestone: "Athlete demonstrates tall posture for a full 200m jog.",
          },
          {
            day: "Day 2",
            title: "Arms Lead the Way",
            duration: "35 min",
            sensoryNotes: "Avoid tactile correction (touching arms to adjust). Use verbal cue + self-mirror instead.",
            drills: [
              "Standing arm drive: elbows back, hands relaxed x 30",
              "Walk with exaggerated arm drive",
              "Jog 200m arms only focus",
              "Intervals: 150m jog / 150m walk x 3",
            ],
            coachTip: "Relaxed hands cue: 'Hold a potato chip — don't crush it.' Concrete, visual instructions land better than abstract ones.",
            parentTip: "Practice arm drive while sitting on the couch. Motor patterns build with repetition anywhere.",
            milestone: "Arm swing stays at 90° during jog without coach prompting.",
          },
          {
            day: "Day 3",
            title: "Connect It All",
            duration: "35–40 min",
            sensoryNotes: "This is a bigger session — let athlete know in advance: 'Today is slightly longer. You can do it.'",
            drills: [
              "Full body check-in",
              "Posture + arm drill review",
              "Jog 300m: tall tower + arm drive combined",
              "Rest 2 min at safe spot",
              "Repeat 300m jog",
              "Cool-down: stomp, shake, breathe",
            ],
            coachTip: "This is a milestone session. Celebrate with something meaningful to the athlete — not generic praise.",
            parentTip: "Ask them what felt different today. Reflection builds self-awareness and confidence.",
            milestone: "Completes two 300m jogs with correct form.",
          },
        ],
      },
      {
        week: 4,
        title: "First Lap",
        focus: "Complete 400m, pacing awareness, celebrate",
        sessions: [
          {
            day: "Day 1",
            title: "Half & Half",
            duration: "35 min",
            sensoryNotes: "Mark the 200m point with a cone as a visual anchor. Clear finish = less anxiety.",
            drills: [
              "Warm-up routine",
              "200m jog / 200m walk x 3",
              "Focus: relaxed jaw and shoulders",
              "Cool-down stretch",
            ],
            coachTip: "Introduce pacing language: 'Save energy for the second half.' This is new cognitive load — introduce it simply.",
            parentTip: "Hydration reminder — some autistic athletes don't register thirst cues well during exercise.",
            milestone: "Runs 200m twice without stopping.",
          },
          {
            day: "Day 2",
            title: "Three-Quarter",
            duration: "35 min",
            sensoryNotes: "Place a cone at 300m. 'Run to the orange cone' is more concrete than 'run 300 meters.'",
            drills: [
              "Warm-up routine",
              "300m jog / 100m walk x 3",
              "Breathing cue: breathe in 2 steps, out 2 steps",
              "Cool-down",
            ],
            coachTip: "If athlete is struggling at 250m, walk the final 50m — success matters more than unbroken distance right now.",
            parentTip: "Tonight: 'You ran 300 meters today. One lap is 400m. You're close.'",
            milestone: "Runs 300m without stopping.",
          },
          {
            day: "Day 3",
            title: "THE FIRST LAP 🏅",
            duration: "40 min",
            sensoryNotes: "Keep it quiet — no unexpected cheering. Celebrate in a way you know they enjoy (fist bump, sticker, high five — ask first).",
            drills: [
              "Full warm-up routine",
              "400m jog — one full lap, no stops",
              "Walk one lap to recover",
              "Optional: second 400m if athlete wants to",
              "Cool-down + milestone celebration",
            ],
            coachTip: "This is one of the biggest moments in the program. Document it. Photo with permission. Write it in their milestone log.",
            parentTip: "This is huge. Recognize the effort in a way that is meaningful to your child specifically.",
            milestone: "✅ PHASE 1 COMPLETE — First full 400m lap.",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "BUILD",
    subtitle: "Find the Stride",
    duration: "Weeks 5–8",
    color: "#F0EDE8",
    goal: "Increase distance, introduce pacing, add basic speed work, and deepen body awareness.",
    researchNote: "Research shows 10-week gross motor interventions significantly improve locomotor skills in ASD athletes. Phase 2 builds on Phase 1's foundation with progressive overload and rhythm-based speed work.",
    weeks: [
      {
        week: 5,
        title: "Double Down",
        focus: "800m total running volume, consistent form",
        sessions: [
          {
            day: "Day 1", title: "Two Laps",
            duration: "40 min",
            sensoryNotes: "Announce the plan: 'Two laps today, walk between each.' No surprises.",
            drills: ["400m jog / 1 min walk / 400m jog", "Form focus: posture check at 200m mark", "Cool-down stretch"],
            coachTip: "Coach the second lap — it's where form breaks down. One cue only.",
            parentTip: "If they hit a wall mentally, 'You've done this before. Same track, same you.'",
            milestone: "Completes 2x400m with minimal form breakdown.",
          },
          {
            day: "Day 2", title: "Easy Cruise",
            duration: "35 min",
            sensoryNotes: "Recovery day. Lower demand. Same routine, less intensity.",
            drills: ["Slow jog 600m (no pace pressure)", "Arm drill practice", "Breathing walk 200m"],
            coachTip: "Easy days matter as much as hard days. Model relaxed effort.",
            parentTip: "Notice their energy — autistic athletes may not communicate fatigue verbally.",
            milestone: "Completes 600m slow jog without stopping.",
          },
          {
            day: "Day 3", title: "Stride Practice",
            duration: "40 min",
            sensoryNotes: "New drill intro — use visual demo first, then athlete tries. No pressure to be perfect.",
            drills: ["Warm-up routine", "Strides: 80m at 80% effort x 4 (walk back recovery)", "Easy jog 400m", "Cool-down"],
            coachTip: "Strides introduce fast running safely. Cue: 'Smooth and fast, not straining.'",
            parentTip: "Strides are a major new skill. Ask them how fast running felt — build self-awareness.",
            milestone: "Completes 4 strides with smooth form.",
          },
        ],
      },
      {
        week: 6,
        title: "Speed Shapes",
        focus: "Introduce interval training, start line practice",
        sessions: [
          {
            day: "Day 1", title: "Short-Fast-Rest",
            duration: "40 min",
            sensoryNotes: "Interval structure is new. Give them the full visual schedule before starting.",
            drills: ["100m fast / 200m walk x 4", "Focus: drive arms during fast sections", "Easy 400m jog to finish"],
            coachTip: "Intervals mirror the natural energy patterns of autistic athletes well — burst, reset, repeat.",
            parentTip: "This pattern (effort, rest, effort) is a life skill too. Celebrate the rest as much as the run.",
            milestone: "Completes all 4 intervals without skipping.",
          },
          {
            day: "Day 2", title: "The Start Line",
            duration: "35 min",
            sensoryNotes: "Standing at a start line is novel and can be triggering. Visit it, stand on it, get used to it before running from it.",
            drills: ["Stand on start line — no movement, just presence", "Walk from start line 50m x 3", "Jog from start line 100m x 3", "Easy 400m cool-down"],
            coachTip: "Don't rush the start line familiarity. This pays dividends in future races and events.",
            parentTip: "Talk about what a start line means — it's a beginning, not a judgment.",
            milestone: "Athlete runs from start line without hesitation.",
          },
          {
            day: "Day 3", title: "800m Test",
            duration: "45 min",
            sensoryNotes: "Prep them: 'Today we run 800m — two laps — without stopping. You've done this. We'll count laps together.'",
            drills: ["Warm-up", "800m continuous jog", "2 min rest", "400m easy cool-down jog"],
            coachTip: "Call out each lap: 'One down, one to go!' — predictable updates reduce anxiety mid-run.",
            parentTip: "800m is a real athletic achievement. Honor it fully.",
            milestone: "✅ Completes first 800m (half mile) without stopping.",
          },
        ],
      },
      {
        week: 7,
        title: "Push & Recover",
        focus: "Effort awareness, recovery runs, pacing language",
        sessions: [
          {
            day: "Day 1", title: "Effort Scale",
            duration: "40 min",
            sensoryNotes: "Introduce 1–5 effort scale visually. 1 = walk, 5 = sprint. Let them self-report.",
            drills: ["Run at effort 2 for 400m", "Run at effort 4 for 100m x 3", "Cool-down at effort 1"],
            coachTip: "Self-awareness of effort is a key running skill. Autistic athletes often run too hard too soon — this teaches regulation.",
            parentTip: "Use the effort scale in daily life: 'What effort is brushing teeth?' — generalizes the concept.",
            milestone: "Athlete can accurately self-report effort level.",
          },
          {
            day: "Day 2", title: "Float Run",
            duration: "35 min",
            sensoryNotes: "Easy effort only. Sensory focus: notice the wind, feet landing, breath.",
            drills: ["800m easy jog — effort 2 only", "Mindful movement: count foot strikes for 100m", "Cool-down"],
            coachTip: "Body awareness during running prevents injury and builds athletic intelligence.",
            parentTip: "After the session: 'What did you notice about your body today?'",
            milestone: "Athlete describes one physical sensation from the run.",
          },
          {
            day: "Day 3", title: "Tempo Taste",
            duration: "45 min",
            sensoryNotes: "Introduce tempo: 'Comfortably hard — you can talk but it takes effort.'",
            drills: ["Warm-up", "200m at tempo effort x 4 (walk 200m between)", "Easy 400m cool-down"],
            coachTip: "Tempo pace develops aerobic fitness faster than any other intensity. Keep sessions short early.",
            parentTip: "Notice if they are processing the session differently after harder efforts — rest and nutrition matter.",
            milestone: "Completes 4x200m tempo with consistent effort.",
          },
        ],
      },
      {
        week: 8,
        title: "Phase 2 Finale",
        focus: "1200m run, confidence consolidation",
        sessions: [
          {
            day: "Day 1", title: "Form Review",
            duration: "40 min",
            sensoryNotes: "Use video review if available — watching themselves run is motivating for many athletes.",
            drills: ["Full form review: posture, arms, cadence", "Strides x 6", "Easy 400m"],
            coachTip: "Before Phase 3, identify one strength and one area to focus on for each athlete.",
            parentTip: "Ask them what they feel most confident about on the track.",
            milestone: "Athlete identifies their own strongest form element.",
          },
          {
            day: "Day 2", title: "Almost a Mile",
            duration: "45 min",
            sensoryNotes: "Preview: '1200m is three laps. We'll count together. Each lap is one win.'",
            drills: ["Warm-up", "1200m continuous jog (3 laps)", "Walk recovery", "Cool-down"],
            coachTip: "Call each lap out. Lap 3 is hardest — simple cue: 'Last one, everything you have.'",
            parentTip: "1200m is huge. Let them know before the session how proud you already are.",
            milestone: "Completes 1200m without stopping.",
          },
          {
            day: "Day 3", title: "Celebrate Phase 2",
            duration: "35 min",
            sensoryNotes: "Low-pressure session. Athlete chooses the drills. Play and autonomy matter.",
            drills: ["Athlete-chosen warm-up", "Free run: any distance, any pace they want", "Phase 2 milestone review", "Goal setting for Phase 3"],
            coachTip: "Let them own this session. Autonomy is a powerful motivator and often underused with autistic athletes.",
            parentTip: "Review their Phase 1 and 2 milestone log together. Show them how far they've come.",
            milestone: "✅ PHASE 2 COMPLETE — Athlete sets own Phase 3 goal.",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "COMPETE",
    subtitle: "Run Your Race",
    duration: "Weeks 9–12",
    color: "#F0EDE8",
    goal: "Introduce race-day readiness, event-specific training, and inclusive competition.",
    researchNote: "12-week structured interventions show significant motor and social gains. Phase 3 integrates social components and race simulation — shown to improve both physical performance and social responsiveness in ASD athletes.",
    weeks: [
      {
        week: 9,
        title: "Race Ready",
        focus: "Race simulation, start line confidence, heat awareness",
        sessions: [
          {
            day: "Day 1", title: "What is a Race?",
            duration: "40 min",
            sensoryNotes: "Use social stories or visual guides about race day. Preview everything: the crowds, the noise, the starting signal.",
            drills: ["Walk the race course / event layout", "Practice standing in a starting position", "Simulate a race start x 5 (low pressure)", "Easy 600m jog"],
            coachTip: "Race anxiety is real and valid. Normalize it: 'Everyone feels nervous. Nervous means ready.'",
            parentTip: "Create a race-day visual schedule together. Knowing what happens when reduces anxiety enormously.",
            milestone: "Athlete can walk through race-day sequence without distress.",
          },
          {
            day: "Day 2", title: "Pace Your Race",
            duration: "45 min",
            sensoryNotes: "Practice going out slower than they want to in the first 100m — impulse control is hard but trainable.",
            drills: ["400m: slow first 200m / fast second 200m x 3", "Compare splits — talk about how it felt", "Cool-down"],
            coachTip: "Negative splits (faster second half) are the mark of a smart racer. This is a learnable skill.",
            parentTip: "Patience in the first half of a race mirrors patience in many life situations. Connect it.",
            milestone: "Runs second 200m faster than first in at least 2 of 3 attempts.",
          },
          {
            day: "Day 3", title: "Time Trial",
            duration: "45 min",
            sensoryNotes: "First timed run. Some athletes are motivated by times; others find numbers stressful. Know your athlete.",
            drills: ["Warm-up", "400m time trial — full effort", "Record time, celebrate effort", "800m easy recovery jog"],
            coachTip: "The time is data, not judgment. Frame it: 'This is our starting point. Every run from here is progress.'",
            parentTip: "Do not compare their time to others — ever. This is their personal record, full stop.",
            milestone: "✅ First official 400m time recorded.",
          },
        ],
      },
      {
        week: 10,
        title: "Event Specific",
        focus: "Choose an event: sprint, distance, or field",
        sessions: [
          {
            day: "Day 1", title: "Choose Your Event",
            duration: "40 min",
            sensoryNotes: "Athlete chooses. Present options visually — cards with images of sprints, distance, and field events.",
            drills: ["Try a sprint (100m all-out)", "Try a distance jog (800m easy)", "Try a field warm-up (jumping, throwing motions)", "Debrief: what felt best?"],
            coachTip: "Autonomy in event selection = ownership of the sport. Don't steer — observe and support.",
            parentTip: "Support their choice even if it surprises you. Their instincts about their body are valid.",
            milestone: "Athlete selects their primary SPRNT event.",
          },
          {
            day: "Day 2", title: "Event Deep Dive",
            duration: "45 min",
            sensoryNotes: "Focused session on chosen event. Introduce event-specific technique clearly with visual demo.",
            drills: ["Event-specific warm-up", "Technical drills for chosen event x 3 sets", "Full event attempt x 2", "Cool-down"],
            coachTip: "Technique over speed always. Proper mechanics prevent injury and build confidence faster.",
            parentTip: "Ask them to teach you something about their event tonight.",
            milestone: "Demonstrates correct technique for chosen event.",
          },
          {
            day: "Day 3", title: "Personal Record Day",
            duration: "45 min",
            sensoryNotes: "Frame it positively before starting: 'Today we find out what you can do right now.'",
            drills: ["Full warm-up", "Chosen event personal best attempt", "Record result", "Team cool-down"],
            coachTip: "Celebrate PRs loudly (in a sensory-appropriate way). Every PR is a victory.",
            parentTip: "Record this moment. It belongs in their milestone log and your memory.",
            milestone: "✅ First personal record in chosen event recorded.",
          },
        ],
      },
      {
        week: 11,
        title: "Community Run",
        focus: "Group running, social connection, team identity",
        sessions: [
          {
            day: "Day 1", title: "Run Together",
            duration: "40 min",
            sensoryNotes: "Group environment — preview it. Assigned lane or spot reduces anxiety. No forced interaction.",
            drills: ["Group warm-up (led by coach)", "400m run together as a group — no racing", "Partner walk and talk cool-down (optional)"],
            coachTip: "Group running develops social responsiveness without direct social demand. Side-by-side is easier than face-to-face.",
            parentTip: "Running together as a family this week reinforces community.",
            milestone: "Participates in full group session without withdrawal.",
          },
          {
            day: "Day 2", title: "Relay Introduction",
            duration: "45 min",
            sensoryNotes: "Explain relay in full before starting. Visual diagram of the exchange. No surprises.",
            drills: ["Baton pass practice x 10 (stationary)", "Walking relay exchange practice", "Slow jog relay — 100m legs", "Debrief: how did teamwork feel?"],
            coachTip: "Relays build trust and cooperation naturally through shared physical experience.",
            parentTip: "Relays show that their contribution matters to others — a powerful social lesson.",
            milestone: "Successfully completes a relay exchange with a partner.",
          },
          {
            day: "Day 3", title: "SPRNT Community Day",
            duration: "50 min",
            sensoryNotes: "Controlled, predictable group event. Quiet zone available. Sensory break anytime, no questions asked.",
            drills: ["Group warm-up", "Community fun run — 1 mile together", "Relay celebration race", "Milestone share: everyone shares one win from the program"],
            coachTip: "This session builds the SPRNT community identity. Every athlete belongs here.",
            parentTip: "Stay for the full session. Your presence matters and signals safety to your athlete.",
            milestone: "✅ Participates in full community day event.",
          },
        ],
      },
      {
        week: 12,
        title: "SPRNT GRADUATION",
        focus: "Celebration, milestone review, what's next",
        sessions: [
          {
            day: "Day 1", title: "Best of the Best",
            duration: "40 min",
            sensoryNotes: "Athlete-directed session. They pick their favorite drills from the full program.",
            drills: ["Athlete chooses warm-up", "Top 3 favorite drills", "One last jog at any pace", "Quiet reflection time"],
            coachTip: "Honor what they built. This session is theirs.",
            parentTip: "Let them know how much you've watched them grow.",
            milestone: "Athlete leads a full session.",
          },
          {
            day: "Day 2", title: "Final Time Trial",
            duration: "45 min",
            sensoryNotes: "Compare to Week 9 time. Frame the comparison as proof of growth — never as judgment.",
            drills: ["Full warm-up", "400m time trial — personal best attempt", "Compare to Week 9 time", "Celebration cool-down"],
            coachTip: "The improvement from Week 9 to Week 12 tells the story of this program.",
            parentTip: "Whatever the time — the commitment, courage, and growth are the real record.",
            milestone: "Runs final 400m time trial. PR attempt.",
          },
          {
            day: "Day 3", title: "GRADUATION DAY 🏅",
            duration: "60 min",
            sensoryNotes: "Prepare athlete fully: schedule, who will be there, what will happen. No surprises.",
            drills: ["Review full milestone log from Weeks 1–12", "One final lap together as a group", "SPRNT certificate presentation", "Goal setting for Season 2"],
            coachTip: "This is a life milestone, not just an athletic one. Treat it as such.",
            parentTip: "Your athlete ran their first lap 12 weeks ago. Today they graduate. That is everything.",
            milestone: "✅ PROGRAM COMPLETE — SPRNT Athlete Graduation.",
          },
        ],
      },
    ],
  },
];

const sensoryPrinciples = [
  { icon: "👁", title: "Visual Schedules", desc: "Every session uses a visual plan. Athletes see the full session before it starts — no surprises." },
  { icon: "🔇", title: "Sound Awareness", desc: "No whistles. Hand signals and visual cards replace sudden sounds. Music is optional and athlete-controlled." },
  { icon: "🤝", title: "No Forced Touch", desc: "Zero physical correction. All form feedback is verbal, visual, or via mirror/video." },
  { icon: "🧠", title: "Predictable Language", desc: "Same cues every session. 'Tall tower,' 'heavy feet,' 'potato chip hands.' Consistent language = faster learning." },
  { icon: "🏃", title: "Proprioceptive Input First", desc: "Every session starts with stomping, pressing, squeezing — body awareness before running begins." },
  { icon: "🏖", title: "Safe Spot Always", desc: "Athletes identify a personal safe spot on the track Day 1. It's always available, no questions asked." },
  { icon: "📊", title: "Effort Self-Reporting", desc: "Athletes learn to rate their own effort 1–5. Internal body awareness is a life skill, not just athletic." },
  { icon: "🎯", title: "One Cue at a Time", desc: "Research shows multiple simultaneous corrections overwhelm. One coaching cue per interval, always." },
];

export default function SPRNTProgramApp() {
  const [activePhase, setActivePhase] = useState(0);
  const [activeWeek, setActiveWeek] = useState(0);
  const [activeSession, setActiveSession] = useState(0);
  const [view, setView] = useState("program"); // program | sensory | about

  const phase = phases[activePhase];
  const week = phase.weeks[activeWeek];
  const session = week.sessions[activeSession];

  return (
    <div style={{
      fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif",
      background: "#0A0A0A", color: "#F0EDE8",
      minHeight: "100vh", overflowX: "hidden"
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;800;900&family=Barlow:wght@300;400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .btn { transition: all 0.15s ease; cursor: pointer; border: none; }
        .btn:hover { filter: brightness(1.1); }
        .pill { transition: all 0.15s ease; cursor: pointer; border: none; }
        .pill:hover { background: #2A2A2A !important; }
        ::-webkit-scrollbar { width: 4px; } ::-webkit-scrollbar-track { background: #111; } ::-webkit-scrollbar-thumb { background: #333; }
        @keyframes fadeIn { from { opacity:0; transform:translateY(10px);} to {opacity:1;transform:translateY(0);} }
        .fade { animation: fadeIn 0.3s ease both; }
      `}</style>

      {/* NAV */}
      <nav style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "16px 40px", borderBottom: "1px solid #1C1C1C",
        position: "sticky", top: 0, background: "#0A0A0Af8",
        backdropFilter: "blur(12px)", zIndex: 100
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <svg width="32" height="38" viewBox="0 0 38 44" fill="none">
            <path d="M19 1L37 10V28C37 36 19 43 19 43C19 43 1 36 1 28V10L19 1Z" fill="#0A0A0A" stroke="#F0EDE8" strokeWidth="1.5"/>
            <text x="19" y="26" textAnchor="middle" fill="#F0EDE8" fontSize="10" fontWeight="900" fontFamily="'Barlow Condensed',sans-serif" letterSpacing="0.5">SPRNT</text>
          </svg>
          <div>
            <div style={{ fontWeight: 900, fontSize: 20, letterSpacing: "0.14em" }}>SPRNT</div>
            <div style={{ fontSize: 10, color: "#555", letterSpacing: "0.16em", textTransform: "uppercase", marginTop: -2 }}>Athlete Program</div>
          </div>
        </div>
        <div style={{ display: "flex", gap: 4 }}>
          {["program","sensory","about"].map(v => (
            <button key={v} className="btn" onClick={() => setView(v)} style={{
              padding: "8px 20px", borderRadius: 4, fontSize: 12, fontWeight: 700,
              letterSpacing: "0.12em", textTransform: "uppercase",
              fontFamily: "'Barlow Condensed', sans-serif",
              background: view === v ? "#F0EDE8" : "transparent",
              color: view === v ? "#0A0A0A" : "#555",
            }}>
              {v === "program" ? "Program" : v === "sensory" ? "Sensory Guide" : "About"}
            </button>
          ))}
        </div>
        <div style={{ fontSize: 11, color: "#444", letterSpacing: "0.14em" }}>EST. 2024 · ALL ABILITIES</div>
      </nav>

      {/* PROGRAM VIEW */}
      {view === "program" && (
        <div style={{ display: "flex", minHeight: "calc(100vh - 60px)" }}>

          {/* LEFT SIDEBAR */}
          <div style={{
            width: 260, borderRight: "1px solid #1C1C1C", padding: "28px 0",
            position: "sticky", top: 60, height: "calc(100vh - 60px)", overflowY: "auto",
            flexShrink: 0
          }}>
            <div style={{ padding: "0 20px", marginBottom: 24 }}>
              <div style={{ fontSize: 10, color: "#444", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 12 }}>Program Phases</div>
              {phases.map((p, pi) => (
                <button key={pi} className="btn" onClick={() => { setActivePhase(pi); setActiveWeek(0); setActiveSession(0); }} style={{
                  width: "100%", textAlign: "left", padding: "14px 16px",
                  marginBottom: 4, borderRadius: 6, display: "block",
                  background: activePhase === pi ? "#1C1C1C" : "transparent",
                  borderLeft: activePhase === pi ? "2px solid #F0EDE8" : "2px solid transparent",
                }}>
                  <div style={{ fontSize: 11, color: "#555", letterSpacing: "0.14em", marginBottom: 2 }}>PHASE {p.id} · {p.duration}</div>
                  <div style={{ fontSize: 16, fontWeight: 800, letterSpacing: "0.08em", color: activePhase === pi ? "#F0EDE8" : "#666" }}>{p.name}</div>
                  <div style={{ fontSize: 11, color: "#444", marginTop: 1 }}>{p.subtitle}</div>
                </button>
              ))}
            </div>

            <div style={{ height: 1, background: "#1C1C1C", margin: "0 20px 20px" }} />

            <div style={{ padding: "0 20px" }}>
              <div style={{ fontSize: 10, color: "#444", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 12 }}>Weeks</div>
              {phase.weeks.map((w, wi) => (
                <button key={wi} className="btn" onClick={() => { setActiveWeek(wi); setActiveSession(0); }} style={{
                  width: "100%", textAlign: "left", padding: "11px 16px",
                  marginBottom: 3, borderRadius: 6, display: "block",
                  background: activeWeek === wi ? "#1C1C1C" : "transparent",
                }}>
                  <div style={{ fontSize: 10, color: "#444", letterSpacing: "0.14em" }}>WEEK {w.week}</div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: activeWeek === wi ? "#F0EDE8" : "#666" }}>{w.title}</div>
                </button>
              ))}
            </div>
          </div>

          {/* MAIN CONTENT */}
          <div style={{ flex: 1, overflowY: "auto", padding: "40px 48px" }}>

            {/* Phase header */}
            <div className="fade" style={{ marginBottom: 36 }}>
              <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 8, flexWrap: "wrap" }}>
                <span style={{
                  background: "#1C1C1C", border: "1px solid #2A2A2A",
                  padding: "4px 14px", borderRadius: 2, fontSize: 10,
                  letterSpacing: "0.2em", color: "#666", textTransform: "uppercase"
                }}>Phase {phase.id}</span>
                <span style={{ fontSize: 10, color: "#444", letterSpacing: "0.14em", textTransform: "uppercase" }}>{phase.duration}</span>
              </div>

              <h1 style={{
                fontSize: "clamp(40px, 6vw, 72px)", fontWeight: 900,
                lineHeight: 0.9, textTransform: "uppercase", letterSpacing: "0.02em",
                marginBottom: 8
              }}>
                {phase.name}<br />
                <span style={{ WebkitTextStroke: "1.5px #F0EDE8", color: "transparent", fontSize: "70%" }}>
                  {phase.subtitle}
                </span>
              </h1>

              <div style={{ height: 1, background: "#1C1C1C", margin: "20px 0" }} />

              <p style={{ color: "#888", fontSize: 15, lineHeight: 1.65, fontFamily: "'Barlow', sans-serif", fontWeight: 300, maxWidth: 640, marginBottom: 16 }}>
                {phase.goal}
              </p>

              <div style={{
                background: "#0F0F0F", border: "1px solid #1C1C1C", borderLeft: "2px solid #F0EDE830",
                borderRadius: 6, padding: "14px 18px", maxWidth: 640
              }}>
                <div style={{ fontSize: 9, color: "#444", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 6 }}>Research Foundation</div>
                <p style={{ fontSize: 13, color: "#666", lineHeight: 1.6, fontFamily: "'Barlow', sans-serif", fontWeight: 300 }}>{phase.researchNote}</p>
              </div>
            </div>

            {/* Week header */}
            <div style={{ marginBottom: 24 }}>
              <div style={{ fontSize: 10, color: "#444", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 4 }}>Week {week.week}</div>
              <h2 style={{ fontSize: 32, fontWeight: 900, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 4 }}>{week.title}</h2>
              <p style={{ fontSize: 13, color: "#666", fontFamily: "'Barlow', sans-serif", fontStyle: "italic" }}>{week.focus}</p>
            </div>

            {/* Session tabs */}
            <div style={{ display: "flex", gap: 6, marginBottom: 28, flexWrap: "wrap" }}>
              {week.sessions.map((s, si) => (
                <button key={si} className="pill" onClick={() => setActiveSession(si)} style={{
                  padding: "10px 20px", borderRadius: 4, fontSize: 12,
                  fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase",
                  fontFamily: "'Barlow Condensed', sans-serif",
                  background: activeSession === si ? "#F0EDE8" : "#111",
                  color: activeSession === si ? "#0A0A0A" : "#555",
                  border: activeSession === si ? "none" : "1px solid #1C1C1C"
                }}>
                  {s.day}
                </button>
              ))}
            </div>

            {/* Session card */}
            <div className="fade" key={`${activePhase}-${activeWeek}-${activeSession}`}>
              <div style={{
                background: "#0F0F0F", border: "1px solid #1C1C1C",
                borderRadius: 8, overflow: "hidden", marginBottom: 24
              }}>
                {/* Session header */}
                <div style={{
                  padding: "24px 28px", borderBottom: "1px solid #1C1C1C",
                  display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 12
                }}>
                  <div>
                    <div style={{ fontSize: 10, color: "#555", letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 6 }}>{session.day}</div>
                    <h3 style={{ fontSize: 28, fontWeight: 900, letterSpacing: "0.06em", textTransform: "uppercase" }}>{session.title}</h3>
                  </div>
                  <div style={{
                    background: "#1A1A1A", border: "1px solid #222", borderRadius: 4,
                    padding: "8px 16px", textAlign: "center"
                  }}>
                    <div style={{ fontSize: 9, color: "#444", letterSpacing: "0.18em", textTransform: "uppercase" }}>Duration</div>
                    <div style={{ fontSize: 15, fontWeight: 800, color: "#F0EDE8", marginTop: 2 }}>{session.duration}</div>
                  </div>
                </div>

                {/* Sensory notes */}
                <div style={{ padding: "18px 28px", borderBottom: "1px solid #1C1C1C", background: "#0C0C0C" }}>
                  <div style={{ fontSize: 9, color: "#555", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 8 }}>🧠 Sensory Setup Notes</div>
                  <p style={{ fontSize: 14, color: "#888", lineHeight: 1.6, fontFamily: "'Barlow', sans-serif", fontWeight: 300 }}>{session.sensoryNotes}</p>
                </div>

                {/* Drills */}
                <div style={{ padding: "24px 28px", borderBottom: "1px solid #1C1C1C" }}>
                  <div style={{ fontSize: 10, color: "#555", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 16 }}>Session Plan</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {session.drills.map((d, di) => (
                      <div key={di} style={{
                        display: "flex", gap: 14, alignItems: "flex-start",
                        padding: "12px 16px", background: "#111",
                        borderRadius: 4, border: "1px solid #1A1A1A"
                      }}>
                        <span style={{
                          width: 24, height: 24, borderRadius: 2,
                          background: "#1C1C1C", display: "flex", alignItems: "center",
                          justifyContent: "center", fontSize: 11, fontWeight: 800,
                          color: "#555", flexShrink: 0
                        }}>{di + 1}</span>
                        <span style={{ fontSize: 14, color: "#CCC", fontFamily: "'Barlow', sans-serif", lineHeight: 1.5 }}>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Coach + Parent tips */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0 }}>
                  <div style={{ padding: "20px 24px", borderRight: "1px solid #1C1C1C" }}>
                    <div style={{ fontSize: 9, color: "#555", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 10 }}>🎙 Coach Tip</div>
                    <p style={{ fontSize: 13, color: "#888", lineHeight: 1.6, fontFamily: "'Barlow', sans-serif", fontWeight: 300 }}>{session.coachTip}</p>
                  </div>
                  <div style={{ padding: "20px 24px" }}>
                    <div style={{ fontSize: 9, color: "#555", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 10 }}>👨‍👩‍👧 Parent Tip</div>
                    <p style={{ fontSize: 13, color: "#888", lineHeight: 1.6, fontFamily: "'Barlow', sans-serif", fontWeight: 300 }}>{session.parentTip}</p>
                  </div>
                </div>

                {/* Milestone */}
                <div style={{
                  padding: "16px 28px", background: session.milestone.includes("✅") ? "#0F1A0F" : "#0C0C0C",
                  borderTop: "1px solid #1C1C1C",
                  display: "flex", alignItems: "center", gap: 12
                }}>
                  <span style={{ fontSize: 18 }}>{session.milestone.includes("✅") ? "🏅" : "🎯"}</span>
                  <div>
                    <div style={{ fontSize: 9, color: "#444", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 3 }}>Session Milestone</div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: session.milestone.includes("✅") ? "#7FBF7F" : "#F0EDE8", fontFamily: "'Barlow', sans-serif" }}>
                      {session.milestone}
                    </div>
                  </div>
                </div>
              </div>

              {/* Nav between sessions */}
              <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
                <button className="btn" onClick={() => setActiveSession(Math.max(0, activeSession - 1))} disabled={activeSession === 0} style={{
                  padding: "12px 28px", borderRadius: 4, fontSize: 12, fontWeight: 700,
                  letterSpacing: "0.12em", textTransform: "uppercase",
                  fontFamily: "'Barlow Condensed', sans-serif",
                  background: activeSession === 0 ? "#0F0F0F" : "#1C1C1C",
                  color: activeSession === 0 ? "#333" : "#F0EDE8",
                  border: "1px solid #222"
                }}>← Previous</button>
                <button className="btn" onClick={() => setActiveSession(Math.min(week.sessions.length - 1, activeSession + 1))} disabled={activeSession === week.sessions.length - 1} style={{
                  padding: "12px 28px", borderRadius: 4, fontSize: 12, fontWeight: 700,
                  letterSpacing: "0.12em", textTransform: "uppercase",
                  fontFamily: "'Barlow Condensed', sans-serif",
                  background: activeSession === week.sessions.length - 1 ? "#0F0F0F" : "#F0EDE8",
                  color: activeSession === week.sessions.length - 1 ? "#333" : "#0A0A0A",
                  border: "none"
                }}>Next →</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SENSORY GUIDE VIEW */}
      {view === "sensory" && (
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "60px 48px" }} className="fade">
          <div style={{ marginBottom: 48 }}>
            <div style={{ fontSize: 10, color: "#444", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 12 }}>SPRNT Framework</div>
            <h1 style={{ fontSize: "clamp(42px, 7vw, 80px)", fontWeight: 900, textTransform: "uppercase", lineHeight: 0.9, marginBottom: 20 }}>
              SENSORY-FIRST<br /><span style={{ WebkitTextStroke: "1.5px #F0EDE8", color: "transparent" }}>PRINCIPLES</span>
            </h1>
            <div style={{ height: 2, background: "#1C1C1C", maxWidth: 400, marginBottom: 20 }} />
            <p style={{ color: "#888", fontSize: 16, lineHeight: 1.7, fontFamily: "'Barlow', sans-serif", fontWeight: 300, maxWidth: 600 }}>
              Every session in the SPRNT program is built on these 8 non-negotiable principles drawn from autism research and inclusive sports science.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 16 }}>
            {sensoryPrinciples.map((p, i) => (
              <div key={i} style={{
                background: "#0F0F0F", border: "1px solid #1C1C1C",
                borderRadius: 8, padding: "28px 24px", display: "flex", gap: 18, alignItems: "flex-start"
              }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 6, background: "#1A1A1A",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 22, flexShrink: 0
                }}>{p.icon}</div>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 800, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 8 }}>{p.title}</div>
                  <div style={{ height: 1, background: "#1C1C1C", marginBottom: 10 }} />
                  <p style={{ fontSize: 13, color: "#777", lineHeight: 1.65, fontFamily: "'Barlow', sans-serif", fontWeight: 300 }}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 48, background: "#0F0F0F", border: "1px solid #1C1C1C", borderRadius: 8, padding: "32px 28px" }}>
            <div style={{ fontSize: 10, color: "#444", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 16 }}>Age Adaptations</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 20 }}>
              {[
                { age: "Youth (5–12)", notes: ["Shorter sessions (20–30 min)", "More visual cue cards", "Parent present on track", "Sticker milestone rewards", "Concrete language always"] },
                { age: "Teen (13–17)", notes: ["Sessions up to 45 min", "Peer group optional", "Self-reporting effort scale", "Autonomy in drill choice", "Personal record tracking"] },
                { age: "Adult (18+)", notes: ["Full 45–60 min sessions", "Independent warm-up", "Event specialization", "Community integration", "Coach as peer-partner"] },
              ].map((g, gi) => (
                <div key={gi}>
                  <div style={{ fontSize: 14, fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12, color: "#F0EDE8" }}>{g.age}</div>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
                    {g.notes.map((n, ni) => (
                      <li key={ni} style={{ fontSize: 13, color: "#666", fontFamily: "'Barlow', sans-serif", display: "flex", gap: 8 }}>
                        <span style={{ color: "#333" }}>—</span>{n}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ABOUT VIEW */}
      {view === "about" && (
        <div style={{ maxWidth: 800, margin: "0 auto", padding: "60px 48px" }} className="fade">
          <div style={{ marginBottom: 40 }}>
            <h1 style={{ fontSize: "clamp(42px, 7vw, 72px)", fontWeight: 900, textTransform: "uppercase", lineHeight: 0.9, marginBottom: 20 }}>
              THE SPRNT<br /><span style={{ WebkitTextStroke: "1.5px #F0EDE8", color: "transparent" }}>PROGRAM</span>
            </h1>
            <div style={{ height: 2, background: "#1C1C1C", maxWidth: 300, marginBottom: 24 }} />
            <p style={{ color: "#888", fontSize: 16, lineHeight: 1.75, fontFamily: "'Barlow', sans-serif", fontWeight: 300 }}>
              The SPRNT Athlete Program is a 12-week, research-backed track and field curriculum designed for autistic athletes and all-abilities participants from ages 5 to adult. Every drill, cue, and milestone is grounded in peer-reviewed sensory integration and motor development science.
            </p>
          </div>

          {[
            { label: "Program Length", value: "12 Weeks · 3 Sessions/Week" },
            { label: "Total Sessions", value: "36 Guided Sessions" },
            { label: "Age Range", value: "5 Years → Adult" },
            { label: "Phases", value: "Foundation · Build · Compete" },
            { label: "Sensory Framework", value: "Vestibular · Proprioceptive · Tactile" },
            { label: "Research Base", value: "Sensory Integration Sports Training (Nature, 2025)" },
          ].map((item, i) => (
            <div key={i} style={{
              display: "flex", justifyContent: "space-between", alignItems: "center",
              padding: "16px 0", borderBottom: "1px solid #1A1A1A"
            }}>
              <span style={{ fontSize: 12, color: "#555", letterSpacing: "0.14em", textTransform: "uppercase" }}>{item.label}</span>
              <span style={{ fontSize: 14, fontWeight: 700, color: "#F0EDE8", fontFamily: "'Barlow', sans-serif" }}>{item.value}</span>
            </div>
          ))}

          <div style={{ marginTop: 40, padding: "28px", background: "#0F0F0F", border: "1px solid #1C1C1C", borderRadius: 8 }}>
            <div style={{ fontSize: 10, color: "#444", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 12 }}>Mission</div>
            <p style={{ fontSize: 15, color: "#888", lineHeight: 1.75, fontFamily: "'Barlow', sans-serif", fontWeight: 300 }}>
              The track is for everyone. SPRNT exists to ensure that autistic athletes and athletes of all abilities have a structured, safe, and celebratory pathway into running, competition, and community. Every athlete who completes this program has proven one thing: they belong here.
            </p>
            <div style={{ marginTop: 20, fontSize: 16, fontWeight: 900, letterSpacing: "0.12em", textTransform: "uppercase", color: "#F0EDE8" }}>
              RUN. TRAIN. COMMUNITY.
            </div>
          </div>
        </div>
      )}

      <footer style={{
        borderTop: "1px solid #1C1C1C", padding: "20px 40px",
        display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12
      }}>
        <span style={{ fontWeight: 900, fontSize: 16, letterSpacing: "0.16em", fontFamily: "'Barlow Condensed', sans-serif" }}>SPRNT</span>
        <span style={{ fontSize: 11, color: "#333", letterSpacing: "0.1em", fontFamily: "'Barlow', sans-serif" }}>ALL ABILITIES WELCOME · EST. 2024 · @SPRNT.US</span>
      </footer>
    </div>
  );
}
