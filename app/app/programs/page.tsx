"use client";
import { useState } from "react";

const ageGroups = [
  { id: "youth", label: "Youth", range: "Ages 5–12", icon: "🧒" },
  { id: "teen", label: "Teen", range: "Ages 13–17", icon: "🏃" },
  { id: "adult", label: "Adult", range: "Ages 18–49", icon: "💪" },
  { id: "masters", label: "Masters", range: "Ages 50+", icon: "🏅" },
  { id: "special", label: "Special Abilities", range: "All Ages", icon: "⭐" },
];

const levels = [
  { id: "beginner", label: "Beginner", color: "#60a5fa", desc: "First time on the track" },
  { id: "intermediate", label: "Intermediate", color: "#34d399", desc: "Consistent training base" },
  { id: "advanced", label: "Advanced", color: "#f59e0b", desc: "Competitive development" },
  { id: "elite", label: "Elite", color: "#f43f5e", desc: "High performance" },
];

const programs = {
  youth: {
    beginner: {
      title: "Youth Beginner",
      duration: "8 Weeks · 3x/Week",
      goal: "Build love of running, basic movement, and track confidence.",
      weeks: [
        { week: 1, theme: "Welcome to the Track", sessions: [
          { day: "Day 1", title: "First Steps", drills: ["Walk 1 lap exploring the track", "Stomping warm-up (30 sec)", "Skip down the straight x2", "Walk/jog: 50m jog / 100m walk x3"], focus: "Environment comfort", tip: "Let them explore freely. No corrections today." },
          { day: "Day 2", title: "Big Arms, Big Feet", drills: ["Arm swing practice x20", "High knees — 10 steps", "Walk/jog: 100m jog / 100m walk x3", "Shake-out cool-down"], focus: "Body awareness", tip: "Use 'big arms, heavy feet' as your only cue." },
          { day: "Day 3", title: "First Full Lap", drills: ["Full warm-up routine", "Walk/jog: 200m continuous", "Rest 2 min", "200m again — celebrate!"], focus: "Milestone: first 200m", tip: "Cheer every finish. The feeling matters most." },
        ]},
        { week: 2, theme: "Finding the Rhythm", sessions: [
          { day: "Day 1", title: "Rhythm Run", drills: ["Skip x2 lengths", "Clap-walk (clap every 4 steps)", "100m jog x4 with walk rest", "Cool-down stretch"], focus: "Cadence & rhythm", tip: "Count aloud with them: 1-2-3-4." },
          { day: "Day 2", title: "Posture Check", drills: ["Tall tower posture drill", "Wall lean x10", "200m jog — head up, chest forward", "Easy walk cool-down"], focus: "Running posture", tip: "One cue only: 'tall tower.'" },
          { day: "Day 3", title: "Fun Intervals", drills: ["100m fast / 100m walk x4", "Relay tag with cones", "Free run — any pace, 200m"], focus: "Speed play", tip: "Keep it playful. Smiling = fast." },
        ]},
        { week: 3, theme: "Getting Stronger", sessions: [
          { day: "Day 1", title: "Stride Practice", drills: ["Strides: 60m at 80% x4 (walk back)", "Easy 400m jog", "Arm drive x20 standing"], focus: "Stride mechanics", tip: "Smooth and fast, not straining." },
          { day: "Day 2", title: "Endurance Base", drills: ["400m continuous jog", "Rest 3 min", "400m again"], focus: "First full lap", tip: "Slow is fine. Finishing is everything." },
          { day: "Day 3", title: "Play & Move", drills: ["Athlete-chosen warm-up", "Obstacle cone run", "200m time trial — first ever"], focus: "Fun + milestone", tip: "Record the time. Show them the number." },
        ]},
        { week: 4, theme: "Build the Base", sessions: [
          { day: "Day 1", title: "Double Lap", drills: ["2x400m with 2 min rest", "Skip x2", "High knees x20"], focus: "800m total distance", tip: "Second lap will be harder — remind them that's normal." },
          { day: "Day 2", title: "Speed Shapes", drills: ["100m fast / 200m walk x4", "Posture check jog 200m"], focus: "Interval intro", tip: "First half slower, second half faster." },
          { day: "Day 3", title: "Week 4 Celebration", drills: ["Free warm-up", "400m time trial", "Group cool-down"], focus: "Milestone check-in", tip: "Compare to Week 3 time. Celebrate improvement." },
        ]},
        { week: 5, theme: "Pace Awareness", sessions: [
          { day: "Day 1", title: "Easy vs. Fast", drills: ["400m easy (effort 2)", "400m fast (effort 4)", "Talk test: can you speak in sentences?"], focus: "Effort scale intro", tip: "Self-reporting effort is a life skill." },
          { day: "Day 2", title: "Rhythm Intervals", drills: ["200m x4 at medium effort", "Walk 200m between", "Cool-down skip"], focus: "Consistent pacing", tip: "Each 200m should feel the same." },
          { day: "Day 3", title: "First 800m", drills: ["800m continuous — 2 full laps", "Celebrate with a fist bump"], focus: "Half-mile milestone", tip: "Call out each lap. 'One down, one to go!'" },
        ]},
        { week: 6, theme: "Form & Speed", sessions: [
          { day: "Day 1", title: "Form Drill Day", drills: ["High knees x30", "Butt kicks x30", "Arm drive x30", "Strides x6"], focus: "Technique", tip: "One drill at a time. Demonstrate first." },
          { day: "Day 2", title: "Speed Bursts", drills: ["50m sprint x6 (walk back)", "Easy 400m jog"], focus: "Sprinting mechanics", tip: "Drive the arms — legs follow." },
          { day: "Day 3", title: "800m Time Trial", drills: ["Full warm-up", "800m — personal best attempt", "Record time"], focus: "Personal record", tip: "This is data, not judgment." },
        ]},
        { week: 7, theme: "Race Prep", sessions: [
          { day: "Day 1", title: "Start Line Practice", drills: ["Stand on start line x5 (get comfortable)", "Jog from start 100m x4", "Easy 400m"], focus: "Race simulation", tip: "The start line is just the beginning." },
          { day: "Day 2", title: "Pacing Run", drills: ["400m: slow first 200, fast second 200", "Compare halves", "800m easy"], focus: "Negative splits", tip: "Smart runners save energy early." },
          { day: "Day 3", title: "Mini Meet", drills: ["Warm-up routine", "400m race simulation", "Cheer teammates"], focus: "Race experience", tip: "Effort and attitude matter more than time." },
        ]},
        { week: 8, theme: "Graduation", sessions: [
          { day: "Day 1", title: "Best Drills", drills: ["Athlete picks top 3 drills", "Easy 800m jog"], focus: "Athlete-led", tip: "Let them own this session." },
          { day: "Day 2", title: "Final Time Trial", drills: ["400m — personal best", "Compare to Week 3", "Cool-down together"], focus: "Progress proof", tip: "Show them the improvement in numbers." },
          { day: "Day 3", title: "Graduation Day 🏅", drills: ["Full session recap", "800m celebration run", "Certificate + milestone review"], focus: "Celebrate 8 weeks", tip: "This is a real achievement. Treat it that way." },
        ]},
      ],
    },
    intermediate: {
      title: "Youth Intermediate",
      duration: "10 Weeks · 3x/Week",
      goal: "Develop speed, endurance, and event-specific skills for youth competition.",
      weeks: [
        { week: 1, theme: "Assessment Week", sessions: [
          { day: "Day 1", title: "Baseline Run", drills: ["400m time trial", "Record time", "Discuss goal pace"], focus: "Starting point", tip: "Establish baseline before building." },
          { day: "Day 2", title: "Form Audit", drills: ["Video form check", "High knees, butt kicks, arm drive", "800m easy jog"], focus: "Technique review", tip: "Identify top 2 form priorities for the program." },
          { day: "Day 3", title: "Speed Test", drills: ["60m sprint x4", "Note reaction and drive phase", "Strides x6"], focus: "Sprint mechanics", tip: "Watch the first 20m — that's where speed is won." },
        ]},
        { week: 2, theme: "Speed Foundation", sessions: [
          { day: "Day 1", title: "Short Speed", drills: ["30m accelerations x6", "60m sprints x4", "Easy 400m"], focus: "Acceleration", tip: "Explode from a standing start." },
          { day: "Day 2", title: "Tempo Run", drills: ["800m at tempo effort", "Rest 3 min", "800m again"], focus: "Aerobic speed", tip: "Comfortably hard — tough but not all-out." },
          { day: "Day 3", title: "Relay Skills", drills: ["Baton pass x10", "Walking relay x3", "Jog relay 100m legs x4"], focus: "Teamwork & exchange", tip: "Smooth pass beats fast running." },
        ]},
        { week: 3, theme: "Endurance Build", sessions: [
          { day: "Day 1", title: "Mile Attempt", drills: ["1600m continuous run", "Record time", "Cool-down walk"], focus: "First mile", tip: "Even pace — go out slower than you think." },
          { day: "Day 2", title: "Interval Power", drills: ["200m x6 at 85% effort", "90 sec rest between", "Easy 400m cool-down"], focus: "Lactate tolerance", tip: "Each rep same effort — not faster each time." },
          { day: "Day 3", title: "Hills (or Stairs)", drills: ["Hill sprint 30m x8", "Walk-down recovery", "Easy 400m"], focus: "Power + strength", tip: "Drive the knees up the hill — it builds explosive power." },
        ]},
        { week: 4, theme: "Event Selection", sessions: [
          { day: "Day 1", title: "Sprint Day", drills: ["100m x4 at full effort", "200m x2", "Reaction starts x6"], focus: "Sprint events", tip: "Watch for acceleration phase length — key to 100m success." },
          { day: "Day 2", title: "Distance Day", drills: ["1200m at steady effort", "400m cool-down", "Breathing focus"], focus: "Distance events", tip: "Rhythm breathing: 2 steps in, 2 out." },
          { day: "Day 3", title: "Choose Your Event", drills: ["Run both sprint and distance short versions", "Debrief: what felt natural?", "Set event goal"], focus: "Self-selection", tip: "Athlete knows best. Support the choice." },
        ]},
        { week: 5, theme: "Event-Specific", sessions: [
          { day: "Day 1", title: "Event Drill Focus", drills: ["Event-specific drills x3 sets", "2x event distance at 85%", "Cool-down stretch"], focus: "Technical skill", tip: "Technique first, speed second." },
          { day: "Day 2", title: "Strength Circuit", drills: ["Broad jumps x10", "Single-leg hops x10 each", "Wall sits 30 sec x3", "Core plank 30 sec x3"], focus: "Running strength", tip: "Strong athletes run faster. No weights needed." },
          { day: "Day 3", title: "Time Trial", drills: ["Full warm-up", "Event distance — personal best attempt", "Record and celebrate"], focus: "Personal record", tip: "First official event time. Big deal." },
        ]},
        { week: 6, theme: "Speed Endurance", sessions: [
          { day: "Day 1", title: "300m Repeats", drills: ["300m x4 at 90% effort", "3 min rest between", "Easy 400m cool-down"], focus: "Speed endurance", tip: "Hold form on the last 50m — that's where races are won." },
          { day: "Day 2", title: "Easy Long Run", drills: ["1600m easy — effort 2", "Mindful running: notice breath, stride, cadence"], focus: "Aerobic base", tip: "Recovery runs make hard runs possible." },
          { day: "Day 3", title: "Relay Simulation", drills: ["Full 4x100 relay simulation", "Baton exchange focus", "200m cool-down each"], focus: "Race simulation", tip: "The exchange zone is 20m — practice staying in it." },
        ]},
        { week: 7, theme: "Race Preparation", sessions: [
          { day: "Day 1", title: "Race Pace Runs", drills: ["3x event distance at goal race pace", "2 min rest", "Form focus throughout"], focus: "Goal pace", tip: "Race pace must feel controlled, not all-out." },
          { day: "Day 2", title: "Mental Prep", drills: ["Walk the race course", "Visualization: run the race in your head", "Easy jog 800m"], focus: "Race readiness", tip: "Mental rehearsal is real training." },
          { day: "Day 3", title: "Shakeout Run", drills: ["Easy 800m jog", "Strides x4", "Light stretching"], focus: "Pre-race prep", tip: "Nothing new today. Just feel good." },
        ]},
        { week: 8, theme: "Peak Week", sessions: [
          { day: "Day 1", title: "Hard Session", drills: ["400m x4 at 95% effort", "Full recovery between", "Cool-down 400m easy"], focus: "Peak effort", tip: "This is the hardest session of the program." },
          { day: "Day 2", title: "Form & Strides", drills: ["Drill circuit x2", "Strides x6", "Easy 400m"], focus: "Sharpening", tip: "Fresh legs, sharp mind." },
          { day: "Day 3", title: "Race Simulation", drills: ["Full race-day warmup", "Event simulation — race effort", "Cool-down + debrief"], focus: "Full dress rehearsal", tip: "Treat this like the real thing." },
        ]},
        { week: 9, theme: "Taper", sessions: [
          { day: "Day 1", title: "Reduce Volume", drills: ["400m x2 at race pace", "Strides x4", "Easy 400m"], focus: "Stay sharp, rest more", tip: "Less is more this week." },
          { day: "Day 2", title: "Light & Fast", drills: ["Drills x1 set", "Strides x4", "Easy jog 800m"], focus: "Feel fast", tip: "Legs should feel bouncy — that's the taper working." },
          { day: "Day 3", title: "Final Prep", drills: ["Easy 800m", "2 strides", "Stretch + sleep plan"], focus: "Race ready", tip: "Hydrate, sleep, visualize." },
        ]},
        { week: 10, theme: "Competition + Graduation", sessions: [
          { day: "Day 1", title: "Race Day! 🏅", drills: ["Full warm-up", "Compete in chosen event", "Cool-down + celebrate"], focus: "Compete!", tip: "Trust the training." },
          { day: "Day 2", title: "Recovery Run", drills: ["Easy 800m", "Reflect on season", "What worked? What next?"], focus: "Recovery", tip: "Racing takes a toll. Rest is training." },
          { day: "Day 3", title: "Graduation 🏅", drills: ["Season stats review", "Certificate presentation", "Goal setting for next level"], focus: "Celebrate + plan", tip: "Where do they go from here? Set the next goal together." },
        ]},
      ],
    },
    advanced: {
      title: "Youth Advanced",
      duration: "12 Weeks · 4x/Week",
      goal: "Build competitive youth athletes with periodized speed, strength, and race tactics.",
      weeks: [
        { week: 1, theme: "Periodization Intro + Testing", sessions: [{ day: "Day 1", title: "Sprint Test", drills: ["60m FAT x3", "200m time trial", "Video analysis"], focus: "Baseline", tip: "Document everything." }, { day: "Day 2", title: "Endurance Test", drills: ["800m time trial", "1600m easy jog", "VO2 effort test"], focus: "Aerobic capacity", tip: "Establish training zones from this data." }, { day: "Day 3", title: "Strength Baseline", drills: ["Broad jump x3 (record distance)", "Single-leg squat x5 each", "Plank max hold"], focus: "Power & stability", tip: "Strength gaps predict injury risk." }, { day: "Day 4", title: "Easy Recovery", drills: ["Easy 1600m jog", "Full stretch routine"], focus: "Active recovery", tip: "Recovery is training." }]},
        { week: 2, theme: "Speed Development", sessions: [{ day: "Day 1", title: "Acceleration Phase", drills: ["Flying 30m x6", "Block starts or standing starts x8", "Easy 400m"], focus: "First 30m mechanics", tip: "Low angle, drive, patience." }, { day: "Day 2", title: "Speed Endurance", drills: ["300m x4 at 90%", "5 min rest", "400m cool-down"], focus: "Speed endurance", tip: "Form must hold in the last 50m." }, { day: "Day 3", title: "Plyometrics", drills: ["Box jumps x3x6", "Bounding x4 lengths", "Single-leg hops 20m x4"], focus: "Explosive power", tip: "Ground contact time = speed." }, { day: "Day 4", title: "Tempo", drills: ["1200m tempo x2", "90 sec rest", "Easy 400m"], focus: "Aerobic speed", tip: "Consistent splits both reps." }]},
        { week: 3, theme: "Event Mastery", sessions: [{ day: "Day 1", title: "Sprint Mechanics Deep Dive", drills: ["A-skip, B-skip x4", "Wicket runs x4", "100m race-pace x4"], focus: "Sprint technique", tip: "Wickets teach optimal stride length." }, { day: "Day 2", title: "Race Tactics", drills: ["400m — negative split practice", "200m — controlled first 100m", "Debrief splits"], focus: "Race intelligence", tip: "Smart pacing wins youth races." }, { day: "Day 3", title: "Field Events Cross-Train", drills: ["Long jump approach x6", "Triple step x4", "Shot put technique (form only)"], focus: "Athletic versatility", tip: "Multi-event athletes develop faster." }, { day: "Day 4", title: "Long Run", drills: ["2400m easy", "Cadence count: 170–180 steps/min target"], focus: "Aerobic base", tip: "High cadence = efficient running." }]},
      ],
    },
    elite: {
      title: "Youth Elite",
      duration: "16 Weeks · 5x/Week",
      goal: "Prepare youth athletes for regional and national competition with full periodization.",
      weeks: [
        { week: 1, theme: "General Preparation Phase", sessions: [{ day: "Day 1", title: "Physical Testing Battery", drills: ["60m FAT", "200m FAT", "800m TT", "Standing broad jump", "Core strength assessment"], focus: "Full baseline", tip: "This data drives every training decision." }, { day: "Day 2", title: "Aerobic Foundation", drills: ["3200m easy run", "Cadence focus: 175+ spm", "Dynamic warm-up routine"], focus: "Aerobic capacity", tip: "Elite speed is built on aerobic base." }, { day: "Day 3", title: "Speed ABC Circuits", drills: ["A-skip, B-skip, C-skip x4 each", "High-frequency drills x4", "Strides x8"], focus: "Neuromuscular speed", tip: "Drills build the movement patterns for fast running." }, { day: "Day 4", title: "Strength Training", drills: ["Single-leg RDL x3x8", "Nordic hamstring curls x3x6", "Hip flexor strength x3x12", "Plank variations 3x30sec"], focus: "Injury prevention + power", tip: "Hamstring strength is the #1 injury preventer for sprinters." }, { day: "Day 5", title: "Recovery + Film", drills: ["Easy 1600m jog", "Video review of Day 1 sprints", "Goal setting session"], focus: "Recovery + analysis", tip: "Elite athletes watch film. Youth elites should too." }]},
      ],
    },
  },

  teen: {
    beginner: {
      title: "Teen Beginner",
      duration: "8 Weeks · 3x/Week",
      goal: "Build running habits, confidence, and basic fitness for teens new to track.",
      weeks: [
        { week: 1, theme: "Start Here", sessions: [
          { day: "Day 1", title: "Welcome Run", drills: ["Walk 1 lap — no pressure", "Jog 100m / walk 100m x4", "Cool-down stretch"], focus: "First session comfort", tip: "Teens need autonomy — explain the why, not just the what." },
          { day: "Day 2", title: "Form Basics", drills: ["Posture wall drill", "Arm drive x20", "High knees x20", "400m easy jog"], focus: "Running form", tip: "Mirror or phone video — teens respond to visual feedback." },
          { day: "Day 3", title: "First 800m", drills: ["800m continuous — any pace", "Record time", "Celebrate"], focus: "Half-mile milestone", tip: "Frame it as a starting point, never a judgment." },
        ]},
        { week: 2, theme: "Building Consistency", sessions: [
          { day: "Day 1", title: "Interval Intro", drills: ["200m x4 at medium effort", "Walk 200m between", "Easy 400m cool-down"], focus: "Intervals", tip: "Teach the difference between easy, medium, and hard effort." },
          { day: "Day 2", title: "Strength Run", drills: ["Hill or stair repeats x6", "Easy 400m jog", "Core: plank 30sec x3"], focus: "Running strength", tip: "Hills build quad and glute strength naturally." },
          { day: "Day 3", title: "Pace Yourself", drills: ["800m — slow first lap, fast second lap", "Compare splits", "Discuss pacing strategy"], focus: "Negative splits", tip: "Teens often go out too fast. This teaches restraint." },
        ]},
        { week: 3, theme: "Finding Speed", sessions: [
          { day: "Day 1", title: "Stride Work", drills: ["80m strides x6 (walk back)", "Focus: relaxed speed", "Easy 400m"], focus: "Controlled speed", tip: "Fast but not tense." },
          { day: "Day 2", title: "Tempo Taste", drills: ["400m at tempo effort x2", "2 min rest", "Easy 800m cool-down"], focus: "Aerobic speed", tip: "Comfortably hard — you can speak but it takes effort." },
          { day: "Day 3", title: "Mile Attempt", drills: ["1600m — first mile", "Record time", "Celebrate the distance"], focus: "First mile milestone", tip: "A mile is a big deal. Honor it." },
        ]},
        { week: 4, theme: "Endurance Week", sessions: [
          { day: "Day 1", title: "Long Easy Run", drills: ["1600m easy effort", "Mindful: notice breath and stride", "Walking cool-down"], focus: "Aerobic base", tip: "Recovery runs matter as much as hard ones." },
          { day: "Day 2", title: "400m Repeats", drills: ["400m x3 at 85% effort", "3 min rest between", "400m cool-down"], focus: "Speed endurance", tip: "Hold form on the last 100m — that's where races are won." },
          { day: "Day 3", title: "Week 4 Time Trial", drills: ["800m time trial", "Compare to Week 1", "Goal set for final 4 weeks"], focus: "Progress check", tip: "Show them the improvement." },
        ]},
        { week: 5, theme: "Event Discovery", sessions: [
          { day: "Day 1", title: "Try Sprinting", drills: ["100m x4 at full effort", "200m x2", "Reaction start practice x6"], focus: "Sprint events", tip: "Watch for natural acceleration pattern." },
          { day: "Day 2", title: "Try Distance", drills: ["1600m at steady pace", "Breathing rhythm focus", "Cool-down walk"], focus: "Distance events", tip: "Who finds their groove at 800m+? That's a distance runner." },
          { day: "Day 3", title: "Choose Your Event", drills: ["Brief each event", "Let them pick", "Set event goal time"], focus: "Self-determination", tip: "Their choice = their ownership." },
        ]},
        { week: 6, theme: "Event Training", sessions: [
          { day: "Day 1", title: "Event-Specific Drills", drills: ["Event drills x3 sets", "Event distance x2 at 85%", "Cool-down"], focus: "Technical skill", tip: "Repetition builds confidence." },
          { day: "Day 2", title: "Speed + Strength", drills: ["Strides x6", "Plyometrics: broad jump x8", "Plank + glute bridge x3 each"], focus: "Athletic development", tip: "Speed is a skill. Strength is its foundation." },
          { day: "Day 3", title: "Personal Record Day", drills: ["Warm-up", "Event distance — best effort", "Record time"], focus: "First official PR", tip: "PR = personal record. Not a comparison to anyone else." },
        ]},
        { week: 7, theme: "Race Readiness", sessions: [
          { day: "Day 1", title: "Race Simulation", drills: ["Full race warm-up", "Event simulation at race effort", "Cool-down"], focus: "Race experience", tip: "Simulate everything — even the wait time." },
          { day: "Day 2", title: "Mental Game", drills: ["Visualization practice", "Walk the course", "Positive self-talk workshop"], focus: "Mental prep", tip: "The brain is the most powerful running muscle." },
          { day: "Day 3", title: "Shakeout", drills: ["Easy 800m", "Strides x4", "Light stretch"], focus: "Pre-race freshness", tip: "Nothing new today." },
        ]},
        { week: 8, theme: "Graduation", sessions: [
          { day: "Day 1", title: "Final Time Trial", drills: ["Event distance — personal best attempt", "Record + compare to Week 1"], focus: "Progress proof", tip: "The gap between then and now is the program." },
          { day: "Day 2", title: "Free Session", drills: ["Athlete-chosen drills", "Easy group run", "Reflection"], focus: "Athlete-led", tip: "Their confidence is the real outcome." },
          { day: "Day 3", title: "Graduation 🏅", drills: ["Season recap", "Certificate", "Next level goal setting"], focus: "Celebrate + advance", tip: "Where do they go next? That question is the win." },
        ]},
      ],
    },
    intermediate: { title: "Teen Intermediate", duration: "10 Weeks · 3x/Week", goal: "Develop competitive teen athletes with structured speed, endurance, and event focus.", weeks: [{ week: 1, theme: "Reassessment + Goal Setting", sessions: [{ day: "Day 1", title: "Speed Test", drills: ["100m FAT x2", "200m time trial", "Video review"], focus: "Baseline", tip: "Compare to previous level results." }, { day: "Day 2", title: "Endurance Test", drills: ["1600m time trial", "Record pace per lap", "Goal time discussion"], focus: "Aerobic baseline", tip: "Training zones come from this run." }, { day: "Day 3", title: "Strength Test", drills: ["Vertical jump", "Broad jump x3", "Core circuit baseline"], focus: "Power baseline", tip: "Power = speed. Document it." }]} ]},
    advanced: { title: "Teen Advanced", duration: "12 Weeks · 4x/Week", goal: "Prepare competitive teen athletes for varsity and AAU competition.", weeks: [{ week: 1, theme: "Periodization Foundation", sessions: [{ day: "Day 1", title: "Full Testing Battery", drills: ["60m FAT", "400m TT", "1600m TT", "Strength circuit"], focus: "Complete baseline", tip: "All four tests in one day reveals fitness profile." }, { day: "Day 2", title: "Speed Mechanics", drills: ["A-skip, B-skip x4", "Wicket runs x4", "Flying 30m x6", "Strides x6"], focus: "Sprint form", tip: "Wickets are non-negotiable for teen sprinters." }, { day: "Day 3", title: "Event Plan", drills: ["Review test results", "Set event priorities", "12-week goal sheet"], focus: "Planning", tip: "Athletes who set goals improve 30% faster." }, { day: "Day 4", title: "Easy Base Run", drills: ["3200m easy", "Cadence focus", "Dynamic cool-down"], focus: "Aerobic base", tip: "Even sprinters need aerobic base." }]} ]},
    elite: { title: "Teen Elite", duration: "20 Weeks · 5x/Week", goal: "Full competitive season preparation for state, regional, and national-level teen athletes.", weeks: [{ week: 1, theme: "Pre-Season GPP", sessions: [{ day: "Day 1", title: "Full Physical Assessment", drills: ["Sprint tests: 30m, 60m, 100m FAT", "Endurance: 800m, 1600m TT", "Power: vertical, broad, triple hop", "Strength: gym baseline"], focus: "Complete profile", tip: "Elite development requires complete data." }, { day: "Day 2", title: "Aerobic Foundation", drills: ["5000m easy run", "Heart rate zone training intro", "Breathing mechanics"], focus: "Aerobic base", tip: "Elite speed sits on top of elite aerobic fitness." }, { day: "Day 3", title: "Sprint Mechanics Master Class", drills: ["Block start x10", "Drive phase 30m x8", "Max velocity work 60m x4", "Wicket runs x6"], focus: "Technical foundation", tip: "Block starts separate good from elite." }, { day: "Day 4", title: "Strength & Power", drills: ["Olympic lift intro (hang clean)", "Jump squats x3x6", "Single-leg work x3x10", "Core stability circuit"], focus: "Athletic power", tip: "Power training at teen level = career longevity." }, { day: "Day 5", title: "Film + Recovery", drills: ["Video analysis of sprint mechanics", "Pool or bike easy 20 min", "Goal mapping session"], focus: "Analysis + recovery", tip: "Elite athletes are students of the sport." }]} ]},
  },

  adult: {
    beginner: {
      title: "Adult Beginner",
      duration: "8 Weeks · 3x/Week",
      goal: "Start running with confidence. Build aerobic base, form, and a sustainable habit.",
      weeks: [
        { week: 1, theme: "Starting From Zero", sessions: [
          { day: "Day 1", title: "Walk-Run Intro", drills: ["Walk 5 min warm-up", "Run 1 min / walk 2 min x5", "Walk 5 min cool-down"], focus: "First run habit", tip: "Never skip the cool-down. Joints need it." },
          { day: "Day 2", title: "Form Foundation", drills: ["Posture check against wall", "Arm drive x30", "High knees x20", "Run 1 min / walk 90 sec x6"], focus: "Running mechanics", tip: "Relaxed shoulders = faster running." },
          { day: "Day 3", title: "Extend the Run", drills: ["Run 2 min / walk 2 min x5", "Focus: steady breathing", "Stretch: calf, hip flexor, hamstring"], focus: "Building duration", tip: "Conversational pace — you should be able to speak." },
        ]},
        { week: 2, theme: "Building the Habit", sessions: [
          { day: "Day 1", title: "Continuous 10 Min", drills: ["Run 10 min continuous — slow", "Walk 3 min recovery", "Run 5 min more"], focus: "First continuous 10 min", tip: "Slower than you think you need to go." },
          { day: "Day 2", title: "Strength for Runners", drills: ["Glute bridges x15 x3", "Calf raises x20 x3", "Single-leg balance 30 sec x3", "Easy 10 min run"], focus: "Injury prevention", tip: "Weak glutes = knee pain. Build them first." },
          { day: "Day 3", title: "First 2 Miles", drills: ["Run 20 min continuous at easy effort", "Walk cool-down 5 min", "Stretch routine"], focus: "Distance milestone", tip: "Celebrate 20 minutes. That's real." },
        ]},
        { week: 3, theme: "Speed Introduction", sessions: [
          { day: "Day 1", title: "Intervals Start", drills: ["Run 3 min / walk 1 min x5", "Focus on effort consistency"], focus: "Interval training", tip: "Each interval same pace — not faster each time." },
          { day: "Day 2", title: "Hill Work", drills: ["Walk or jog hills x5 reps", "Walk down recovery", "Easy 15 min run"], focus: "Strength + power", tip: "Hills are speed work in disguise." },
          { day: "Day 3", title: "Longest Run Yet", drills: ["25 min continuous easy run", "Note how you feel at 15, 20, 25 min"], focus: "Pushing the base", tip: "The last 5 minutes build the most fitness." },
        ]},
        { week: 4, theme: "Consolidation", sessions: [
          { day: "Day 1", title: "Tempo Intro", drills: ["10 min easy / 10 min medium effort / 5 min easy", "Talk test throughout"], focus: "Effort awareness", tip: "Medium effort = you can speak but don't want to." },
          { day: "Day 2", title: "Track Intervals", drills: ["400m x4 at medium effort", "2 min walk between", "Easy 800m cool-down"], focus: "Track training", tip: "The track is your friend — flat, measured, safe." },
          { day: "Day 3", title: "5K Simulation", drills: ["30 min continuous run at easy pace", "Estimate 5K time based on effort"], focus: "5K readiness", tip: "30 min easy = roughly 5K for beginners. Note the distance." },
        ]},
        { week: 5, theme: "Speed Work", sessions: [
          { day: "Day 1", title: "Fartlek", drills: ["20 min run with 6x30sec surges throughout", "Surge = faster but controlled"], focus: "Speed play", tip: "Fartlek means 'speed play' in Swedish. Keep it fun." },
          { day: "Day 2", title: "400m Repeats", drills: ["400m x5 at 80% effort", "90 sec rest", "Easy 800m cool-down"], focus: "Track speed", tip: "Don't start too fast — save it for the last rep." },
          { day: "Day 3", title: "Long Run", drills: ["35 min easy continuous run", "Hydrate every 15 min", "Cool-down stretch"], focus: "Endurance base", tip: "Hydration habit starts here." },
        ]},
        { week: 6, theme: "Race Prep", sessions: [
          { day: "Day 1", title: "Race Pace Practice", drills: ["10 min easy / 15 min at goal race pace / 5 min easy", "Note how goal pace feels"], focus: "Race pace awareness", tip: "Goal pace should feel controlled, not desperate." },
          { day: "Day 2", title: "Strength + Speed", drills: ["Strides x6", "Plyometrics: jump squats x10 x3", "Core circuit 3 rounds"], focus: "Athletic development", tip: "Strong runners are fast runners." },
          { day: "Day 3", title: "Practice Race", drills: ["5K simulation run at goal pace", "Record time", "Debrief pacing"], focus: "Race rehearsal", tip: "Negative splits: second half faster than first." },
        ]},
        { week: 7, theme: "Sharpening", sessions: [
          { day: "Day 1", title: "Shorter Faster", drills: ["400m x6 at 85%", "90 sec rest", "Easy 800m"], focus: "Speed sharpening", tip: "Fewer reps, same quality. Taper begins." },
          { day: "Day 2", title: "Easy Miles", drills: ["30 min easy run", "Mindful movement — feel your body"], focus: "Active recovery", tip: "Trust the fitness. It's there." },
          { day: "Day 3", title: "Shakeout + Strides", drills: ["15 min easy jog", "Strides x4", "Full stretch"], focus: "Pre-race freshness", tip: "Nothing new. Stay loose." },
        ]},
        { week: 8, theme: "Race + Graduation", sessions: [
          { day: "Day 1", title: "5K Race or Time Trial 🏅", drills: ["Full warm-up", "Race or 5K time trial", "Cool-down + celebrate"], focus: "Race day!", tip: "Trust your training. You're ready." },
          { day: "Day 2", title: "Recovery Run", drills: ["Easy 20 min jog", "Reflect on the program"], focus: "Active recovery", tip: "Racing is hard on the body. Rest is earned." },
          { day: "Day 3", title: "Graduation 🏅", drills: ["Review 8-week progress", "Certificate", "Set next goal"], focus: "Celebrate + plan", tip: "The finish line is the next starting line." },
        ]},
      ],
    },
    intermediate: { title: "Adult Intermediate", duration: "12 Weeks · 4x/Week", goal: "Build competitive fitness for 5K–10K and track events with structured periodization.", weeks: [{ week: 1, theme: "Assessment + Planning", sessions: [{ day: "Day 1", title: "Running Assessment", drills: ["5K time trial", "VO2 max estimate from result", "Training zones calculation"], focus: "Baseline", tip: "All training should be based on zones from this run." }, { day: "Day 2", title: "Form Audit", drills: ["Video gait analysis", "Cadence count (target 175–180)", "Drill circuit: A-skip, B-skip, strides x6"], focus: "Technique", tip: "Cadence is the fastest free speed gain for adults." }, { day: "Day 3", title: "Strength Baseline", drills: ["Single-leg squat x5 each (form)", "Hip flexor strength test", "Core stability circuit"], focus: "Strength foundation", tip: "Adult runners are often quad-dominant. Fix it now." }, { day: "Day 4", title: "Easy Base Run", drills: ["45 min easy run at Zone 2", "Keep heart rate conversational"], focus: "Aerobic base", tip: "Zone 2 is where endurance is built." }]} ]},
    advanced: { title: "Adult Advanced", duration: "16 Weeks · 5x/Week", goal: "Full periodized training for sub-20 5K, sub-45 10K, or track event PBs.", weeks: [{ week: 1, theme: "Base Phase I", sessions: [{ day: "Day 1", title: "Full Assessment", drills: ["1-mile TT", "5K TT", "Strength battery"], focus: "Training profile", tip: "Use TT results to set pace zones for the entire plan." }, { day: "Day 2", title: "Speed Development", drills: ["Flying 30m x6", "150m repeats x6 at 95%", "Stride x8"], focus: "Neuromuscular speed", tip: "Adult runners often neglect max speed. Don't." }, { day: "Day 3", title: "Long Run", drills: ["90 min easy Zone 2", "Final 15 min at Marathon Effort"], focus: "Aerobic base", tip: "The long run is the cornerstone of adult performance." }, { day: "Day 4", title: "Strength", drills: ["Deadlifts 3x5", "Bulgarian split squat 3x8", "Nordic hamstring x3x6", "Hip flexor complex"], focus: "Strength + power", tip: "Lift heavy. Running economy improves with strength." }, { day: "Day 5", title: "Tempo", drills: ["5-mile tempo at threshold pace", "Cool-down 10 min easy"], focus: "Lactate threshold", tip: "Threshold training is the biggest predictor of race performance." }]} ]},
    elite: { title: "Adult Elite", duration: "24 Weeks · 6x/Week", goal: "Peak performance preparation for competitive open athletes targeting PBs and podiums.", weeks: [{ week: 1, theme: "Macrocycle Planning + Testing", sessions: [{ day: "Day 1", title: "Full Performance Testing", drills: ["400m, 800m, 1600m, 3200m TTs", "Strength power battery", "VO2 max field test"], focus: "Complete performance profile", tip: "24-week plan requires complete data from day one." }, { day: "Day 2", title: "Max Speed Session", drills: ["Flying 20m x8", "Flying 40m x4", "95% effort — full recovery between"], focus: "Max velocity", tip: "Elite adults must maintain max speed capacity year-round." }, { day: "Day 3", title: "Long Aerobic Run", drills: ["2 hour easy run", "Last 20 min at marathon effort", "Fuel practice: gel at 45 and 90 min"], focus: "Aerobic development", tip: "Fueling is a trainable skill." }, { day: "Day 4", title: "Heavy Strength", drills: ["Squats 5x3 at 85%", "Power clean 4x3", "Plyometric complex", "Sprint-specific drills"], focus: "Power-speed connection", tip: "Elite performance requires elite strength." }, { day: "Day 5", title: "Track Session", drills: ["400m x8 at goal race pace", "90 sec rest", "Cool-down 800m"], focus: "Race-pace conditioning", tip: "Race pace must feel comfortable before it feels fast." }, { day: "Day 6", title: "Recovery", drills: ["Easy 30 min jog or bike", "Mobility session 30 min", "Film review"], focus: "Active recovery + analysis", tip: "Elite recovery is structured. Not passive." }]} ]},
  },

  masters: {
    beginner: { title: "Masters Beginner (50+)", duration: "10 Weeks · 3x/Week", goal: "Safe return to running with age-appropriate load management and injury prevention.", weeks: [{ week: 1, theme: "Gentle Start", sessions: [{ day: "Day 1", title: "Walk-Run Assessment", drills: ["Walk 10 min", "Run 1 min / walk 3 min x4", "Walk cool-down 10 min", "Full mobility stretch"], focus: "Safe first session", tip: "Masters athletes need longer warm-ups. Build it in always." }, { day: "Day 2", title: "Mobility + Movement", drills: ["Hip circles x10 each", "Ankle circles x10 each", "Leg swings x10 each", "Walk 20 min — easy", "Run 1 min x3"], focus: "Joint health", tip: "Mobility work isn't optional at 50+. It's training." }, { day: "Day 3", title: "Build to 20 min", drills: ["Walk 5 min", "Run 2 min / walk 2 min x5", "Walk 5 min", "Hip flexor stretch 60 sec each"], focus: "Duration building", tip: "More walk breaks are always acceptable." }]} ]},
    intermediate: { title: "Masters Intermediate (50+)", duration: "12 Weeks · 3x/Week", goal: "Build competitive masters fitness with load management and age-specific recovery.", weeks: [{ week: 1, theme: "Reassessment", sessions: [{ day: "Day 1", title: "5K Time Trial", drills: ["Extended warm-up 15 min", "5K effort run", "Extended cool-down 15 min", "Record time for age-graded table"], focus: "Age-graded baseline", tip: "Use World Masters Athletics age-grading to compare performance." }, { day: "Day 2", title: "Strength for Masters", drills: ["Goblet squat x3x12", "Hip thrust x3x15", "Single-leg balance x3x30sec", "Band walks x3x20"], focus: "Functional strength", tip: "Hip strength prevents the #1 masters injury: glute-related." }, { day: "Day 3", title: "Easy Long", drills: ["50 min easy run", "Heart rate capped at Zone 2", "Full cool-down routine"], focus: "Aerobic base", tip: "Masters athletes gain more from Zone 2 than high intensity." }]} ]},
    advanced: { title: "Masters Advanced (50+)", duration: "16 Weeks · 4x/Week", goal: "Age-group competition preparation with periodized load and recovery protocols.", weeks: [{ week: 1, theme: "Masters Periodization", sessions: [{ day: "Day 1", title: "Full Testing", drills: ["1 mile TT", "5K TT", "Power battery", "Flexibility assessment"], focus: "Age-graded baseline", tip: "Age-graded scores are more motivating than raw times." }, { day: "Day 2", title: "Speed Maintenance", drills: ["Strides x8", "150m at 90% x4", "Full recovery between"], focus: "Speed retention", tip: "Masters lose speed fastest. Train it most." }, { day: "Day 3", title: "Long Run", drills: ["75 min easy", "Walk breaks every 25 min if needed", "Full mobility after"], focus: "Endurance", tip: "Walk breaks are strategy, not weakness." }, { day: "Day 4", title: "Strength", drills: ["Squat 3x8", "Deadlift 3x8", "Nordic curl 3x5", "Hip complex 3x12"], focus: "Power + injury prevention", tip: "Masters strength work prevents the 2-year decline curve." }]} ]},
    elite: { title: "Masters Elite (50+)", duration: "20 Weeks · 5x/Week", goal: "World Masters Athletics competition preparation — podium targeting.", weeks: [{ week: 1, theme: "Masters Elite Foundation", sessions: [{ day: "Day 1", title: "Complete Assessment", drills: ["Sprint battery: 60m, 100m FAT", "Endurance: 800m, 1600m", "Power: vertical jump, broad jump", "Biological age vs. chronological age markers"], focus: "Elite baseline", tip: "WMA rankings demand knowing your starting point precisely." }, { day: "Day 2", title: "Max Speed Work", drills: ["Flying 20m x8", "Flying 30m x6", "Full rest between — 4 min minimum"], focus: "Speed retention", tip: "At 50+ max speed declines 1% per year without training." }, { day: "Day 3", title: "Threshold Run", drills: ["5 mile tempo at age-adjusted threshold", "Heart rate cap: 90% max", "Full cool-down"], focus: "Lactate threshold", tip: "Masters threshold is slightly lower HR. Adjust accordingly." }, { day: "Day 4", title: "Power Training", drills: ["Hang clean 4x3", "Jump squat 3x5", "Bounding 4 lengths", "Plyometric complex"], focus: "Power-speed connection", tip: "Power training is the fountain of youth for masters athletes." }, { day: "Day 5", title: "Recovery + Prep", drills: ["Easy 30 min", "Soft tissue work 20 min", "Visualization session"], focus: "Recovery optimization", tip: "Masters recovery takes 48–72 hrs. Plan for it." }]} ]},
  },

  special: {
    beginner: {
      title: "Special Abilities Beginner",
      duration: "12 Weeks · 3x/Week",
      goal: "Sensory-first introduction to track for athletes of all abilities. Safety, comfort, and joy above all.",
      weeks: [
        { week: 1, theme: "Hello, Track", sessions: [
          { day: "Day 1", title: "Meet the Space", drills: ["Arrive early — explore track freely", "Walk perimeter at own pace", "Find personal 'safe spot'", "Touch the track surface — texture awareness"], focus: "Environment comfort", tip: "No instruction today. Let them explore. This is the most important session." },
          { day: "Day 2", title: "Body Check-In", drills: ["Stomping in place 30 sec (proprioceptive input)", "Self-squeeze / bear hug (deep pressure)", "Walk with heavy feet down the straight", "Arm swings wide (bilateral coordination)", "Shake-out cool-down"], focus: "Body awareness", tip: "Same routine every session from here. Consistency = safety." },
          { day: "Day 3", title: "First Jog", drills: ["Body check-in routine", "Walk 100m / Jog 50m x2", "Rest at safe spot between", "Stomping cool-down"], focus: "First jog milestone", tip: "No whistle. Use hand signals or visual cards for start/stop." },
        ]},
        { week: 2, theme: "Rhythm & Routine", sessions: [
          { day: "Day 1", title: "Same-Same Practice", drills: ["Identical warm-up to Week 1", "Walk/jog: 100m walk / 100m jog x3", "Clap-rhythm walk (clap every 4 steps)"], focus: "Predictability", tip: "Sameness = safety for sensory athletes." },
          { day: "Day 2", title: "Feet & Beat", drills: ["Skip down the straight (bilateral, rhythmic)", "Stomp-stomp-clap x2 lengths", "Jog to a count: 1-2-3-4 aloud", "Walk/jog: 100m walk / 150m jog x2"], focus: "Rhythm", tip: "Drumbeat music at 130 BPM matches healthy running cadence." },
          { day: "Day 3", title: "Visual Schedule Day", drills: ["Introduce done-check visual chart", "Full routine: Check-in → Drills → Intervals → Cool-down", "Walk/jog: 100m / 200m x2"], focus: "Routine ownership", tip: "Ask: 'What comes next?' Let them answer from the chart." },
        ]},
        { week: 3, theme: "Posture & Power", sessions: [
          { day: "Day 1", title: "Tall Tower", drills: ["Wall drill: stand tall, slight lean", "March in place — knees to hip height x20", "Arm drive x20", "Jog 200m: tall posture only focus"], focus: "Running form", tip: "One cue only: 'Tall tower.' Never multiple corrections at once." },
          { day: "Day 2", title: "Arms Lead", drills: ["Standing arm drive x30", "Walk with exaggerated arm drive", "Jog 200m arms focus", "Walk/jog 150m / 150m x3"], focus: "Arm mechanics", tip: "Relaxed hands cue: 'Hold a potato chip — don't crush it.'" },
          { day: "Day 3", title: "Connect It", drills: ["Full body check-in", "Posture + arm drill review", "Jog 300m: tall tower + arm drive combined", "Rest 2 min at safe spot", "Repeat 300m jog"], focus: "Form integration", tip: "This is a milestone session. Celebrate specifically." },
        ]},
        { week: 4, theme: "First Lap 🏅", sessions: [
          { day: "Day 1", title: "Half & Half", drills: ["200m jog / 200m walk x3", "Cone at 200m as visual anchor", "Relax jaw and shoulders focus"], focus: "200m confidence", tip: "Visual anchors reduce anxiety mid-run." },
          { day: "Day 2", title: "Three-Quarter", drills: ["300m jog / 100m walk x3", "Breathing cue: in 2 steps, out 2 steps", "Rest at safe spot"], focus: "300m milestone", tip: "If they struggle at 250m, walk the last 50m. Success matters more." },
          { day: "Day 3", title: "THE FIRST LAP 🏅", drills: ["Full warm-up", "400m jog — one full lap", "Walk one recovery lap", "Milestone celebration (athlete's preferred way)"], focus: "First full 400m", tip: "This is one of the biggest moments in the program. Document it with permission." },
        ]},
        { week: 5, theme: "Build Distance", sessions: [
          { day: "Day 1", title: "Two Laps", drills: ["400m jog / 1 min walk / 400m jog", "Form check at 200m mark"], focus: "800m total", tip: "Call each lap: 'One down, one to go!'" },
          { day: "Day 2", title: "Easy Cruise", drills: ["Slow jog 600m — no pace pressure", "Arm drill practice", "Breathing walk 200m"], focus: "Recovery session", tip: "Easy days matter as much as hard days." },
          { day: "Day 3", title: "Effort Scale Intro", drills: ["Visual effort scale: 1 (walk) to 5 (sprint)", "Run at effort 2 for 400m", "Run at effort 4 for 100m x2"], focus: "Self-awareness", tip: "Self-reporting effort builds internal body awareness." },
        ]},
        { week: 6, theme: "Speed & Community", sessions: [
          { day: "Day 1", title: "Short-Fast-Rest", drills: ["100m fast / 200m walk x4", "Drive arms during fast sections"], focus: "Intervals", tip: "Burst-rest-burst matches natural energy patterns." },
          { day: "Day 2", title: "Group Run", drills: ["Group warm-up", "400m run together — no racing", "Partner walk cool-down (optional)"], focus: "Social connection", tip: "Side-by-side running is easier than face-to-face interaction." },
          { day: "Day 3", title: "First 800m 🏅", drills: ["Prep athlete: 'Two laps, we'll count together'", "800m continuous jog", "2 min rest", "Celebrate"], focus: "Half-mile milestone", tip: "800m is a real athletic achievement. Honor it fully." },
        ]},
        { week: 7, theme: "Event Discovery", sessions: [
          { day: "Day 1", title: "Try Events", drills: ["Sprint 100m all-out x2", "Distance jog 400m easy x2", "Debrief: what felt best?"], focus: "Event exploration", tip: "Present as choice, not test." },
          { day: "Day 2", title: "Event Practice", drills: ["Chosen event drills x3 sets", "Event distance x2 at comfortable effort"], focus: "Event focus", tip: "Athlete selects their SPRNT event this week." },
          { day: "Day 3", title: "Personal Best Day", drills: ["Full warm-up", "Event distance — best effort", "Record and celebrate"], focus: "First personal record", tip: "Record this moment. It belongs in their milestone log." },
        ]},
        { week: 8, theme: "Community Run", sessions: [
          { day: "Day 1", title: "Run Together", drills: ["Group warm-up", "400m as group — no pressure", "Assigned lane reduces anxiety"], focus: "Community", tip: "No forced interaction. Presence is participation." },
          { day: "Day 2", title: "Relay Intro", drills: ["Baton pass practice x10 (stationary)", "Slow relay exchange", "Jog relay 100m legs"], focus: "Teamwork", tip: "Relay shows their contribution matters to others." },
          { day: "Day 3", title: "Community Fun Run", drills: ["Group warm-up", "1-mile together at any pace", "Milestone share: each athlete names one win"], focus: "SPRNT community", tip: "Everyone belongs here. This session proves it." },
        ]},
        { week: 9, theme: "Building Confidence", sessions: [
          { day: "Day 1", title: "Form Review", drills: ["Full drill circuit", "Video feedback (with permission)", "Strides x4"], focus: "Technique", tip: "Watching themselves run is motivating for many athletes." },
          { day: "Day 2", title: "Distance Push", drills: ["1200m continuous — 3 laps", "Count each lap aloud", "Rest at safe spot"], focus: "1200m milestone", tip: "Preview it: '3 laps. We count together.'" },
          { day: "Day 3", title: "Athlete-Led", drills: ["Athlete chooses warm-up", "Free run: any distance, any pace", "Reflection time"], focus: "Autonomy", tip: "Autonomy is a powerful motivator often underused with special abilities athletes." },
        ]},
        { week: 10, theme: "Peak Week", sessions: [
          { day: "Day 1", title: "Strong Session", drills: ["Effort scale review", "400m at effort 3 x3", "Cool-down routine"], focus: "Controlled effort", tip: "Naming effort = self-advocacy skill." },
          { day: "Day 2", title: "Relay Practice", drills: ["Full relay team practice", "Smooth exchange focus", "Debrief together"], focus: "Team skills", tip: "Belonging to a team is transformative." },
          { day: "Day 3", title: "Race Day Preview", drills: ["Walk through race-day sequence", "Visit start line together", "Visualization: run the race in your mind"], focus: "Race readiness", tip: "Social stories + visual schedules reduce race-day anxiety significantly." },
        ]},
        { week: 11, theme: "Race Simulation", sessions: [
          { day: "Day 1", title: "Full Race Warm-Up", drills: ["Complete race-day warm-up routine", "Event simulation at comfortable effort", "Cool-down as a team"], focus: "Dress rehearsal", tip: "Simulate every part — even arriving, warming up, waiting." },
          { day: "Day 2", title: "Personal Record Attempt", drills: ["Full warm-up", "Event distance — best effort", "Compare to Week 7 PR"], focus: "Progress proof", tip: "The improvement from Week 7 to now is the program." },
          { day: "Day 3", title: "Rest + Reflect", drills: ["Easy walk 1 lap", "Discuss favorite moments", "Preview Graduation Week"], focus: "Mental rest", tip: "Athletes deserve to feel proud before the final week." },
        ]},
        { week: 12, theme: "SPRNT Graduation 🏅", sessions: [
          { day: "Day 1", title: "Best Of", drills: ["Athlete picks 3 favorite drills", "Easy jog 400m", "Quiet reflection time"], focus: "Athlete-led celebration", tip: "Honor what they built. This session is theirs." },
          { day: "Day 2", title: "Final Time Trial", drills: ["Full warm-up", "Event distance — personal best attempt", "Compare to Week 1", "Celebrate growth"], focus: "Final PR", tip: "The difference between Week 1 and Week 12 tells the whole story." },
          { day: "Day 3", title: "GRADUATION DAY 🏅", drills: ["Review full milestone log Weeks 1–12", "Final lap together as a group", "SPRNT certificate presentation", "Goal setting for next level"], focus: "Celebrate + advance", tip: "Your athlete ran their first lap 12 weeks ago. Today they graduate. That is everything." },
        ]},
      ],
    },
    intermediate: { title: "Special Abilities Intermediate", duration: "12 Weeks · 3x/Week", goal: "Build competitive skills, event specialization, and community participation for athletes with special abilities.", weeks: [{ week: 1, theme: "Returning to the Track", sessions: [{ day: "Day 1", title: "Warm-Up Mastery", drills: ["Athlete leads full warm-up independently", "Proprioceptive sequence self-directed", "400m jog — self-paced"], focus: "Independence", tip: "Leading the warm-up is a major developmental milestone." }, { day: "Day 2", title: "Event Review", drills: ["Review chosen event from beginner program", "Event drills x3 sets", "Event distance x2"], focus: "Event continuation", tip: "Build on established preferences." }, { day: "Day 3", title: "Effort Scale Mastery", drills: ["800m using effort scale to self-pace", "Report effort at each 200m mark", "Cool-down"], focus: "Self-regulation", tip: "Accurate effort self-reporting = advanced body awareness." }]} ]},
    advanced: { title: "Special Abilities Advanced", duration: "16 Weeks · 3x/Week", goal: "Prepare athletes for Special Olympics and inclusive competition with full event specialization.", weeks: [{ week: 1, theme: "Competition Preparation", sessions: [{ day: "Day 1", title: "Event Time Trial", drills: ["Full warm-up routine (athlete-led)", "Event distance time trial", "Record for Special Olympics qualification tracking"], focus: "Competition baseline", tip: "Special Olympics qualifying standards give athletes real goals." }, { day: "Day 2", title: "Advanced Drills", drills: ["Full drill circuit — athlete demonstrates each", "Strides x6", "Event-specific technique work"], focus: "Technical mastery", tip: "Mastery = doing it right without being told." }, { day: "Day 3", title: "Community Leadership", drills: ["Athlete leads warm-up for group", "Group run 800m", "Mentor a beginner athlete (buddy system)"], focus: "Leadership", tip: "Mentoring is the highest level of learning." }]} ]},
    elite: { title: "Special Abilities Elite", duration: "20 Weeks · 4x/Week", goal: "Peak preparation for Special Olympics nationals and international inclusive competition.", weeks: [{ week: 1, theme: "Elite Inclusive Training", sessions: [{ day: "Day 1", title: "Full Performance Assessment", drills: ["All events timed", "Compare to Special Olympics qualification standards", "Identify A and B goal events"], focus: "Competition mapping", tip: "Special Olympics World Games is a real destination. Set it as the goal." }, { day: "Day 2", title: "Speed Development", drills: ["Strides x8", "Event-specific speed work", "Relay exchange mastery"], focus: "Elite speed", tip: "Elite special abilities athletes deserve elite training. No dilution." }, { day: "Day 3", title: "Strength Circuit", drills: ["Functional strength circuit x3 rounds", "Plyometric progression", "Core stability"], focus: "Athletic strength", tip: "Strong athletes of any ability perform better and get injured less." }, { day: "Day 4", title: "Community + Leadership", drills: ["Lead full team warm-up", "Coach a beginner for 15 min", "Own training session with coach oversight"], focus: "Leadership + autonomy", tip: "Elite athletes are role models. Build that identity." }]} ]},
  },
};

export default function App() {
  const [ageGroup, setAgeGroup] = useState("youth");
  const [level, setLevel] = useState("beginner");
  const [weekIdx, setWeekIdx] = useState(0);
  const [sessionIdx, setSessionIdx] = useState(0);
  const [tab, setTab] = useState("program");

  const prog = programs[ageGroup]?.[level];
  const week = prog?.weeks?.[weekIdx];
  const session = week?.sessions?.[sessionIdx];
  const lev = levels.find((l) => l.id === level);

  return (
    <div style={{ fontFamily: "'Barlow Condensed', sans-serif", background: "#0a0a0a", color: "#f0ede8", minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;700;800;900&family=Barlow:wght@300;400&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        button { font-family: inherit; cursor: pointer; border: none; }
        ::-webkit-scrollbar { width: 4px; } ::-webkit-scrollbar-thumb { background: #2a2a2a; }
        .card { transition: all 0.15s ease; }
        .card:hover { border-color: #333 !important; transform: translateY(-2px); }
        .card.sel { border-color: #f0ede8 !important; background: #111 !important; }
      `}</style>

      {/* NAV */}
      <div style={{ padding: "16px 32px", borderBottom: "1px solid #1c1c1c", display: "flex", alignItems: "center", gap: 14, position: "sticky", top: 0, background: "#0a0a0af8", backdropFilter: "blur(10px)", zIndex: 50 }}>
        <svg width="30" height="36" viewBox="0 0 38 44" fill="none">
          <path d="M19 1L37 10V28C37 36 19 43 19 43C19 43 1 36 1 28V10L19 1Z" fill="#0a0a0a" stroke="#f0ede8" strokeWidth="1.5" />
          <text x="19" y="26" textAnchor="middle" fill="#f0ede8" fontSize="9" fontWeight="900" letterSpacing="0.5">SPRNT</text>
        </svg>
        <div>
          <div style={{ fontWeight: 900, fontSize: 18, letterSpacing: "0.14em" }}>SPRNT</div>
          <div style={{ fontSize: 9, color: "#555", letterSpacing: "0.18em", marginTop: -2 }}>TRAINING PROGRAMS</div>
        </div>
        <div style={{ marginLeft: "auto", display: "flex", gap: 4 }}>
          {["program", "overview"].map((t) => (
            <button key={t} onClick={() => setTab(t)} style={{
              padding: "8px 18px", borderRadius: 4, fontSize: 11, fontWeight: 700,
              letterSpacing: "0.12em", textTransform: "uppercase",
              background: tab === t ? "#f0ede8" : "transparent",
              color: tab === t ? "#0a0a0a" : "#555"
            }}>{t}</button>
          ))}
        </div>
      </div>

      {tab === "overview" ? (
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "48px 32px" }}>
          <div style={{ fontSize: 9, color: "#444", letterSpacing: "0.22em", marginBottom: 14 }}>ALL PROGRAMS</div>
          <h1 style={{ fontSize: "clamp(40px, 7vw, 76px)", fontWeight: 900, lineHeight: 0.9, textTransform: "uppercase", marginBottom: 32 }}>
            20 PROGRAMS.<br /><span style={{ WebkitTextStroke: "1.5px #f0ede8", color: "transparent" }}>ONE PLATFORM.</span>
          </h1>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
            {ageGroups.map((ag) => (
              <div key={ag.id} style={{ background: "#0f0f0f", border: "1px solid #1c1c1c", borderRadius: 8, padding: "20px" }}>
                <div style={{ fontSize: 24, marginBottom: 8 }}>{ag.icon}</div>
                <div style={{ fontWeight: 900, fontSize: 18, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 2 }}>{ag.label}</div>
                <div style={{ fontSize: 12, color: "#555", marginBottom: 16 }}>{ag.range}</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  {levels.map((lv) => {
                    const p = programs[ag.id]?.[lv.id];
                    return p ? (
                      <div key={lv.id} onClick={() => { setAgeGroup(ag.id); setLevel(lv.id); setWeekIdx(0); setSessionIdx(0); setTab("program"); }} style={{
                        display: "flex", justifyContent: "space-between", alignItems: "center",
                        padding: "8px 12px", background: "#111", border: "1px solid #1a1a1a",
                        borderRadius: 4, cursor: "pointer"
                      }}>
                        <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: lv.color }}>{lv.label}</span>
                        <span style={{ fontSize: 10, color: "#555" }}>{p.duration}</span>
                      </div>
                    ) : null;
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div style={{ display: "flex", height: "calc(100vh - 60px)" }}>

          {/* SIDEBAR */}
          <div style={{ width: 240, borderRight: "1px solid #1c1c1c", overflowY: "auto", padding: "20px 0", flexShrink: 0 }}>
            <div style={{ padding: "0 16px", marginBottom: 20 }}>
              <div style={{ fontSize: 9, color: "#444", letterSpacing: "0.2em", marginBottom: 10 }}>AGE GROUP</div>
              {ageGroups.map((ag) => (
                <button key={ag.id} onClick={() => { setAgeGroup(ag.id); setWeekIdx(0); setSessionIdx(0); }} style={{
                  width: "100%", textAlign: "left", padding: "10px 12px", marginBottom: 3,
                  borderRadius: 4, display: "block", background: ageGroup === ag.id ? "#1c1c1c" : "transparent",
                  borderLeft: ageGroup === ag.id ? "2px solid #f0ede8" : "2px solid transparent", color: "#f0ede8"
                }}>
                  <span style={{ fontSize: 13, marginRight: 6 }}>{ag.icon}</span>
                  <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: ageGroup === ag.id ? "#f0ede8" : "#555" }}>{ag.label}</span>
                </button>
              ))}
            </div>

            <div style={{ height: 1, background: "#1c1c1c", margin: "0 16px 20px" }} />

            <div style={{ padding: "0 16px", marginBottom: 20 }}>
              <div style={{ fontSize: 9, color: "#444", letterSpacing: "0.2em", marginBottom: 10 }}>LEVEL</div>
              {levels.map((lv) => (
                <button key={lv.id} onClick={() => { setLevel(lv.id); setWeekIdx(0); setSessionIdx(0); }} style={{
                  width: "100%", textAlign: "left", padding: "10px 12px", marginBottom: 3,
                  borderRadius: 4, display: "block", background: level === lv.id ? "#1c1c1c" : "transparent",
                }}>
                  <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: lv.id === level ? lv.color : "#555" }}>{lv.label}</div>
                  <div style={{ fontSize: 10, color: "#444", marginTop: 1 }}>{lv.desc}</div>
                </button>
              ))}
            </div>

            {prog && (
              <>
                <div style={{ height: 1, background: "#1c1c1c", margin: "0 16px 20px" }} />
                <div style={{ padding: "0 16px" }}>
                  <div style={{ fontSize: 9, color: "#444", letterSpacing: "0.2em", marginBottom: 10 }}>WEEKS</div>
                  {prog.weeks.map((w, wi) => (
                    <button key={wi} onClick={() => { setWeekIdx(wi); setSessionIdx(0); }} style={{
                      width: "100%", textAlign: "left", padding: "9px 12px", marginBottom: 3,
                      borderRadius: 4, display: "block", background: weekIdx === wi ? "#1c1c1c" : "transparent"
                    }}>
                      <div style={{ fontSize: 10, color: "#444", letterSpacing: "0.14em" }}>WEEK {w.week}</div>
                      <div style={{ fontSize: 12, fontWeight: 700, color: weekIdx === wi ? "#f0ede8" : "#666" }}>{w.theme}</div>
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* MAIN */}
          <div style={{ flex: 1, overflowY: "auto", padding: "32px 40px" }}>
            {!prog ? (
              <div style={{ textAlign: "center", padding: "80px 0", color: "#444" }}>
                <div style={{ fontSize: 32, marginBottom: 12 }}>🏃</div>
                <div style={{ fontSize: 16, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>Select a program to begin</div>
              </div>
            ) : (
              <>
                {/* Header */}
                <div style={{ marginBottom: 32 }}>
                  <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 10, flexWrap: "wrap" }}>
                    <span style={{ background: "#1c1c1c", border: "1px solid #222", padding: "3px 12px", borderRadius: 2, fontSize: 10, letterSpacing: "0.18em", color: "#666", textTransform: "uppercase" }}>{ageGroups.find(a => a.id === ageGroup)?.range}</span>
                    <span style={{ fontSize: 11, fontWeight: 700, color: lev?.color, letterSpacing: "0.14em", textTransform: "uppercase" }}>{lev?.label}</span>
                    <span style={{ fontSize: 10, color: "#444", letterSpacing: "0.12em" }}>{prog.duration}</span>
                  </div>
                  <h1 style={{ fontSize: "clamp(28px, 5vw, 56px)", fontWeight: 900, lineHeight: 0.92, textTransform: "uppercase", marginBottom: 12 }}>
                    {prog.title.split(" ").slice(0, -1).join(" ")}<br />
                    <span style={{ WebkitTextStroke: "1.5px #f0ede8", color: "transparent" }}>{prog.title.split(" ").slice(-1)}</span>
                  </h1>
                  <p style={{ fontSize: 14, color: "#777", lineHeight: 1.65, maxWidth: 560 }}>{prog.goal}</p>
                </div>

                {/* Week header */}
                {week && (
                  <>
                    <div style={{ height: 1, background: "#1c1c1c", marginBottom: 24 }} />
                    <div style={{ marginBottom: 20 }}>
                      <div style={{ fontSize: 9, color: "#444", letterSpacing: "0.2em", marginBottom: 4 }}>WEEK {week.week}</div>
                      <h2 style={{ fontSize: 28, fontWeight: 900, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 4 }}>{week.theme}</h2>
                    </div>

                    {/* Session tabs */}
                    <div style={{ display: "flex", gap: 6, marginBottom: 24, flexWrap: "wrap" }}>
                      {week.sessions.map((s, si) => (
                        <button key={si} onClick={() => setSessionIdx(si)} style={{
                          padding: "9px 18px", borderRadius: 4, fontSize: 11, fontWeight: 700,
                          letterSpacing: "0.12em", textTransform: "uppercase",
                          background: sessionIdx === si ? "#f0ede8" : "#111",
                          color: sessionIdx === si ? "#0a0a0a" : "#555",
                          border: sessionIdx === si ? "none" : "1px solid #1c1c1c"
                        }}>{s.day}</button>
                      ))}
                    </div>

                    {/* Session card */}
                    {session && (
                      <div style={{ background: "#0f0f0f", border: "1px solid #1c1c1c", borderRadius: 8, overflow: "hidden" }}>
                        {/* Session header */}
                        <div style={{ padding: "22px 26px", borderBottom: "1px solid #1c1c1c", display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 12 }}>
                          <div>
                            <div style={{ fontSize: 9, color: "#555", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 6 }}>{session.day}</div>
                            <h3 style={{ fontSize: 24, fontWeight: 900, letterSpacing: "0.06em", textTransform: "uppercase" }}>{session.title}</h3>
                          </div>
                          <div style={{ background: "#1a1a1a", border: "1px solid #222", borderRadius: 4, padding: "8px 14px", textAlign: "center" }}>
                            <div style={{ fontSize: 9, color: "#444", letterSpacing: "0.16em", textTransform: "uppercase" }}>Focus</div>
                            <div style={{ fontSize: 13, fontWeight: 700, color: lev?.color, marginTop: 2, textTransform: "uppercase", letterSpacing: "0.1em" }}>{session.focus}</div>
                          </div>
                        </div>

                        {/* Drills */}
                        <div style={{ padding: "22px 26px", borderBottom: "1px solid #1c1c1c" }}>
                          <div style={{ fontSize: 9, color: "#555", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 14 }}>Session Plan</div>
                          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                            {session.drills.map((d, di) => (
                              <div key={di} style={{ display: "flex", gap: 12, alignItems: "flex-start", padding: "11px 14px", background: "#111", borderRadius: 4, border: "1px solid #1a1a1a" }}>
                                <span style={{ width: 22, height: 22, borderRadius: 2, background: "#1c1c1c", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 800, color: "#555", flexShrink: 0 }}>{di + 1}</span>
                                <span style={{ fontSize: 14, color: "#ccc", lineHeight: 1.5 }}>{d}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Coach tip */}
                        <div style={{ padding: "18px 26px", background: "#0c0c0c", borderBottom: "1px solid #1c1c1c" }}>
                          <div style={{ fontSize: 9, color: "#555", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 8 }}>🎙 Coach Tip</div>
                          <p style={{ fontSize: 13, color: "#777", lineHeight: 1.65 }}>{session.tip}</p>
                        </div>

                        {/* Nav */}
                        <div style={{ padding: "16px 26px", display: "flex", justifyContent: "space-between", gap: 10 }}>
                          <button onClick={() => { if (sessionIdx > 0) setSessionIdx(s => s - 1); else if (weekIdx > 0) { setWeekIdx(w => w - 1); setSessionIdx(2); } }} style={{
                            padding: "11px 24px", borderRadius: 4, fontSize: 11, fontWeight: 700,
                            letterSpacing: "0.12em", textTransform: "uppercase",
                            background: "#1c1c1c", color: "#f0ede8"
                          }}>← Prev</button>
                          <button onClick={() => { if (sessionIdx < week.sessions.length - 1) setSessionIdx(s => s + 1); else if (weekIdx < prog.weeks.length - 1) { setWeekIdx(w => w + 1); setSessionIdx(0); } }} style={{
                            padding: "11px 24px", borderRadius: 4, fontSize: 11, fontWeight: 700,
                            letterSpacing: "0.12em", textTransform: "uppercase",
                            background: "#f0ede8", color: "#0a0a0a"
                          }}>Next →</button>
                        </div>
                      </div>
                    )}

                    {/* Week nav */}
                    <div style={{ display: "flex", justifyContent: "space-between", marginTop: 16, gap: 10 }}>
                      <button onClick={() => { if (weekIdx > 0) { setWeekIdx(w => w - 1); setSessionIdx(0); } }} disabled={weekIdx === 0} style={{
                        padding: "9px 20px", borderRadius: 4, fontSize: 10, fontWeight: 700,
                        letterSpacing: "0.12em", textTransform: "uppercase",
                        background: weekIdx === 0 ? "#0f0f0f" : "#111",
                        color: weekIdx === 0 ? "#333" : "#888",
                        border: "1px solid #1c1c1c"
                      }}>← Week {weekIdx}</button>
                      <span style={{ fontSize: 10, color: "#444", letterSpacing: "0.14em", display: "flex", alignItems: "center" }}>
                        WEEK {week.week} OF {prog.weeks.length}
                      </span>
                      <button onClick={() => { if (weekIdx < prog.weeks.length - 1) { setWeekIdx(w => w + 1); setSessionIdx(0); } }} disabled={weekIdx === prog.weeks.length - 1} style={{
                        padding: "9px 20px", borderRadius: 4, fontSize: 10, fontWeight: 700,
                        letterSpacing: "0.12em", textTransform: "uppercase",
                        background: weekIdx === prog.weeks.length - 1 ? "#0f0f0f" : "#111",
                        color: weekIdx === prog.weeks.length - 1 ? "#333" : "#888",
                        border: "1px solid #1c1c1c"
                      }}>Week {weekIdx + 2} →</button>
                    </div>
                  </>
                )}
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
