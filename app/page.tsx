"use client";

import { useMemo, useState } from "react";

type Tone = "" | "Friendly" | "Professional" | "Casual";
type Platform = "" | "Instagram" | "LinkedIn" | "Twitter";

export default function Page() {
  const [view, setView] = useState<"main" | "how">("main");

  const [topic, setTopic] = useState("");
  const [tone, setTone] = useState<Tone>("");
  const [platform, setPlatform] = useState<Platform>("");

  // Placeholder only (for now)
  const [result, setResult] = useState("");
  const [showResult, setShowResult] = useState(false);

  const canGenerate = topic.trim().length > 0 && tone !== "" && platform !== "";

  const platformAccent = useMemo(() => {
    if (platform === "Instagram") return "#ff9ad4";
    if (platform === "LinkedIn") return "#0a66c2";
    if (platform === "Twitter") return "#1da1f2";
    return "#8f7bff";
  }, [platform]);

  function onGenerate() {
    // Placeholder behavior so the UI feels alive
    setShowResult(true);
    setResult(
      `Example output (placeholder):\n\nTopic: ${topic}\nTone: ${tone}\nPlatform: ${platform}\n\nNext step: we’ll wire this button to AI.`
    );
  }

  return (
    <main className="page">
      <div className="shell">
        <div className="card">
          {view === "main" ? (
            <>
              <div className="topRow">
                <div className="hero">
                  <h1 className="title">Medisocial.ai</h1>
                  <p className="subhead">Turn a clinical idea into content in seconds.</p>
                  <p className="tagline">Pick a tone + platform. Copy. Post.</p>
                </div>

                <button className="linkBtn" onClick={() => setView("how")} type="button">
                  How it Works
                </button>
              </div>

              <div className="contentRow">
                <div className="formCard">
                  <label className="label">Topic</label>
                  <input
                    className="input"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    placeholder="e.g., explaining A1c, burnout, vaccine myths"
                  />

                  <label className="label">Tone</label>
                  <select
                    className="select"
                    value={tone}
                    onChange={(e) => setTone(e.target.value as Tone)}
                  >
                    <option value="">Select a tone</option>
                    <option value="Professional">Professional</option>
                    <option value="Friendly">Friendly</option>
                    <option value="Casual">Casual</option>
                  </select>

                  <label className="label">Platform</label>
                  <select
                    className="select"
                    value={platform}
                    onChange={(e) => setPlatform(e.target.value as Platform)}
                  >
                    <option value="">Choose platform</option>
                    <option value="Instagram">Instagram</option>
                    <option value="LinkedIn">LinkedIn</option>
                    <option value="Twitter">Twitter</option>
                  </select>

                  <button
                    className="primaryBtn"
                    type="button"
                    onClick={onGenerate}
                    disabled={!canGenerate}
                  >
                    Generate Content
                  </button>
                </div>

                <div className="imageWrap" aria-hidden="true">
                  {/* Using a normal <img> to keep this dead simple for now */}
                  <img
                    src="https://i.postimg.cc/8z4nWZRJ/Untitled-design-31.png"
                    alt=""
                    className="image"
                  />
                </div>
              </div>

              {showResult && (
                <div className="resultWrap">
                  <div className="result" style={{ borderColor: platformAccent }}>
                    {result}
                  </div>
                </div>
              )}
            </>
          ) : (
            <>
              <div className="topRow">
                <div className="hero">
                  <h2 className="howTitle">How it Works</h2>
                </div>

                <button className="linkBtn" onClick={() => setView("main")} type="button">
                  Get Started
                </button>
              </div>

              <div className="howBody">
                <div className="howItem">
                  <div className="howNum">1.</div>
                  <div>
                    <div className="howHead">Pick a Topic</div>
                    <div className="howText">
                      Enter what you want content about — a tip, a symptom, a theme, anything.
                    </div>
                  </div>
                </div>

                <div className="howItem">
                  <div className="howNum">2.</div>
                  <div>
                    <div className="howHead">Choose a Tone</div>
                    <div className="howText">Professional, friendly, or casual. Pick the vibe.</div>
                  </div>
                </div>

                <div className="howItem">
                  <div className="howNum">3.</div>
                  <div>
                    <div className="howHead">Select a Platform</div>
                    <div className="howText">
                      We tailor formatting for Instagram, LinkedIn, or Twitter based on your selection.
                    </div>
                  </div>
                </div>

                <div className="howItem">
                  <div className="howNum">4.</div>
                  <div>
                    <div className="howHead">Generate</div>
                    <div className="howText">Click Generate and you’ll get a ready-to-post draft.</div>
                  </div>
                </div>

                <div className="howItem">
                  <div className="howNum">5.</div>
                  <div>
                    <div className="howHead">Copy &amp; Post</div>
                    <div className="howText">Copy it, tweak if you want, and share.</div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      <style jsx global>{`
        :root {
          --bg1: #f6f0ff;
          --bg2: #e7dfff;
          --bg3: #f5f3ff;
          --ink: #111;
          --muted: rgba(17, 17, 17, 0.7);
          --card: rgba(255, 255, 255, 0.92);
          --stroke: rgba(0, 0, 0, 0.08);
          --shadow: 0 24px 70px rgba(0, 0, 0, 0.12);
          --radius: 28px;
          --purple: #8f7bff;
        }

        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial,
            "Apple Color Emoji", "Segoe UI Emoji";
          color: var(--ink);
          background: radial-gradient(1200px 600px at 25% 15%, #ffffff 0%, rgba(255, 255, 255, 0) 55%),
            linear-gradient(135deg, var(--bg1), var(--bg2), var(--bg3));
          min-height: 100vh;
        }

        .page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 48px 18px;
        }

        .shell {
          width: 100%;
          max-width: 1180px;
          display: flex;
          justify-content: center;
        }

        .card {
          width: 100%;
          background: var(--card);
          border: 1px solid var(--stroke);
          border-radius: var(--radius);
          box-shadow: var(--shadow);
          padding: 48px;
        }

        .topRow {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 20px;
          margin-bottom: 28px;
        }

        .title {
          margin: 0 0 10px 0;
          font-size: 44px;
          letter-spacing: -0.03em;
          line-height: 1.05;
        }

        .subhead {
          margin: 0 0 6px 0;
          font-size: 16px;
          color: var(--muted);
        }

        .tagline {
          margin: 0;
          font-size: 16px;
          color: var(--muted);
        }

        .linkBtn {
          background: transparent;
          border: none;
          color: rgba(0, 0, 0, 0.55);
          text-decoration: underline;
          cursor: pointer;
          font-size: 14px;
          padding: 8px 10px;
          border-radius: 10px;
        }
        .linkBtn:hover {
          color: rgba(0, 0, 0, 0.8);
          background: rgba(0, 0, 0, 0.04);
        }

        .contentRow {
          display: grid;
          grid-template-columns: 360px 1fr;
          gap: 32px;
          align-items: center;
        }

        .formCard {
          background: rgba(255, 255, 255, 0.9);
          border: 1px solid rgba(0, 0, 0, 0.06);
          border-radius: 18px;
          padding: 26px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
        }

        .label {
          display: block;
          font-weight: 600;
          font-size: 14px;
          margin: 0 0 8px 0;
        }

        .input,
        .select {
          width: 100%;
          height: 44px;
          border-radius: 12px;
          border: 1px solid rgba(0, 0, 0, 0.15);
          padding: 0 14px;
          font-size: 14px;
          outline: none;
          background: white;
          margin-bottom: 18px;
        }

        .input:focus,
        .select:focus {
          border-color: rgba(143, 123, 255, 0.75);
          box-shadow: 0 0 0 4px rgba(143, 123, 255, 0.18);
        }

        .primaryBtn {
          width: 100%;
          height: 44px;
          border-radius: 12px;
          border: none;
          background: var(--purple);
          color: white;
          font-weight: 700;
          cursor: pointer;
          transition: transform 0.15s ease, opacity 0.15s ease;
        }

        .primaryBtn:hover {
          transform: translateY(-1px);
        }

        .primaryBtn:disabled {
          cursor: not-allowed;
          opacity: 0.45;
          transform: none;
        }

        .imageWrap {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .image {
          width: 100%;
          max-width: 520px;
          border-radius: 22px;
          box-shadow: 0 14px 40px rgba(0, 0, 0, 0.10);
        }

        .resultWrap {
          margin-top: 28px;
        }

        .result {
          white-space: pre-wrap;
          background: white;
          border: 2px solid #e3dfff;
          border-radius: 16px;
          padding: 16px;
          font-size: 14px;
        }

        .howTitle {
          margin: 0;
          font-size: 28px;
          letter-spacing: -0.02em;
        }

        .howBody {
          margin-top: 8px;
          display: grid;
          gap: 18px;
          font-size: 16px;
        }

        .howItem {
          display: grid;
          grid-template-columns: 34px 1fr;
          gap: 14px;
        }

        .howNum {
          font-weight: 700;
          color: rgba(0, 0, 0, 0.55);
        }

        .howHead {
          font-weight: 800;
          margin-bottom: 6px;
        }

        .howText {
          color: rgba(0, 0, 0, 0.72);
          line-height: 1.45;
        }

        @media (max-width: 900px) {
          .card {
            padding: 28px;
          }
          .contentRow {
            grid-template-columns: 1fr;
          }
          .title {
            font-size: 36px;
          }
        }
      `}</style>
    </main>
  );
}
